# モード: kyujin -- 完全評価 A-G

候補者が求人（テキストまたは URL）を貼り付けたら、必ず 7 ブロック（A-F の評価 + G の legitimacy）を出力する：

## Liveness gate (URL inputs)

候補者が **URL**（JD テキストではなく）を貼り付けた場合、評価を始める前に求人がまだ live であることを確認する。Dead link は Block A に進めない。404 / expired page に対して A-G 評価、report、PDF を作るのは無駄。

1. ページ内容を取得する。`auto-pipeline` から来た場合（Step 0.5 がすでに navigate し、link を確認済み）、その snapshot を再利用する。直接 URL が渡された場合は Playwright（`browser_navigate` + `browser_snapshot`）で navigate し、title、URL、visible content を読む。
2. 投稿を分類する：
   - **active posting evidence:** title/role + 実際の job description または application/apply path
   - **closed posting evidence:** expired/closed/"no longer accepting applications"、JD がなく nav/footer だけ、generic careers/search page への hard redirect、404/410
3. 投稿が closed に見える場合は、**Block A の前で stop**：候補者に link が dead であると伝える。entry が `data/pipeline.md` 由来なら、`- [x] ~~Company | Role~~ -- 求人非アクティブ` として mark する。評価、report、CV は生成しない。
4. 候補者が JD テキストだけを貼った場合（URL なし）、liveness は確認できない。その limitation を note して進む。確認する link がないため。

この gate が解決するまで Block A に進まない。ここで取得した snapshot は Block G の freshness signals に再利用する。

## Step 0 -- Archetype Detection

求人を 6 つの archetype のいずれかに分類する（`_shared.md` 参照）。Hybrid の場合は最も近い 2 つを示す。これにより以下が決まる：
- Block B でどの proof points を優先するか
- Block E で summary をどう書き換えるか
- Block F でどの STAR stories を準備するか

## Step 0.5 -- リーガル・ハードゲート（pass/fail -- 平均化して埋もれさせない）

Score をつける前に、求人を候補者の `config/profile.yml` → `legal` block と照合する。これは重み付けする factor ではなく構造的な filter。Gate に落ちた場合は Red flags dimension と最終的な推奨の両方に **明示的に** 出す。良さそうなスコアの中に埋もれさせてはならない。

1. **弁護士資格 / 登録要件** -- 求人の office/管轄地域と `legal.bar_admissions` を照合する。厳しさは雇用主タイプで変わる：
   - **法律事務所：厳格。** 日本の弁護士資格（弁護士登録）が前提条件になることが多い。渉外・クロスボーダー案件を扱う事務所では、ニューヨーク州弁護士資格など海外資格が歓迎要件になることがある -- 必須か歓迎かを JD で確認し、不明な場合はそう述べる。
   - **インハウス：やや柔軟。** 日本弁護士登録があれば足りることが多い。海外資格の要求は加点要素として note するに留め、block しない。
   - **官公庁・リーガルテック：最も柔軟。** 弁護士資格そのものを必須としない求人も多く、mismatch は footnote 程度。
2. **登録年次 / 期（Class year / PQE 相当）** -- 求人が「登録◯年目」「◯期台」のような band を明示している場合、`legal.class_year` と比較する。法律事務所の lateral 求人で band 外なら near-automatic rejection：応募非推奨とし、年次の再認定（offer 時に ±1 年程度、margin での調整）にしか触れない。
3. **弁理士資格** -- 特許出願実務（prosecution）を扱う求人は弁理士資格 + 理系学位を要求することが多い。JD がこれを求めていて `legal.patent_bar` が false なら hard blocker。
4. **利益相反リスク** -- シニア・カウンセル・パートナー級の求人では、どんな offer も利益相反チェックが前提になることを note する。Score はしない。

Gate の結果は Block B の冒頭に短い pass/fail table として出す。落ちた gate は、他がどれだけマッチしていても推奨を頭打ちにする。

## Block A -- Role Summary

Table with:
- Archetype detected
- Domain（トランザクション / 訴訟 / インハウス / コンプライアンス / 官公庁 / リーガルテック）
- Function（助言 / 交渉 / 訴訟対応 / マネジメント / 構築）
- Seniority（登録年次・期の band、またはインハウスの title level）
- Remote (full/hybrid/onsite)
- Team size (if mentioned)
- TL;DR in 1 sentence

