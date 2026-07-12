# Tryb: oferta -- Pełna ocena A-G

Gdy kandydat wkleja ofertę (tekst lub URL), ZAWSZE dostarcz wszystkie 7 bloków (ocena A-F + G legitymacja).

## Bramka aktualności (wejście przez URL)

Gdy kandydat wkleja **URL** (nie tekst oferty), potwierdź, że ogłoszenie wciąż jest aktywne, zanim rozpoczniesz ocenę. Martwy link nigdy nie powinien trafić do Bloku A -- strona 404/wygasła marnuje pełną ocenę A-G, report i PDF na treść-widmo.

1. Pobierz treść strony: jeśli trafiłeś tu z `auto-pipeline` (jego Krok 0.5 już nawigował i wyczyścił link), użyj tego snapshotu ponownie -- nie nawiguj drugi raz. Przy bezpośrednim wklejeniu URL-a nawiguj Playwrightem (`browser_navigate` + `browser_snapshot`) i przeczytaj tytuł, URL i widoczną treść.
2. Sklasyfikuj ogłoszenie:
   - **dowody aktywnego ogłoszenia:** tytuł/rola + realny opis stanowiska lub ścieżka aplikowania
   - **dowody zamkniętego ogłoszenia:** "wygasło/zamknięte/nie przyjmujemy już zgłoszeń", brak opisu (tylko nawigacja/stopka), twarde przekierowanie na generyczną stronę kariery, lub 404/410
3. Jeśli ogłoszenie wygląda na zamknięte, **zatrzymaj się przed Blokiem A**: poinformuj kandydata, że link jest martwy, a jeśli wpis pochodzi z `data/pipeline.md`, oznacz go `- [x] ~~Firma | Rola~~ -- oferta nieaktywna`. Nie generuj oceny, reportu ani CV.
4. Jeśli kandydat wkleił tekst oferty (bez URL-a), aktualności nie da się zweryfikować -- odnotuj to i kontynuuj; nie ma linku do sprawdzenia.

Nie przechodź do Bloku A, dopóki ta bramka nie zostanie rozstrzygnięta. Snapshot zebrany tutaj jest ponownie wykorzystywany przez sygnały aktualności w Bloku G.

## Bramka czarnej listy

Jeśli `data/blacklist.md` istnieje, sprawdź firmę z ogłoszenia względem niej przed Blokiem A. Plik to własna lista "nie aplikuję" kandydata (warstwa użytkownika, opt-in): brak pliku = brak bramki, i nic nigdy automatycznie nie dodaje firmy do listy. Dopasowuj bez rozróżniania wielkości liter i interpunkcji.

1. W razie trafienia, **zatrzymaj się przed Blokiem A** i pokaż własną, wcześniej zapisaną decyzję kandydata:
   > "{Firma} jest na Twojej czarnej liście (od {Od kiedy}): *{Powód}*. Czy mimo to chcesz, żebym ocenił tę ofertę?"
2. Poczekaj na jednoznaczną odpowiedź -- nigdy nie odmawiaj po cichu, nigdy nie kontynuuj po cichu. Decyzja kandydata zawsze wygrywa: jednoznaczne "tak" uruchamia pełną ocenę A-G jak zwykle (odnotuj override w notatkach reportu); cokolwiek innego kończy się tu bez oceny, reportu ani CV.
3. Brak dopasowania lub brak `data/blacklist.md` -> kontynuuj. Wpis na czarnej liście nigdy nie zmienia żadnego score -- to bramka, nie sygnał.

## Ograniczony budżet researchu

Research firmy, wynagrodzenia i sygnałów rekrutacyjnych musi być jednorazowym lookupem, nie otwartym śledztwem. Ten tryb to workflow oceny, nie głębokie badanie firmy.

Twarde limity dla Bloków D i G łącznie:
- twardy limit: 5 zapytań WebSearch łącznie
- Preferuj celne zapytania, które odpowiadają na więcej niż jedno pytanie; przerwij wcześniej, gdy dowody są wystarczające
- Nie wywołuj `deep-research`, `deep` ani żadnego innego skilla researchowego
- Nie twórz subagentów ani nie deleguj researchu do innego agenta
- Nie kontynuuj researchu po osiągnięciu limitu zapytań; podsumuj zebrane dowody i jawnie oznacz brakujące dane jako niedostępne

Jeśli głębszy research firmy byłby przydatny, zarekomenduj osobne uruchomienie `/career-ops deep` po ocenie.

