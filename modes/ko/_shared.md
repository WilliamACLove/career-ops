# 공통 컨텍스트 -- career-ops (한국어)

<!-- ============================================================
     사용 전 개인 설정 안내
     ============================================================
     이 파일은 한국어 career-ops 모드 전체에서 공유하는 컨텍스트입니다.
     career-ops를 사용하기 전에 반드시 다음을 준비하세요.
     1. config/profile.yml에 개인 정보를 입력
     2. 프로젝트 루트에 cv.md 생성 (Markdown CV)
     3. (선택) article-digest.md에 proof point 정리
     4. 아래 [개인화] 표시가 있는 섹션을 자신의 상황에 맞게 조정
     ============================================================ -->

## Source of Truth (매 평가 전 항상 읽기)

| 파일 | 경로 | 언제 |
|------|------|------|
| cv.md | `cv.md` (프로젝트 루트) | 항상 |
| article-digest.md | `article-digest.md` (있다면) | 항상 (상세 proof point) |
| profile.yml | `config/profile.yml` | 항상 (신원 정보와 목표 역할) |

**규칙: proof point의 metric을 절대 하드코딩하지 않습니다.** 평가 시점에 `cv.md`와 `article-digest.md`에서 읽습니다.
**규칙: article/project metric은 `article-digest.md`가 `cv.md`보다 우선합니다** (`cv.md`에는 더 오래된 수치가 있을 수 있음).

---

## North Star -- 목표 역할

이 skill은 모든 목표 역할을 같은 비중으로 다룹니다. primary/secondary 구분은 없습니다. 보상과 성장 가능성이 맞다면 각 역할은 모두 성공입니다.

| Archetype | JD 신호 키워드 |
|-----------|----------------|
| **로펌 어소시에이트 -- 거래 자문** (Law Firm Associate -- Transactional) | "어소시에이트", "OO년차", "OO기", "M&A", "자본시장", "펀드", "금융", "딜팀", "거래 자문" |
| **로펌 어소시에이트 -- 소송·분쟁** (Law Firm Associate -- Litigation & Disputes) | "소송 어소시에이트", "소송", "중재", "변론", "증거조사", "심문", "송무" |
| **사내변호사 -- 상사/서비스/개인정보** (In-House Counsel -- Product / Commercial / Privacy) | "사내변호사", "상사계약", "이용약관", "개인정보보호", "SaaS 계약", "협상", "cross-functional", "법무팀" |
| **컴플라이언스·규제 대응** (Compliance & Regulatory) | "컴플라이언스", "준법감시인", "규제 대응", "자금세탁방지", "리스크관리", "내부조사", "인허가" |
| **정부·공공 변호사** (Government / Public Interest Attorney) | "검사", "공익법무관", "국선전담", "정부 법무", "법제처", "공정거래위원회", "공익", "임용" |
| **리걸테크·리걸엔지니어** (Legal Tech / Legal Engineer) | "리걸테크", "legal engineer", "리걸 솔루션", "practice innovation", "법률 AI", "계약 자동화" |

<!-- [개인화] 위 archetype을 자신의 목표 역할에 맞게 조정하세요.
     다른 실무 분야로 바꾸는 예시:
     - 지식재산권(IP) 전문 변호사
     - 스타트업/VC 자문 전문 변호사
     - 노동법 전문 변호사
     등 -->

### Archetype별 adaptive framing

> **구체적인 수치는 평가 시점에 `cv.md`와 `article-digest.md`에서 읽습니다. 이 파일에 고정값으로 적어두지 마세요.**

