#!/usr/bin/env node

/**
 * classify-tier.mjs — Seniority-tier classifier for job titles
 *
 * Classifies a job title into one of the following tiers:
 *   - 'intern'
 *   - 'entry'
 *   - 'mid'
 *   - 'senior'
 *
 * It uses weighted keyword matching to handle conflicts (higher weight wins).
 * Default tier is 'mid' if no keywords match.
 *
 * Legal semantics (attorney-career adaptation): "Associate" — bare, "Associate
 * Attorney", "Litigation Associate" — is the core mid-career attorney rung,
 * NOT entry-level, and is mapped to 'mid' accordingly (see the matcher
 * comment below). This tier enum has no rung above 'senior', so both
 * non-partnership senior-lawyer titles ("Of Counsel", "Counsel", "Senior
 * Counsel") and true firm/in-house leadership ("General Counsel", "Chief
 * Legal Officer", "Partner", "Managing Partner", "Deputy General Counsel",
 * "Head of Legal", "Legal Director") land in 'senior'.
 */

import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Classifies a job title into exactly one seniority tier.
 *
 * NOTE: Unrecognized or plain titles (e.g., "Corporate Attorney" with no explicit level
 * indicators) fall back to 'mid' as the default/unknown bucket. Consequently, configuring
 * `skip_tiers: [mid]` in portals.yml will exclude most unmatched/ordinary listings, not
 * just explicit mid-level roles.
 *
 * @param {string} title - The job title to classify.
 * @returns {'intern' | 'entry' | 'mid' | 'senior'}
 */
export function classifyTier(title) {
  if (typeof title !== 'string') {
    return 'mid';
  }

  // Preprocess title to avoid false positives with common acronyms
  let cleanTitle = title
    .replace(/\bA\.I\./ig, 'AI')
    .replace(/\bA\.I\b/ig, 'AI')
    .replace(/\bA\.\s+I\b/ig, 'AI')
    .replace(/\bI\.T\./ig, 'IT')
    .replace(/\bI\.T\b/ig, 'IT')
    .replace(/\bI\.\s+T\b/ig, 'IT')
    .replace(/\bi\/o\b/ig, 'IO');

  // Define matchers with tier and weight (higher weight wins)
  const matchers = [
    // Senior Tier (weight 4)
    { pattern: /\bchief\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bvp\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bvice\s+president\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bdirector\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bprincipal\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bstaff\b/i, tier: 'senior', weight: 4 },
    { pattern: /\blead\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bsenior\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bsr\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bsr\./i, tier: 'senior', weight: 4 },
    { pattern: /\bhead\s+of\b/i, tier: 'senior', weight: 4 },
    { pattern: /\b[a-z]{2,}[\s-](iii|iv|v)\b/i, tier: 'senior', weight: 4 },
    // Legal semantics (attorney-career adaptation): this enum tops out at
    // 'senior' — there is no separate tier above it — so both the
    // non-partnership senior-lawyer rungs ("Of Counsel", bare "Counsel",
    // "Senior Counsel") AND true leadership titles ("General Counsel",
    // "Chief Legal Officer" [already covered by \bchief\b], "Partner",
    // "Managing Partner", "Deputy General Counsel", "Legal Director"
    // [covered by \bdirector\b], "Head of Legal" [covered by \bhead\s+of\b])
    // land here. Bare "Counsel" also transitively covers "General Counsel" /
    // "Deputy General Counsel" / "Associate General Counsel" / "Of Counsel"
    // — weight 4 beats the mid-tier "Associate" match below, so "Associate
    // General Counsel" correctly resolves senior, not mid.
    { pattern: /\bcounsel\b/i, tier: 'senior', weight: 4 },
    { pattern: /\bpartner\b/i, tier: 'senior', weight: 4 },

    // Mid Tier (weight 3)
    { pattern: /\bmid-level\b/i, tier: 'mid', weight: 3 },
    { pattern: /\bmid\b/i, tier: 'mid', weight: 3 },
    { pattern: /\b[a-z]{2,}[\s-](ii)\b/i, tier: 'mid', weight: 3 },
    { pattern: /\b(l4|l5)\b/i, tier: 'mid', weight: 3 },
    // Legal semantics: "Associate" is the core mid-career attorney rung at
    // law firms (bare "Associate", "Associate Attorney", "Litigation
    // Associate"), NOT entry-level — the previous \bassociate\b → 'entry'
    // mapping would silently skip mid-career listings under a portals.yml
    // `skip_tiers: [intern, entry]` config. Excludes "Summer Associate" (a
    // 1L/2L student program, see the Intern tier below) via the negative
    // check, since \bassociate\b alone would otherwise also match inside it.
    {
      pattern: {
        test: (t) => /\bassociate\b/i.test(t) && !/\bsummer\b/i.test(t)
      },
      tier: 'mid',
      weight: 3
    },

    // Entry Tier (weight 2)
    { pattern: /\bentry-level\b/i, tier: 'entry', weight: 2 },
    { pattern: /\bentry\b/i, tier: 'entry', weight: 2 },
    { pattern: /\bjunior\b/i, tier: 'entry', weight: 2 },
    { pattern: /\b[a-z]{2,}[\s-](i)\b/i, tier: 'entry', weight: 2 },
    { pattern: /\b(l1|l2)\b/i, tier: 'entry', weight: 2 },
    // "Law Clerk" in the student/1L-2L sense (as opposed to a post-graduate
    // judicial clerkship) is an entry-level program.
    { pattern: /\blaw\s+clerk\b/i, tier: 'entry', weight: 2 },

    // Intern Tier (weight 1)
    { pattern: /\binternship\b/i, tier: 'intern', weight: 1 },
    { pattern: /\bintern\b/i, tier: 'intern', weight: 1 },
    { pattern: /\btrainee\b/i, tier: 'intern', weight: 1 },
    { pattern: /\bco-op\b/i, tier: 'intern', weight: 1 },
    // "Summer Associate" is the 2L summer program, not a mid-career hire.
    { pattern: /\bsummer\s+associate\b/i, tier: 'intern', weight: 1 },
    {
      pattern: {
        test: (t) => /\bgraduate\b/i.test(t) && /\b(program|scheme)\b/i.test(t)
      },
      tier: 'intern',
      weight: 1
    }
  ];

  let bestMatch = null;

  for (const matcher of matchers) {
    if (matcher.pattern.test(cleanTitle)) {
      if (!bestMatch || matcher.weight > bestMatch.weight) {
        bestMatch = matcher;
      }
    }
  }

  return bestMatch ? bestMatch.tier : 'mid';
}

