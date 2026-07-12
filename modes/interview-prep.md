# Mode: interview-prep — Company-Specific Interview Intelligence

When the user asks to prep for an interview at a specific company+role, or when an evaluation scores 4.0+ and the user updates status to `Interview`, run this mode.

## Inputs

1. **Company name** and **role title** (required)
2. **Evaluation report** in `reports/` (if exists) — read for archetype, gaps, matched proof points
3. **Story bank** at `interview-prep/story-bank.md` — read for existing prepared stories
4. **CV** at `cv.md` + `article-digest.md` — read for proof points
5. **Profile** at `config/profile.yml` + `modes/_profile.md` — read for candidate context
6. **Recruiter-side risk map** from the evaluation/PDF/application flow if present — use `modes/heuristics/recruiter-side.md` for the risk categories the interview process must resolve

## Step 1 — Research

Run these WebSearch queries. Extract structured data, not summaries. Cite sources for every claim.

The first round of most processes is a recruiter / legal-recruiting screen, not a substantive panel — so research has to cover both. Group queries by the audience they inform:

**Recruiter / legal-recruiting screen** (early-round fit, comp, logistics):

| Query | What to extract |
|-------|-----------------|
| Firms: `"{firm}" salary scale site:biglawinvestor.com` and `"{firm}" bonus site:abovethelaw.com`. In-house: `"{company} {role} salary" site:glassdoor.com/Salary` plus BarkerGilmore / MLA in-house survey bands for the level | Comp ranges (base / bonus / equity for in-house) by class year or level |
| Firms: `"{firm}" site:chambers-associate.com` interview process. In-house: `"{company} interview process site:glassdoor.com"` — filter to reviews describing the recruiter / HR screen | Process timeline, screening criteria, common screening questions, recruiter behavior |
| `"{firm OR company}" site:fishbowlapp.com` comp OR offer OR interview (the "Big Law Bowl" is the candid firm-side channel) | Candid comp/leverage details, what recruiters push back on, hours culture |
| `"{company} careers"` + `"{company} benefits"` | Official comp/benefits framing, bar-admission and jurisdiction requirements, location policy |

**Hiring partner / GC** (motivation, scope alignment, practice fit):

| Query | What to extract |
|-------|-----------------|
| Firms: `"{firm}" site:vault.com` and `"{firm}" {practice group}` site:chambers.com OR site:law360.com. In-house: `"{company}" general counsel OR legal team` news | The group's recent matters, marquee clients/deals, named challenges, GC org shape |
| `"{company}" news OR lawsuit OR enforcement OR deal (last 12 months)` | Recent matters, regulatory exposure, public bets, hiring drivers |
| `"{firm OR company} {role} interview process"` (general, plus site:abovethelaw.com for firm moves/culture) | Screener and callback structure, what they evaluate, candidate write-ups |

**Callback / panel attorneys** (depth, judgment, practice realism):

| Query | What to extract |
|-------|-----------------|
| Firms: `"{firm}" interview site:chambers-associate.com` and `"{firm} interview questions" site:glassdoor.com`. In-house: `"{company} counsel interview questions" site:glassdoor.com` | Actual questions asked, callback format, number of meetings, offer/reject signals |
| `"{firm OR company}" writing exercise OR assessment attorney interview | Whether a writing exercise, markup exercise (NDA/MSA), or advice-memo drill is used |
| `"{firm OR company}" site:fishbowlapp.com lateral interview | Hiring bar, recent lateral interview data points |

If the firm or company is small or obscure and yields few results, broaden: search for the role archetype at similar firms (same practice area and size band) or similar-stage companies, and note that intel is sparse. Do the recruiter-screen queries even when intel is sparse — comp data exists for almost every firm (the scale is public) and most in-house employers.

**Do NOT fabricate questions.** If a source says "they asked about distributed systems," report that. Do not invent a specific distributed systems question. When generating likely questions from JD analysis, label them clearly as `[inferred from JD]` not sourced from candidates.