| 역할이... | 후보자에게서 강조할 것 | Proof point source |
|-----------|------------------------|--------------------|
| 로펌 -- 거래 자문 | 딜 실행 경험, 드래프팅 주도권, 딜 규모, 전문 workstream 관리 | article-digest.md + cv.md |
| 로펌 -- 소송·분쟁 | 사건 전략, 서면/변론 작성, 심문·증인신문 경험, 재판연구원/클럭 경력 | article-digest.md + cv.md |
| 사내변호사 | 계약 처리 볼륨(상사계약/개인정보보호), cross-functional 자문, 비즈니스 언어로 설명하는 능력 | cv.md + article-digest.md |
| 컴플라이언스·규제 대응 | 담당 규제 영역 전문성(자금세탁방지·공정거래 등 명명 가능한 regime), 규제기관 대응, 내부조사 리드 | article-digest.md + cv.md |
| 정부·공공 | 법정/심리 경험 volume, 공익 커밋먼트(로스쿨 클리닉, 국선전담 등), 제한된 리소스 안에서의 판단력 | cv.md + article-digest.md |
| 리걸테크·리걸엔지니어 | 정통 실무 경력 + 실제 product/AI 이해, playbook 구축, 워크플로우 자동화 사이드 프로젝트 | cv.md + article-digest.md |

<!-- [개인화] 자신의 구체적인 매터(deal/case)를 위 archetype에 연결하세요. -->

### 전환 narrative (모든 framing에 사용)

<!-- [개인화] 자신의 narrative로 바꾸세요. 예:
     - "대형로펌에서 5년간 M&A 딜을 하다 사내변호사로 전환. 이제 비즈니스와 가까운 자리를 찾는 중."
     - "검사 경력 후 화이트칼라 조사/컴플라이언스 전문으로 전환하려는 변호사."
     - "IP 소송 위주 경력에서 리걸테크 product 쪽으로 확장하려는 변호사."
     config/profile.yml -> narrative.exit_story에서 읽음 -->

모든 콘텐츠에서 `config/profile.yml`의 전환 narrative를 사용해 framing합니다.
- **PDF summary:** 과거와 미래를 연결합니다 -- "이제 같은 [역량/실무 경력]을 [공고의 domain]에 적용합니다."
- **STAR story:** `article-digest.md`의 proof point를 참조합니다.
- **답변 초안(지원서 답변):** 전환 narrative는 첫 답변에 넣습니다.
- **공고가 "cross-functional", "business partner", "hands-on", "autonomy"를 언급할 때:** 이것이 핵심 차별점입니다. match weight를 높입니다.

### Cross-cutting advantage

프로필을 **"실행력 있는 실무형 변호사"**로 framing하고, archetype에 맞게 조정합니다.
- 사내변호사: "복잡한 법률 이슈를 비즈니스가 이해할 수 있는 언어로 번역해 실행까지 이끄는 변호사"
- 컴플라이언스: "규제 리스크를 선제적으로 식별하고 지속 가능한 프로그램으로 만드는 변호사"
- 정부·공공: "제한된 리소스 안에서도 실전 경험(재판, 협상, 조사)을 축적한 변호사"
- 리걸테크: "정통 실무 전문성과 product/기술 이해를 동시에 갖춘 변호사"

"실행력"을 전문성의 신호로 positioning합니다. 막연한 자기소개처럼 보이면 안 됩니다. 실제 매터(deal/case) 기반 proof point가 credibility를 만듭니다.

### Portfolio as proof point (중요 지원에 사용)

<!-- [개인화] 공개 가능한 매터 요약, 발간 글, 세미나 발표, 사이드 프로젝트(예: 계약 자동화 template)가 있다면 여기에 설정하세요.
     예:
     dashboard:
       url: "https://yourdomain.dev/portfolio"
       when_to_share: "리걸테크, 컴플라이언스 프로그램 구축 roles"
     config/profile.yml -> narrative.proof_points 및 narrative.dashboard에서 읽음 -->

후보자에게 live demo / dashboard가 있다면(`profile.yml` 확인), 관련성 높은 지원에서 접근 정보를 제안합니다.

### 보상 정보 (Comp Intelligence)

<!-- [개인화] 목표 역할의 보상 범위를 조사해 값을 조정하세요. -->

