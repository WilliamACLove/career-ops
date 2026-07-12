# साझा संदर्भ -- career-ops (हिन्दी)

<!-- ============================================================
     इस फ़ाइल को कस्टमाइज़ करें
     ============================================================
     इस फ़ाइल में career-ops के सभी हिन्दी मोड्स के लिए
     साझा संदर्भ है। career-ops उपयोग करने से पहले आपको:
     1. config/profile.yml में अपनी व्यक्तिगत जानकारी भरें
     2. प्रोजेक्ट की रूट में cv.md बनाएं (Markdown में CV)
     3. (वैकल्पिक) article-digest.md में अपने proof points बनाएं
     4. नीचे [कस्टमाइज़ करें] चिह्नित अनुभाग अनुकूलित करें
     ============================================================ -->

## सत्य के स्रोत (हर मूल्यांकन से पहले अवश्य पढ़ें)

| फ़ाइल | पथ | कब |
|-------|----|----|
| cv.md | `cv.md` (प्रोजेक्ट की रूट) | हमेशा |
| article-digest.md | `article-digest.md` (यदि मौजूद हो) | हमेशा (विस्तृत proof points के लिए) |
| profile.yml | `config/profile.yml` | हमेशा (पहचान और लक्षित भूमिकाओं के लिए) |

**नियम: proof points की metrics को कभी hardcode न करें।** इन्हें मूल्यांकन के समय `cv.md` और `article-digest.md` से पढ़ें।
**नियम: article/project metrics के लिए, `article-digest.md` को `cv.md` से प्राथमिकता दें** (`cv.md` में पुराने आंकड़े हो सकते हैं)।

---

## North Star -- लक्षित legal भूमिकाएं

यह skill सभी लक्षित legal भूमिकाओं को समान महत्व के साथ संभालता है। कोई भी प्राथमिक या द्वितीयक नहीं है — यदि compensation और growth की संभावनाएं सही हों, तो हर भूमिका सफलता है:

| Archetype | थीमेटिक क्षेत्र | Firm/Company क्या खरीदती है |
|-----------|----------------|----------------------|
| **लॉ फर्म एसोसिएट -- ट्रांजैक्शनल** | M&A, Capital Markets, Private Equity/VC, Funds, Banking & Finance | कोई ऐसा वकील जो deal को due diligence से closing तक drive करे |
| **लॉ फर्म एसोसिएट -- लिटिगेशन & डिस्प्यूट्स** | Court appearances, Arbitration (domestic + SIAC/ICC), Pleadings drafting, Trial strategy | कोई ऐसा वकील जो case को strategize करे और court/tribunal में represent करे |
| **इन-हाउस काउंसल -- प्रोडक्ट / कमर्शियल / प्राइवेसी** | SaaS/vendor agreements, MSAs, DPAs, DPDP Act compliance, Cross-functional counseling | कोई ऐसा वकील जो business को safely "yes" तक पहुंचाए |
| **कंप्लायंस & रेगुलेटरी** | SEBI/RBI/IRDAI compliance, FEMA, PMLA/AML-KYC, Companies Act, Investigations | कोई ऐसा वकील जो regulatory risk manage करे और program चलाए |
| **गवर्नमेंट / पब्लिक इंटरेस्ट अटॉर्नी** | PSU Legal Officer, Government Pleader/Standing Counsel, Public Prosecutor, Legal Aid (NALSA) | कोई ऐसा वकील जो public mandate के तहत काम करे |
| **लीगल टेक / लीगल इंजीनियर** | Contract automation, Legal ops, Practice innovation, Legal AI tools | कोई ऐसा वकील जो practice expertise को product/workflow decisions में translate करे |

<!-- [कस्टमाइज़ करें] ऊपर के archetypes को अपनी लक्षित भूमिकाओं के अनुसार अनुकूलित करें।
     उदाहरण के लिए, यदि आप केवल IP/Patent prosecution roles target कर रहे हैं, एक अलग
     archetype row जोड़ें और `config/profile.yml` -> `legal.patent_agent` सेट करें। -->

### JD Signal Keywords (archetype detect करने के लिए)