export default classifyTier;

// CLI and inline test mode
const isDirect = process.argv[1] &&
  (path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url)));

if (isDirect) {
  const args = process.argv.slice(2);
  if (args.includes('--test')) {
    runTests();
  } else if (args.length > 0) {
    console.log(classifyTier(args[0]));
  } else {
    console.log('Usage:');
    console.log('  node classify-tier.mjs "<job-title>"');
    console.log('  node classify-tier.mjs --test');
  }
}

function runTests() {
  const testCases = [
    // Generic (non-legal) titles — unaffected by the legal remap
    { title: "Software Engineer Intern", expected: "intern" },
    { title: "Junior Software Engineer", expected: "entry" },
    { title: "Software Engineer II", expected: "mid" },
    { title: "VP of Engineering", expected: "senior" },
    { title: "Graduate Engineer Program", expected: "intern" },
    { title: "A.I. Researcher", expected: "mid" },

    // Legal titles: student/entry-level programs
    { title: "Summer Associate", expected: "intern" },
    { title: "Law Clerk", expected: "entry" },
    { title: "Legal Intern", expected: "intern" },

    // Legal titles: "Associate" is the mid-career attorney rung, not entry
    { title: "Associate", expected: "mid" },
    { title: "Associate Attorney", expected: "mid" },
    { title: "Litigation Associate", expected: "mid" },

    // Legal titles: non-partnership senior lawyer rungs
    { title: "Senior Associate", expected: "senior" },
    { title: "Of Counsel", expected: "senior" },
    { title: "Counsel", expected: "senior" },
    { title: "Senior Counsel", expected: "senior" },

    // Legal titles: firm/in-house leadership (enum tops out at 'senior')
    { title: "General Counsel", expected: "senior" },
    { title: "Chief Legal Officer", expected: "senior" },
    { title: "Partner", expected: "senior" },
    { title: "Managing Partner", expected: "senior" },
    { title: "Deputy General Counsel", expected: "senior" },
    { title: "Associate General Counsel", expected: "senior" },
    { title: "Head of Legal", expected: "senior" },
    { title: "Legal Director", expected: "senior" }
  ];

  let failed = 0;
  console.log("Running classify-tier.mjs tests...");
  for (const { title, expected } of testCases) {
    const result = classifyTier(title);
    if (result === expected) {
      console.log(`✅ [PASS] "${title}" -> ${result}`);
    } else {
      console.error(`❌ [FAIL] "${title}": expected ${expected}, got ${result}`);
      failed++;
    }
  }

  if (failed > 0) {
    console.error(`\nTest run failed: ${failed} failure(s)`);
    process.exit(1);
  } else {
    console.log("\nAll tests passed successfully!");
    process.exit(0);
  }
}