## Krok 0 -- Wykrycie archetypu

Sklasyfikuj ofertę do jednego z 6 archetypów (zobacz `_shared.md`). Jeśli hybrydowa, wskaż 2 najbliższe. To determinuje:
- Które proof points priorytetyzować w bloku B
- Jak przepisać summary w bloku E
- Które historie STAR przygotować w bloku F

## Krok 0.5 -- Twarde bramki prawnicze (pass/fail, nigdy nie uśredniaj po cichu)

Zanim cokolwiek zważysz, sprawdź ofertę względem bloku `legal:` z `config/profile.yml` kandydata (pola tego bloku pozostają po angielsku, wspólne dla wszystkich wersji językowych: `class_year`, `bar_admissions`, `patent_bar`, `practice_areas`, `recruiter_channel`). To są bramki strukturalne, nie ważone czynniki -- nieprzejście bramki musi pojawić się **wyraźnie** w wymiarze Red flags ORAZ w finalnej rekomendacji. Nigdy nie pozwól, by nieprzejście bramki zostało po cichu uśrednione w niezłym wyniku.

1. **Uprawnienia zawodowe / wpis na listę** -- porównaj wymóg biura/jurysdykcji ogłoszenia z `legal.bar_admissions`. Zastosuj skalę restrykcyjności:
   - **Kancelarie: restrykcyjne.** Rola prowadząca sprawy przed sądem lub podpisująca pisma procesowe wymaga czynnego wpisu (radca prawny lub adwokat) -- brak wpisu przy roli wymagającej samodzielnego prowadzenia spraw to niemal blocker; powiedz to wprost.
   - **In-house: umiarkowane.** Doradztwo prawne wewnątrz organizacji (bez reprezentacji sądowej) nie wymaga formalnie wpisu na listę w Polsce -- odnotuj to jako lukę do zaadresowania, nie jako blokadę.
   - **Sektor publiczny i legal tech: minimalne.** Niedopasowanie zwykle jest drugorzędne, chyba że ogłoszenie wprost wymaga wpisu.
2. **Poziom doświadczenia / PQE** -- jeśli ogłoszenie podaje pasmo stażu ("radca prawny/adwokat, min. 3-5 lat w zespole transakcyjnym"), porównaj z `legal.class_year`. Wyraźnie poza pasmem przy lateralu kancelaryjnym = niemal automatyczne odrzucenie: rekomenduj przeciw aplikowaniu, dopasowanie poziomu negocjuje się dopiero na etapie oferty (o rok w jedną lub drugą stronę), nie na etapie screeningu.
3. **Rzecznik patentowy** -- role obejmujące prowadzenie zgłoszeń patentowych wymagają odrębnych uprawnień rzecznika patentowego. Jeśli JD tego wymaga, a `legal.patent_bar` jest `false` -- to twardy blocker.
4. **Ryzyko konfliktu interesów** -- dla ról senior/counsel/partnerskich odnotuj, że każda oferta jest warunkowa wobec weryfikacji konfliktu interesów z portfelem klientów. Odnotuj ryzyko, nie punktuj go.

Zaraportuj wyniki bramek jako krótką tabelę pass/fail na górze Bloku B. Nieprzejście bramki ogranicza rekomendację niezależnie od tego, jak dobrze dopasowane jest wszystko inne.

## Blok A -- Podsumowanie roli

Tabela z:
- Wykrytym archetypem
- Domeną (transakcyjna / litigation / in-house / compliance / sektor publiczny / legal-tech)
- Funkcją (doradztwo / negocjacje / reprezentacja procesowa / zarządzanie / budowa)
- Poziomem seniority (poziom PQE / staż po wpisie, lub poziom tytularny dla in-house)
- Remote (Full remote / Hybryda / Na miejscu)
- Wielkością zespołu (jeśli podana)
- **Culture screen** (zobacz `_shared.md`): pass / caution / fail, z konkretnymi dowodami znalezionymi lub brakującymi -- nie tylko score, nazwij, co widziałeś
- TL;DR w 1 zdaniu

## Blok B -- Dopasowanie do CV

Przeczytaj `cv.md`. Stwórz tabelę, w której każde wymaganie z oferty jest zmapowane na dokładne wiersze z CV.