**Tag conventions** (don't mix them):

- `[inferred from JD]` — questions derived from the job description rather than a candidate report.
- `[inferred]` — audience classifications (Step 2.5) made from round duration / position when `Conducted by` is unknown.

## Step 2 — Process Overview

```markdown
## Process Overview
- **Rounds:** {N} rounds, ~{X} weeks end-to-end
- **Format:** {e.g., firm lateral: 1–2 screeners (hiring partner or recruiting, ~30 min) → callback: 4–6 sequential 30-min meetings with partners + senior associates (may take 2 visits) → approval committee → offer contingent on conflicts + references + bar status. In-house: GC/hiring-manager screen → panel loop including business stakeholders → sometimes a written exercise (NDA/MSA markup, advice memo) → offer}
- **Difficulty:** {X}/5 (Glassdoor/Chambers Associate avg, N reviews)
- **Positive experience rate:** {X}%
- **Known quirks:** {e.g., "writing exercise after the callback", "core-competency interview format", "two callback visits standard"}
- **Sources:** {links}
```

If data is insufficient for any field, write "unknown — not enough data" rather than guessing.

**Timeline norms:** a lateral process typically runs 4–10 weeks end-to-end; offer/rejection usually lands ~2 weeks after the final meeting. Every firm offer is **contingent on a conflicts check** (plus references and bar status) — build that contingency into the candidate's timeline expectations and resignation planning, and never treat a verbal "we want to move forward" as an offer until conflicts clear.

## Step 2.5 — Audience Map

Classify each round from Step 2 into exactly one audience. The audience drives what gets prioritized in Steps 4 and 7.

| Audience            | Typical round                                | Primary evaluation                                              |
|---------------------|----------------------------------------------|-----------------------------------------------------------------|
| `recruiter-screen`  | First call (15–30 min, legal recruiting / HR / search-firm recruiter) | Fit gate: motivation, comp, jurisdiction/bar status, class year, timeline |
| `hiring-partner`    | Hiring partner (firm) or GC / hiring manager (in-house), 30–45 min | Why this move, practice-area and class-year fit, judgment signals |
| `callback`          | Sequential 30-min meetings with partners + senior associates (firm) or peer counsel (in-house); may include a writing/markup exercise | Depth, judgment, and collaboration on real matters |
| `panel-mixed`       | In-house panel including business stakeholders (sales, product, HR heads), or a multi-slot callback day | Cross-cuts the above; in-house panels test plain-English communication |

If `Conducted by` is unknown for a round, infer cautiously from duration, position, and any signals from the JD or job posting. Common patterns:

- Round 1, short (15–30 min) → almost always `recruiter-screen`.
- Round 2 — **do not default**. Firms often put the hiring partner here; some go straight to a callback block. Prefer `hiring-partner` if it's described as a partner or GC conversation; prefer `callback` if it's a block of sequential attorney meetings or includes a writing exercise; otherwise mark as `panel-mixed [inferred]` and prep both packs.
- Sequential attorney meetings, writing exercise, or NDA/MSA markup → `callback`.
- Loop with business stakeholders or multiple back-to-back interviewer types → `panel-mixed`.

Mark inferred audiences with `[inferred]` and keep going — sparse intel is normal early in research.

```markdown
## Audience Map
- **Round 1** (legal recruiting screen, 30 min) → `recruiter-screen`
- **Round 2** (hiring partner call, 45 min) → `hiring-partner`
- **Round 3** (callback: 5× 30-min partner/senior-associate meetings) → `callback`
- **Round 4** (in-house stakeholder panel, 4× 45 min) → `panel-mixed`
- ...
```

The example above shows a typical pattern but is not a default. Classify each round from the actual research above — some firms compress screeners, and in-house processes often skip straight from GC screen to panel.

## Step 3 — Round-by-Round Breakdown

For each round discovered in research:

```markdown
### Round {N}: {Type} — audience: `{audience}`
- **Duration:** {X} min
- **Conducted by:** {partner / senior associate / GC / business stakeholder / recruiting — if known}
- **What they evaluate:** {specific skills or traits}
- **Reported questions:**
  - {question} — [source: Glassdoor (URL/date)]
  - {question} — [source: Chambers Associate / Fishbowl (URL/date)]
- **How to prepare:** {1-2 concrete actions, audience-appropriate — see Step 4 for the full per-audience pack}
```

If round structure is unknown, state that and provide the best available intel on what types of rounds to expect based on company size, stage, and role level.

## Step 4 — Likely Questions (per audience)

Group all discovered and inferred questions by the audience that asks them, not by question type. Within each audience, draft candidate-specific answers using `cv.md`, `article-digest.md`, `config/profile.yml`, and `modes/_profile.md`. **Never fabricate questions** — sourced questions must cite, inferred questions must be tagged `[inferred from JD]`.

If any of those profile files are missing, incomplete, or out-of-date, note the gap inline (e.g. "comp target unknown — defer to recruiter band") and proceed with what's available rather than blocking the prep. The mode's value is partial-but-honest output, not perfect-or-nothing.

For every answer, use result-first framing:

1. **Headline** — the result, decision, or point.
2. **Effect** — why it mattered to the business, users, system, or team.
3. **Rationale** — what tradeoff or constraint shaped the choice.
4. **Operations** — what the candidate actually did, with enough implementation detail to be credible.

This is especially important for senior, technical, and leadership answers. Simple recruiter answers can be shorter, but should still start with the point.

### Audience: `recruiter-screen`

The recruiter is screening for fit, not testing skill. Wrong-foot answers (vague comp, fuzzy motivation, a jurisdiction surprise) end the process before any substantive signal is collected. Cover at minimum:

- **"Walk me through your CV / why are you looking?"** — 60–90s narrative anchored to `modes/_profile.md` narrative + the role's archetype. For laterals: why this move, framed forward (practice growth, platform, client base), never as flight from the current firm.
- **Bar admission / class year** — the first two things a legal recruiter verifies. Have `legal.bar_admissions` and `legal.class_year` answers crisp, including any pending UBE transfer or registered-in-house-counsel path if the jurisdiction isn't a direct match.
- **Comp expectation** — for firms, anchor to the published scale for the class year (Biglaw Investor scale + Above the Law bonus tracker from Step 1); lockstep base is not negotiable, so the conversation is about class-year placement and any clerkship/signing bonus. For in-house, anchor to BarkerGilmore/MLA bands for the level and `config/profile.yml` `compensation.target`; if data is thin, defer with a clean script ("I'm calibrating to market for {level}, can you share the band for this role?").
- **Why this firm / company** — 2–3 sentences referencing public signals from Step 1 (recent matters, practice-group strength, Chambers rankings, GC org). Avoid generic praise.
- **Location / office / jurisdiction** — answer derived from `config/profile.yml` location policy and the role's posted office. Flag deal-breakers from `modes/_profile.md` so the recruiter can route correctly.
- **Timeline / availability / notice period** — numbers, not vibes; remember the conflicts-check contingency adds ~2–3 weeks after the final round.
- **Other processes in flight** — recommended framing only; never push the candidate to lie. If a search-firm recruiter is involved, confirm which employers they have permission to submit to (referral-source lock — see `contacto`).
- **Background red flags** — gaps, transitions, short stints, unusual elements from `cv.md` + `_profile.md`. Honest, specific, forward-looking framing — never defensive.

### Audience: `hiring-partner`

The hiring partner (or GC, in-house) is screening for motivation + practice fit. They've already trusted the recruiter's logistics gate; they care whether you'd own the work. Cover at minimum:

- **"Why this move, why now?"** — connect the candidate's last 1–2 roles + `_profile.md` narrative to the group's named work from Step 1 (a recent deal, docket, or regulatory exposure).
- **"Walk me through your deal sheet / matters list"** — the candidate should lead with the 2–3 strongest matters, stating role, deal size or case stakes, and what they personally owned, within confidentiality limits.
- **Risk map closure** — make sure the strongest likely doubts from the evaluation (class-year stretch, practice-area adjacency, why-leaving) are answered with concrete proof, not enthusiasm.
- **Leadership / client-facing questions** — map to `interview-prep/story-bank.md`.
- **Sharp questions to ask back** — 2–3 tied to a specific recent matter, practice-group move, or regulatory development from Step 1, not generic "what's the group like".

### Audience: `callback`

This is where the substantive buckets live. Partners and senior associates (or peer counsel, in-house) are evaluating depth, judgment, and whether they'd staff you on their matters.

- **Substantive questions** (deal mechanics, motion strategy, regulatory analysis, contract negotiation approach) — for each: the question, source, and what a strong answer looks like for this candidate specifically (reference deal-sheet/matters proof points from `cv.md`).
- **Role-specific questions** tied to the JD archetype — for each: the question, why they're likely asking it (which JD requirement it maps to), and the candidate's best angle.
- **Writing / markup exercise prep** — if Step 1 found evidence of a writing exercise or NDA/MSA markup, say what format to expect and which writing sample to have polished.
- **Reverse questions** — about staffing model, partnership track and timeline, hours expectations and bonus thresholds, who owns client relationships, what surprised them when they joined.

### Audience: `panel-mixed`

Callback days and in-house stakeholder panels rarely give the candidate time to context-switch — preparation has to be pre-routed. In-house panels routinely include non-lawyers (sales, product, HR leaders) whose evaluation axis is plain-English communication and business enablement, not legal depth.

**Panel Intel table (required whenever panelists are named).** Before drafting per-slot prep, build this table from whatever profile text or screenshot description the user provides — no scraping or automation, the same pasted-in input the mode already relies on elsewhere:

```markdown
## Panel Intel
| Name | Role | Read |
|------|------|------|
| {Panelist A} | {title, tenure, reporting line if visible} | {what their background implies about what they'll ask, and how much weight their questions carry} |
| {Panelist B} | {title, tenure, reporting line if visible} | {...} |
```

Fill the table using these heuristics:

- **Decision-maker weighting**: cross-reference the JD's reporting line (e.g. "reports to the GC" or the practice group leader's name) against the named panelists. Whoever it points to is the likely primary decision-maker for this loop — flag them explicitly in the `Read` column (e.g. "likely hiring-partner-equivalent — this is who the offer decision routes through") and weight prep effort toward their pack accordingly.
- **Career-trajectory signal**: read the provided experience text or screenshot description for what each panelist's path implies about the kind of questions they'll ask. A senior associate who does the exact work being hired for will ask sharper, more concrete, matter-based questions than someone in an adjacent function (e.g., legal recruiting, HR, or a business stakeholder) who is more likely there for process, culture, or communication framing rather than substantive depth. Note this angle in the `Read` column, not just the job title.
- **Audience tagging**: after profiling, still tag each panelist to one of the three existing audiences (recruiter / hiring-partner / callback) and pull from that audience's pack — the table doesn't replace that step, it gives it a defined input.