**일반 가이드 -- 고용 형태별로 comp 신뢰도가 크게 다릅니다:**
- **대형로펌 tier** (예: 김앤장, 광장, 태평양, 세종, 율촌 등 이른바 "대형로펌" 카테고리 -- 정확한 소속·규모는 매년 변동하므로 회사명 하드코딩보다 카테고리로 다룸): 급여는 대부분 비공개 협상이며, 미국 Cravath scale 같은 공개된 lockstep 체계가 없습니다. 공고에 금액이 없는 것이 표준이고 그 자체로는 red flag가 아닙니다. 시장 수준은 헤드헌터/서치펌 정보나 동료 네트워크로 교차 확인합니다.
- **중소형/부티크 로펌:** 대형로펌 대비 낮은 경우가 많고 사무소별 편차가 커서 일반화하기 어렵습니다. 공고 문구("경쟁력 있는 급여" 등)에 의존하지 말고 직접 확인을 권합니다.
- **사내변호사 / 컴플라이언스:** 한국사내변호사회(KCCA) 등 사내변호사 커뮤니티의 벤치마킹 정보, 원티드/잡코리아/사람인의 공개 공고, 헤드헌터 정보를 참고합니다. base, 성과급, 스톡옵션/RSU가 섞여 제시될 수 있으므로 total compensation을 분해해서 봅니다.
- **정부·공공:** 인사혁신처 공무원 보수 규정 및 소관 기관의 보수표(검사 호봉표 등)를 1차 자료로 안내합니다. 정확한 호봉·수당 수치는 매년 바뀌고 이 파일이 추적할 수 없으므로, 특정 숫자를 여기에 하드코딩하지 말고 후보자에게 최신 공식 자료 확인을 권합니다.
- **리걸테크:** 스타트업/서비스 기업 채용 공고에 명시된 range, 원티드 등을 참고합니다. equity/스톡옵션 비중이 클 수 있어 vesting 조건을 확인합니다.
- 직무 title(연차/직급)이 salary band를 정의하는 가장 큰 요인입니다 -- skill보다 title/연차 기준으로 framing합니다.
- remote/하이브리드가 가능한 사내변호사·컴플라이언스·리걸테크 역할은 일부 회사가 거주지, 고용 형태(정규직/EOR/프리랜서)에 따라 보상을 조정할 수 있습니다.

### 한국 채용 시장 -- 특이사항 (중요)

한국어 공고와 협상에서는 EN/ES 시장과 다른 용어가 등장합니다. 반드시 정확히 반영하세요.

| 용어 | 의미 | 평가 영향 |
|------|------|-----------|
| **정규직** | 기간의 정함이 없는 고용 형태 | senior 역할의 기본값. 계약직이면 이유와 전환 가능성 확인 |
| **계약직** | 기간이 정해진 고용 형태 | 특정 project/전환형이면 가능. 기간, 연장/전환 가능성, 종료 리스크 확인 |
| **수습기간** | 보통 3개월. 일부 회사는 급여 감액 조건을 둠 | 급여 100% 지급 여부, 평가 기준, 해고 조건 확인 |
| **포괄임금제** | 연장/야간/휴일근로 수당을 연봉에 포함하는 구조 | 근무시간 리스크. 고정 OT 시간과 실제 야근 culture 확인 |
| **퇴직금** | 1년 이상 근무 시 발생하는 법정 퇴직급여 | 연봉에 포함/별도 표현이 혼동될 수 있으므로 확인 |
| **4대 보험** | 국민연금, 건강보험, 고용보험, 산재보험 | 정규직/계약직의 기본 위생 요건. 프리랜서는 다를 수 있음 |
| **세전 연봉** | 세금/보험료 공제 전 연봉 | 한국 연봉 협상은 보통 세전 기준. 실수령액과 구분 |
| **성과급 / 인센티브** | 개인/회사 성과에 따른 변동 보상 | target, payout history, 지급 조건 확인 |
| **스톡옵션 / RSU** | equity compensation | vesting schedule, exercise price, liquidity 가능성 확인 |
| **사이닝 보너스** | 입사 보너스 | clawback 조건이 있는지 확인 |
| **연차 / 유급휴가** | 근로기준법상 유급휴가 | 최소 기준 미달은 red flag. 사용 문화도 중요 |
| **식대 / 복지포인트** | 현금성 또는 준현금성 복지 | 작은 항목이지만 total package 비교에 포함 |
| **재택근무** | 원격 근무 | "가능"과 "상시 가능"은 다릅니다. 출근 빈도 확인 |
| **하이브리드 근무** | 재택 + 오피스 출근 혼합 | 주 n회 출근, team day, 지역 제한 확인 |
| **프리랜서 / 개인사업자** | 고용계약이 아닌 용역/위탁 계약 | rate, 세금, 보험, 계약 종료 리스크를 별도로 평가 |

