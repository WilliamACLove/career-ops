# Mode: naukri -- पूर्ण मूल्यांकन A-F

जब candidate कोई offer paste करे (text या URL), हमेशा सभी 6 blocks deliver करें।

## Step 0 -- Archetype Detection

Offer को 6 legal archetypes में से एक में classify करें (देखें `_shared.md`): लॉ फर्म एसोसिएट -- ट्रांजैक्शनल, लॉ फर्म एसोसिएट -- लिटिगेशन & डिस्प्यूट्स, इन-हाउस काउंसल, कंप्लायंस & रेगुलेटरी, गवर्नमेंट / पब्लिक इंटरेस्ट अटॉर्नी, लीगल टेक / लीगल इंजीनियर। यदि hybrid हो, तो 2 सबसे करीबी indicate करें। यह निर्धारित करता है:
- Block B में कौन से proof points/matters prioritize करें
- Block E में summary कैसे rewrite करें
- Block F में कौन सी STAR stories तैयार करें

## Step 0.5 -- Legal Hard Gates (पास/फेल, कभी silently average नहीं)

Scoring से पहले, offer को candidate के `config/profile.yml` -> `legal` block के against check करें। ये structural filters हैं, weighted factor नहीं -- एक failed gate Red flags dimension में AND final recommendation में explicitly दिखना चाहिए। एक अच्छा CV match कभी failed gate को silently bury नहीं करता।

1. **Bar Enrolment / AIBE** -- JD का practice type देखें और strictness ladder apply करें (देखें `_shared.md` Legal Hard Gates के लिए पूरी detail):
   - **Litigation roles: strict** -- active State Bar Council enrolment + AIBE clearance ज़रूरी है
   - **Transactional/corporate firm roles: moderate-to-strict** -- ज़्यादातर Tier-1 firms भी enrolment माँगती हैं
   - **In-house: moderate** -- अक्सर preferred, always mandatory नहीं
   - **Legal tech / PSU / compliance: minimal** -- law degree अक्सर काफ़ी है
   - **Foreign-qualified-only candidate + Indian litigation/court-facing JD** -- hard blocker, स्पष्ट रूप से कहें
2. **PQE Band** -- यदि JD ने PQE band बताया है ("5-7 PQE") और candidate का PQE उससे बाहर है, near-automatic rejection मानें -- apply करने के खिलाफ recommend करें।
3. **Patent Agent Qualification** -- patent-prosecution roles के लिए CGPDTM Patent Agent Exam + technical degree ज़रूरी है। यदि JD माँगे और `legal.patent_agent` false है, hard gate।
4. **Conflicts Risk (senior/partner-level roles)** -- नोट करें कि हर senior lateral offer client conflicts clear होने पर contingent है। Score मत करें।

Gate results को Block A के ऊपर एक छोटी pass/fail table के रूप में report करें। एक failed gate बाकी सब कितना भी अच्छा match हो, recommendation को cap करता है।

## Block A -- Role Summary (भूमिका का सारांश)

इस जानकारी के साथ table:
- Detected archetype
- Domain (ट्रांजैक्शनल / लिटिगेशन / इन-हाउस / कंप्लायंस / गवर्नमेंट / लीगल-टेक)
- Function (सलाह देना / negotiate करना / litigate करना / manage करना / practice build करना)
- Seniority (PQE band, या in-house के लिए title level)
- Remote (Full remote / Hybrid / On-site) -- litigation roles के लिए हमेशा On-site मानें (court presence structurally ज़रूरी)
- Team size (यदि mention हो)
- TL;DR एक sentence में

## Block B -- CV के साथ Match

`cv.md` पढ़ें। एक table बनाएं जहाँ offer की हर requirement CV की exact lines पर map हो।

**Archetype के अनुसार adapt करें:**
- ट्रांजैक्शनल → सही PQE band पर deal-sheet matters prioritize करें: deal types, deal sizes, drafting ownership
- लिटिगेशन & डिस्प्यूट्स → court/tribunal appearances, briefs argued, arbitration roles, writing strength prioritize करें
- इन-हाउस → contract volume (SaaS/MSA/DPA counts), cross-functional counseling, regulatory breadth prioritize करें
- कंप्लायंस & रेगुलेटरी → named regimes (SEBI/RBI/PMLA/FEMA), regulator-facing experience, investigations prioritize करें
- गवर्नमेंट / पब्लिक इंटरेस्ट → court/tribunal volume, resource-constrained judgment, public-service commitment prioritize करें
- लीगल टेक / लीगल इंजीनियर → practice pedigree + genuine legal-tech/AI fluency prioritize करें

