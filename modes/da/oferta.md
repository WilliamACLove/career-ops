# Mode: oferta -- Fuld evaluering A-F

Når kandidaten indsætter et opslag (tekst eller URL), så lever ALTID alle 6 blokke.

## Trin 0 -- Arketype-detektion

Klassificér opslaget i en af de 6 arketyper (se `_shared.md`). Hvis hybrid, så angiv de 2 nærmeste. Det afgør:
- Hvilke proof points der prioriteres i blok B
- Hvordan summary omskrives i blok E
- Hvilke STAR-stories der forberedes i blok F

## Trin 0,5 -- Juridiske hard gates (pass/fail, aldrig udjævnet ind i gennemsnittet)

Før noget vægtes, tjekkes opslaget mod kandidatens `legal`-blok i `config/profile.yml` (se `_shared.md` § "Danske juridiske kvalifikationskrav"). Det er strukturelle filtre, ikke vægtede faktorer -- en fejlet gate SKAL fremgå eksplicit i Red flags-dimensionen og i den endelige anbefaling. Lad aldrig en fejlet gate blive skjult af et ellers pænt score.

1. **Advokatbestalling / møderet** -- sammenlign opslagets krav mod `legal.bar_admissions`. Strengt for advokatfirmaer (kræver typisk beskikkelse eller det rette fuldmægtigår); moderat for virksomhedsjurist-roller (bestalling sjældent påkrævet -- nævn det som en note, ikke en blokering); minimalt for det offentlige og legal tech.
2. **Fuldmægtig-år / erfaringsniveau** -- hvis opslaget angiver et bånd (fx "2.-3. års fuldmægtig", "min. 4 års erfaring"), og `legal.class_year` ligger uden for det, er det et alvorligt advarselssignal på en lateral advokatstilling -- sig det klart, men husk at dansk advokatbranche er mindre stringent lockstep-baseret end det amerikanske marked.
3. **Patentagentkvalifikation** -- kræves for patentbehandlingsstillinger (europæisk patentagent/EQE og/eller dansk patentagentbeskikkelse). Hvis opslaget kræver det, og `legal.patent_bar` er `false`, er det en hard blocker.
4. **Inhabilitet (senior-/partnerroller)** -- nævn risikoen for konflikttjek ved lateral ansættelse på højt niveau. Vurdér den ikke som en score.

Rapportér resultatet af gates som en kort pass/fail-tabel øverst i blok B. En fejlet gate begrænser anbefalingen, uanset hvor godt resten matcher.

## Blok A -- Rolleopsummering

Tabel med:
- Detekteret arketype
- Domain (Transaktioner / Procedure / Virksomhedsjurist / Compliance / Offentlig / Legal tech)
- Funktion (Rådgive / Forhandle / Procedere / Lede / Bygge)
- Senioritet (fuldmægtig-/advokatår, eller titelniveau for virksomhedsjurist)
- Remote (Fuld remote / Hybrid / På kontoret)
- Teamstørrelse (hvis nævnt)
- TL;DR i 1 sætning

## Blok B -- Match med CV'et

Læs `cv.md`. Lav en tabel, hvor hvert krav i opslaget mappes til eksakte linjer i CV'et.

**Tilpasset arketypen:**
- Advokatfuldmægtig/Advokat -- Transaktioner -> prioritér konkrete sager fra sagslisten på det rette fuldmægtig-/advokatår: deal-typer, transaktionsstørrelser, tovholderansvar
- Advokatfuldmægtig/Advokat -- Procedure & Tvistløsning -> prioritér egen sagsførelse: responsummer, hovedforhandlinger, voldgiftssager, skriftlig fremstilling
- Virksomhedsjurist -- Kommerciel/Produkt/Privacy -> prioritér kontraktvolumen, tværfaglig rådgivning, regulatorisk bredde, klart sprog til ikke-jurister
- Compliance & Regulatorisk -> prioritér navngivne regelsæt (AML/hvidvask, GDPR, sektorspecifik regulering), tilsynskontakt, undersøgelser, programejerskab
- Offentlig forvaltning / Almennyttig -> prioritér sagsvolumen, retssalserfaring, dokumenteret samfundsengagement
- Legal Tech / Legal Engineer -> prioritér solid juridisk pedigree KOMBINERET med reel produkt-/AI-forståelse, byggede playbooks/workflows

