#!/usr/bin/env node
/**
 * upskill.mjs — Aggregate skill-gap analyzer for career-ops (#1520, phase 1)
 *
 * Reads the tracker + every linked evaluation report, extracts skill tokens
 * from each report's gaps (Machine Summary hard_stops/soft_gaps + Gap table),
 * removes anything already present in cv.md / config/profile.yml, and emits a
 * weighted, tiered gap map as JSON for the `upskill` mode to narrate.
 *
 * Weighting: each report contributes (5.0 − score) per skill it names — a
 * 2.1/5 report says more about your gaps than a 4.5/5 one. A skill is counted
 * once per report (presence), not once per mention, so one ranty report can't
 * dominate the map.
 *
 * Tiers are fixed, explainable thresholds over the share of low-fit
 * (score < 4.0) reports naming the gap — NOT quantiles, which are noise at
 * the 5–20 report sample sizes this tool sees.
 *
 * Run: node upskill.mjs            (JSON to stdout)
 *      node upskill.mjs --summary  (human-readable table)
 *      node upskill.mjs --min-reports 3
 *      node upskill.mjs --self-test
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { load as yamlLoad } from 'js-yaml';
import { resolveColumns, parseTrackerRow } from './tracker-parse.mjs';

const CAREER_OPS = dirname(fileURLToPath(import.meta.url));
const APPS_FILE = existsSync(join(CAREER_OPS, 'data/applications.md'))
  ? join(CAREER_OPS, 'data/applications.md')
  : join(CAREER_OPS, 'applications.md');
const CV_FILE = join(CAREER_OPS, 'cv.md');
const PROFILE_FILE = join(CAREER_OPS, 'config/profile.yml');

// Bump when extraction rules change in a way that would make gap lists from
// older runs non-comparable. The upskill mode's diff-vs-previous section only
// compares reports with the same schema_version, so a regex change can't
// masquerade as "gap closed".
export const SCHEMA_VERSION = 1;

// Reports below this global score count as "low fit" — the population whose
// gaps matter most. Matches the apply threshold in Ethical Use (CLAUDE.md).
const LOW_FIT_SCORE = 4.0;

// Skill tokenizer. Superset of the legal regex in analyze-patterns.mjs
// (deliberately duplicated — see #1520 discussion: extracting a shared module
// from a tested core script is a follow-up once both call sites are stable).
const SKILL_TOKENS = [
  // Practice areas / doctrinal skills
  'M&A', 'Mergers and Acquisitions', 'Mergers & Acquisitions',
  'Securities', 'Capital Markets', 'Venture Financing', 'Debt Finance',
  'Funds Formation', 'Private Equity', 'Antitrust', 'Tax',
  'Executive Compensation', 'ERISA', 'Real Estate', 'Restructuring',
  'Bankruptcy', 'Litigation', 'Commercial Litigation',
  'White Collar', 'White-Collar', 'Internal Investigations', 'Arbitration',
  'Appellate', 'Employment Law', 'Labor', 'Immigration', 'IP Litigation',
  'Patent Prosecution', 'Trademark', 'Copyright', 'Licensing',
  'Technology Transactions', 'Commercial Contracts', 'Corporate Governance',
  'Consumer Protection', 'Advertising Law', 'Insurance', 'Environmental',
  'Energy Regulatory', 'Government Contracts', 'Franchise', 'Class Action',
  'UCC', 'Data Breach Response', 'AI Governance', 'Cybersecurity Law',
  // Regulatory regimes
  'GDPR', 'CCPA', 'CPRA', 'HIPAA', 'COPPA', 'FCPA', 'BSA', 'AML', 'OFAC',
  'Export Controls', 'SEC Reporting', '\'34 Act', 'FTC', 'FDA Regulatory',
  'Data Privacy', 'Data Protection', 'Privacy',
  // Lawyering craft
  'Contract Drafting', 'Contract Negotiation', 'Due Diligence',
  'Legal Research', 'Legal Writing', 'Depositions', 'Trial',
  'Motion Practice', 'e-?Discovery', 'Regulatory Filings', 'Board Advisory',
  'Outside Counsel Management', 'Legal Operations',
  // Tools & credentials
  'Westlaw', 'LexisNexis', 'Practical Law', 'Relativity', 'Everlaw',
  'Ironclad', 'CLM', 'DocuSign', 'Harvey', 'CoCounsel', 'Kira', 'iManage',
  'NetDocuments', 'e-?billing', 'Legal Tracker', 'Brightflag', 'CIPP',
  'CIPM', 'Patent Bar',
];

// \b fails at symbol edges (\b'34 Act needs a word char BEFORE the
// apostrophe, which never exists when the mention starts a clause or follows
// a slash, e.g. "SEC reporting / '34 Act"), so "'34 Act" would never match
// standalone with plain \b. (?<!\w)/(?!\w) are equivalent to \b for word-char
// edges and correct for symbol edges.
const SKILL_PATTERN = new RegExp(
  '(?<!\\w)(?:' + SKILL_TOKENS.join('|') + ')(?!\\w)',
  'gi'
);

// lowercase → canonical display casing, derived from SKILL_TOKENS by stripping
// regex syntax ('e-?Discovery' → 'e-Discovery'). Keeps case-insensitive
// matches like "imanage" resolving to the same key ("iManage") as the
// CV-known-skills set.
const DISPLAY = Object.fromEntries(
  SKILL_TOKENS.map(t => {
    const display = t.replace(/\\/g, '').replace(/\?/g, '');
    return [display.toLowerCase(), display];
  })
);

// Exact-alias canonicalization ONLY (lowercased match → display name).
// Deliberately no umbrella aliases: "compliance" must never count as knowing
// GDPR/CCPA/HIPAA — a generous map silently suppresses real gaps, and the
// "cv skill never appears as gap" acceptance test rewards exactly that
// failure mode. Every entry here maps spellings of the SAME skill/regime.
const CANONICAL = {
  'mergers and acquisitions': 'M&A', 'mergers & acquisitions': 'M&A',
  'white-collar': 'White Collar',
  'ccpa': 'CCPA/CPRA', 'cpra': 'CCPA/CPRA',
  'bsa': 'BSA/AML', 'aml': 'BSA/AML',
  'ofac': 'OFAC/Sanctions',
  "'34 act": 'SEC Reporting',
  'data privacy': 'Privacy', 'data protection': 'Privacy',
  'ediscovery': 'eDiscovery', 'e-discovery': 'eDiscovery',
  'ebilling': 'e-billing', 'e-billing': 'e-billing',
};

function canonicalize(token) {
  const key = token.toLowerCase();
  // Alias map first (ccpa → CCPA/CPRA), then display casing from the token
  // list (imanage → iManage, docusign → DocuSign) — never title-case, which
  // manufactures keys like "Imanage" that miss the known-skills set.
  return CANONICAL[key] || DISPLAY[key] || token;
}

/** Extract the set of canonical skill names present in a free-text blob. */
export function extractSkills(text) {
  if (!text) return new Set();
  const found = new Set();
  for (const m of text.matchAll(SKILL_PATTERN)) {
    found.add(canonicalize(m[0]));
  }
  return found;
}