**Gaps** section: हर gap के लिए mitigation strategy। हर gap के लिए:
1. क्या यह hard blocker है या nice-to-have?
2. क्या candidate adjacent experience demonstrate कर सकता है?
3. क्या कोई matter/project इस gap को cover करता है?
4. Concrete mitigation plan (cover letter के लिए phrase, quick upskilling, आदि)

## Block C -- Level और Strategy

1. **Offer में detected level** (PQE band, या in-house title ladder: Counsel → Senior Counsel → AGC → DGC → GC, जहाँ title comp lever है) बनाम **candidate का natural level**
2. **"Senior बेचो बिना झूठ बोले" plan**: archetype के अनुसार specific formulations, highlight करने के लिए concrete matters/deals, firm training या clerkship experience को advantage के रूप में position कैसे करें
3. **"यदि मैं downleveled हूँ" plan**: firm roles -- PQE re-crediting ±1 year negotiable offer पर (कभी-कभी एक साल नीचे लेने से partnership runway मिलती है); in-house -- level/title के लिए fight करें (Senior Counsel vs Counsel) dollars negotiate करने से पहले, क्योंकि bonus target % और equity band title के साथ follow करते हैं

## Block D -- Compensation और Demand (मुआवज़ा और माँग)

WebSearch उपयोग करें legal-market comp sources से (generic tech salary sites की जगह -- देखें `_shared.md`):
- **Firms:** Legally India का law firm salary survey + Vahura की legal-market compensation reports (directional benchmark, exact figure नहीं); mid-size/boutique firms के लिए rule of thumb -- Tier-1 का करीब 60-80%, discretionary bonus
- **In-house:** Vahura और legal-focused search firms के compensation trend reports; AmbitionBox/Glassdoor भी in-house legal roles के लिए काम आते हैं
- **Government/PSU:** 7th Central Pay Commission matrix या PSU-specific recruitment notification का stated pay scale
- **Legal ops:** CLOC reports
- Company/firm की compensation reputation (Glassdoor India, word-of-mouth via recruiters)
- Indian legal market में role की demand trend

Table बनाएं data और cited sources के साथ। यदि data नहीं मिला, clearly बताएं — कुछ invent न करें। **Firms में salary band publish न होना normal है ("competitive salary" market default है) -- यह अपने आप में red flag नहीं।**

**India market -- अनिवार्य checks:**
- CTC और In-hand (net) salary दोनों mention हैं? In-hand calculate करने में मदद करें।
- Variable pay / Performance bonus mentioned? Guaranteed है या discretionary/KPI-linked? पिछले 2 साल का actual payout पूछें।
- Billable-hours target mentioned है (जैसे 1,800-2,200 hours/year top firms में)? Bonus इसी threshold से linked है क्या?
- PQE band JD में stated है? Candidate का PQE उस band में fit होता है? (देखें Step 0.5 hard gate)
- ESOPs / RSUs / Joining bonus mention है (in-house/legal-tech roles में अधिक relevant)? Vesting schedule और liquidity confirm करें।
- PF: Employer contribution CTC में शामिल? Basic salary का कितना % है?
- Gratuity: CTC में शामिल? 5-year vesting mentioned?
- Bond / Service agreement clause है (firm-sponsored LLM/secondment के साथ आ सकता है)? Exit penalty amount और duration?
- Notice period: 30/60/90 days? Buyout option है?
- HRA mentioned? Metro vs. non-metro applicable?
- Health insurance coverage: Individual या family? Pre-existing conditions?
- Flexible / WFH policy: Full remote, hybrid (कितने days?), या full on-site? (litigation roles पर लागू नहीं -- court presence ज़रूरी)

## Block E -- Personalization Plan (व्यक्तिगतकरण योजना)

| # | Section | Current State | Proposed Change | Justification |
|---|---------|---------------|-----------------|---------------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

CV में Top 5 changes + LinkedIn में Top 5 changes match maximize करने के लिए।

## Block F -- Interview Plan (साक्षात्कार योजना)