**Per-panelist closing question.** Where a panelist's own trajectory offers an obvious angle, draft one tailored closing question for them specifically — the same pattern this mode already uses at the company level ("Sharp questions to ask back" in the `hiring-partner` and mixed-panel packs, tied to a named matter or group development from Step 1), just aimed at the individual instead of the firm. For example, a partner who lateraled in from the candidate's current firm type is a natural fit for "what surprised you most about practicing here that isn't visible from outside" — a question a recruiter or a business-stakeholder panelist couldn't answer as meaningfully. List these alongside the audience pack's own "sharp questions to ask back," tagged with the panelist's name so the candidate knows which slot to use them in.

For each panel slot:

- **If the interviewer is named in the schedule**, use the Panel Intel table above to tag them to one of the three audiences (recruiter / hiring-partner / callback). Then pull from that audience's pack.
- **If the slot is unlabeled**, prep all three packs but cap each to 3–5 highest-priority items so the candidate isn't drowning in notes.
- **Hand-off discipline**: tell the candidate explicitly what NOT to repeat verbatim across slots (e.g. the same marquee matter told identically twice signals scripted answers; vary the angle). Partners compare notes after callback days.
- **Energy management**: 5–6 sequential 30-min meetings burn out candidates by slot four. Flag the slot most likely to test depth (usually the most senior partner in the candidate's exact practice area) and reserve the candidate's freshest material for it.

## Step 5 — Story Bank Mapping

Run this mapping **per audience pack** from Step 4 — same story can map differently to a recruiter prompt vs a callback behavioral question, and a single un-segmented table risks cross-audience drift.

| # | Audience | Likely question/topic | Best story from story-bank.md | Fit | Gap? |
|---|----------|----------------------|-------------------------------|-----|------|
| 1 | recruiter-screen | ... | [Story Title] | strong/partial/none | |
| 2 | hiring-partner | ... | [Story Title] | strong/partial/none | |
| 3 | callback | ... | [Story Title] | strong/partial/none | |

- **strong**: story directly answers the question
- **partial**: story is adjacent, needs reframing
- **none**: no existing story — flag for the user

For each gap, suggest: "You need a story about {topic}. Consider: {specific experience from cv.md that could become a STAR+R story}."

If the user wants to draft missing stories, help them build STAR+R format and append to `interview-prep/story-bank.md`.

## Step 6 — Substantive Prep Checklist

Based on what the firm or company actually tests, not generic advice:

```markdown
- [ ] {topic} — why: "{evidence from research}"
- [ ] {topic} — why: "{their recent matters / enforcement exposure suggest this matters}"
- [ ] {topic} — why: "{asked in N/M recent Chambers Associate / Glassdoor accounts}"
- [ ] {writing sample / deal sheet polish} — why: "{writing exercise reported in research}"
```

Prioritize by frequency and relevance to the role. Max 10 items.

## Step 7 — Company Signals (per audience)

Things to say, do, and avoid — segmented by who's listening. The same fact can be a strength to a peer engineer and a yellow flag to a recruiter; framing matters.

### To the recruiter / legal-recruiting screen

- **What to volunteer**: motivation, bar admissions and jurisdiction fit, class year, timeline, why this firm/company.
- **What NOT to volunteer**: hard comp number when leverage is uncertain (for firms, the scale answers it; for in-house, defer to band); ongoing process details; opinions on the firm's recent partner departures / press.
- **Vocabulary**: official firm/company language for practice groups, benefits, and policies (from the careers page).
- **Red flags they screen for**: jurisdiction surprises, class-year mismatch, comp mismatch, "looking everywhere" energy, an uncoordinated second submission channel.

### To the hiring partner / GC

- **What to lead with**: connection between candidate narrative (`_profile.md`) and a named matter, deal, or regulatory exposure from Step 1.
- **Vocabulary to use**: terms the firm/company uses — shows homework (the practice group's own name for its work, the company's product names, "commercial" vs "product" counsel as they use them).
- **Sharp questions to ask back**: 2–3 tied to recent matters / practice-group news from Step 1.

### To the callback attorneys

- **What to lead with**: matter-relevant proof points from `cv.md` / `article-digest.md` — deal types, case postures, contract volume at the right seniority.
- **Things to avoid**: anti-patterns flagged in Chambers Associate / Fishbowl / Glassdoor accounts specific to this firm or company.
- **Reverse questions**: staffing model, partnership track, hours expectations and bonus thresholds, client-relationship ownership, what surprised them when they joined.

### To a mixed panel

- **What to lead with**: a single 2-sentence framing that lands for all three audiences — usually narrative + named matter or business challenge — then let each interviewer steer.
- **What NOT to repeat**: same marquee matter told identically across slots; instead, vary the angle (recruiter hears the headline scope, the partner/GC hears the client-impact framing, callback attorneys hear the substantive detail).
- **Vocabulary**: keep plain-English, business-enablement language when business stakeholders are in the room; switch to practice-level language (deal mechanics, motion strategy, regulatory nuance) when only attorneys are.
- **What to avoid**: contradicting yourself across slots about comp, timeline, or what excites you. Interviewers compare notes.

## Output

Save the full report to `interview-prep/{company-slug}-{role-slug}.md` with this header:

```markdown
# Interview Intel: {Company} — {Role}

**URL:** {job posting URL or company careers URL, or "N/A" if recruiter-sourced}
**Legitimacy:** {tier copied from the evaluation report's Block G, or "unknown" if no report exists}
**Report:** {link to evaluation report if exists, or "N/A"}
**Researched:** {YYYY-MM-DD}
**Sources:** {N} Chambers Associate / Vault profiles, {N} Glassdoor reviews, {N} Fishbowl posts, {N} other (Above the Law, Law360)
**Audiences covered:** {recruiter-screen, hiring-partner, callback, panel-mixed}
```

## Post-Research

After delivering the report:

1. Ask the user if they want to draft stories for any gaps found in Step 5
2. If they have a scheduled interview date, note it: "Your interview is in {X} days. Want me to set a reminder to review this prep?"
3. Suggest running `deep` mode if the company research in Step 1 was thin — deep mode covers strategy, culture, and competitive landscape in more depth

## Rules

- **NEVER invent interview questions and attribute them to sources.** Inferred questions must be labeled `[inferred from JD]`.
- **NEVER fabricate Glassdoor ratings or statistics.** If the data isn't there, say so.
- **Cite everything.** Every question, every stat, every claim gets a source or an `[inferred]` tag.
- Generate in the language of the JD (EN default).
- Be direct. This is a working prep document, not a pep talk.