## Block B -- Match with CV

`cv.md` を読む。JD の各 requirement を CV の exact lines に mapping した table を作る。

**Adapted to the archetype:**
- 法律事務所アソシエイト（トランザクション）→ 登録年次に見合ったディールシート（deal sheet）の matters -- 案件種別、案件規模、ドラフティングの主担当範囲、専門ワークストリームのマネジメント -- を優先
- 法律事務所アソシエイト（訴訟・紛争）→ 法廷での実務経験 -- 尋問経験、準備書面の起案・弁論、trial/arbitration での役割、文章力 -- を優先
- インハウスローヤー（プロダクト・コマーシャル・プライバシー）→ 契約処理件数（SaaS/MSA/DPA 件数）、部門横断でのカウンセリング、規制対応の幅、非弁護士向けの平易な説明力を優先
- コンプライアンス・規制対応 → 対応した具体的な regime（AML/CFT、金融商品取引法、独占禁止法、個人情報保護法等）、規制当局対応経験、社内調査、プログラム構築を優先
- 官公庁・パブリックインタレスト → 法廷での経験量、trial/appellate 経験、公益への commitment（クリニック、フェローシップ、過去の PI 経験）を優先
- リーガルテック / リーガルエンジニア → エリート事務所歴 **かつ** 本物のプロダクト/AI fluency（作成したプレイブック、自動化したワークフロー、リーガルテック関連の side project）を優先

**Gaps** section with mitigation strategy for each. 各 gap について：
1. Hard blocker か nice-to-have か
2. 候補者は adjacent experience を示せるか
3. Portfolio project がこの gap を cover しているか
4. Concrete mitigation plan（cover letter 用 phrase、quick project など）

## Block C -- Level and Strategy

1. **Level detected** in the JD vs **candidate's natural level for that archetype** -- 事務所求人は登録年次 / 期のマッチング（厳格。Step 0.5 のハードゲート参照）、インハウスは title ladder（法務担当 → 法務マネージャー → 法務部長 → 最高法務責任者(GC) 相当）が基準。インハウスでは **title が報酬の lever** になる
2. **"Sell senior without lying" plan**: archetype に適応した specific phrases、highlight すべき具体的な matters/deals、事務所での研修・出向経験・規制当局対応経験を advantage として position する方法
3. **"If they downlevel me" plan**: 事務所求人 -- 登録年次の再認定は offer 時に ±1 年程度が交渉の目安（場合によっては 1 年下げることでパートナー登用までの猶予を得られることもある）。インハウス -- 金額交渉の前に、まず level/title（Senior Counsel vs Counsel、AGC vs Senior Counsel 相当）を勝ち取る。Bonus target % や equity band は title に連動することが多い

## Block D -- Comp and Demand

WebSearch を使って調べる（`_shared.md` の日本のリーガル市場向け comp research sources を使う。一般的な tech salary site は使わない）：
- 雇用主タイプ別の comp 情報源:
  - **法律事務所:** 四大法律事務所（西村あさひ、森・濱田松本、長島・大野・常松、TMI 総合法律事務所など）の初任給水準（目安：年収 1,200 万円以上）+ 旬刊商事法務、Chambers Associate、Legal 500 Japan Guide などの業界情報。中堅・地方事務所は四大の 6〜8 割程度が目安（統一サーベイは存在しないため個別に裏取りする）
  - **インハウス:** JILA（日本組織内弁護士協会）の会員実態調査 + 弁護士ドットコムキャリア、MS-Japan（管理部門特化）、BEET-AGENT 等の法務特化エージェントへのヒアリング
  - **官公庁:** 検察官の俸給等に関する法律 / 国家公務員の俸給等に関する法律に基づく俸給表
  - **リーガルオペレーション:** 国内の公開ベンチマークは少ない。Brightflag、CLOC 等の海外レポートを参考程度に
- Company の compensation reputation
- その role の demand trend

