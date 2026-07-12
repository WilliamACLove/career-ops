# Mode: eu-legal — European Legal Application Calibration

Use this mode when the candidate is targeting attorney/counsel roles in Europe and wants market-specific application calibration before CV generation, form answers, or interview prep.

This mode is advisory. It must not replace official immigration, tax, bar-admission, or requalification-exam advice.

## Inputs

1. **JD text or URL** — role title, country, city, work model, practice area, seniority/PQE, language, and application portal.
2. **CV** at `cv.md` + `article-digest.md` — proof points and real achievements.
3. **Profile** at `config/profile.yml` + `modes/_profile.md` — location, targets, constraints, compensation, and user-specific rules.
4. **Evaluation report** in `reports/` if one already exists.

## Step 1 — Market and Role Classification

Classify the opportunity:

- country and city
- role family: Law Firm Associate — Transactional, Law Firm Associate — Litigation & Disputes, In-House Counsel — Product/Commercial/Privacy, Compliance & Regulatory, EU Institutions (lawyer-linguist / legal officer), Legal Tech / Legal Engineer
- qualification path implied: home-title practice, local bar admission/requalification, or an EU institutions concours-style process
- seniority/PQE and level signals
- work model: remote, hybrid, office-first, relocation
- practice area and domain
- language expectations — distinguish the **legal drafting language** (the language contracts, filings, or advice must be produced in) from the **working language** (the language of internal meetings/emails), since these often differ
- application portal and required fields

If the country or city is unclear, say so and proceed with generic European legal guidance.

## Step 2 — Hard Filters

Build a table:

| Filter | JD signal | Candidate signal | Risk | Action |
|--------|-----------|------------------|------|--------|
| Jurisdiction/qualification (bar admission, home-title practice, requalification exam) | | | pass/risk/blocker/unknown | |
| Work authorization (EU Blue Card, post-Brexit UK visa route, local permit) | | | pass/risk/blocker/unknown | |
| Language (drafting vs working language) | | | pass/risk/blocker/unknown | |
| Seniority/PQE band | | | pass/risk/blocker/unknown | |
| Practice-area fit | | | pass/risk/blocker/unknown | |
| Compensation feasibility | | | pass/risk/blocker/unknown | |
| Conflicts (lateral/partner-track roles only) | | | pass/risk/blocker/unknown | |
| Background checks | | | pass/risk/blocker/unknown | |

Do not guess missing candidate facts. Mark unknowns and ask only when the answer changes apply/no-apply or generated text.

Note on jurisdiction/qualification strictness: treat it as **strict** for law-firm roles requiring local bar admission or rights of audience, **moderate** for in-house roles (many markets allow foreign-qualified counsel to act "in-house" without local bar admission, though registration rules vary by country and should be verified at runtime), and **distinct rather than strict-or-lenient** for the EU institutions track, where the gate is nationality/language combination plus a law degree valid in a member state's legal system, not bar admission at all.

## Step 3 — Country Notes

Use these as prompts for what to verify, not as final legal advice.

| Country/market | Common checks for legal applications |
|----------------|------------------------------------|
| UK (London) | Solicitor of England & Wales qualification (QLTS route for foreign-qualified lawyers) or barrister equivalent; **post-Brexit caveat** — EU nationals no longer have automatic right to work and generally need a Skilled Worker visa like any other non-UK national; London compensation sits well above other European legal hubs. Verify current qualification and immigration rules from official UK sources (SRA, gov.uk) at runtime. |
| Paris / France | Distinction between "avocat" (requires CAPA and French Bar admission — needed for firm/litigation roles) and "juriste d'entreprise" (in-house, no bar admission required); cover letter and CV commonly expected in French even at international firms; strong Anglo-Saxon firm presence uses English as working language but drafting is often French. Verify Bar Council (CNB) requirements from official sources at runtime. |
| Frankfurt / DACH (Germany, Austria) | "Volljurist" status (two state exams) is the gate for German-qualified practice; foreign-qualified lawyers can often work as in-house counsel or under supervision but cannot hold German rights of audience without requalification. **Grades and transcripts matter heavily** — Prädikatsexamen (top-decile exam results) is a real screening signal, unusually so compared to other markets. Verify current requalification and registration rules from official sources at runtime. |
| Amsterdam / Netherlands | Dutch Bar ("advocaat") admission required for firm/litigation roles; English is widely used as working language at international firms and in-house, but Dutch may be required for local-market or regulatory work. Verify Bar (NOvA) and sponsor/visa rules from official Dutch sources at runtime. |
| Madrid / Spain | "Acceso a la abogacía" (bar exam plus training course) required for practicing as "abogado"; Spanish-language application materials and fluency generally expected outside a narrow set of international-desk roles. Verify current exam and registration requirements from official Spanish sources at runtime. |
| Milan / Italy | Italian bar exam ("esame di stato") required for local qualification; Italian language typically required for both application and practice, including at international firms' Italian offices. Verify current bar and registration rules from official Italian sources at runtime. |
| Brussels / EU institutions & EU law-competition hub | Two distinct tracks: (a) private-practice EU law/competition roles at international firms, similar language/qualification calculus to other hubs; (b) **EU institutions track** (EPSO lawyer-linguist and legal officer competitions) — gated by nationality/EU-language combination (excellent command of one EU official language plus very good command of a second) and a law degree valid in a member state's legal system, not by bar admission. EU institutions hiring runs on competitive "concours"-style selection with its own timelines. Verify current EPSO competition requirements from official EU sources at runtime. |
| Other Europe | Use generic legal-market screening plus country-specific official verification for bar admission/requalification, work authorization, and language expectations. |

