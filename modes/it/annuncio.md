# Modalità: annuncio -- Valutazione completa A-F

Quando il candidato incolla o fornisce un annuncio di lavoro (testo o URL), fornire SEMPRE i 6 blocchi di valutazione.

## Blocco 0 -- Rilevamento dell'archetipo

Classificare l'annuncio in uno dei 6 archetipi di riferimento (vedi `_shared.md` -> North Star): Avvocato Associato -- Societario/M&A, Avvocato Associato -- Contenzioso e Arbitrati, Giurista d'Impresa -- Contrattualistica/Privacy (in-house), Compliance e Affari Regolamentari, Avvocatura Pubblica / Interesse Pubblico, Legal Tech / Legal Engineer. Se è un ruolo ibrido, indicare i 2 archetipi più vicini. Questa classificazione determina:
- Quali proof point prioritizzare nel Blocco B
- Come riformulare il summary del CV nel Blocco E
- Quali storie STAR preparare nel Blocco F

## Blocco 0.5 -- Filtri di ammissibilità (hard gates) e verifica del canale

Prima di assegnare qualsiasi punteggio, verificare i **filtri di ammissibilità legale** (vedi `_shared.md` -> "Filtri di ammissibilità legale") rispetto al blocco `legal:` di `config/profile.yml`: abilitazione forense/iscrizione all'albo (rigoroso per gli studi, diverso per l'in-house -- vedi la nota sull'elenco speciale), anzianità (praticantato/anni post-abilitazione) rispetto alla banda dell'annuncio, qualifica di Consulente in Proprietà Industriale per i ruoli di deposito/prosecuzione brevetti e marchi, e rischio conflitti per ruoli senior/socio. Un gate fallito va riportato in una tabella pass/fail in cima al Blocco B e deve limitare la raccomandazione finale, indipendentemente da quanto sia buono il match sul resto.

Se l'annuncio è di uno studio legale, verificare anche il **canale del recruiter** (`_shared.md` -> "Canale del recruiter"): se `legal.recruiter_channel` o i campi `via=` del tracker indicano che un recruiter è già incaricato per questo studio, avvisare il candidato prima di procedere con una candidatura diretta.

## Blocco A -- Riepilogo del ruolo