// --- Machine Summary + Gap table parsing ---
// Mirrors analyze-patterns.mjs (duplicated by design, see header comment).
function parseMachineSummary(content) {
  const fenceMatch = content.match(/##\s*Machine Summary\s*\n+```(?:yaml|yml|json)?\s*\n([\s\S]*?)\n```/i);
  if (!fenceMatch) return null;
  const raw = fenceMatch[1].trim();
  if (!raw) return null;
  try {
    const parsed = yamlLoad(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function normalizeList(value) {
  if (Array.isArray(value)) return value.map(v => String(v).trim()).filter(Boolean);
  if (value === null || value === undefined || value === '') return [];
  if (typeof value === 'object') return [];
  return [String(value).trim()].filter(Boolean);
}

/**
 * Parse one report file into { score, gapText, hasMachineSummary }.
 * gapText concatenates every gap description (hard stops, soft gaps, Gap
 * table rows) — the haystack the skill tokenizer runs over.
 */
export function parseReportGaps(content) {
  const gapDescriptions = [];
  let score = null;
  let hasMachineSummary = false;

  const summary = parseMachineSummary(content);
  if (summary) {
    hasMachineSummary = true;
    if (typeof summary.score === 'number' && Number.isFinite(summary.score)) score = summary.score;
    gapDescriptions.push(...normalizeList(summary.hard_stops));
    gapDescriptions.push(...normalizeList(summary.soft_gaps));
  }

  const plain = content.replace(/\*\*/g, '');
  if (score === null) {
    const glMatch = plain.match(/\|\s*(?:Global)\s*\|\s*([\d.]+)\/5\s*\|/i);
    if (glMatch) score = parseFloat(glMatch[1]);
  }

  const gapTableMatch = content.match(/\|\s*Gap\s*\|\s*Severity\s*\|.*?\n\|[-|\s]+\n([\s\S]*?)(?:\n\n|\n##|\n\*\*|$)/i);
  if (gapTableMatch) {
    for (const row of gapTableMatch[1].split('\n').filter(r => r.startsWith('|'))) {
      const cols = row.split('|').map(s => s.trim()).filter(Boolean);
      if (cols.length >= 2) gapDescriptions.push(cols[0]);
    }
  }

  return { score, gapText: gapDescriptions.join('\n'), hasMachineSummary };
}

/**
 * Pure aggregation over parsed reports. Exported for self-testing.
 *
 * @param {Array<{num:number|string, score:number|null, gapText:string}>} reports
 * @param {Set<string>} knownSkills — canonical names already in cv/profile
 */
export function aggregateGaps(reports, knownSkills) {
  const scored = reports.filter(r => Number.isFinite(r.score));
  const lowFit = scored.filter(r => r.score < LOW_FIT_SCORE);
  const totalLowFit = lowFit.length;

  const bySkill = new Map();
  const excludedCounts = new Map();

  for (const report of reports) {
    const skills = extractSkills(report.gapText);
    for (const skill of skills) {
      if (knownSkills.has(skill)) {
        excludedCounts.set(skill, (excludedCounts.get(skill) || 0) + 1);
        continue;
      }
      if (!bySkill.has(skill)) {
        bySkill.set(skill, { skill, reports: 0, lowFitReports: 0, weightedScore: 0, sources: [] });
      }
      const entry = bySkill.get(skill);
      entry.reports += 1;
      entry.sources.push(report.num);
      const weight = Number.isFinite(report.score) ? Math.max(0, 5.0 - report.score) : 1.0;
      entry.weightedScore += weight;
      if (Number.isFinite(report.score) && report.score < LOW_FIT_SCORE) entry.lowFitReports += 1;
    }
  }

  const gaps = [...bySkill.values()].map(g => {
    const share = totalLowFit > 0 ? g.lowFitReports / totalLowFit : 0;
    // Fixed thresholds — each tier is explainable in one sentence
    // ("named in 4/9 low-fit reports"), which quantiles at N=5–20 are not.
    let tier = 'Low';
    if (share >= 0.5 && g.lowFitReports >= 3) tier = 'Critical';
    else if (share >= 0.3 && g.lowFitReports >= 2) tier = 'High';
    else if (g.lowFitReports >= 2) tier = 'Medium';
    return {
      ...g,
      lowFitShare: Math.round(share * 100) / 100,
      weightedScore: Math.round(g.weightedScore * 100) / 100,
      tier,
    };
  }).sort((a, b) => b.weightedScore - a.weightedScore || b.reports - a.reports);

  const excludedAsKnown = [...excludedCounts.entries()]
    .map(([skill, reports]) => ({ skill, reports }))
    .sort((a, b) => b.reports - a.reports);

  return { gaps, excludedAsKnown, totalLowFit };
}

// --- Main ---
function analyze(minReports) {
  if (!existsSync(APPS_FILE)) {
    return { error: 'No applications tracker found. Run some evaluations first.' };
  }

  const lines = readFileSync(APPS_FILE, 'utf-8').split('\n');
  const colmap = resolveColumns(lines);
  const rows = lines.map(l => parseTrackerRow(l, colmap)).filter(Boolean);

  let reportsLinked = 0;
  let reportsRead = 0;
  let reportsWithMachineSummary = 0;
  const parsedReports = [];

  for (const row of rows) {
    const linkMatch = (row.report || '').match(/\]\(([^)]+)\)/);
    if (!linkMatch) continue;
    reportsLinked += 1;
    // Tracker links are normalized relative to the tracker file's directory
    // (see merge-tracker.mjs); resolve against it, with a root-relative fallback.
    const candidates = [join(dirname(APPS_FILE), linkMatch[1]), join(CAREER_OPS, linkMatch[1])];
    const reportPath = candidates.find(p => existsSync(p));
    if (!reportPath) continue;
    reportsRead += 1;
    const content = readFileSync(reportPath, 'utf-8');
    const { score, gapText, hasMachineSummary } = parseReportGaps(content);
    if (hasMachineSummary) reportsWithMachineSummary += 1;
    const trackerScore = parseFloat(row.score);
    parsedReports.push({
      num: row.num,
      score: Number.isFinite(trackerScore) ? trackerScore : score,
      gapText,
    });
  }

  const scoredCount = parsedReports.filter(r => Number.isFinite(r.score)).length;
  if (scoredCount < minReports) {
    return {
      error: `Not enough data: ${scoredCount}/${minReports} scored reports. Evaluate more offers and come back.`,
      current: scoredCount,
      threshold: minReports,
    };
  }

  const knownText = [
    existsSync(CV_FILE) ? readFileSync(CV_FILE, 'utf-8') : '',
    existsSync(PROFILE_FILE) ? readFileSync(PROFILE_FILE, 'utf-8') : '',
  ].join('\n');
  const knownSkills = extractSkills(knownText);

  const { gaps, excludedAsKnown, totalLowFit } = aggregateGaps(parsedReports, knownSkills);

  return {
    schema_version: SCHEMA_VERSION,
    metadata: {
      reportsLinked,
      reportsRead,
      reportsWithMachineSummary,
      reportsScored: scoredCount,
      lowFitReports: totalLowFit,
      lowFitScoreThreshold: LOW_FIT_SCORE,
      knownSkillCount: knownSkills.size,
    },
    gaps,
    excludedAsKnown,
    knownSkills: [...knownSkills].sort(),
  };
}

function printSummary(result) {
  if (result.error) {
    console.log(`upskill: ${result.error}`);
    return;
  }
  const m = result.metadata;
  console.log(`UPSKILL GAP MAP (schema v${result.schema_version})`);
  console.log(`Reports: ${m.reportsRead}/${m.reportsLinked} read, ${m.reportsScored} scored, ${m.lowFitReports} low-fit (<${m.lowFitScoreThreshold}), ${m.reportsWithMachineSummary} with Machine Summary`);
  console.log('');
  if (result.gaps.length === 0) {
    console.log('No skill gaps detected across your evaluated reports.');
  } else {
    const pad = (s, n) => String(s).padEnd(n);
    console.log(`${pad('TIER', 10)}${pad('SKILL', 22)}${pad('REPORTS', 9)}${pad('LOW-FIT', 9)}WEIGHTED`);
    for (const g of result.gaps) {
      console.log(`${pad(g.tier, 10)}${pad(g.skill, 22)}${pad(g.reports, 9)}${pad(`${g.lowFitReports}/${result.metadata.lowFitReports}`, 9)}${g.weightedScore}`);
    }
  }
  if (result.excludedAsKnown.length > 0) {
    console.log('');
    console.log(`Excluded (already in cv.md/profile): ${result.excludedAsKnown.map(e => e.skill).join(', ')}`);
  }
}

// --- Self-test (pure functions, no filesystem) ---
function runSelfTest() {
  const failures = [];

  // extractSkills: canonicalization
  const s1 = extractSkills('Needs CCPA, mergers and acquisitions and BSA experience; e-billing a plus');
  for (const expected of ['CCPA/CPRA', 'M&A', 'BSA/AML', 'e-billing']) {
    if (!s1.has(expected)) failures.push(`extractSkills missing canonical ${expected} (got ${[...s1].join(',')})`);
  }

  // Symbol-terminated skills: \b-style boundaries would drop "'34 Act" (a
  // leading apostrophe is a non-word char, so plain \b never fires there)
  const s1b = extractSkills("Requires M&A, BSA/AML and SEC reporting / '34 Act experience, plus UCC.");
  for (const expected of ['M&A', 'BSA/AML', 'SEC Reporting', 'UCC']) {
    if (!s1b.has(expected)) failures.push(`extractSkills missing symbol/regime skill ${expected} (got ${[...s1b].join(',')})`);
  }

  // Lowercase mentions of mixed-case skills must resolve to canonical casing,
  // or knownSkills.has() misses them (Imanage !== iManage)
  const s1c = extractSkills('familiar with imanage, docusign and cocounsel');
  for (const expected of ['iManage', 'DocuSign', 'CoCounsel']) {
    if (!s1c.has(expected)) failures.push(`extractSkills lowercase mention not canonical ${expected} (got ${[...s1c].join(',')})`);
  }

  // Boundary safety: bare "Tax" must not match inside the longer, unrelated
  // word "Taxation" — the ordinary-word analog of the symbol-edge check above.
  const boundaryCheck = extractSkills('International Taxation planning');
  if (boundaryCheck.has('Tax')) failures.push('bare "Tax" wrongly matched inside "Taxation"');

  // Over-suppression guard: cv "CIPP" must NOT swallow a "CIPM" gap, and cv
  // "GDPR" must not swallow a "Privacy" gap — different-but-related items
  // must stay distinct. This is the failure mode the "cv skill never appears
  // as gap" acceptance test cannot see.
  const cvSkills = extractSkills('Certified CIPP; deep GDPR experience.');
  const { gaps: g1 } = aggregateGaps(
    [{ num: 1, score: 2.0, gapText: 'Missing CIPM and Privacy experience' }],
    cvSkills
  );
  const gapNames = g1.map(g => g.skill);
  if (!gapNames.includes('CIPM')) failures.push('CIPM gap suppressed by cv "CIPP"');
  if (!gapNames.includes('Privacy')) failures.push('Privacy gap suppressed by cv "GDPR"');

  // Known-skill exclusion (the acceptance criterion itself)
  const { gaps: g2, excludedAsKnown: ex2 } = aggregateGaps(
    [{ num: 2, score: 3.0, gapText: 'Needs Securities and Westlaw' }],
    extractSkills('Securities attorney')
  );
  if (g2.some(g => g.skill === 'Securities')) failures.push('known skill Securities appeared as gap');
  if (!ex2.some(e => e.skill === 'Securities')) failures.push('excludedAsKnown missing Securities');
  if (!g2.some(g => g.skill === 'Westlaw')) failures.push('Westlaw gap missing');

  // Weighting: low score contributes more; presence counted once per report
  const { gaps: g3 } = aggregateGaps(
    [
      { num: 3, score: 2.0, gapText: 'Westlaw Westlaw Westlaw' },
      { num: 4, score: 4.5, gapText: 'Westlaw' },
    ],
    new Set()
  );
  const w = g3.find(g => g.skill === 'Westlaw');
  if (!w) failures.push('Westlaw not aggregated');
  else {
    if (w.reports !== 2) failures.push(`presence not deduped per report (reports=${w.reports})`);
    if (Math.abs(w.weightedScore - 3.5) > 1e-9) failures.push(`weightedScore expected 3.5, got ${w.weightedScore}`);
  }

  // Tiering: 3/5 low-fit reports naming a skill → Critical; 1/5 → Low
  const lowFitReports = [
    { num: 10, score: 2.0, gapText: 'GDPR' },
    { num: 11, score: 2.5, gapText: 'GDPR' },
    { num: 12, score: 3.0, gapText: 'GDPR and Trademark' },
    { num: 13, score: 3.5, gapText: 'nothing here' },
    { num: 14, score: 3.9, gapText: 'nothing here' },
  ];
  const { gaps: g4 } = aggregateGaps(lowFitReports, new Set());
  const gdpr = g4.find(g => g.skill === 'GDPR');
  const trademark = g4.find(g => g.skill === 'Trademark');
  if (gdpr?.tier !== 'Critical') failures.push(`GDPR tier expected Critical, got ${gdpr?.tier}`);
  if (trademark?.tier !== 'Low') failures.push(`Trademark tier expected Low, got ${trademark?.tier}`);

  // parseReportGaps: Machine Summary + Gap table + score fallback
  const parsed = parseReportGaps(`
# 042 - Acme

| Gap | Severity | Mitigation |
|-----|----------|------------|
| No eDiscovery experience | soft gap | Learn it |

## Machine Summary

\`\`\`yaml
score: 3.2
hard_stops: []
soft_gaps:
  - "Limited FCPA exposure"
\`\`\`
`);
  if (parsed.score !== 3.2) failures.push(`report score expected 3.2, got ${parsed.score}`);
  if (!parsed.hasMachineSummary) failures.push('hasMachineSummary false');
  if (!/eDiscovery/.test(parsed.gapText)) failures.push('Gap table row not captured');
  if (!/FCPA/.test(parsed.gapText)) failures.push('soft_gaps not captured');

  if (failures.length > 0) {
    console.error(`upskill self-test failed: ${failures.join('; ')}`);
    process.exit(1);
  }
  console.log('upskill self-test OK (extraction, suppression guards, weighting, tiering, report parsing)');
  process.exit(0);
}

// --- CLI ---
const args = process.argv.slice(2);
if (args.includes('--self-test')) runSelfTest();

const minReportsIdx = args.indexOf('--min-reports');
const MIN_REPORTS = (() => {
  if (minReportsIdx === -1 || args[minReportsIdx + 1] === undefined) return 5;
  const n = parseInt(args[minReportsIdx + 1], 10);
  return Number.isNaN(n) || n < 1 ? 5 : n;
})();

const result = analyze(MIN_REPORTS);
if (args.includes('--summary')) {
  printSummary(result);
} else {
  console.log(JSON.stringify(result, null, 2));
}