**Dostosowane do archetypu:**
- Prawnik kancelaryjny -- Transakcyjny -> priorytetyzuj arkusz transakcji na właściwym poziomie: rodzaje transakcji, ich skala, samodzielność w prowadzeniu dokumentacji, zarządzanie wyspecjalizowanymi wątkami
- Prawnik kancelaryjny -- Spory i Litigation -> priorytetyzuj doświadczenie "stand-up": rozprawy, pisma procesowe, arbitraże/postępowania sądowe, siłę warsztatu pisarskiego
- In-House Counsel -- Produkt / Handlowy / Ochrona danych -> priorytetyzuj wolumen umów (SaaS/umowy handlowe/DPA), doradztwo cross-funkcyjne, szerokość regulacyjną, komunikację w prostym języku z biznesem
- Compliance i Regulatory -> priorytetyzuj nazwane reżimy (AML/CFT, sankcje, KNF, RODO), doświadczenie w kontaktach z regulatorem, postępowania wyjaśniające, budowę programu
- Sektor publiczny / Interes publiczny -> priorytetyzuj wolumen spraw sądowych, doświadczenie apelacyjne, wykazane zaangażowanie społeczne (kliniki prawa, wolontariat, wcześniejsza praktyka w interesie publicznym)
- Legal Tech / Legal Engineer -> priorytetyzuj solidne referencje praktyki PLUS realną biegłość produktową/AI -- zbudowane playbooki, zautomatyzowane workflow, projekty legal-tech

**Luki (Gaps)** sekcja ze strategią mitygacji dla każdej. Dla każdej luki:
1. Czy to twardy bloker czy nice-to-have?
2. Czy kandydat może wykazać sąsiednie doświadczenie?
3. Czy istnieje proof point, który pokrywa tę lukę?
4. Konkretny plan mitygacji (zdanie do listu motywacyjnego, szybki mini-projekt itp.)

## Blok C -- Poziom i strategia

1. **Wykryty poziom** w ofercie vs **naturalny poziom kandydata dla tego archetypu** -- dla ról kancelaryjnych to dopasowanie stażu/PQE (restrykcyjne, patrz twarde bramki); dla in-house to drabina tytularna (Prawnik -> Starszy Prawnik -> Radca Prawny -- Kierownik -> Dyrektor Działu Prawnego), gdzie **tytuł jest dźwignią wynagrodzenia**
2. **Plan "sprzedać senior bez kłamstwa"**: konkretne sformułowania dostosowane do archetypu, konkretne sprawy/transakcje do podkreślenia, jak pozycjonować szkolenie kancelaryjne, aplikacje, doświadczenie w administracji/regulatorze jako atut
3. **Plan "jeśli dostanę downlevel"**: role kancelaryjne -- dopasowanie stażu jest negocjowalne o ok. rok przy ofercie (czasem rok w dół kupuje czas na rozwój); in-house -- walcz o poziom/tytuł (Starszy Prawnik vs Prawnik, Radca Prawny -- Kierownik vs Starszy Prawnik) przed negocjacją kwoty, bo procent premii i inne benefity podążają za tytułem

## Blok D -- Wynagrodzenie i popyt

Użyj ograniczonego budżetu researchu dla:
- Aktualnego wynagrodzenia dla roli z kanonicznych, prawniczych źródeł wg typu pracodawcy:
  - **Kancelarie:** Ranking Kancelarii Prawniczych "Rzeczpospolitej" (pozycjonowanie rynkowe) + raporty płacowe Antal/Michael Page Legal/Hays Poland dla praktyki prawniczej; kancelarie zagraniczne (Warszawa) publikują widełki rzadziej niż lokalne butiki
  - **In-house:** Ogólnopolskie Badanie Wynagrodzeń (OBW) Sedlak & Sedlak (kategoria prawnicza) + raporty branżowe rekruterów legal (Antal, Michael Page Legal, Hays)
  - **Sektor publiczny:** siatka wynagrodzeń urzędniczych/korpusu służby cywilnej (jawne widełki mnożnikowe), niższa konkurencyjność rynkowa niż sektor prywatny
  - **Legal ops / legal tech:** dane branżowe legal-ops (Brightflag/CLOC jako punkt odniesienia międzynarodowy, jeśli brak polskiego odpowiednika)
- Reputacji wynagrodzeniowej firmy
- Trendu popytu na rolę na polskim rynku

**Cisza płacowa jest normalna w kancelariach.** Ogłoszenia kancelaryjne rzadko podają kwotę ("wynagrodzenie konkurencyjne" to standard) -- to NIE jest czerwona flaga. Brak podanych widełek jest bardziej zauważalny w ogłoszeniach in-house i sektora publicznego, gdzie transparentność bywa większa.