Offer की requirements पर mapped 6-10 STAR+R stories (STAR + **Reflection**):

| # | Offer Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|-------------------|--------------|---|---|---|---|------------|

**Reflection** column वह capture करता है जो सीखा गया या अलग किया जाता। यह seniority signal करता है — juniors describe करते हैं क्या हुआ, seniors उससे lessons लेते हैं।

**Story Bank:** यदि `interview-prep/story-bank.md` मौजूद है, check करें कि ये stories पहले से वहाँ हैं या नहीं। यदि नहीं, तो नई stories add करें। समय के साथ, यह 5-10 master stories का reusable bank बन जाता है।

**Archetype के अनुसार selected और framed:**
- ट्रांजैक्शनल → deal execution, drafting ownership, specialist workstreams manage करना highlight करें
- लिटिगेशन & डिस्प्यूट्स → case strategy, motions/briefs जीते, court/tribunal appearances, pressure में writing highlight करें
- इन-हाउस → business enablement ("safely yes तक पहुँचाना"), volume management, cross-functional counseling highlight करें
- कंप्लायंस & रेगुलेटरी → program building, regulator interactions, investigations handled highlight करें
- गवर्नमेंट / पब्लिक इंटरेस्ट → trial/tribunal volume, resource-constrained judgment, mission commitment highlight करें
- लीगल टेक / लीगल इंजीनियर → practice expertise को product/workflow decisions में translate करना, adoption metrics highlight करें

इसके अलावा include करें:
- 1 recommended representative matter (deal-sheet/matters list से कौन सा matter present करें और कैसे, confidentiality limits के भीतर)
- Red-flag questions और उनके जवाब (जैसे: "आप firm क्यों छोड़ रहे हैं?", "Partnership track पर क्यों नहीं बढ़े?", "आपका billable-hours history कैसा रहा?", "In-house से firm में (या firm से in-house में) वापस क्यों?")

---

## Post-evaluation (मूल्यांकन के बाद)

**हमेशा** Blocks A-F के बाद execute करें:

### 1. Report .md Save करें

पूरा evaluation `reports/{###}-{company-slug}-{YYYY-MM-DD}.md` में save करें।

- `{###}` = अगला sequential number (3 digits, zero-padded)। इसे atomically allocate करने के लिए `node reserve-report-num.mjs` run करें (stdout `{###}` return करता है), report लिखें, फिर sentinel release करने के लिए `node reserve-report-num.mjs --release {###}` run करें।
- `{company-slug}` = company name lowercase, no spaces (dashes use करें)
- `{YYYY-MM-DD}` = आज की date

**Report format:**

```markdown
# मूल्यांकन: {Company} -- {Role}

**Date:** {YYYY-MM-DD}
**Archetype:** {detected}
**Legal Hard Gates:** {pass/fail summary from Step 0.5}
**Score:** {X/5}
**URL:** {offer URL}
**Via:** {recruiter/agency firm, या -- direct के लिए}
**PDF:** {path या pending}

---

## A) Role Summary
(Block A का पूरा content)

## B) CV के साथ Match
(Block B का पूरा content)

## C) Level और Strategy
(Block C का पूरा content)

## D) Compensation और Demand
(Block D का पूरा content)

## E) Personalization Plan
(Block E का पूरा content)

## F) Interview Plan
(Block F का पूरा content)

## G) Application के लिए Draft Responses
(केवल यदि score >= 4.5 -- application form के लिए draft responses)

---

## निकाले गए Keywords
(ATS optimization के लिए offer के 15-20 keywords की list)
```

### 2. Tracker में Record करें

**हमेशा** `data/applications.md` में record करें:
- अगला sequential number
- आज की date
- Company (END employer -- यदि recruiter-mediated हो और end employer unknown है, `?` marker use करें, agency को notes में mention करें)
- Via -- recruiter/agency का नाम, या `—` direct applications के लिए (recruiter-channel rule के लिए ज़रूरी, देखें `_shared.md` Global Rules)
- Role
- Score: match का average (1-5)
- Status: `Evaluated`
- PDF: नहीं (या हाँ यदि auto-pipeline ने PDF generate किया)
- Report: report file का relative link (जैसे: `[001](reports/001-company-2026-01-01.md)`)

**Tracker format:**

```markdown
| # | Date | Company | Role | Score | Status | PDF | Report |
```