General cross-market notes to fold into calibration:

- **Establishment Directive 98/5/EC** allows EU-qualified lawyers to practice under their home-country professional title in another EU/EEA member state (registering with the local bar) without immediately requalifying, and to integrate into the host bar after a qualifying period of effective practice — this is a common path for intra-EU lateral moves. Verify current implementation details per member state at runtime; this is directional, not a substitute for official guidance.
- **Requalification exams** (aptitude tests, local bar exams, or the two-exam path in Germany/Austria) are the main friction point for lawyers moving across EU jurisdictions outside the home-title path above. Flag as a risk/unknown rather than assuming feasibility.
- **In-house roles are generally more qualification-flexible than firm roles** across EU markets — but local registration requirements for in-house counsel still vary by country and should not be assumed away.
- **Salary calibration is directional only:** London compensation runs well above continental hubs; Frankfurt and Paris run above Madrid and Milan; in-house pay trades lower cash for equity/hours relative to firm roles, similarly to the firm-vs-in-house trade-off seen in other markets. Do not hardcode figures — pull current numbers from the candidate's own research or official/market survey sources at runtime.
- **Work-model norms:** international law firms skew office-first or hybrid with limited full-remote; in-house roles (especially tech/product counsel) trend more hybrid-flexible; EU institutions roles are Brussels/Luxembourg-based with structured onboarding.
- **Visa/work-permit basics:** EU/EEA nationals retain freedom of movement across the EU/EEA; non-EU/EEA candidates typically need an **EU Blue Card** or equivalent national work-permit route for firm or in-house roles, and the UK's Skilled Worker visa for London roles post-Brexit. Verify current thresholds and eligibility from official sources at runtime — this is not immigration advice.

Never hardcode current thresholds, exam requirements, or visa rules. If a threshold or requirement matters, search official government/bar-association sources before advising.

## Step 4 — Application Calibration

Produce a concise addendum:

```markdown
## EU Legal Calibration: {Company} — {Role}

**Market:** {country/city or unknown}
**Role family:** {family}
**Qualification path implied:** {home-title / local bar / requalification / EU institutions concours / unknown}
**Primary hard filters:** {top 3}
**Main reviewer doubts:** {top 3}

### CV Adjustments
- {top-third summary adjustment}
- {practice-area/matter keyword adjustment}
- {matter-based bullet adjustment — deal value, case stakes, or scope, not "impact %"}

### Application Answers
- {qualification / bar-admission / requalification answer if asked}
- {work authorization / EU Blue Card / visa answer if asked}
- {location / hybrid answer if asked}
- {language answer if asked — drafting vs working language}
- {compensation strategy if asked}

### Interview Prep Handoff
- {recruiter/screener risks}
- {hiring-partner or GC proof points}
- {practice-area or transactional/litigation topics to prep}

### Facts To Verify
- {official-source checks — bar/requalification rules, visa rules, salary data}
- {candidate facts to confirm}
```

## Step 5 — Handoff

- Use `pdf` mode for the submit-ready CV after calibration.
- Use `apply` mode for portal answers after calibration.
- Use `interview-prep` mode when the candidate reaches recruiter, hiring-partner/GC, or panel rounds.
- Store user-specific rules in `modes/_profile.md` or `config/profile.yml`, not in this mode.

## Rules

- Do not invent bar admission status, qualification/requalification status, language level, compensation targets, degree equivalence, or relocation availability.
- Do not put sensitive logistics in the CV unless the user explicitly wants that or the local market clearly expects it.
- Do not provide legal advice on immigration, tax, or bar admission. Provide verification prompts and cite official sources (bar associations, EPSO, national immigration authorities) when legal or regulatory facts are used.
- Application-pack norms vary by market and should be reflected, not assumed uniform: cover letters are commonly expected in France and Germany and for EU institutions applications; transcripts/grades carry unusual weight in DE/AT; language of application generally follows the local market unless the employer is explicitly English-language international.
- Keep output in the JD language unless the user asks otherwise.