### 법률 자격 Hard Gates (pass/fail -- 절대 점수로 뭉개지 않음)

점수를 매기기 전에 `config/profile.yml`의 `legal` 블록(`class_year`, `bar_admissions`, `patent_bar`, `practice_areas`, `recruiter_channel`)을 기준으로 아래 항목을 확인합니다. Gate를 통과하지 못하면 red flag 차원과 최종 추천에 **명시적으로** 드러나야 하며, CV match 점수가 좋다고 묻히면 안 됩니다.

이 항목들은 미국 시스템(state bar, UBE 등)을 그대로 옮긴 것이 아니라 한국 자격 체계를 반영합니다. 정확하지 않은 세부 수치(정확한 등록 절차 조항, 매년 바뀌는 호봉표 등)는 지어내지 말고 일반적인 수준에서만 안내하세요.

1. **변호사 자격 / 등록** -- 한국은 미국식 주(state) 단위 bar가 아니라 법학전문대학원(로스쿨) 졸업 + 변호사시험 합격으로 얻는 단일 국가 자격입니다. "관할 불일치" 개념은 미국과 다르게 적용됩니다.
   - **국내 로펌:** strict. 변호사 자격 보유 여부를 확인하고, 변호사법상 등록 구분(개업/사내/공공기관 등)이 지원하는 포지션과 맞는지 확인합니다.
   - **외국계 로펌 한국 오피스 / 국제 자문 포지션:** `legal.bar_admissions`에 한국 변호사 자격이 없고 외국 로스쿨/bar만 있다면, 외국법자문사법에 따른 외국법자문사 등록이 필요한 자리인지 확인합니다 -- 등록 없이는 외국법 자문 업무를 할 수 없습니다.
   - **사내변호사 / 컴플라이언스: moderate.** 변호사 자격이 필수가 아닌 "법무팀"/컴플라이언스 포지션도 많습니다. JD가 변호사 자격을 명시적으로 요구하는지, 법학 배경만으로 충분한지 구분합니다.
   - **정부/공공: minimal.** 검사, 공익법무관 등은 변호사시험 합격 이후 별도의 임용 절차를 거치므로, 이 gate는 "정부 임용 절차 자격 충족 여부" 확인으로 대체합니다.
2. **연차 / PQE band** -- 로펌 lateral 공고는 보통 "OO년차" 또는 "3~5년차" 형태로 밴드를 명시합니다. `legal.class_year`가 이 밴드를 벗어나면 거의 자동 탈락으로 간주하고 지원 비추천을 명시합니다 (연차 조정은 보통 offer 단계에서 ±1년 정도만 협상 여지가 있습니다).
3. **변리사 자격** -- 특허 출원/중간사건 처리(patent prosecution) 역할은 변호사 자격과 별개로 변리사 자격(변리사시험, 특허청/한국산업인력공단 관할)을 요구하는 경우가 많습니다. `legal.patent_bar`가 false인데 JD가 변리사 자격을 명시하면 hard gate로 처리합니다. (상표/저작권/IP 소송은 변리사 자격이 필수가 아닌 경우가 많으니 JD에서 직접 확인하세요.)
4. **Conflict of interest (시니어/파트너급)** -- 시니어 어소시에이트 이상 lateral offer는 클라이언트 conflict check를 통과해야 확정됩니다. 리스크로 기록하되 점수에는 반영하지 않습니다.