Przed interpretacją jakiejkolwiek kwoty zaklasyfikuj typ pracodawcy. Publiczne widełki wynagrodzeń nie są jednakowo wiarygodne we wszystkich kategoriach.

**Klasyfikacja typu pracodawcy (wymagana):**

| Typ pracodawcy | Typowa wiarygodność danych o wynagrodzeniu | Sygnały |
|--------------|--------------------------|---------|
| Duża kancelaria (międzynarodowa lub czołowa polska) | Wysoka -- ustrukturyzowany proces lateral, poziomy stażu | Rozpoznawalna marka, dedykowany zespół rekrutacyjny, jasne pasmo stażu w ogłoszeniu |
| Kancelaria średnia / regionalna / butikowa | Średnia | Zwykle wynagrodzenie poniżej stawek dużych kancelarii, premie uznaniowe, rzadko publikowane widełki; elitarne butiki płacą na poziomie lub powyżej rynku |
| Prawnik in-house -- duża/dojrzała firma | Średnia do wysokiej | Ustrukturyzowane poziomy, podstawa + premia, dane z OBW/raportów branżowych to zakresy, nie punkty |
| Prawnik in-house -- startup / scale-up | Średnia do niskiej | Poziom i cel premii negocjowalne, możliwe ESOP/opcje |
| Sektor publiczny / administracja | Wysoka | Jawne siatki wynagrodzeń, ale niższa konkurencyjność wobec sektora prywatnego |
| Interes publiczny / NGO / poradnie prawne | Średnia do wysokiej | Publikowane pasma, zwykle znacznie poniżej stawek kancelaryjnych |
| Legal tech / role okołoprawnicze | Średnia | Struktura podstawa + bonus/equity, widełki zwykle podane |
| Praca dorywcza (doc review / obsługa masowa) | Niska | Stawka godzinowa, zatrudnienie przez agencję, słowa kluczowe "przegląd dokumentów", "projekt eDiscovery" |
| Ogłoszenie agencji rekrutacyjnej (kontyngentowe) | Niska do średniej | Ogłoszenie strony trzeciej, "kancelaria/firma poufna" -- widełki mogą odzwierciedlać budżet klienta, nie realne warunki oferty |

Jeśli pracodawca nie pasuje do powyższej kategorii (np. firma niebędąca kancelarią zatrudniająca pierwszego prawnika in-house), użyj ogólnej taksonomii typów firm z `_shared.md` (o ile jest dostępna) lub potraktuj jako `Unknown` z konserwatywną wiarygodnością `Niska`.

Jeśli marka różni się od podmiotu zatrudniającego, zaklasyfikuj **faktyczny podmiot zatrudniający** i wspomnij o relacji z marką osobno.

**Wiarygodność wynagrodzenia (wymagana):**

Najpierw sprawdź, czy sama oferta podaje kwotę. Jeśli nie ma podanej liczby, zredukuj tę sekcję do dokładnie dwóch zwięzłych linii po trendzie popytu:

- **Typ pracodawcy:** {kategoria lub `Unknown`} -- {pewność + jedna fraza-dowód}
- **Wiarygodność wynagrodzenia:** {poziom} -- brak podanej kwoty w ogłoszeniu; pomiń podział na składniki, szczegółowe wiersze rynkowe i pytania weryfikacyjne do HR

Gdy istnieje podana kwota, podziel wynagrodzenie na:

- **Widełki z ogłoszenia:** kwota podana w ofercie lub w źródłach publicznych
- **Prawdopodobna podstawa gwarantowana:** konserwatywne oszacowanie stałej części
- **Część zmienna / warunkowa:** premia, prowizja, dodatek, premia frekwencyjna, nadgodziny, trzynastka, bonus powitalny lub inna kwota uzależniona od warunków
- **Oczekiwana stabilna gotówka:** co jest prawdopodobnie cykliczne i pewne w gotówce, przed podatkiem, chyba że lokalne dane wspierają szacunek netto; wyłączając benefity
- **Benefity niepieniężne:** opieka medyczna, karta sportowa, PPK, szkolenia, sprzęt lub inne benefity niebędące gwarantowaną gotówką

Dodaj poziom wiarygodności:

| Poziom | Znaczenie |
|------|---------|
| Wysoka | Wynagrodzenie podane jako podstawa lub poparte spójnymi, ustrukturyzowanymi źródłami publicznymi |
| Średnia | Widełki wiarygodne, ale składniki nie są w pełni rozdzielone |
| Niska | Podana liczba prawdopodobnie obejmuje część zmienną, frekwencyjną, prowizję, dopłatę lub "do" |
| Unknown | Brak użytecznych danych o wynagrodzeniu |

Traktuj jako sygnały niskiej wiarygodności, chyba że stała podstawa jest wyraźnie oddzielona: "wynagrodzenie całkowite", "do", "premia uznaniowa wliczona", "podstawa + zmienna", "13. pensja wliczona", lub nietypowo szerokie widełki.

**Wymagane pytania weryfikacyjne do HR, gdy istnieje kwota:**

Dołącz 3-6 konkretnych pytań dostosowanych do oferty i typu pracodawcy, np.:

- Jaka jest stała podstawa wynagrodzenia zapisana w umowie/liście ofertowym?
- Czy podana kwota obejmuje premię, i czy premia jest ustrukturyzowana (jawna skala) czy uznaniowa?
- Jaki był realny wskaźnik wypłat premii w ostatnich dwóch cyklach?
- Dla in-house: jaki jest cel premii (% podstawy) na tym poziomie i jaka część celu została faktycznie wypłacona w ostatnim cyklu?
- Które składniki są gwarantowane, a które uznaniowe lub warunkowe (bonus powitalny, relokacja)?
- Czy widełki są netto czy brutto, i czy dotyczą UoP czy B2B?

Gdy istnieje podana kwota, dołącz tabelę z danymi i cytowanymi źródłami. Jeśli brak danych poza kwotą z ogłoszenia, powiedz to wprost -- nic nie wymyślaj.

Pierwszy wiersz tabeli to zawsze **własna, dosłowna kwota z ogłoszenia**, przed jakimikolwiek zbadanymi danymi rynkowymi:

```markdown
| Ogłoszenie (JD) | {dosłowna kwota lub "nie podano"} | JD |
```

Nigdy nie mieszaj kwoty z ogłoszenia z zbadanymi szacunkami ani nie zastępuj jej nimi -- wiersze z badaniem rynku idą poniżej. Ta sama dosłowna kwota trafia do klucza `advertised_comp` w Machine Summary (patrz format reportu).

## Blok E -- Plan personalizacji

| # | Sekcja | Stan obecny | Proponowana zmiana | Uzasadnienie |
|---|---------|---------------|--------------------|---------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 zmian w CV + Top 5 zmian na LinkedIn, aby zmaksymalizować dopasowanie.

## Blok F -- Plan rozmów kwalifikacyjnych

6-10 historii STAR+R zmapowanych na wymagania oferty (STAR + **Reflection**):

| # | Wymaganie z oferty | Historia STAR+R | S | T | A | R | Reflection |
|---|---------------------|--------------|---|---|---|---|------------|

Kolumna **Reflection** ujmuje, czego się nauczono lub co zrobiono by inaczej. To sygnalizuje seniority -- juniorzy opisują, co się wydarzyło, seniorzy wyciągają z tego wnioski.

**Story Bank:** Jeśli `interview-prep/story-bank.md` istnieje, sprawdź, czy te historie już tam są. Jeśli nie, dodaj nowe. Z czasem buduje to wielokrotnego użytku bank 5-10 historii master, które można dopasować do każdego pytania na rozmowie.

**Wyselekcjonowane i sformowane według archetypu:**
- Prawnik kancelaryjny -- Transakcyjny -> podkreśl prowadzenie transakcji, samodzielność w dokumentacji, zarządzanie wyspecjalizowanymi wątkami
- Prawnik kancelaryjny -- Spory i Litigation -> podkreśl strategię procesową, wygrane wnioski/pisma, rozprawy, warsztat pisarski pod presją
- In-House Counsel -- Produkt / Handlowy / Ochrona danych -> podkreśl umożliwianie biznesu ("bezpieczne tak"), zarządzanie wolumenem, doradztwo cross-funkcyjne
- Compliance i Regulatory -> podkreśl budowę programu, kontakty z regulatorem, prowadzone postępowania wyjaśniające
- Sektor publiczny / Interes publiczny -> podkreśl wolumen spraw, osąd w warunkach ograniczonych zasobów, zaangażowanie misyjne
- Legal Tech / Legal Engineer -> podkreśl przekładanie wiedzy prawniczej na decyzje produktowe/workflow, metryki adopcji

