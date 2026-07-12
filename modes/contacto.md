# Mode: contacto -- Outreach messages

> Apply `voice-dna.md` (if present) to every generated message — full guardrail, conversational voice included (Tier 1 + Tier 2). See `_shared.md` → Voice DNA.

This mode has two variants that share the same persona engine (recruiter → hard
requirements; hiring manager → impact/vision):

- **LinkedIn power move** (default) — find contacts and draft a ≤300-char message
  tied to a specific application/interview. This is the flow below.
- **Greeting** — a single ultra-short first-touch message for platforms with a hard
  character budget (BOSS Zhipin 打招呼, job-board chat, a cold-email opener). No
  contact discovery. See **Greeting variant** at the end of this file.

**Pick the variant:** use **Greeting** when the user says "greeting" / "打招呼" /
"cold opener", names a chat-style platform (e.g. BOSS Zhipin), or asks for a very
short message; otherwise run the LinkedIn power move below.

## Referral-source lock check (BEFORE any outreach that could constitute a submission)

Legal hiring has a rule tech doesn't: the **first submitter owns the candidacy** at
that employer, typically for 6–12 months. A recruiter submission, a direct
application, or even outreach that reads as an application all start that clock —
and an uncoordinated double-submission (direct + recruiter, or two recruiters)
creates fee disputes that firms commonly resolve by discarding the candidate
entirely.

Before drafting outreach to anyone at a target employer:

1. Check `config/profile.yml` → `legal.recruiter_channel.engagements` for a
   recruiter already engaged for this employer.
2. Check `data/applications.md` for an existing row at this company with a
   `via=` entry (agency channel) or a prior direct application.
3. If a recruiter owns (or may own) the channel: **stop** — route the message
   through that recruiter instead of contacting the employer, and say why.
4. Never let two recruiters submit to the same employer, and never draft a
   direct approach to a firm where a recruiter is engaged for it.

Peer-style networking messages that make no application intent are lower risk,
but if the conversation could plausibly turn into "send me your resume", the
check above still applies — surface the channel state to the candidate first.

## LinkedIn power move (default)

1. **Identify targets** via WebSearch — channel depends on the employer type:
   - **Law-firm roles:** target the **hiring partner** (practice group leader
     or the partner named in the posting) or ONE chosen legal recruiter (MLA,
     Lateral Link, BCG Attorney Search, Macrae for partner-level) — never both,
     and never more than one recruiter (see the referral-source lock above).
     Firm laterals overwhelmingly move through recruiters; direct partner
     outreach is for candidates with a genuine existing connection.
   - **In-house roles:** direct outreach is normal and often preferred — target
     the GC / DGC, the legal team lead for the role's area, or legal recruiting.
   - **Government:** direct application channels only (USAJOBS/agency portals);
     outreach is informational at most.
   - Plus, at any employer: 2-3 team peers (attorneys in similar roles), and the
     interviewer (if the candidate already has a scheduled interview).

2. **Classify contact type** -- ask the candidate or infer from context:
   - **Recruiter** -- an in-house legal recruiting person, or an external legal
     search consultant (MLA, Lateral Link, BCG, Macrae). For external recruiters,
     confirm the engagement is recorded in `legal.recruiter_channel.engagements`
     before they submit anywhere.
   - **Hiring Manager** -- the hiring partner (firm) or GC/DGC/legal team lead (in-house)
   - **Peer** -- an attorney with a similar role on the team (indirect referral)
   - **Interviewer** -- someone who will interview the candidate (known date)

3. **Select primary target**: the person who would benefit most from the candidate being there