**求人票に給与非公開はよくあること。** 法律事務所の求人は金額を明示しないことが多い（「応相談」「経験に応じて決定」が標準）。これ自体は red flag ではない -- 四大法律事務所はクラス（登録年次）ごとの水準がほぼ公開情報として知られているため、あえて書かないことも多い。

Data と cited sources 付きの table を作る。Data がない場合は、捏造せずその旨を書く。

**日本市場 -- 必須チェック：**
- 正社員か業務委託か。正社員なら賞与、有給、社会保険、通勤・住宅手当、退職金を比較に含める
- 業務委託なら月額と正社員換算を計算する
- 賞与の記載はあるか。月給何ヶ月分か（事務所は lockstep か discretionary かも確認する -- `_shared.md` 参照）
- 弁護士会費は会社負担か自己負担か
- ストックオプションはあるか。vesting、cliff、税制を評価する
- 年俸制か。賞与が含まれるか別か
- みなし残業はあるか。何時間分含まれ、超過分は支払われるか
- 住宅・通勤手当はあるか。月額はいくらか
- 健康保険・厚生年金は標準か手厚いか

## Block E -- Customization Plan

| # | Section | Current status | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 changes to CV + Top 5 changes to LinkedIn to maximize match.

## Block F -- Interview Plan

JD requirements に mapping した 6-10 STAR+R stories（STAR + **Reflection**）：

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|

**Reflection** column は、何を学んだか、または次に何を変えるかを捉える。これは seniority の signal。Junior candidates は起きたことを説明する。Senior candidates は lessons を抽出する。

**Story Bank:** `interview-prep/story-bank.md` が存在する場合、これらの stories がすでにあるか確認する。なければ新しいものを append する。時間とともに、どの interview question にも適応できる 5-10 master stories の reusable bank を作る。

**Selected and framed according to the archetype:**
- 法律事務所アソシエイト（トランザクション）→ 案件の遂行、ドラフティングの主担当範囲、専門ワークストリームのマネジメントを強調
- 法律事務所アソシエイト（訴訟・紛争）→ 事件の戦略、勝ち取った motion、尋問経験、プレッシャー下での文章力を強調
- インハウスローヤー（プロダクト・コマーシャル・プライバシー）→ ビジネスを安全に前に進める力（"getting to yes safely"）、処理件数のマネジメント、部門横断のカウンセリングを強調
- コンプライアンス・規制対応 → プログラム構築、規制当局とのやり取り、対応した社内調査を強調
- 官公庁・パブリックインタレスト → 法廷での経験量、リソース制約下での判断力、mission への commitment を強調
- リーガルテック / リーガルエンジニア → 実務知見をプロダクト/ワークフローの意思決定に翻訳した経験、adoption metrics を強調

Also include:
- 1 recommended representative matter（ディールシート・案件一覧のどの matter をどう present するか、守秘義務の範囲内で）
- Red-flag questions and how to answer them（例："なぜ今の事務所を辞めるのか", "なぜパートナーになれなかったのか", "稼働時間（billable hours）の実績は", "なぜインハウスへ / なぜ事務所に戻るのか"）

## Block G -- Posting Legitimacy

Job posting を分析し、real, active opening かどうかを示す signals を出す。これは、ユーザーが hiring process につながりやすい機会に effort を優先配分するためのもの。

**Ethical framing:** Observations を提示し、accusations にしない。どの signal にも legitimate explanations があり得る。判断はユーザーが行う。

### Signals to analyze (in order):

**1. Posting Freshness**（liveness gate または `auto-pipeline` Step 0 で取得した Playwright snapshot から。JD テキストだけの場合は unavailable）:
- Date posted または "X days ago" を page から抽出
- Apply button state（active / closed / missing / redirects to generic page）
- URL が generic careers page に redirect された場合は note する

**2. Description Quality**（JD text から）:
- Specific な practice area、matter type、裁判所/規制当局、deal work を named しているか
- Team size、reporting line（GC / practice group leader が誰か）、org context に触れているか
- Requirements は realistic か（登録年次 band と記載された責任範囲が釣り合っているか）
- 最初の 6-12 months の scope が clear か
- Salary/compensation に触れているか（給与非公開は法律事務所では標準。Red flag ではない）
- JD のうち role-specific vs generic boilerplate の比率
- Internal contradictions があるか（若手の登録年次 band + シニアカウンセル級の責任範囲、"アソシエイト" 職位 + パートナー級の BD 期待など）