Dołącz także:
- 1 rekomendowaną reprezentatywną sprawę/transakcję (którą sprawę/transakcję z arkusza transakcji lub listy spraw zaprezentować i jak, w granicach poufności)
- Pytania red-flag i jak na nie odpowiadać (np. "dlaczego odchodzi Pan/Pani z kancelarii?", "dlaczego nie awansował/a Pan/Pani na partnera?", "jaka jest Pana/Pani historia godzin rozliczeniowych?", "dlaczego in-house / dlaczego z powrotem do kancelarii?")

## Blok G -- Legitymacja ogłoszenia

Przeanalizuj ogłoszenie pod kątem sygnałów wskazujących, czy to realne, aktywne stanowisko. To pomaga kandydatowi priorytetyzować czas na okazje z największą szansą na realny proces rekrutacyjny. Blok G NIE wpływa na wynik 1-5 -- to osobna, jakościowa ocena.

**Trzy poziomy:**
- **Wysoka pewność** -- realne, aktywne stanowisko (większość sygnałów pozytywnych)
- **Zachowaj ostrożność** -- mieszane sygnały, warte odnotowania
- **Podejrzane** -- wiele sygnałów ghost-jobu, kandydat powinien zbadać temat przed zainwestowaniem czasu

**Ramowanie etyczne (OBOWIĄZKOWE):** Prezentuj obserwacje, nie oskarżenia. Każdy sygnał ma uzasadnione wyjaśnienia. Kandydat decyduje, jak je ważyć.

### Sygnały do analizy:

**1. Aktualność ogłoszenia** (ze snapshotu Playwright z bramki aktualności lub Kroku 0.5 `auto-pipeline`; niedostępne, jeśli wklejono tylko tekst oferty):
- Data publikacji lub "X dni temu"
- Stan przycisku aplikowania (aktywny / zamknięty / brak / przekierowanie na generyczną stronę)
- Jeśli URL przekierował na generyczną stronę kariery, odnotuj to

**2. Jakość opisu** (z tekstu oferty):
- Czy nazywa konkretne praktyki, typy spraw/transakcji, sądy/regulatorów?
- Czy wspomina wielkość zespołu, linię raportowania (kto jest szefem działu prawnego/liderem praktyki)?
- Czy wymagania są realistyczne (pasmo stażu vs opisane obowiązki)?
- Czy jest jasny zakres na pierwsze 6-12 miesięcy?
- Czy wynagrodzenie jest wspomniane? (Pamiętaj: brak widełek jest normą w kancelariach)
- Jaki procent ogłoszenia to treść specyficzna dla roli vs boilerplate?
- Są jakieś wewnętrzne sprzeczności? (pasmo juniorskie + obowiązki na poziomie senior counsel, tytuł "prawnik" + oczekiwania BD na poziomie partnera itp.)

**3. Sygnały zatrudnieniowe firmy** (z pozostałych zapytań ograniczonego budżetu researchu, połącz z researchem z Bloku D):
- Wyszukaj: `"{firma}" zwolnienia grupowe {rok}` -- odnotuj datę, skalę, działy
- Wyszukaj: `"{firma}" wstrzymanie rekrutacji {rok}`
- Jeśli znaleziono zwolnienia: czy dotyczą tego samego działu co ta rola?

**4. Wykrycie powtórek** (z `scan-history.tsv`):
- Sprawdź, czy firma + podobny tytuł roli pojawiały się już wcześniej pod innym URL-em
- Odnotuj ile razy i w jakim okresie

**5. Kontekst rynkowy roli** (jakościowe, bez dodatkowych zapytań):
- Czy to popularna rola, która zwykle obsadza się w 4-6 tygodni?
- Czy rola ma sens dla profilu biznesowego tej firmy?
- Czy poziom seniority legitymnie zajmuje więcej czasu na obsadzenie?

**6. Sygnały prawnicze specyficzne dla rynku** (z tekstu oferty plus zebrany research -- bez dodatkowych zapytań):

