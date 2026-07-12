# Examples

Reference files that demonstrate career-ops data formats and conventions. None of these are used at runtime -- they exist so you can see the expected structure before creating your own files.

## Files

| File | Demonstrates |
|------|-------------|
| `cv-example.md` | How to structure `cv.md` -- attorney CV conventions (bar admissions, matter-based bullets, deal values) for a fictional technology-transactions/M&A associate (Morgan Reyes) targeting an in-house Senior Commercial Counsel role |
| `resume-example.md` | Resume variant of `cv-example.md` -- same persona, condensed to a 1-page targeted format. Use this as a structural guide when writing a 1-page resume vs a 2-page lateral-associate CV |
| `article-digest-example.md` | How to write `article-digest.md` -- compact representative-matters/deal-sheet entries with hero metrics (deal values, matter counts, turnaround times) per matter |
| `sample-report.md` | The evaluation report format produced by the evaluation pipeline: Blocks A-F plus Block G (Posting Legitimacy), header fields including Score/URL/Legitimacy, and a jurisdiction/bar-admission gate example in the Red Flags section |
| `ats-normalization-test.md` | Regression fixture for `generate-pdf.mjs` Unicode normalization -- lists every problematic codepoint and its ASCII-safe replacement |
| `dual-track-counsel-instructor/` | Complete profile config for a candidate with two primary archetypes (practicing counsel + adjunct/CLE instructor), including `cv.md`, `profile.yml`, and a README explaining when and how to use the dual-track pattern |
| `latex-tex/` | Fictional `.tex` fixtures for the `latex-tex` in-place tailoring mode (opt-in for candidates who maintain their own hand-tuned LaTeX resume) |

## Usage

These files are read-only references. To set up your own career-ops instance:

1. Run `npm run doctor` to check prerequisites.
2. Use `cv-example.md` (or `resume-example.md` for a condensed 1-page format) as a structural guide when writing your `cv.md`.
3. Use `article-digest-example.md` as a template for your `article-digest.md` (optional but improves evaluation quality).
4. See the `dual-track-counsel-instructor/` folder if your career spans two distinct archetypes.