| Archetype | JD में मिलने वाले keywords |
|-----------|------------------------------|
| ट्रांजैक्शनल | "associate", "class of 20XX" / "X-Y PQE", "M&A", "capital markets", "private equity", "funds", "banking & finance", "deal team", "due diligence", "ट्रांजैक्शनल प्रैक्टिस" |
| लिटिगेशन & डिस्प्यूट्स | "litigation associate", "trial", "arbitration", "drafting pleadings", "court appearances", "matters", "cause list", "briefing", "chamber junior" |
| इन-हाउस (Product/Commercial/Privacy) | "product counsel", "commercial counsel", "privacy counsel", "SaaS agreements", "MSAs", "DPAs", "DPDP Act", "negotiate", "cross-functional" |
| कंप्लायंस & रेगुलेटरी | "compliance officer", "regulatory", "SEBI", "RBI", "IRDAI", "FEMA", "PMLA", "AML/KYC", "investigations", "licensing", "Company Secretary" (adjacent qualification -- नीचे note देखें) |
| गवर्नमेंट / पब्लिक इंटरेस्ट | "PSU legal officer", "CLAT-PG", "UGC-NET", "government pleader", "standing counsel", "public prosecutor", "legal aid", "staff attorney", "NALSA" |
| लीगल टेक / लीगल इंजीनियर | "legal engineer", "legal ops", "contract automation", "legal solutions", "practice innovation", "legal AI", "knowledge management" |

**Note (Company Secretary):** कुछ compliance/company-secretarial postings specifically ICSI-qualified Company Secretary माँगते हैं (listed companies में statutory compliance officer roles अक्सर CS-only होते हैं) — यह Advocate qualification से अलग, adjacent profession है। यदि candidate सिर्फ़ law-qualified है (CS नहीं), इसे gap के तौर पर flag करें, hard gate नहीं।

After detecting archetype, `modes/_profile.md` पढ़ें candidate की specific framing और उस archetype के proof points के लिए।

### Archetype के अनुसार अनुकूली framing

> **ठोस metrics/matters: इन्हें मूल्यांकन के समय `cv.md` और `article-digest.md` से पढ़ें। यहाँ कभी hardcode न करें।**

| यदि भूमिका है... | candidate में highlight करें... | Proof points के स्रोत |
|-----------------|--------------------------------|----------------------|
| ट्रांजैक्शनल | Deal-sheet matters सही PQE band पर, deal types/sizes, drafting ownership | article-digest.md + cv.md |
| लिटिगेशन & डिस्प्यूट्स | Court/tribunal appearances, briefs argued, arbitration roles, writing strength | article-digest.md + cv.md |
| इन-हाउस | Contract volume (SaaS/MSA/DPA counts), cross-functional counseling, regulatory breadth | cv.md + article-digest.md |
| कंप्लायंस & रेगुलेटरी | Named regimes (SEBI/RBI/PMLA/FEMA), regulator-facing experience, investigations handled | article-digest.md + cv.md |
| गवर्नमेंट / पब्लिक इंटरेस्ट | Court/tribunal volume, resource-constrained judgment, demonstrated public-service commitment | cv.md + article-digest.md |
| लीगल टेक / लीगल इंजीनियर | Practice pedigree + genuine legal-tech/AI fluency — playbooks built, workflows automated | cv.md + article-digest.md |

<!-- [कस्टमाइज़ करें] ऊपर के archetypes को अपने concrete matters/projects से map करें -->

### Transition narrative (सभी framings में उपयोग करें)

<!-- [कस्टमाइज़ करें] अपना narrative यहाँ डालें। उदाहरण:
     - "Tier-1 firm में 8 साल transactional practice के बाद, अब in-house GC track पर पूरा focus।"
     - "Litigation chamber में 6 साल के बाद, अब regulatory/compliance में specialize कर रहा/रही हूँ।"
     config/profile.yml -> narrative.exit_story से पढ़ें -->

सभी content को frame करने के लिए `config/profile.yml` से transition narrative उपयोग करें:
- **PDF summaries में:** past और future के बीच bridge बनाएं — "अब उन्हीं [practice skills] को [offer के domain] में apply कर रहे हैं।"
- **STAR stories में:** `article-digest.md` के proof points का संदर्भ लें।
- **Cover letter draft में:** पहले paragraph में transition narrative डालें।
- **जब JD "ownership", "autonomy", "build the function", "end-to-end" mention करे:** यह differentiator #1 है। Match weight बढ़ाएं।

### Cross-cutting advantage

