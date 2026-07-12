# Mode: legal-market — Refresh Legal-Market Data

## Purpose

The legal comp landscape moves in discrete jumps (the associate salary scale was reset by Milbank in June 2026 and may move again; bonus season lands every November–January; in-house surveys publish annually), and job boards silently die as companies switch ATS vendors. This mode refreshes the system's legal-market data **on demand**: salary scale, bonus tracker, in-house comp surveys, portal health, and new-employer discovery.

Run it when the user says "refresh legal market data", "update comp benchmarks", "check the salary scale", "is the scale still current?", or anything similar.

## Bounded Research Recipe

This is a bounded, single-pass refresh — not open-ended research. Comply with `modes/_shared.md` → Subagent delegation: run the searches/fetches below inline, do **not** invoke `deep-research` or any other research skill, and do **not** spawn nested agents.

Hard budget: at most **10 WebSearch queries + the portal-health curls** (which are zero-token HTTP checks, not searches) — raised from 8 to cover the discovery-sweep and retest additions in step 4. Stop early when the data is confirmed.

### 1. Associate salary scale + bonus check (2 queries)

- `associate salary scale site:biglawinvestor.com` — current market scale by class year
- `bonus tracker site:abovethelaw.com {current year}` — year-end + any special bonuses, which firms have matched

Extract: current scale (Y1–Y8 bases), whether a new raise/match wave is propagating, bonus amounts by class. **Context note to carry:** the scale was reset by Milbank on June 2, 2026 (Y1 $235K → Y8 $455K, matched by McDermott, Quinn Emanuel, and others; Cravath itself had not moved as of July 2026) — treat the scale as in-flux and always record which firms are on which scale.

### 2. In-house comp survey check (2 queries)

- `BarkerGilmore in-house counsel compensation report {current year}`
- `Major Lindsey Africa in-house counsel compensation survey {latest edition}`

Extract: latest edition year, headline movements (base increase %, bonus payout rates, level-band shifts). These are ranges, not points — never present a survey band as an offer prediction.

### 3. Portal health check (zero-token HTTP, no search budget)

For each **enabled** tracked company in `portals.yml`:

- If it has an `api:` endpoint, `curl` it (Greenhouse `boards-api.greenhouse.io/v1/boards/{slug}/jobs`, Ashby `api.ashbyhq.com/posting-api/job-board/{slug}`, Lever `api.lever.co/v0/postings/{slug}`); otherwise `curl -sI` its `careers_url`.
- A 404/410/hard redirect to a generic page = dead board. A 200 with zero legal-title matches is fine (in-house legal teams are small — 0–5 openings at a time is normal, not a dead board).
- For each dead board, **propose** `enabled: false` with the evidence (status code, date) — never disable silently.

### 4. Discovery: employers not yet tracked (up to 6 queries)

- Check legal.io (`site:legal.io/organizations` counsel openings), legalalphabet.com, and GoInhouse.com for legal employers with active counsel roles that are not in `portals.yml`.
- Spot-check the richest VC portfolio boards (`site:jobs.accel.com counsel`, `indexventures.com/startup-jobs/legal/`) for portfolio companies with counsel openings that are not yet tracked — each hit is a candidate `tracked_companies` addition (find its own ATS board, don't track the VC board itself). For a zero-token deep sweep, suggest the user run `node scan-ats-full.mjs --seeds yc,a16z` (probes YC/a16z portfolio companies' own ATS boards through the legal title filter; see seeds/README.md).
- For each candidate employer, note its ATS (Greenhouse/Ashby/Lever slug if discoverable) and one live legal role as evidence.
- **Propose** additions — company name, `careers_url`, `api:` endpoint, evidence — never write them unprompted. Beware slug traps (Greenhouse `relativity` is Relativity Space, not the eDiscovery company).

**(a) Quarterly Product Hunt discovery sweep (1 query)** — `site:producthunt.com/products ("legal jobs" OR "attorney jobs" OR "job search")`, to surface newly launched job-search/legal-career platforms before they show up anywhere else. Run this sub-step once per quarter, not every refresh (skip it on off-quarter runs and note that it was skipped). The 2026-07 sweep surfaced two leads worth evaluating on a future run: "Job Postings API" (a 1.8M+ US jobs monitor — check pricing/auth before adopting) and "Ghost Jobs" (a ghost-posting detection tool). Propose evaluation, don't adopt on sight.

**(b) Untested-feed retest (0 extra queries — zero-token HTTP, same as step 3)** — re-curl the feeds `templates/portals.example.yml` flags as untested in its "Zero-token feed & API techniques" comment block, so dead/live status stays current: `naag.org/job/feed/`, `blog.psjd.org/feed`, `paragonlegal.com/jobs/feed/`, `inhouseblog.com/feed`, `jobslegaloperators.com/feed/`, `boards-api.greenhouse.io/v1/boards/axiomlaw/jobs` (the Axiom Greenhouse slug), and a sample YM Careers `/jobs/rss/` saved-search URL. A 200 with parseable feed content promotes the entry from "untested" to "confirmed working" (propose the diff); anything else stays untested or moves to skip/dead with evidence.

**(c) Aggregator-API adoption check (1 query)** — `Adzuna API legal jobs category site:developer.adzuna.com` (or equivalent for Jooble) to check whether the Adzuna `category=legal-jobs` slug (and Jooble's keyword search) have stabilized enough to justify a real `provider:` module instead of a WebSearch stopgap. Report findings; don't build the provider in this mode — that's a code change outside `legal-market`'s scope.

## Output

A dated summary in chat, followed by PROPOSED diffs:

```markdown
# Legal Market Refresh — {YYYY-MM-DD}

## Salary scale (as of {date})
{current scale table + which firms are on the new scale; bonus tracker headline}

## In-house surveys (as of {date})
{latest BarkerGilmore / MLA editions + headline movements}

## Portal health
{N} boards checked: {N} healthy, {N} dead (list) — proposed `enabled: false` diffs below

## Discovery
{New legal employers found, with evidence — proposed portals.yml additions below}

## Proposed diffs
{exact YAML/markdown diffs, one block per file}
```

Stamp **every** updated figure with "as of {date}" — a comp number without a date is a future bug.

## Data-Contract Compliance (HARD RULES)

- **Comp targets live in `modes/_profile.md` (user layer) — NEVER auto-edit.** If the scale moved and the user's recorded targets look stale, present the update ("the market scale for your class year moved from $X to $Y — want me to update your comp target?") and apply **only on explicit user confirmation**.
- **`portals.yml` is user layer too — same confirmation rule.** Show the exact diff (disables and additions) and wait for an explicit yes. Silence is not a yes.
- This mode never touches `modes/_shared.md`, mode files, or scripts. Market facts the user confirms go into `modes/_profile.md` or `portals.yml`; nothing else changes.
- Figures come only from the sources fetched this run — never from memory of a previous session without re-verification (that is exactly the staleness this mode exists to fix).

## Cadence

After a successful refresh, suggest (once, not naggingly):

> "Want me to run this automatically? Say 'refresh legal market data monthly' and I'll schedule it — bonus season (Nov–Jan) and scale moves are worth catching within a few weeks."

If the user accepts, use the CLI's scheduler/loop facility if available (`/loop`, `/schedule`, or a Routine); otherwise suggest a calendar reminder or a cron entry that runs the CLI's scan-equivalent prompt. Monthly is the sensible default; more often only during bonus season or an active scale-raise wave.