Afsnit om **Mangler (Gaps)** med en mitigeringsstrategi for hver enkelt. For hver mangel:
1. Er det en hard blocker eller et nice-to-have?
2. Kan kandidaten påvise tilstødende erfaring?
3. Findes der et portfolio-projekt, der dækker manglen?
4. Konkret mitigeringsplan (sætning til følgebrevet, hurtigt mini-projekt, osv.)

## Blok C -- Niveau og strategi

1. **Detekteret niveau** i opslaget vs **kandidatens naturlige niveau for denne arketype** -- for advokatfirmaroller er dette fuldmægtig-/advokatår-matching (se hard gates); for virksomhedsjurist er det titelstigen (jurist -> senior jurist/senior counsel -> chefjurist -> juridisk direktør/General Counsel), hvor **titel er lønhåndtaget**
2. **Plan "sælg senior uden at lyve"**: konkrete formuleringer tilpasset arketypen, konkrete sager at fremhæve, hvordan uddannelsesforløb, klerkskab eller regulatorisk erfaring positioneres som en fordel
3. **Plan "hvis jeg bliver downlevelet"**: for advokatfirmaroller kan fuldmægtig-/advokatåret ofte forhandles ±1 år ved tilbud; for virksomhedsjurist -- kæmp for titlen/niveauet før kronerne, da bonusmål og evt. warrants/aktieoptioner følger titlen

## Blok D -- Aflønning og efterspørgsel

Brug WebSearch til, med de danske juridiske lønkilder fra `_shared.md`:
- Aktuelle lønninger for rollen (Djøf Lønstatistik, Danske Advokater-benchmarks, AC-overenskomstens løntrin for det offentlige)
- Virksomhedens lønreputation
- Efterspørgselstendens for rollen på det danske marked

Tabel med data og citerede kilder. Hvis der ingen data er, så sig det klart -- opfind ikke noget.

**Løntavshed er normalt hos advokatfirmaer.** Mange danske opslag om advokat-/fuldmægtigstillinger nævner ikke et konkret beløb ("konkurrencedygtig løn" er standard) -- det er ikke i sig selv et advarselssignal.

**Det danske marked -- Obligatoriske tjek:**
- Pension nævnt? Indregn arbejdsgiverbidraget (typisk 8-12%) i den samlede pakke.
- Variabel del (bonus, provision, warrants / aktieoptioner)? Sjældnere i klassisk advokatarbejde, mere almindeligt i virksomhedsjurist-/legal tech-roller.
- Feriepenge / feriefridage ud over ferielovens minimum?
- Overenskomst eller funktionærvilkår? Hvis overenskomst: tjek løntrin og vilkår.
- Fastansættelse eller tidsbegrænset? Hvis tidsbegrænset: varighed, begrundelse, mulighed for fastansættelse.
- Freelance / selvstændig konsulentadvokat? Dagssats, opgavens varighed, risiko for omklassificering.

## Blok E -- Personaliseringsplan

| # | Sektion | Nuværende tilstand | Foreslået ændring | Begrundelse |
|---|---------|--------------------|--------------------|-------------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 ændringer i CV'et + Top 5 ændringer på LinkedIn for at maksimere matchet.

## Blok F -- Samtaleplan

6-10 STAR+R-stories mappet til opslagets krav (STAR + **Reflection**):

| # | Krav i opslaget | STAR+R-story | S | T | A | R | Reflection |
|---|-----------------|--------------|---|---|---|---|------------|