**2b. Legal-Market Posting Signals**（追加の query なしで JD text + 既存の research から）:
- **"非公開クライアント" 求人:** 成功報酬型のエージェントが、具体的な mandate なしに resume を集めるため confidential ads を出すことがある。雇用主名なし + 登録年次 band なし + 抽象的な practice area 記載の組み合わせは Concerning として扱う。逆に、named recruiter による具体的な mandate は positive signal
- **複数エージェントからの同一求人:** 同じ求人が 3 社以上のエージェント経由で出ている場合、事務所がコンティンジェンシー市場に広く声をかけている可能性がある。求人自体は本物でも、選考プロセスが錯綜しやすく、紹介元の重複（`_shared.md` の NEVER 参照）に注意が必要。`data/scan-history.tsv` と tracker の `via=` 欄を照合する
- **候補者に費用を要求する紹介:** 正規の人材紹介会社は職業安定法の下、雇用主から報酬を得るのが原則で、候補者に紹介料・登録料・"マーケティング料" を請求することはない。候補者に費用を求める求人・連絡は Suspicious とマークする

**3. Company Hiring Signals**（2-3 WebSearch queries。Block D research と combine）:
- Search: `"{company}" layoffs {year}` -- date、scale、departments を note
- Search: `"{company}" hiring freeze {year}` -- announcements を note
- Layoffs が見つかった場合、この role と同じ department か確認

**4. Reposting Detection**（scan-history.tsv から）:
- company + similar role title が別 URL で過去に出ているか確認
- 回数と期間を note

**5. Role Market Context**（qualitative、additional queries なし）:
- この role は通常 4-6 weeks で埋まる common role か
- Role が company business に合っているか
- Seniority level が長く open になりやすい type か

### Output format:

**Assessment:** One of three tiers:
- **High Confidence** -- Multiple signals suggest a real, active opening
- **Proceed with Caution** -- Mixed signals worth noting
- **Suspicious** -- Multiple ghost job indicators, investigate before investing time

**Signals table:** 観測した各 signal、finding、weight（Positive / Neutral / Concerning）を table にする。

**Context Notes:** Niche role、government job、evergreen position など、concerning signals を説明し得る caveats を書く。

### Edge case handling:
- **Government/academic postings:** Timeline が長いのが標準。Threshold を調整（60-90 days は normal）。
- **Evergreen/continuous hire postings:** JD が "ongoing" / "rolling" と明示する場合は context として note。これは ghost job ではなく pipeline role。
- **Niche/executive roles:** Staff+、VP、Director、highly specialized roles は months open でも legitimate。Age thresholds を調整。
- **Startup / pre-revenue:** Early-stage companies は role が genuinely undefined で JD が vague なことがある。Description vagueness の重みを下げる。
- **No date available:** Posting age が判断できず、他に concerning signals がない場合、limited data の note 付きで default to "Proceed with Caution"。Evidence なしで "Suspicious" にしない。
- **Recruiter-sourced (no public posting):** Freshness signals unavailable。Active recruiter contact 自体を positive legitimacy signal として note。

---

## Cover Letter Draft (auto-generated after Block G)

Report を保存し tracker に記録した後、report file に `## Cover Letter Draft` として cover letter draft を append する。これは starting point であり final letter ではない。ユーザーは `/career-ops cover {slug}` で完成させる。

**How to generate the draft:**

1. `cv.md` を読む。JD の top requirements に最も relevant な achievement bullets を 4 つ選ぶ（exact wording、real metrics only）
2. `config/profile.yml` を読む。candidate name、current role、years of experience を抽出する
3. Role title と JD mission language に基づく 2-sentence opening を書く
4. `cv.md` summary から 1-paragraph profile intro を書き、JD domain に合わせる
5. "Problems / Why this company / Approach" section は placeholder にする。ここは user input が必要
6. Gaps（domain mismatch、language requirement、start date urgency）を detect and flag し、ユーザーがすぐ確認できるようにする

