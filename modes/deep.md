# Mode: deep — Deep Research Prompt

Generate a structured prompt for Perplexity/Claude/ChatGPT with 6 axes:

```text
## Deep Research: [Company] — [Role]

Context: I am evaluating a candidacy for [role] at [company]. I need actionable information for the interview.

### 1. Regulatory & legal risk landscape
- What regulatory regimes govern their core business? (privacy, financial services, healthcare, export, consumer protection)
- What is their AI-governance exposure? (AI features shipped, AI Act / state AI laws, FTC posture) — this is the hottest axis for legal hires right now
- Recent enforcement actions, consent decrees, or regulator inquiries?
- What do they publish about compliance, trust, or responsible AI?

### 2. Recent moves (last 6 months)
- Relevant legal/compliance leadership hires? (new GC, DGC, CPO)
- Acquisitions, partnerships, or market entries creating legal work?
- Product launches or pivots with regulatory implications?
- Funding rounds, IPO signals, or leadership changes?

### 3. Legal team structure & culture
- How is the GC org shaped? (team size, reporting line — does legal report to the CEO or CFO?)
- Who is the GC/CLO, and what is their background (firm, government, in-house)?
- Legal ops maturity: do they run a CLM, e-billing, playbooks, legal ops hires?
- Centralized or embedded counsel model? Remote-first or office-first?
- Glassdoor/Fishbowl reviews about the legal team or working with legal?

### 4. Likely challenges
- What legal problems does their growth create? (contract volume, new jurisdictions, data flows)
- Regulatory exposure, litigation docket, compliance posture — what's on fire?
- Active or recent litigation? (docket search, news)
- What pain points do people mention in reviews about legal review speed or risk appetite?

### 5. Competitors and differentiation
- Who are their main competitors?
- What is their moat/differentiator?
- How does their legal/regulatory posture compare to competitors? (who's been fined, who moves faster)

### 6. Candidate angle
Given my profile (read from cv.md and profile.yml for specific experience):
- What unique value do I bring to this legal team?
- Which of my matters, playbooks, or publications are most relevant?
- What story should I tell in the interview?
```

Personalize each section with the specific context of the job being evaluated.