Profile को **"Demonstrable ownership वाला वकील"** के रूप में frame करें, archetype के अनुसार framing adapt करें:
- ट्रांजैक्शनल के लिए: "वकील जो deal को Day 1 से closing तक execute करता है"
- लिटिगेशन के लिए: "वकील जो case strategy को courtroom/tribunal तक ले जाता है"
- इन-हाउस के लिए: "वकील जो business को safely 'yes' तक पहुंचाता है, volume के साथ"
- कंप्लायंस के लिए: "वकील जो regulatory program खुद बनाता और चलाता है"
- गवर्नमेंट/PI के लिए: "वकील जो resource-constrained माहौल में trial volume संभालता है"
- लीगल टेक के लिए: "वकील जो practice expertise को product/workflow decisions में translate करता है"

"Ownership" को professional signal के रूप में position करें — केवल "generalist" के रूप में नहीं। Real matters/proof points इसे credible बनाते हैं।

### Deal Sheet / Matters List as Proof Point (high-stakes applications में उपयोग करें)

<!-- [कस्टमाइज़ करें] यदि आपके पास एक deal sheet या matters list है, यहाँ configure करें।
     confidentiality norms याद रखें — सिर्फ़ public matters नाम से (deal announced / case filed),
     बाकी generically describe करें (जैसे "एक Fortune 100 pharmaceutical client")।
     config/profile.yml -> narrative.proof_points से पढ़ें -->

यदि candidate के पास एक deal sheet / matters list है (profile.yml जाँचें), तो relevant high-stakes applications में share करने का सुझाव दें।

### Compensation Intelligence (मुआवज़ा बुद्धिमत्ता)

<!-- [कस्टमाइज़ करें] अपनी लक्षित भूमिकाओं के लिए ranges research करें -->

**Legal-market comp sources (generic salary sites की जगह ये प्राथमिकता से उपयोग करें):**
- **Tier-1 और बड़े full-service firms** (उदाहरण के तौर पर Cyril Amarchand Mangaldas, AZB & Partners, Khaitan & Co, Shardul Amarchand Mangaldas — category के रूप में, exact नाम प्रासंगिकता के अनुसार) — PQE band के साथ base reasonably standardized रहती है, पर officially published नहीं होती। *Legally India* का periodic law firm salary survey और *Vahura* की legal-market compensation reports सबसे करीबी directional signal हैं — exact figure नहीं, benchmark के तौर पर लें।
- **Mid-size / regional / boutique firms** — ज़्यादातर opaque, discretionary bonus, अक्सर legal recruiters से ही पता चलता है।
- **In-house counsel** — Vahura और legal-focused staffing/search firms की compensation trend reports; general corporate benchmarking के लिए AmbitionBox/Glassdoor भी in-house legal roles के लिए काम आते हैं (career-agnostic sources, यहाँ भी valid)।
- **Government / PSU roles** — pay scales publicly published होते हैं (7th Central Pay Commission matrix, या PSU-specific recruitment notification में stated scale) — यह सबसे reliable data है, पर firm/in-house market से नीचे।
- **Legal ops** — CLOC (Corporate Legal Operations Consortium) एक global membership resource है जिसे India के legal-ops professionals भी reference करते हैं।

**सामान्य सुझाव:**
- Title/PQE band के आधार पर frame करें, skills के नहीं — PQE band ही salary bands define करता है
- CTC (Cost to Company) और In-hand (Net) salary में हमेशा फ़र्क करें — India में CTC में PF, Gratuity, Medical, और अन्य benefits शामिल होते हैं
- जहाँ लागू हो, billable-hours threshold पूछें — bonus अक्सर इसी से linked होता है

---

## Legal Hard Gates (पास/फेल -- कभी silently average नहीं होते)

Check करने से पहले किसी भी dimension को weight करें, `config/profile.yml` के `legal:` block को पढ़ें (`pqe`, `bar_enrolment`, `patent_agent`, `practice_areas`, `recruiter_channel`)। एक failed gate हमेशा Red flags dimension में AND report की final recommendation में explicitly दिखना चाहिए — एक strong CV match कभी एक failed gate को silently compensate या bury नहीं करता।