**Draft format to append to the report:**

```markdown
## Cover Letter Draft

> Draft generated at evaluation time. Complete via `/career-ops cover {slug}` to fill in angles, confirm research, and generate the PDF.
> Gaps flagged below -- address them during the cover flow.

---

**Opening** *(placeholder -- refine with your "why this role" angle)*
{2-sentence opening based on JD role title and mission language}

**Profile introduction**
{1 paragraph from cv.md summary, adapted to JD domain and required competencies}

**Key achievements** *(selected from cv.md -- exact wording preserved)*
- **{lead from cv.md},** {impact sentence with metric}.
- **{lead from cv.md},** {impact sentence with metric}.
- **{lead from cv.md},** {impact sentence with metric}.
- **{lead from cv.md},** {impact sentence with metric}.

**Problems I will solve** *(placeholder -- requires company research + your input)*
> To be completed: what challenges does {company} face that you'd address? How would you approach them?

**Closing**
I am happy to discuss further at your convenience.

---

**Gaps flagged:**
{List any detected gaps -- domain mismatch, language requirement, start date urgency, title mismatch. If none, write "None detected."}

**JD keywords to mirror** *(extracted for ATS + human read)*
{8-10 exact phrases from the JD}

---
*Run `/career-ops cover {slug}` to complete angles, confirm company research, and generate the PDF.*
```

`_shared.md` の Professional Writing section にある language rules を draft content にすべて適用する。No em dashes、no buzzwords、active voice、concrete claims only。

---

## Post-evaluation

**ALWAYS** after generating blocks A-G:

### 1. Save report .md

Full evaluation を `reports/{###}-{company-slug}-{YYYY-MM-DD}.md` に保存する。

- `{###}` = next sequential number（3 digits, zero-padded）。競合を防ぐため、必ず `node reserve-report-num.mjs` を実行して番号を claim し（stdout returns `{###}`）、report を write してから `node reserve-report-num.mjs --release {###}` を実行して sentinel を release する。
- `{company-slug}` = company name in lowercase, without spaces（use hyphens）
- `{YYYY-MM-DD}` = current date

**Report format:**

```markdown
# Evaluation: {Company} -- {Role}

**Date:** {YYYY-MM-DD}
**URL:**
**Via:** {エージェント/人材紹介会社名。直接応募は --}
**Archetype:** {detected}
**Score:** {X/5}
**Legitimacy:** {High Confidence | Proceed with Caution | Suspicious}
**PDF:** {path or pending}

---

## A) Role Summary
(full content of block A)

## B) Match with CV
(full content of block B)

## C) Level and Strategy
(full content of block C)

## D) Comp and Demand
(full content of block D)

## E) Customization Plan
(full content of block E)

## F) Interview Plan
(full content of block F)

## G) Posting Legitimacy
(full content of block G)

## H) Draft Application Answers
(only if score >= 4.5 -- draft answers for the application form)

---

## Keywords extracted
(list of 15-20 keywords from the JD for ATS optimization)
```

### 2. Record in tracker

**ALWAYS** record in `data/applications.md`:
- Next sequential number
- Current date
- Company
- Role
- Score: match average (1-5)
- Status: `Evaluated`
- PDF: ❌（または auto-pipeline が PDF を生成した場合は ✅）
- Report: root-relative link `[001](reports/001-company-2026-01-01.md)`（`merge-tracker.mjs` 経由で merge されると tracker file からの相対 link に normalize される。例：`../reports/...`。#760 参照）

**Tracker format:**

```markdown
| # | Date | Company | Role | Score | Status | PDF | Report | Notes |
```

任意の Via 列（intermediary channel、#1596）を Company の後に置く layout も可：

```markdown
| # | Date | Company | Via | Role | Score | Status | PDF | Report | Notes |
```

- `Via` = 人材紹介会社（エージェント）名。直接応募は `—`。
- 求人企業が非公開の場合は Company に構造マーカー `?` を書く（「非公開」「機密」などの単語は書かない — locale 依存の文字列は dedup/verify の特別処理をすり抜ける）。識別用の説明（業界・勤務地など）は Notes に記載。