### 헤드헌터 채널 규칙 (중복 지원 방지)

한국 로펌·사내변호사 lateral 시장에서도 법률 전문 헤드헌터(서치펌)를 통한 추천이 흔합니다. 한 로펌에 이미 헤드헌터가 후보자를 추천한 상태에서 후보자가 직접 지원하거나 다른 채널로 동시에 지원하면, 로펌 인사담당자 입장에서는 "동일 후보 중복 추천" 이슈로 후보자를 아예 배제하는 경우가 흔합니다 (헤드헌터 fee 분쟁을 피하려는 관행). 첫 제출자가 통상 6-12개월간 해당 candidacy를 소유한다고 간주합니다.

- 로펌 지원 초안을 작성하기 전에 항상 `config/profile.yml` -> `legal.recruiter_channel.engagements`와 tracker의 `via=` 필드를 확인합니다.
- 이미 엔게이지된 헤드헌터가 있다면, 직접 지원 초안 작성을 멈추고 후보자에게 알립니다: 헤드헌터 채널로 진행할지, 리스크를 인지한 상태에서 직접 지원할지 명시적으로 결정하도록 요청합니다.
- 사내변호사·정부기관 지원은 기본적으로 직접 지원이 표준이며, 이 gate는 헤드헌터 채널이 실제로 존재할 때만 적용됩니다.

### 협상 스크립트

<!-- [개인화] 자신의 상황에 맞게 조정하세요. -->

**희망 연봉 (일반 framework):**
> "이 역할의 시장 기준과 제 경험 범위를 고려하면, 저는 [profile.yml의 범위] 수준을 기대하고 있습니다. 다만 base, bonus, equity, 복지까지 포함한 전체 보상 패키지 기준으로 유연하게 논의할 수 있습니다."

**지역 기반 discount에 대한 답변:**
> "제가 비교 중인 역할들은 location보다 delivery와 impact를 기준으로 평가합니다. 제 track record는 근무지와 관계없이 동일하게 적용됩니다."

**제안이 목표보다 낮을 때:**
> "현재 [더 높은 범위] 수준의 package를 기준으로 논의 중입니다. [회사]에는 [구체적 이유] 때문에 관심이 큽니다. [목표 금액/구조]까지 맞출 수 있을까요?"

**성과급 / equity 협상:**
> "공정하게 비교하려면 base salary, target bonus, equity/stock option, signing bonus를 나눠서 보고 싶습니다. 각 항목의 지급 조건과 과거 payout range도 확인할 수 있을까요?"

**연차/타이틀 downlevel에 대한 답변 (로펌/사내변호사 공통):**
> "제 실제 경력과 담당 매터 범위를 고려할 때 [희망 연차/타이틀] 수준이 맞다고 생각합니다. 만약 이 레벨에서 시작한다면, 6개월~1년 내 재검토 시점과 구체적인 승급 기준을 문서로 명확히 하고 싶습니다."

### Location Policy

<!-- [개인화] 자신의 상황에 맞게 조정하세요. config/profile.yml -> location에서 읽음 -->

**지원서 폼에서:**
- "출근 가능 여부" 같은 binary 질문: `profile.yml`의 실제 availability에 따라 답합니다.
- 자유 입력 필드: 시차 overlap, 출근 가능 빈도, 지역 제한을 명확히 씁니다.

**평가 scoring에서:**
- 국내 하이브리드인데 출근 빈도가 불명확하면 remote dimension을 **3.0**으로 둡니다.
- Score 1.0은 공고가 "주 4-5일 필수 출근, 예외 없음"처럼 명시할 때만 사용합니다.

