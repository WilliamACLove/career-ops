# Modus: angebot — Vollständige Bewertung A-F

Wenn der Kandidat eine Stellenanzeige einfügt (Text oder URL), IMMER alle 6 Blöcke liefern.

## Schritt 0 — Archetyp-Erkennung

Die Stellenanzeige einem der 6 Archetypen zuordnen (siehe `_shared.md`: Kanzlei-Associate — Transaktion & Gesellschaftsrecht, Kanzlei-Associate — Litigation & Streitbeilegung, Unternehmensjurist:in — Produkt/Commercial/Datenschutz, Compliance & Regulatorik, Behörden-/Öffentlicher-Dienst-Jurist:in, Legal Tech / Legal Engineer). Bei Hybriden die zwei nächstliegenden angeben. Daraus folgt:
- Welche Proof Points in Block B Vorrang haben
- Wie das Summary in Block E umgeschrieben wird
- Welche STAR-Stories in Block F vorbereitet werden

## Schritt 0.5 — Rechtliche Hard Gates (bestehen/durchfallen, nie stillschweigend weggemittelt)

Vor jeder Gewichtung die Stellenanzeige gegen den `legal:`-Block in `config/profile.yml` des Kandidaten prüfen. Diese Prüfungen sind strukturelle Filter, kein gewichteter Faktor — ein nicht bestandenes Gate MUSS explizit in der Red-Flags-Dimension UND in der Abschlussempfehlung erscheinen. Ein guter Lebenslauf-Match darf ein nicht bestandenes Gate nie stillschweigend übertünchen.

1. **Zulassung / Befugnis** — Stellenanzeigen-Standort gegen `legal.bar_admissions` (bzw. das deutsche Äquivalent) abgleichen. Strenge-Leiter anwenden:
   - **Kanzleien: streng.** US-/UK-Häuser in Deutschland erwarten faktisch ein Prädikatsexamen (ab "vollbefriedigend"); traditionelle deutsche Kanzleien sind hier weicher, verlangen aber i. d. R. die Befähigung zum Richteramt (beide Staatsexamina).
   - **Inhouse: moderat.** Relevanter Prüfpunkt ist die Zulassung als Syndikusrechtsanwalt:anwältin (arbeitgeberbezogen, bei der zuständigen Rechtsanwaltskammer zu beantragen) — als Hinweis auf einen zu erledigenden Verwaltungsschritt vermerken, nicht als Blocker werten.
   - **Öffentlicher Dienst und Legal Tech: minimal.** Meist genügt die Befähigung zum Richteramt ohne weiteren Zulassungsschritt.
2. **Berufserfahrung / PQE-Band** — nennt die Stellenanzeige ein PQE- oder Berufsjahr-Band (z. B. "3-5 Jahre PQE", "Associate ab 2. Examen mit 4+ Jahren Erfahrung"), mit `legal.class_year` (bzw. dem deutschen Äquivalent) abgleichen. Außerhalb des Bands bei einer internationalen Kanzlei: nahezu automatische Absage → von der Bewerbung eher abraten. Bei deutschen Kanzleien mehr Verhandlungsspielraum einkalkulieren.
3. **Patentanwalt:anwältin** — erfordert eine eigenständige Zulassung nach der Patentanwaltsordnung (technisches Studium + patentanwaltliche Ausbildung), getrennt von der Rechtsanwaltszulassung. Fordert die Stellenanzeige diese Qualifikation und liegt `legal.patent_bar` (bzw. das deutsche Äquivalent) beim Kandidaten nicht vor: Hard Gate. Marken-/Urheberrecht und reine IP-Litigation benötigen sie nicht.
4. **Konflikte (Senior-/Partner-Rollen)** — jedes Lateral-Angebot auf Senior-/Partner-Ebene steht unter dem Vorbehalt der Mandantenkonfliktprüfung. Im Report vermerken, nicht bewerten.

Die Gate-Ergebnisse als kurze Bestehen/Durchfallen-Tabelle am Anfang von Block B ausgeben.

## Block A — Rollen-Zusammenfassung

Tabelle mit:
- Erkannter Archetyp
- Domain (Transaktion / Litigation / Inhouse / Compliance / Behörden / Legal Tech)
- Funktion (Beraten / Verhandeln / Prozessieren / Führen / Bauen)
- Seniorität (Berufsjahr/PQE-Band bei Kanzleien, Titel-Stufe bei Inhouse — Counsel → Senior Counsel → AGC/stv. Chefjustiziar:in → Chefjustiziar:in/General Counsel)
- Remote (Vollremote / Hybrid / Vor Ort)
- Teamgröße (falls erwähnt)
- TL;DR in einem Satz

## Block B — Match mit dem Lebenslauf

`cv.md` lesen. Tabelle erstellen, in der jede Anforderung aus der Stellenanzeige auf exakte Zeilen aus dem Lebenslauf gemappt wird.