1. **Bar Enrolment + AIBE (Bar Council)** — भारत में bar admission US जैसा state-locked नहीं है: Advocates Act, 1961 के तहत किसी भी State Bar Council में enrolment के बाद (और enrolment के 2 साल के भीतर All India Bar Examination -- AIBE clear करने के बाद) advocate पूरे भारत की courts में practice कर सकता है।
   - **Litigation roles (chambers, litigation associate): strict।** Active enrolment + AIBE clearance ज़रूरी है, कोई exception नहीं।
   - **Supreme Court-specific roles:** अलग से Advocate-on-Record (AOR) qualification माँग सकते हैं (एक Senior AOR के under करीब 1-year training + अलग exam) — यदि JD explicitly Supreme Court practice माँगे, यह एक अतिरिक्त check है।
   - **Transactional/corporate law firm roles: moderate-to-strict।** ज़्यादातर Tier-1 firms भी enrolment माँगते हैं, भले ही day-to-day काम advisory/drafting हो, court appearance नहीं।
   - **In-house counsel: moderate।** Enrolment अक्सर preferred है पर हमेशा mandatory नहीं — कई companies non-enrolled "legal manager" track भी रखती हैं।
   - **Legal tech / PSU / compliance: minimal।** Law degree अक्सर काफ़ी है, enrolment ज़रूरी नहीं।
   - **Foreign-qualified lawyers:** भारत में Indian law practice या court appearance नहीं कर सकते (Bar Council of India rules) — सिर्फ़ non-Indian law/international arbitration advisory के लिए एक limited registered-foreign-lawyer route है। यदि candidate सिर्फ़ foreign-qualified है और JD litigation/Indian-law-facing है, यह एक hard blocker है।
2. **PQE Band (Post-Qualification Experience)** — भारत में "class year" की जगह PQE बताई जाती है ("5-7 PQE", "8+ PQE -- Senior Associate")। यदि candidate का PQE किसी firm lateral posting के stated band से बाहर है, near-automatic rejection मानें — apply करने के खिलाफ recommend करें (PQE थोड़ा negotiate हो सकता है offer पर, screen पर नहीं)।
3. **Patent Agent Qualification** — Patent prosecution roles (drafting + Indian Patent Office के सामने prosecution) के लिए Indian Patent Office (CGPDTM) की Patent Agent Examination + एक science/engineering/technology degree चाहिए — यह Bar exam से अलग, separate qualification है। Trademark/copyright/IP litigation को यह नहीं चाहिए। यदि JD patent prosecution माँगे और candidate patent-agent-qualified नहीं है, hard gate।
4. **Conflicts (senior/partner-level roles)** — हर senior/partner-level lateral offer client conflicts clear होने पर contingent होता है। Report में risk note करें, score मत करें।

---

### भारतीय बाज़ार -- विशेष बातें (महत्वपूर्ण)

भारतीय job offers और negotiations में कुछ terms ऐसे होते हैं जो EN/ES markets में नहीं मिलते। इन्हें सही तरीके से समझना आवश्यक है:

| Term | अर्थ | मूल्यांकन पर प्रभाव |
|------|------|---------------------|
| **CTC** (Cost to Company) | नियोक्ता द्वारा उठाई जाने वाली कुल लागत। In-hand से 20-40% ज़्यादा हो सकता है | हमेशा CTC और In-hand दोनों माँगें। सिर्फ CTC से तुलना न करें |
| **In-hand / Net Salary** | वास्तविक take-home वेतन (taxes और deductions के बाद) | यही असली संख्या है। PF, professional tax, income tax काटने के बाद |
| **PF / EPF** (Provident Fund) | Employee 12% + Employer 12% basic salary का। EPFO में जाता है | Employer contribution CTC में शामिल, लेकिन locked। 5 साल में Gratuity eligible |
| **Gratuity** | Payment of Gratuity Act, 1972। 5+ साल बाद exit पर देय | Long-term commitment का bonus। CTC में शामिल लेकिन 5 साल बाद ही मिलता है |
| **Notice Period** | Firms/companies में आमतौर पर 30-90 दिन; litigation chambers में अक्सर informal/shorter, कभी-कभी unwritten | Buyout option confirm करें (आमतौर पर 1-3 महीने का वेतन)। Chamber roles में written terms माँगें |
| **Probation** | आमतौर पर 3-6 महीने। इस दौरान employment terms differ हो सकती हैं | Flag करें यदि 6 महीने से ज़्यादा। Confirmation date = increment/bonus-eligibility date? |
| **Variable Pay / Performance Bonus** | Fixed CTC का 10-30%। Firms में अक्सर discretionary annual/Diwali bonus, in-house में KPI-linked | "CTC ₹X lakhs में ₹Y fixed और ₹Z variable है" — variable हमेशा verify करें, पिछले 2 साल का actual payout पूछें |
| **Billable Hours Target** | Firms में अक्सर 1,800-2,200 hours/year का unstated या stated target | Bonus eligibility अक्सर इसी threshold से linked होती है — JD/offer में explicitly पूछें |
| **PQE Band** (Post-Qualification Experience) | "class year" की जगह भारत में PQE years से seniority band बताई जाती है ("5-7 PQE") | Candidate का PQE stated band से बाहर हो तो near-auto reject मानें — देखें Legal Hard Gates |
| **Bar Enrolment + AIBE** | State Bar Council enrolment (Advocates Act, 1961) + 2 साल के भीतर AIBE clearance | Litigation roles में strict requirement — देखें Legal Hard Gates |
| **ESOPs / RSUs** | Employee Stock Options — legal-tech/in-house roles में ज़्यादा common, firm associates में rare। Startups में 4-year vesting (1-year cliff) आम | Liquidity पर सवाल करें — unlisted startup ESOPs = illiquid। Listed company RSUs ≠ ESOPs |
| **HRA** (House Rent Allowance) | Basic का 40% (non-metro) / 50% (metro)। Tax-exempt यदि rent paid | Salary structuring में important। Metro vs. non-metro distinction matters |
| **LTA** (Leave Travel Allowance) | Travel के लिए tax-exempt component। साल में 2 बार claim करने योग्य | Small but useful। Block of 4 years में 2 claims |
| **Bond / Service Agreement** | Firm-sponsored LLM/secondment या training cost sponsorship के साथ आ सकता है | **Red flag** यदि senior role में। Bond amount, duration, exit penalty clearly पूछें |
| **Relieving Letter / Experience Letter** | Exit पर formal documents। Background verification के लिए आवश्यक | Verbally confirm करें कि offer acceptance के बाद दिए जाएंगे |
| **Moonlighting / Empanelment Policy** | कुछ firms/companies दूसरी firm के साथ empanelment या dual engagement restrict करती हैं | यदि freelance opinions/teaching करते हैं, तो policy check ज़रूरी |
| **Labour Codes 2020** | 4 new codes जो wage definition, working hours, और benefits restructure कर रहे हैं | Implementations अभी state-wise। CTC structuring affect कर सकते हैं |

### Negotiation Scripts

<!-- [कस्टमाइज़ करें] अपनी स्थिति के अनुसार adapt करें -->

**Expected CTC (सामान्य framework):**
> "मौजूदा market data के आधार पर, मैं ₹[RANGE from profile.yml] की range target कर रहा/रही हूँ। Structure पर flexible हूँ — overall package और growth opportunity ज़्यादा important है।"

**Geographic discount के जवाब में:**
> "जिन roles पर मैं compete कर रहा/रही हूँ वे results-driven हैं, location-driven नहीं। मेरा track record postal code के साथ नहीं बदलता।"

**यदि offer target से कम हो:**
> "मैं currently ₹[higher range] के packages पर discussions में हूँ। [Company] मुझे [reason] के लिए attract करती है। क्या ₹[target] तक पहुँचा जा सकता है?"

**CTC breakdown के लिए:**
> "Packages की fair comparison के लिए, क्या आप Fixed CTC, Variable component, ESOPs (यदि कोई हो), और joining bonus अलग-अलग share कर सकते हैं?"

**Notice period buyout के लिए:**
> "मेरा notice period [X] दिन है। क्या आपके यहाँ buyout का provision है? इससे joining date पर clarity आएगी।"

**PQE band mismatch (downlevel) के लिए:**
> "मेरी PQE [X] साल है, पर compensation और role scope सही हों तो [Y]-PQE band पर भी discuss करने के लिए open हूँ। क्या हम 6-महीने की review पर promotion criteria clearly define कर सकते हैं?"

**Billable hours / bonus threshold पूछने के लिए:**
> "Fair comparison के लिए, क्या आप बता सकते हैं कि bonus-eligible होने के लिए annual billable-hours target क्या है, और पिछले 2 साल में actual bonus payout क्या रहा?"

### Location Policy