Tabella con:
- Archetipo rilevato
- Settore (Societario / Contenzioso / In-house / Compliance / Pubblico / Legal Tech)
- Funzione (Consulenza / Negoziazione / Contenzioso / Gestione programma / Costruzione prodotto legal-tech)
- Seniority (anno di praticantato o anni post-abilitazione, oppure livello per l'in-house: Giurista -> Senior Counsel -> Responsabile Affari Legali -> Direttore Legale/GC)
- Localizzazione (Full remote / Ibrido / In sede)
- Dimensione del team (se menzionata)
- TL;DR in una sola frase

## Blocco B -- Corrispondenza con il CV

Leggere `cv.md`. Creare una tabella che mappa ogni requisito dell'annuncio su righe esatte del CV. Riportare qui, in cima, la tabella pass/fail dei filtri di ammissibilità del Blocco 0.5.

**Adattamento per archetipo:**
- Societario/M&A -> priorità al deal sheet all'anzianità corretta: tipologie di operazione, valore, ownership della redazione, gestione di workstream specialistici
- Contenzioso/Arbitrati -> priorità all'esperienza "sul campo": deposizioni/udienze condotte, memorie/atti scritti e vinti, ruoli in giudizio/arbitrato, qualità della scrittura
- In-house (Contrattualistica/Privacy) -> priorità al volume di contratti gestiti (SaaS/MSA/DPA), consulenza cross-funzionale, ampiezza regolamentare, comunicazione con interlocutori non giuristi
- Compliance e Regolamentare -> priorità ai regimi normativi nominati (231, AML, privacy), esperienza con autorità/regulator, investigazioni condotte, ownership di programmi
- Avvocatura Pubblica / Interesse Pubblico -> priorità al volume di udienze/procedimenti, esperienza in giudizio/appello, impegno dimostrato verso l'interesse pubblico (clinica legale, tirocini, volontariato)
- Legal Tech / Legal Engineer -> priorità a pedigree di studio/settore UNITO a reale fluenza prodotto/IA: playbook costruiti, workflow automatizzati, progetti legal-tech

Aggiungere una sezione **Gap** con strategia di mitigazione per ogni lacuna rilevata:
1. È un blocco insormontabile o un nice-to-have?
2. Il candidato può dimostrare un'esperienza affine o complementare?
3. C'è un progetto/pubblicazione che copre questa lacuna?
4. Piano di mitigazione concreto (es. frase per la lettera di presentazione, angolo da preparare per il colloquio, ecc.)

## Blocco C -- Inquadramento e strategia

1. **Livello rilevato** nell'annuncio rispetto al **livello naturale del candidato** per questo archetipo -- per gli studi legali è il confronto per anzianità (banda di praticantato/anni post-abilitazione, vedi hard gate); per l'in-house è la scala dei titoli (Giurista -> Senior Counsel -> Responsabile Affari Legali -> Direttore Legale/General Counsel), dove **il titolo è la leva sulla retribuzione**.
2. **Piano "valorizzare la seniority senza esagerare"**: formulazioni specifiche per l'archetipo, deal/procedimenti concreti da evidenziare, come posizionare la formazione in studio, clerkship o esperienza presso un'autorità come valore aggiunto.
3. **Piano "se proposto per un livello inferiore (downlevel)"**: per gli studi, la ricreditazione dell'anzianità è negoziabile di ±1 anno in fase di offerta (a volte un anno in meno compra tempo per la corsa a socio); per l'in-house, negoziare prima il titolo/livello (es. Senior Counsel vs Giurista) e poi il fisso, perché il target di bonus % e la banda di equity seguono il titolo.

## Blocco D -- Retribuzione e mercato

Usare WebSearch per raccogliere, dalle fonti canoniche del mercato legale italiano (vedi `_shared.md` -> "Intelligence sulle retribuzioni"):
- Guide salariali di recruiter specializzati (Michael Page, Robert Half, Hays) per il ruolo e l'anzianità
- Reputazione retributiva dell'azienda/studio (recensioni online, network di settore)
- Andamento della domanda per questo ruolo sul mercato italiano

Presentare i dati in tabella con le fonti. Se non ci sono dati, dichiararlo esplicitamente -- non inventare. **Il silenzio sulla retribuzione è la norma per gli annunci degli studi legali italiani e non è di per sé un segnale d'allarme.**

**Mercato italiano -- Verifiche obbligatorie:**
- Abilitazione forense/iscrizione all'albo richiesta e anzianità dichiarata coerenti con `legal.bar_admissions` e `legal.class_year` (vedi Blocco 0.5)?
- Se il ruolo riguarda deposito/prosecuzione di brevetti o marchi: è richiesta la qualifica di Consulente in Proprietà Industriale? Coerente con `legal.patent_bar`?
- La tredicesima / quattordicesima è menzionata? Includerla nel calcolo della RAL.
- È prevista una parte variabile (bonus, MBO, partecipazione utili)?
- Quale CCNL viene applicato (es. Studi Professionali, Commercio/Terziario per l'in-house)? Verificare inquadramento e livello contrattuale proposto (es. Quadro).
- Contratto a tempo indeterminato o determinato? Se determinato: durata, motivazione e possibilità di conversione.
- Libero Professionista (Partita IVA)? Tariffa, durata della collaborazione e rischio di contestazione per "falsa Partita IVA" (vincoli di orario e sede).

## Blocco E -- Piano di personalizzazione

| # | Sezione | Stato attuale | Modifica proposta | Giustificazione |
|---|---------|---------------|-------------------|--------------------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Fornire le 5 modifiche principali al CV + le 5 modifiche principali al profilo LinkedIn per massimizzare il match con l'annuncio.

## Blocco F -- Piano dei colloqui

6-10 storie in formato STAR+R mappate sui requisiti dell'annuncio (STAR + **Reflection**):

| # | Requisito dell'annuncio | Storia STAR+R | S | T | A | R | Reflection |
|---|-------------------------|---------------|---|---|---|---|------------|

La colonna **Reflection** cattura cosa si è imparato o cosa si farebbe diversamente. Questo elemento segnala seniority: i profili junior descrivono cosa è successo, i senior ne traggono insegnamenti e linee guida.

**Story Bank:** Se `interview-prep/story-bank.md` esiste, verificare se le storie sono già presenti. In caso contrario, aggiungerle. Con il tempo si costruisce un archivio riutilizzabile di 5-10 storie principali adattabili a qualsiasi colloquio.

**Storie inquadrate per archetipo:**
- Societario/M&A -> evidenziare esecuzione dell'operazione, ownership della redazione, gestione di workstream specialistici
- Contenzioso/Arbitrati -> evidenziare strategia di causa, memorie vinte, deposizioni/udienze, scrittura sotto pressione
- In-house (Contrattualistica/Privacy) -> evidenziare l'abilitazione del business ("dire sì in modo sicuro"), gestione dei volumi, consulenza cross-funzionale
- Compliance e Regolamentare -> evidenziare costruzione di programmi, rapporti con le autorità, investigazioni condotte
- Avvocatura Pubblica / Interesse Pubblico -> evidenziare volume di udienze, giudizio sotto vincoli di risorse, impegno verso la missione
- Legal Tech / Legal Engineer -> evidenziare la traduzione di competenza giuridica in decisioni di prodotto/workflow, metriche di adozione

Includere anche:
- 1 procedimento/operazione rappresentativo raccomandato (quale deal o causa presentare dal deal sheet/matters list, e con quale struttura, nel rispetto della riservatezza)
- Domande a rischio (red flag) e come rispondere (es. "Perché lascia lo studio?", "Perché non è diventato socio (equity o salary partner)?", "Qual è il suo storico di ore fatturabili?", "Perché in-house dopo lo studio (o perché tornare in studio dopo l'in-house)?")

---

## Post-valutazione

Eseguire **SEMPRE** dopo i blocchi A-F:

### 1. Salvare il report .md

Salvare la valutazione completa in `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = prossimo numero sequenziale a 3 cifre, zero-padded. Allocarlo in modo atomico eseguendo `node reserve-report-num.mjs` (restituisce `{###}` su stdout), scrivere il report, poi eseguire `node reserve-report-num.mjs --release {###}` per liberare la prenotazione.
- `{company-slug}` = nome dell'azienda in minuscolo senza spazi (usare i trattini)
- `{YYYY-MM-DD}` = data odierna

**Formato del report:**

```markdown
# Valutazione: {Azienda} -- {Ruolo}

**Data:** {YYYY-MM-DD}
**Archetipo:** {rilevato}
**Punteggio:** {X/5}
**URL:** {URL dell'annuncio}
**PDF:** {percorso del file o in attesa}

---

## A) Riepilogo del ruolo
(contenuto completo del blocco A)

## B) Corrispondenza con il CV
(contenuto completo del blocco B)

## C) Inquadramento e strategia
(contenuto completo del blocco C)

## D) Retribuzione e mercato
(contenuto completo del blocco D)

## E) Piano di personalizzazione
(contenuto completo del blocco E)

## F) Piano dei colloqui
(contenuto completo del blocco F)

## G) Bozze di risposta per la candidatura
(solo se punteggio >= 4.5 -- risposte pronte per i moduli del portale aziendale)

---

## Parole chiave estratte
(15-20 parole chiave estratte dall'annuncio per il superamento dei filtri ATS)
```

### 2. Registrare nel tracker

Registrare **SEMPRE** la valutazione in `data/applications.md`:
- Prossimo numero sequenziale
- Data odierna
- Azienda
- Ruolo
- Punteggio: media del match (da 1 a 5)
- Stato: `Evaluated`
- PDF: no (o sì se l'auto-pipeline ha generato il PDF direttamente)
- Report: link relativo al file del report (es: `[001](reports/001-azienda-2026-01-01.md)`)

**Formato del tracker:**

```markdown
| # | Data | Azienda | Ruolo | Punteggio | Stato | PDF | Report |
```