**Angepasst an den Archetyp:**
- Transaktion (Kanzlei) → Dealsheet-Erfahrung im passenden Berufsjahr priorisieren: Deal-Typen, Deal-Volumen, Federführung bei der Dokumentation
- Litigation (Kanzlei) → Stand-up-Erfahrung priorisieren: Schriftsätze, mündliche Verhandlung, Beweisaufnahme, Prozessstrategie
- Unternehmensjurist:in (Produkt/Commercial/Datenschutz) → Vertragsvolumen (SaaS/MSA/AVV), bereichsübergreifende Beratung, verständliche Kommunikation mit Nicht-Jurist:innen priorisieren
- Compliance & Regulatorik → benannte Regelwerke (GwG, BaFin-Vorgaben, DSGVO), Regulierer-Kontakt, geführte Untersuchungen priorisieren
- Behörden / Öffentlicher Dienst → Verfahrens-/Prozessvolumen, Verwaltungserfahrung, nachgewiesenes Engagement im öffentlichen Interesse priorisieren
- Legal Tech / Legal Engineer → erstklassige fachliche Prägung PLUS echte Produkt-/KI-Affinität priorisieren: gebaute Playbooks, automatisierte Workflows, Legal-Tech-Nebenprojekte

Abschnitt **Lücken (Gaps)** mit Mitigationsstrategie für jede einzelne. Pro Gap:
1. Ist das ein Hard Blocker oder ein Nice-to-have?
2. Kann der Kandidat angrenzende Erfahrung nachweisen?
3. Gibt es eine Publikation oder ein Nebenprojekt, das diesen Gap abdeckt?
4. Konkreter Mitigationsplan (Satz fürs Anschreiben, gezielte Fortbildung, etc.)

## Block C — Level und Strategie

1. **Erkanntes Level** in der Stellenanzeige (Berufsjahr/PQE-Band bei Kanzleien, Titel-Leiter bei Inhouse) vs **natürliches Level des Kandidaten für diesen Archetyp** — bei Inhouse ist der Titel der Vergütungshebel (Counsel → Senior Counsel → AGC → Chefjustiziar:in)
2. **Plan "Senior verkaufen, ohne zu lügen"**: konkrete Formulierungen, an den Archetyp angepasst, konkrete Mandate/Verfahren zum Hervorheben, wie Kanzlei-Ausbildung, Referendariatsstationen oder Regulierer-Erfahrung als Vorteil positioniert werden
3. **Plan "Wenn ich downgelevelt werde"**: bei Kanzleien ist die Berufsjahr-Neueinstufung um ±1 Jahr beim Angebot verhandelbar (manchmal kauft ein Jahr weniger mehr Partnerschafts-Perspektive); bei Inhouse zuerst um das Level/den Titel kämpfen (Senior Counsel vs. Counsel), bevor über Gehalt verhandelt wird — Bonusziel-% und Beteiligungsband folgen dem Titel

## Block D — Vergütung und Nachfrage

WebSearch nutzen für, gestaffelt nach Arbeitgebertyp:
- **Kanzleien:** JUVE Rechtsmarkt / JUVE-Gehaltsreport, azur-Kanzlienranking (azur100), Kanzleimonitor (Universum), beck-stellenmarkt und LTO-Karriere für Marktkommentare. Faustregel: Mittelstands-/Regionalkanzleien liegen meist bei 60-80 % der Großkanzlei-Einstiegsgehälter, mit eher diskretionären statt fixen Boni.
- **Unternehmensjurist:innen (Inhouse):** Gehaltsreport des BUJ (Bundesverband der Unternehmensjuristen) als Anhaltspunkt.
- **Öffentlicher Dienst:** Besoldungstabellen (A-Besoldung) von Bund/Ländern, TVöD-Entgelttabellen.
- **Nur als grobe, nicht rechtsmarktspezifische Orientierung:** Gehalt.de, StepStone-Gehaltsreport, Kununu — mit Vorsicht behandeln.
- Nachfrage-Trend für die Rolle/Praxisgruppe im DACH-Markt

Tabelle mit Daten und zitierten Quellen. Wenn keine Daten gefunden werden, das offen sagen — nichts erfinden. Fehlende Gehaltsangabe bei Kanzlei-Stellenanzeigen ist normal ("attraktive Vergütung" ist Marktstandard) und für sich genommen kein Warnsignal.

**Deutscher Markt — Pflichtchecks:**
- 13. Monatsgehalt / Weihnachtsgeld erwähnt? In die Brutto-Berechnung einrechnen.
- Variable Anteile (Bonus, oft an abrechenbare Stunden/Billable Hours gekoppelt bei Kanzleien; Provision, RSUs / VSOP bei Inhouse)?
- VWL und bAV erwähnt?
- Tarifvertrag (TVöD, IG Metall) im Spiel? Wenn ja, Verhandlungsspielraum kleiner — dafür mehr Sicherheit.
- Festanstellung oder Freelance/Interim-Mandat? Bei Freelance: Tagessatz, Scheinselbstständigkeits-Risiko prüfen.

## Block E — Personalisierungs-Plan

| # | Abschnitt | Aktueller Stand | Vorgeschlagene Änderung | Begründung |
|---|-----------|-----------------|-------------------------|------------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 Änderungen am Lebenslauf + Top 5 Änderungen am LinkedIn-Profil, um den Match zu maximieren.