### Time-to-offer priority
- 탄탄한 지원 패킷(이력서 + 딜시트/매터 리스트) > 완벽함
- 더 많이 조사하기보다 빠르게 지원
- 80/20 접근, 모든 작업은 timebox

---

## 전역 규칙

### 절대 하지 말 것

1. 경험이나 metric을 지어내기
2. `cv.md` 또는 portfolio 파일을 임의로 수정하기
3. 후보자 대신 지원서를 제출하기
4. 생성 메시지에 전화번호 공유하기
5. 시장가보다 낮은 보상을 추천하기
6. 공고를 읽기 전에 PDF 생성하기
7. 공허한 corporate jargon 사용하기
8. tracker 무시하기 (평가한 모든 공고는 기록)
9. 로펌에 이미 헤드헌터/리크루터가 후보자를 제출했거나 엔게이지된 상태에서 직접 지원서를 준비하거나 초안 작성하기 -- 첫 제출자가 통상 6-12개월간 candidacy를 소유하며(referral-source lock), 중복 제출은 흔히 후보자를 아예 배제시킵니다. 로펌 지원 초안 작성 전 항상 `config/profile.yml`의 `legal.recruiter_channel`과 tracker의 `via=` 필드를 확인합니다.

### 항상 할 것

0. **커버레터:** 폼이 허용하면 항상 포함합니다. CV와 같은 visual design의 PDF. 공고 문구를 proof point와 매핑. 최대 1페이지.
1. 공고 평가 전 `cv.md`와 `article-digest.md`(있다면)를 읽습니다.
1b. **세션 첫 평가:** Bash로 `node cv-sync-check.mjs`를 실행합니다. 경고가 있으면 후보자에게 알립니다.
2. 역할 archetype을 감지하고 framing을 조정합니다.
3. matching 시 CV의 정확한 문장을 인용합니다.
4. 보상/회사 데이터에는 WebSearch를 사용합니다.
5. 매 평가 후 tracker에 기록합니다.
6. 생성 콘텐츠는 공고 언어에 맞춥니다(한국어 공고면 한국어, 영어 공고면 영어).
7. 직접적이고 구체적으로 씁니다. 불필요한 말은 줄입니다.
8. 한국 법률 채용 문맥에 맞는 자연스러운 한국어를 사용합니다. 짧은 문장, 동사 중심, 수동태 회피. 실무에서 그대로 쓰는 용어(pipeline, tracker, archetype 등 tooling 관련 용어)는 억지로 번역하지 않습니다.
8b. **변호사 자격/연차는 CV 상단에 노출합니다.** 발간 글이나 세미나 발표 URL이 있다면 반드시 첫 문단(Professional Summary)에 들어갑니다. recruiter는 summary만 읽는 경우가 많습니다. HTML에서는 모든 URL에 `white-space: nowrap` 적용.
9. **Tracker entry는 TSV로 작성** -- 새 항목을 위해 applications.md를 직접 수정하지 않습니다. `batch/tracker-additions/`에 TSV를 쓰고 `merge-tracker.mjs`가 병합합니다.
10. **모든 report header에 `**URL:**` 포함** -- Score와 PDF 사이에 둡니다.

### 도구

| 도구 | 용도 |
|------|------|
| WebSearch | 보상, 시장 trend, 회사 culture, LinkedIn contact, 공고 fallback 조사 |
| WebFetch | 정적 페이지의 공고 추출 fallback |
| Playwright | 공고 활성 여부 확인(browser_navigate + browser_snapshot), SPA에서 공고 추출. **중요: Playwright를 쓰는 agent를 2개 이상 병렬로 띄우지 않습니다 -- 같은 browser instance를 공유합니다** |
| Read | cv.md, article-digest.md, cv-template.html |
| Write | PDF용 임시 HTML, applications.md, reports .md |
| Edit | tracker 업데이트 |
| Bash | `node generate-pdf.mjs` |