4. **Generate message** with a 3-sentence framework adapted to the contact type:

   ### Recruiter
   - **Sentence 1 (Fit)**: Direct match criteria -- role, relevant experience, availability, or location
   - **Sentence 2 (Proof)**: Data that answers their screening questions before they ask them (e.g., "2019 class year, admitted in New York, 5 years of technology transactions at an AmLaw 50 firm, available on four weeks' notice")
   - **Sentence 3 (CTA)**: "Happy to share my CV if this aligns with what you're looking for"

   ### Hiring Manager
   - **Sentence 1 (Hook)**: Specific challenge their team is facing (extracted from the JD, company blog, or news)
   - **Sentence 2 (Proof)**: Candidate's greatest quantifiable achievement showing they have solved similar problems
   - **Sentence 3 (CTA)**: "Would love to hear how your team is approaching [specific challenge]"

   ### Peer (referral)
   - **Sentence 1 (Interest)**: Genuine reference to their work -- article or client alert, CLE talk, bar-association role, or a publicly announced deal/case they worked on
   - **Sentence 2 (Connection)**: Something the candidate is doing in the same space (NOT a job pitch)
   - **Sentence 3 (CTA)**: "I've been working on similar problems at [company], would love to hear your take on [topic]"
   - **Note**: DO NOT ask for a job. The referral happens naturally if the conversation flows.

   ### Interviewer (pre-interview)
   - **Sentence 1 (Research)**: Reference to something specific from their work or trajectory
   - **Sentence 2 (Context)**: Light connection to the candidate's experience in that area
   - **Sentence 3 (CTA)**: "Looking forward to our conversation on [date]"
   - **Note**: Light tone, not desperate. The goal is to show that you prepared.

5. **Versions**:
   - EN (default)
   - ES (if Spanish company)

6. **Alternative targets** with justification for why they are good second choices

**Contact channel preference:** Read `contact_preferences.preferred_channel` from
`config/profile.yml`. If it is absent or set to `"either"`, write the CTA
sentence exactly as specified above — no change. If it is set to `"email"` or
`"phone"`, steer the CTA toward that channel instead of the generic default
(e.g. Recruiter's CTA becomes "Happy to share my CV over email if this aligns
with what you're looking for" rather than defaulting to a call; Hiring
Manager's CTA leans on "happy to continue this over email" instead of
proposing a call). Keep the same
3-sentence structure and per-persona emphasis -- only the channel named in the
CTA changes. If `contact_preferences.note` is set, you may fold its intent into
the CTA phrasing (e.g. "screens unknown numbers" → prefer email wording) but do
not quote the note verbatim in a public-facing message.

**Message rules:**
- Maximum 300 characters (LinkedIn connection request limit)
- NO corporate-speak
- NO "I'm passionate about..."
- Something that makes them want to respond
- NEVER share phone number
- The contact type changes the EMPHASIS, not the structure

---

## Greeting variant

A single, punchy first-touch message for platforms where the opener has a hard
character budget — BOSS Zhipin's 打招呼, job-board chat boxes, or the first line
of a cold email. Reuses the persona engine above; the difference is brevity, and
that there is **no contact discovery**.

1. **Skip target identification.** There is no WebSearch/contact-finding step —
   the message goes to whoever the platform connects you with (usually the poster
   or the recruiter). Do not fabricate a named recipient.

2. **Classify the recipient's persona** from context (default to **Recruiter** if
   unknown) and set the emphasis exactly as above:
   - **Recruiter** → hard requirements met (role, years, stack, location, availability)
   - **Hiring Manager / Founder** → impact and vision (a result that maps to their goal)

3. **Synthesize the top 3 match points** between the JD and `cv.md` (same JD↔profile
   fit logic the LinkedIn flow uses). These are the raw material — you will surface
   only the strongest one or two that fit the budget.

4. **Compose ONE message within the character budget.**
   - **Budget:** read `outreach.greeting_max_chars` from `config/profile.yml`.
     **Default 150** when the key is absent. The message MUST fit — count and trim.
   - **Lead with a specific value proposition** (the single strongest match point),
     not an introduction. Punchy sentences, not paragraphs.
   - **Language:** match the JD / platform language (e.g. Simplified Chinese for
     BOSS Zhipin). Character count applies to the output language.

5. **No-fluff policy (hard):** remove filler and replace it with a concrete value
   prop. Ban phrases like "I'm looking for a job", "I'm passionate about",
   "I hope to have the opportunity", generic self-description. Every clause must
   earn its characters.

6. **Output:** the greeting, its character count vs the budget, and a one-line note
   of which match point(s) it used. Offer a shorter fallback if it's near the limit.

**Greeting rules:**
- Platform-agnostic — never assume LinkedIn; works for any chat/opener surface.
- Within `outreach.greeting_max_chars` (default 150). Never exceed it.
- Same non-fabrication rule as the rest of career-ops: reformulate real experience
  from `cv.md`, never invent a skill, metric, or claim.
- NO corporate-speak, NO "I'm passionate about...", NEVER share a phone number.
- Persona changes the EMPHASIS, not the structure.