## Block F — Vorstellungsgesprächs-Plan

6-10 STAR+R-Stories, gemappt auf Anforderungen der Stellenanzeige (STAR + **Reflection**):

| # | JD-Anforderung | STAR+R-Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|

Die Spalte **Reflection** erfasst, was gelernt wurde oder was man heute anders machen würde. Das signalisiert Seniorität — Junior-Kandidaten beschreiben, was passiert ist; Senior-Kandidaten ziehen Lehren daraus.

**Story Bank:** Wenn `interview-prep/story-bank.md` existiert, prüfen, ob die Stories schon dort stehen. Falls nicht, neue ergänzen. Mit der Zeit entsteht so eine wiederverwendbare Bank von 5-10 Master-Stories, die sich an jede Frage im Vorstellungsgespräch anpassen lassen.

**Ausgewählt und an den Archetyp angepasst:**
- Transaktion (Kanzlei) → Deal-Durchführung, Federführung bei der Dokumentation, Steuerung von Spezialisten-Workstreams betonen
- Litigation (Kanzlei) → Verfahrensstrategie, gewonnene Anträge, Beweisaufnahme, Schreiben unter Druck betonen
- Unternehmensjurist:in → Business-Enablement ("sicher zum Ja kommen"), Volumen-Management, bereichsübergreifende Beratung betonen
- Compliance & Regulatorik → Programmaufbau, Regulierer-Kontakt, geführte Untersuchungen betonen
- Behörden / Öffentlicher Dienst → Verfahrensvolumen, Urteilsvermögen unter Ressourcenknappheit, Engagement für den öffentlichen Auftrag betonen
- Legal Tech / Legal Engineer → Übersetzung von Praxiswissen in Produkt-/Workflow-Entscheidungen, Adoptionskennzahlen betonen

Außerdem aufnehmen:
- 1 empfohlenes Referenzmandat (welches Deal/Verfahren vom Dealsheet bzw. von der Matters-Liste vorgestellt wird und wie, unter Wahrung der Mandatsvertraulichkeit)
- Red-Flag-Fragen und wie man darauf antwortet (z. B. "Warum verlassen Sie Ihre Kanzlei?", "Warum sind Sie nicht Partner:in geworden?", "Wie sieht Ihre Bilanz bei abrechenbaren Stunden aus?", "Warum Inhouse / warum zurück in die Kanzlei?")

---

## Nach der Bewertung

**IMMER** nach den Blöcken A-F ausführen:

### 1. Report .md speichern

Die vollständige Bewertung in `reports/{###}-{company-slug}-{YYYY-MM-DD}.md` ablegen.

- `{###}` = nächste fortlaufende Nummer (3-stellig, mit führenden Nullen). Um diese Nummer atomar zuzuweisen und Race-Conditions zu vermeiden, MÜSSEN Sie `node reserve-report-num.mjs` ausführen, um die Nummer zu reservieren (die Ausgabe gibt `{###}` zurück), den Report schreiben und dann `node reserve-report-num.mjs --release {###}` ausführen, um den Sentinel freizugeben.
- `{company-slug}` = Firmenname in Kleinbuchstaben, ohne Leerzeichen (Bindestriche verwenden)
- `{YYYY-MM-DD}` = aktuelles Datum

**Report-Format:**

```markdown
# Bewertung: {Firma} — {Rolle}

**Datum:** {YYYY-MM-DD}
**Archetyp:** {erkannt}
**Score:** {X/5}
**URL:** {URL der Stellenanzeige}
**PDF:** {Pfad oder ausstehend}

---

## A) Rollen-Zusammenfassung
(vollständiger Inhalt von Block A)

## B) Match mit dem Lebenslauf
(vollständiger Inhalt von Block B)

## C) Level und Strategie
(vollständiger Inhalt von Block C)

## D) Vergütung und Nachfrage
(vollständiger Inhalt von Block D)

## E) Personalisierungs-Plan
(vollständiger Inhalt von Block E)

## F) Vorstellungsgesprächs-Plan
(vollständiger Inhalt von Block F)

## G) Draft-Antworten für die Bewerbung
(nur bei Score >= 4.5 — Entwürfe für die Antwortfelder im Bewerbungsformular)

---

## Extrahierte Keywords
(Liste mit 15-20 Keywords aus der Stellenanzeige für ATS-Optimierung)
```

### 2. Im Tracker eintragen

**IMMER** in `data/applications.md` eintragen:
- Nächste fortlaufende Nummer
- Aktuelles Datum
- Firma
- Rolle
- Score: Match-Durchschnitt (1-5)
- Status: `Evaluated`
- PDF: ❌ (oder ✅, wenn Auto-Pipeline ein PDF erzeugt hat)
- Report: relativer Link zur Report-Datei (z. B. `[001](reports/001-company-2026-01-01.md)`)

**Tracker-Format:**

```markdown
| # | Datum | Firma | Rolle | Score | Status | PDF | Report |
```