- **Ogłoszenia agencji "kancelaria poufna":** agencje kontyngentowe często publikują poufne ogłoszenia, żeby "łowić" CV bez realnego mandatu. Poufne ogłoszenie agencji nie jest automatycznie fałszywe -- ale bez nazwanego pracodawcy, pasma stażu i konkretnej praktyki, waż to jako sygnał niepokojący. Aktywny kontakt od nazwanego rekrutera z konkretnym mandatem to sygnał przeciwny -- pozytywny.
- **"Młyny" obsługi masowej (doc review / obsługa dokumentów) publikowane jako "prawnik":** słowa kluczowe "przegląd dokumentów", "projekt eDiscovery", "umowa na projekt"; stawka godzinowa; agencja jako formalny pracodawca. To realne ogłoszenia, ale nie kariery laterale -- oznacz, żeby kandydat nie oceniał ich jako oferty rozwojowe.
- **Ta sama rola publikowana przez 3+ rekruterów:** firma "sprzedaje" mandat na rynku kontyngentowym. Rola jest realna, ale proces będzie chaotyczny -- a reguła blokady źródła (patrz `_shared.md`) sprawia, że wybór kanału jest kluczowy. Sprawdź `data/scan-history.tsv` i pola `via=` w trackerze przed jakimkolwiek zgłoszeniem.
- **Płatne "usługi pośrednictwa":** legalni rekruterzy prawniczy ZAWSZE są opłacani przez pracodawcę i nigdy nie pobierają opłat od kandydata. Każde ogłoszenie lub kontakt proszący kandydata o opłatę za pośrednictwo, rejestrację lub "marketing" to sygnał oszustwa -- oznacz jako Podejrzane.

### Format wyjścia:

**Ocena:** jeden z trzech poziomów (Wysoka pewność / Zachowaj ostrożność / Podejrzane).

**Tabela sygnałów:** każdy zaobserwowany sygnał z ustaleniem i wagą (Pozytywny / Neutralny / Niepokojący).

**Notatki kontekstowe:** wszelkie zastrzeżenia (rola niszowa, stanowisko publiczne, pozycja evergreen itp.), które wyjaśniają potencjalnie niepokojące sygnały.

### Obsługa przypadków szczególnych:
- **Ogłoszenia sektora publicznego/akademickiego:** dłuższe terminy są standardem. Dostosuj progi (60-90 dni to norma).
- **Pozycje evergreen/ciągłego naboru:** jeśli ogłoszenie wprost mówi "nabór ciągły" lub "rekrutacja ciągła", odnotuj to jako kontekst -- to nie ghost job, to rola pipeline'owa.
- **Role niszowe/wykonawcze:** GC/dyrektor działu prawnego, poziom partnerski lub wysoce wyspecjalizowane role (np. finansowanie funduszy, rzecznictwo patentowe w wąskiej dziedzinie) legitymnie pozostają otwarte miesiącami. Dostosuj progi wieku.
- **Startup/wczesny etap:** wczesne firmy mogą mieć niedoprecyzowane ogłoszenia, bo rola jest faktycznie niedookreślona. Waż niejasność opisu mniej surowo.
- **Brak dostępnej daty:** jeśli wieku ogłoszenia nie da się ustalić i inne sygnały nie budzą niepokoju, domyślnie ustaw "Zachowaj ostrożność" z notatką o ograniczonych danych. NIGDY nie ustawiaj domyślnie "Podejrzane" bez dowodów.
- **Rekrutacja przez headhuntera (bez publicznego ogłoszenia):** sygnały aktualności niedostępne. Odnotuj, że aktywny kontakt od rekrutera sam w sobie jest pozytywnym sygnałem legitymacji.

---

## Szkic listu motywacyjnego (auto-generowany po Bloku G)

Po zapisaniu reportu i zarejestrowaniu w trackerze, dołącz szkic listu motywacyjnego do pliku reportu pod `## Szkic listu motywacyjnego`. To punkt wyjścia -- nie ostateczny list. Kandydat dopracowuje go przez `/career-ops cover {slug}`, jeśli ten tryb jest dostępny.

Zastosuj wszystkie reguły językowe z `_shared.md` -- Reguły globalne do treści szkicu. Bez korporacyjnego żargonu, strona czynna, tylko konkretne, sprawdzalne twierdzenia.

---

## Po ocenie

**ZAWSZE** wykonaj po blokach A-G:

### 1. Zapisz report .md

