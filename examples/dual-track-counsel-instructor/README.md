# Example -- dual-track counsel + instructor

This is for the case where one candidate has a real track record on two different archetypes at once. The example here is a senior privacy/commercial counsel who is also an adjunct law professor and CLE instructor, but the same structure works for litigator + trial-advocacy instructor, in-house counsel + law school clinic supervisor, associate + bar-exam prep instructor, or practicing attorney + legal-tech trainer.

The default career-ops examples assume one north-star archetype. Hybrid legal careers do not fit that mould. Adjunct professors, CLE instructors, law school clinic supervisors, bar-exam prep faculty, legal-tech trainers inside firms or companies -- these people have two real jobs on the CV and the existing single-archetype config either flattens one side or the other.

This folder shows how to:

1. Configure `archetypes:` in `profile.yml` with two `fit: primary` entries instead of one.
2. Write a `cv.md` that puts measurable wins on both sides in front of the recruiter without diluting either.
3. Set two compensation ranges. Practice and legal education pay differently, often by 30-50%, and the evaluator needs to know which range applies to a given offer.
4. At evaluation time, decide which track to lead with for the specific JD on the desk.

---

## Files

| File | Purpose |
|------|---------|
| `cv.md` | Fictional dual-track CV (Dana Whitfield). Use as structural reference for your own. |
| `profile.yml` | Profile config with two primary archetypes and two comp ranges. |
| `README.md` | This file. |

The persona is fictional (`Dana Whitfield <dana@example.com>`). Do not copy values directly -- adapt them.

---

## When to use the dual-track pattern

Use it only if all of these are true:

1. You have measurable, recent (under 3 years old) wins on two different archetypes. Not "I guest-lectured once", but real numbers: CLE sessions delivered, attorneys trained, course completion/ratings -- and on the practice side, matters closed, deal values, program scope owned.
2. You will actually take an offer from either side. If you would only really accept one and grudgingly take the other, do single-track and treat the other side as one strong bullet in the summary.
3. The two tracks are at roughly the same seniority. A junior associate who also guest-teaches a CLE session once a year is a single-track associate who happens to present occasionally, not a dual-track candidate.

Use single-track instead if:

- One side is occasional. "I speak at a CLE panel once a year" does not count as a teaching career.
- The seniorities are mismatched.
- You are early enough in your career that you don't actually know yet which side is the main one.
- Your compensation expectations on one track are non-negotiable. Pick that track and use the other as a differentiator in the cover letter.

---

## How dual-track changes the rest of career-ops

### `modes/_shared.md`
List both archetypes in the "North Star -- Target Roles" table with `fit: primary`. The skill applies equal rigor to all primary archetypes, which is what you need here.

### `cv.md`
Two ways to structure it:

- Layered (what I recommend): one Professional Summary that names both tracks in the first sentence, then experience entries that include both practice and teaching bullets per role. Use this when the roles actually combined both. See the `cv.md` in this folder.
- Sectioned: separate "Practice Experience" and "Teaching Experience" headings. Use this when the two tracks happened at different employers and don't need to be told as one story.

Lead the Professional Summary with the combination itself -- "senior privacy counsel who also teaches the subject", or whatever the equivalent is for your practice area. The combination is the thing that's hard to hire. Either side alone is not.

### `profile.yml` -- compensation
Put your practice range in `compensation.target_range` (it's usually the higher one) and the teaching range in the optional `compensation.alternate_ranges` block. The evaluator picks the right one based on the JD.

### `profile.yml` -- `legal:` block
Bar admissions, class year, and practice areas still matter on the practice side of the dual track (a firm or in-house employer will check them the same way). The teaching-track roles (law school adjunct, CLE instructor, bar-association program director) are direct-application only and largely outside the jurisdiction/recruiter-channel gates that govern firm laterals -- keep `recruiter_channel.engagements` empty unless you are actually working the practice track through a legal recruiter.

### Evaluation reports
When career-ops evaluates an offer, it should detect which archetype the JD targets and pick the matching compensation range, the matching CV emphasis, and the matching STAR stories. With two `fit: primary` entries this mostly just works, but check the `Archetype:` line in the report header. If it picked wrong, the rest of the report is wrong too.

---

## Interview objection handling

A dual-track CV triggers objections that single-track CVs do not. Three you should expect.

### "Why are you applying for a practicing-counsel role if you also teach?"

The answer template I use:

> "Teaching is how I keep the practice sharp. I have to explain privacy law in terms a first-year associate or a non-lawyer product manager can actually apply, so I cannot get away with hand-waving. The reason I am here for [role] is [specific reason about the team / company / scope]. Teaching stays as a side activity, not a competing job."

Lead with practice wins. Mention teaching as a credibility signal ("I have explained CCPA compliance about 1,400 times so I know exactly which parts trip attorneys up"), not as a co-equal commitment.

### "Are you sure you want a teaching-heavy role? Your practice background is intense, you will be bored."

> "The attorneys and students I want to teach are going to draft real advice memos, not pass a bar-exam-style quiz. My practice background is exactly why I can get them there. I have done both for [N] years. This is not a step down. It is the same work in a different format."

Lead with the teaching wins (sessions delivered, attorneys trained, ratings, completion). Use the practice background as proof of credibility, not as a fallback plan.

### "Why not just pick one?"

> "Because the combination is the actual value. Attorneys who can teach end up running onboarding, writing internal guidance people actually follow, and training business teams on new compliance requirements. Educators who can practice get hired to design CLE curricula that survive contact with a real regulatory inquiry. I am looking for roles where both matter."

---

## Over/underqualified failure modes

Dual-track candidates get read as overqualified for pure teaching roles ("you will leave in six months for a practice job") and as underqualified for pure practice roles ("you have not been full-time in-house in two years"). Both kill applications. The mitigations:

| Risk | Mitigation in CV | Mitigation in interview |
|------|------------------|-------------------------|
| Overqualified for teaching | Lead the Summary with curriculum and outcomes, not deal values | Tell a story about a course or CLE track you redesigned that moved attorney outcomes. Show you care about pedagogy, not just billing. |
| Underqualified for practice | Add a "Recent Practice" section that lists matters closed or programs run in the last 12 months | Bring a redacted work product. Walk through a recent matter or client memo in plain language. |

---

## Related files

- `../cv-example.md` -- single-track CV example for comparison.
- `../../config/profile.example.yml` -- the canonical profile schema this example extends.
- `../../modes/_shared.md` -- where archetypes feed into framing logic.
- `../../CONTRIBUTING.md` -- this example was contributed under "Add example CVs for different roles".