<!-- [कस्टमाइज़ करें] अपनी स्थिति के अनुसार adapt करें। config/profile.yml -> location से पढ़ें -->

**Forms में:**
- Binary "क्या आप on-site हो सकते हैं?" questions: profile.yml में वास्तविक availability के अनुसार जवाब दें
- Free-text fields: timezone overlap और availability explicitly बताएं

**Evaluations में (scoring):**
<!-- India-market deviation: "city" instead of "country" — domestic single-country market, city proximity is the relevant threshold -->
- Hybrid के लिए जो आपके city में नहीं है: Score **3.0** (1.0 नहीं)
- Score 1.0 केवल तभी यदि offer explicitly कहे "4-5 दिन mandatory on-site, कोई exception नहीं"
- **Litigation roles पर लागू नहीं** — court/tribunal appearances में physical presence structurally ज़रूरी है, इसलिए litigation associate/chamber roles को "remote" के तौर पर score न करें भले ही JD का बाकी हिस्सा flexible sound करे

### Time-to-offer priority
- Tight application packet (CV + deal sheet/matters list) > perfection
- जल्दी apply करें > और ज़्यादा सीखें
- 80/20 approach, सब कुछ timeboxed

---

## Global Rules

### कभी नहीं

1. Experience या metrics fabricate करना
2. `cv.md` या portfolio files modify करना
3. Candidate की तरफ से applications submit करना
4. Generated messages में phone number share करना
5. Market से नीचे compensation recommend करना
6. Offer पढ़े बिना PDF generate करना
7. Corporate jargon या hollow phrases उपयोग करना
8. Tracker ignore करना (हर evaluated offer record होता है)
9. किसी firm को direct application draft/prepare करना जहाँ कोई legal recruiter पहले ही candidate का profile submit कर चुका हो (या उसके लिए engaged हो) — पहला submitter करीब 6-12 महीनों तक candidacy का owner रहता है (referral-source lock), और double-submission से conflicted candidates अक्सर पूरी तरह discard हो जाते हैं। किसी भी firm application draft करने से पहले हमेशा `config/profile.yml` के `legal.recruiter_channel` और tracker के `via=` fields check करें

### हमेशा

0. **Cover letter:** यदि form allow करे, हमेशा include करें। Same design वाला PDF। Offer की lines, proof points पर mapped। Max 1 page।
1. Offer evaluate करने से पहले `cv.md` और `article-digest.md` (यदि मौजूद हो) पढ़ें
1b. **हर session का पहला evaluation:** `node cv-sync-check.mjs` via Bash run करें। Alerts पर candidate को सूचित करें
2. Role का archetype detect करें और framing adapt करें
3. Matching करते समय CV की exact lines quote करें
4. Compensation और company data के लिए WebSearch उपयोग करें
5. हर evaluation के बाद tracker में record करें
6. Content offer की language में generate करें (Hindi offer के लिए Hindi, English के लिए English)
7. Direct और concrete रहें — बकवास नहीं
8. Natural Hindi legal-professional language use करें। Short sentences, action verbs, passive avoid करें। Terms of art force-translate न करें (PQE, deal sheet, matters list, due diligence)
8b. **PDF में Bar enrolment/AIBE status** ऊपर visible हो; case studies/publications के URLs Professional Summary के पहले paragraph में होने चाहिए। Recruiters अक्सर सिर्फ summary पढ़ते हैं। सभी URLs HTML में `white-space: nowrap` के साथ
9. **Tracker entries TSV में** — applications.md सीधे edit कभी नहीं करें (नई entries के लिए)। TSV `batch/tracker-additions/` में लिखें, `merge-tracker.mjs` merge करेगा
10. **हर report header में `**URL:**`** — Score और PDF के बीच

### Tools

| Tool | उपयोग |
|------|-------|
| WebSearch | Compensation research, trends, company culture, LinkedIn contacts, offer fallback |
| WebFetch | Static pages से offers extract करने के लिए fallback |
| Playwright | Verify if offers are active (browser_navigate + browser_snapshot), SPAs से offers extract करें। **Critical: कभी 2+ agents Playwright के साथ parallel में नहीं — वे same browser instance share करते हैं** |
| Read | cv.md, article-digest.md, cv-template.html |
| Write | PDF के लिए temporary HTML, applications.md, reports .md |
| Edit | Tracker update करें |
| Bash | `node generate-pdf.mjs` |