Zapisz pełną ocenę w `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = następny kolejny numer (3 cyfry, dopełnione zerami). Aby przydzielić go atomowo i uniknąć race conditions, musisz uruchomić `node reserve-report-num.mjs`, by zarezerwować numer (stdout zwraca `{###}`), zapisać report, a następnie uruchomić `node reserve-report-num.mjs --release {###}`, by zwolnić sentinel.
- `{company-slug}` = nazwa firmy małymi literami, bez spacji (użyj myślników)
- `{YYYY-MM-DD}` = dzisiejsza data
- **Ogłoszenie przez agencję z nieujawnionym pracodawcą docelowym:** slug to `confidential-{agencja-slug}` (np. `042-confidential-antal-2026-07-06.md`). Plik NIGDY nie jest przemianowywany po ujawnieniu pracodawcy -- zaktualizuj tytuł/nagłówek/YAML zamiast tego.

**Format reportu:**

```markdown
# Ocena: {Firma} -- {Rola}

**Data:** {YYYY-MM-DD}
**URL:**
**Via:** {agencja/kancelaria rekrutacyjna, lub -- dla aplikacji bezpośredniej}
**Archetyp:** {wykryty}
**Score:** {X/5}
**Legitymacja:** {Wysoka pewność | Zachowaj ostrożność | Podejrzane}
**PDF:** {ścieżka lub w toku}

---

## Machine Summary
(blok YAML dla skryptów downstream -- patrz wymóg poniżej)

## A) Podsumowanie roli
(pełna zawartość bloku A)

## B) Dopasowanie do CV
(pełna zawartość bloku B)

## C) Poziom i strategia
(pełna zawartość bloku C)

## D) Wynagrodzenie i popyt
(pełna zawartość bloku D)

## E) Plan personalizacji
(pełna zawartość bloku E)

## F) Plan rozmów kwalifikacyjnych
(pełna zawartość bloku F)

## G) Legitymacja ogłoszenia
(pełna zawartość bloku G)

## H) Szkice odpowiedzi do aplikacji
(tylko jeśli score >= 4.5 -- szkice odpowiedzi do formularza aplikacyjnego)

---

## Wyekstrahowane słowa kluczowe
(lista 15-20 słów kluczowych z oferty do optymalizacji ATS)
```

**Machine Summary (wymagane):** każdy report zawiera blok YAML `## Machine Summary` bezpośrednio po nagłówku -- ten sam schemat i nazwy pól co blok "Machine Summary" w `batch/batch-prompt.md` (nie duplikuj tu schematu -- ten plik jest źródłem prawdy). Zawiera `advertised_comp`: własną, dosłowną kwotę z ogłoszenia (np. `"18-24k PLN B2B"`), albo `null`, gdy ogłoszenie nic nie podaje -- nigdy nie szacuj, nigdy nie zastępuj zbadanymi danymi rynkowymi.

### 2. Zapisz w trackerze

**ZAWSZE** zapisz w `data/applications.md`:
- Następny kolejny numer
- Dzisiejsza data
- Firma -- KOŃCOWY pracodawca. Jeśli ogłoszenie jest przez agencję ("nasz klient", domena agencji, brak nazwanego pracodawcy), ZAPYTAJ kandydata, przez którą agencję to przyszło, użyj `?` jako Firma, i dodaj wyróżniający opis w Notatkach. Nigdy nie pisz "Poufne" -- znacznik `?` jest niezależny od języka i nie koliduje z żadną realną firmą
- Via (jeśli tracker ma tę kolumnę) -- agencja/kancelaria rekrutacyjna, `—` dla aplikacji bezpośredniej
- Rola
- Score: średnia dopasowania (1-5)
- Status: `Evaluated`
- PDF: ❌ (lub ✅, jeśli auto-pipeline wygenerował PDF)
- Report: link względny do korzenia repo `[001](reports/001-company-2026-01-01.md)`

**Format trackera:**

```markdown
| # | Data | Firma | Rola | Score | Status | PDF | Report | Notatki |
```

Z opcjonalną kolumną Via (kanał pośredni) po Firmie:

```markdown
| # | Data | Firma | Via | Rola | Score | Status | PDF | Report | Notatki |
```

### 3. Obserwacje wynagrodzeniowe (wyłącznie oczekiwania kandydata)

Jeśli -- i tylko jeśli -- kandydat WPROST podał w rozmowie konkretną, specyficzną dla TEJ aplikacji oczekiwaną kwotę ("tutaj poprosiłbym o 18k"), dopisz jedną linię `desired` (źródło `user`) do `data/salary-observations.tsv` (utwórz plik, jeśli nie istnieje):

```text
{tracker#}\t{YYYY-MM-DD}\tdesired\t{kwota}\t{waluta}\tuser\t{krótka notatka kontekstowa}
```

Nigdy nie wywnioskuj oczekiwanej kwoty z oferty, wyniku ani wcześniejszych rozmów.