Kolonnen **Reflection** indfanger, hvad der blev lært, eller hvad der ville blive gjort anderledes. Det signalerer senioritet -- juniorer beskriver, hvad der skete, seniorer drager læring af det.

**Story Bank:** Hvis `interview-prep/story-bank.md` findes, så tjek om disse stories allerede er der. Hvis ikke, så tilføj de nye. Med tiden opbygger det en genbrugelig bank på 5-10 master-stories, der kan tilpasses ethvert samtalespørgsmål.

**Udvalgt og rammesat efter arketypen:**
- Transaktioner -> fremhæv sagsudførelse, redaktionelt ansvar, styring af delarbejdsstrømme
- Procedure & Tvistløsning -> fremhæv sagsstrategi, vundne sager, hovedforhandlinger, skriftlig fremstilling under pres
- Virksomhedsjurist -- Kommerciel/Produkt/Privacy -> fremhæv forretningsenablement ("sige ja til forretningen på en sikker måde"), volumenhåndtering, tværfaglig rådgivning
- Compliance & Regulatorisk -> fremhæv programopbygning, tilsynskontakt, håndterede undersøgelser
- Offentlig forvaltning / Almennyttig -> fremhæv sagsvolumen, dømmekraft under ressourcepres, samfundsengagement
- Legal Tech / Legal Engineer -> fremhæv omsætning af praksiserfaring til produkt-/workflow-beslutninger, adoptionsmålinger

Inkludér også:
- 1 anbefalet sag (hvilken sag fra sagslisten/matter-listen der præsenteres og hvordan, inden for fortrolighedens grænser)
- Red-flag-spørgsmål og hvordan man besvarer dem (fx "Hvorfor forlader du dit advokatfirma?", "Hvorfor er du ikke blevet partner?", "Hvad er din historik med fakturerbare timer?", "Hvorfor skifte til/fra virksomhedsjura?")

---

## Efter evalueringen

**ALTID** efter blok A-F skal du udføre:

### 1. Gem report .md

Gem den fulde evaluering i `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = næste fortløbende nummer (3 cifre, nul-paddet). For at allokere det atomisk og undgå race conditions skal du køre `node reserve-report-num.mjs` for at reservere nummeret (stdout returnerer `{###}`), skrive rapporten og derefter køre `node reserve-report-num.mjs --release {###}` for at frigive sentinel'en.
- `{company-slug}` = virksomhedsnavn i små bogstaver, uden mellemrum (brug bindestreger)
- `{YYYY-MM-DD}` = dagens dato

**Report-format:**

```markdown
# Evaluering: {Virksomhed} -- {Rolle}

**Dato:** {YYYY-MM-DD}
**Arketype:** {detekteret}
**Score:** {X/5}
**URL:** {opslagets URL}
**PDF:** {sti eller afventer}

---

## A) Rolleopsummering
(fuldt indhold af blok A)

## B) Match med CV'et
(fuldt indhold af blok B)

## C) Niveau og strategi
(fuldt indhold af blok C)

## D) Aflønning og efterspørgsel
(fuldt indhold af blok D)

## E) Personaliseringsplan
(fuldt indhold af blok E)

## F) Samtaleplan
(fuldt indhold af blok F)

## G) Udkast til svar til ansøgningen
(kun ved score >= 4.5 -- udkast til svar til ansøgningsformularen)

---

## Udtrukne nøgleord
(liste med 15-20 nøgleord fra opslaget til ATS-optimering)
```

### 2. Registrér i trackeren

**ALTID** registrér i `data/applications.md`:
- Næste fortløbende nummer
- Dagens dato
- Virksomhed
- Rolle
- Score: gennemsnit af matchet (1-5)
- Status: `Evaluated`
- PDF: nej (eller ja, hvis auto-pipeline har genereret en PDF)
- Report: relativt link til report-filen (fx `[001](reports/001-company-2026-01-01.md)`)

**Tracker-format:**

```markdown
| # | Dato | Virksomhed | Rolle | Score | Status | PDF | Report |
```
