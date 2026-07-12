# Mode : offre -- Evaluation complete A-G

Quand le candidat colle une offre (texte ou URL), TOUJOURS livrer les 7 blocs (evaluation A-F + G legitimite).

## Etape 0 -- Detection d'archetype

Classer l'offre dans l'un des 6 archetypes (voir `_shared.md`). Si hybride, indiquer les 2 plus proches. Cela determine :
- Quels proof points prioriser dans le bloc B
- Comment reecrire le summary dans le bloc E
- Quelles stories STAR preparer dans le bloc F

## Etape 0.5 -- Verrous durs juridiques (pass/fail, jamais dissous dans une moyenne)

Avant de noter quoi que ce soit, verifier l'offre par rapport au bloc `legal:` de `config/profile.yml` du candidat. Ce sont des filtres structurels, pas des facteurs ponderes -- un verrou en echec doit apparaitre **explicitement** dans la dimension Signaux d'alerte ET dans la recommandation finale. Ne jamais laisser un verrou en echec se dissoudre silencieusement dans un score qui parait correct par ailleurs.

1. **Admission au barreau / juridiction** -- comparer le bureau/la juridiction de l'offre au barreau d'inscription du candidat.
   - **Cabinets d'avocats : strict.** L'exercice suppose l'inscription au barreau du ressort (ou une omission/transfert realiste). Un decalage sans piste de transfert credible est un quasi-bloquant -- le dire clairement.
   - **Juridique d'entreprise : modere, et variable selon le pays.** Rappeler que le statut d'avocat et le salariat en entreprise ne sont pas toujours compatibles (le sujet evolue selon les juridictions -- rester factuel, ne pas trancher a la place du droit local) ; un juriste d'entreprise (profession distincte de l'avocat en France) n'a generalement pas cette contrainte.
   - **Secteur public et legal tech : minimal.** Un decalage de juridiction est une note de bas de page, pas un signal bloquant.
2. **Anciennete / bande de promotion** -- si l'offre indique une bande d'anciennete ou de promotion ("promotion 2021-2023", "3-5 ans d'experience"), comparer a `legal.anciennete`. En dehors de la bande sur une offre de collaborateur en cabinet : quasi-rejet automatique -- recommander de ne pas postuler, et preciser que le repositionnement de promotion ne se negocie qu'a la marge, a l'offre.
3. **CPI (Conseil en Propriete Industrielle)** -- les postes de redaction/prosecution de brevets exigent la qualification de CPI (ou de mandataire agree pres l'OEB) plus generalement un diplome technique. Si l'offre le demande et que `legal.cpi` est false, c'est un verrou bloquant.
4. **Risque de conflits (postes seniors/associes)** -- pour les postes de niveau associe ou counsel senior, noter que toute offre est conditionnee a la levee des conflits clients. Le noter ; ne pas le noter chiffrement.

Presenter les resultats des verrous sous forme de petit tableau pass/fail en tete du Bloc B. Un verrou en echec plafonne la recommandation, quelle que soit la qualite du reste du match.

## Bloc A -- Resume du role

Tableau avec :
- Archetype detecte
- Domaine (transactionnel / contentieux / juridique d'entreprise / conformite / secteur public / legal-tech)
- Fonction (conseiller / negocier / plaider / manager / construire)
- Anciennete (bande de promotion, ou niveau de titre pour le juridique d'entreprise)
- Remote (full remote / hybride / sur site)
- Taille d'equipe (si mentionnee)
- TL;DR en 1 phrase

## Bloc B -- Match avec le CV

Lire `cv.md`. Creer un tableau ou chaque prerequis de l'offre est mappe sur des lignes exactes du CV.

**Adapte a l'archetype :**
- Avocat Collaborateur -- Transactionnel -> prioriser la liste de dossiers (deal sheet) au bon niveau d'anciennete : types d'operations, tailles, redaction, pilotage de work-streams
- Avocat Collaborateur -- Contentieux -> prioriser l'experience de plaidoirie/procedure : mises en etat, conclusions redigees, dossiers plaides
- Juriste d'Entreprise -- Produit / Commercial / Donnees -> prioriser le volume de contrats negocies, le conseil transverse, la largeur reglementaire, la communication en langage simple avec des non-juristes
- Juriste Conformite & Reglementaire -> prioriser les regimes nommes (LCB-FT, RGPD, sectoriels), l'experience face aux regulateurs, les enquetes menees, la construction de programme
- Avocat Secteur Public / Interet General -> prioriser le volume de dossiers, l'experience procedurale, l'engagement demontre pour l'interet general (cliniques, associations, missions anterieures)
- Legal Engineer / Legal Tech -> prioriser un pedigree de pratique solide PLUS une vraie aisance produit/outillage -- playbooks construits, workflows automatises, projets legaltech

Section **Lacunes (Gaps)** avec strategie de mitigation pour chacune. Pour chaque lacune :
1. Est-ce un bloqueur dur ou un nice-to-have ?
2. Le candidat peut-il demontrer une experience adjacente ?
3. Y a-t-il un projet ou une publication qui couvre cette lacune ?
4. Plan de mitigation concret (phrase pour la lettre de motivation, formation courte, etc.)

## Bloc C -- Niveau et strategie

1. **Niveau detecte** dans l'offre vs **niveau naturel du candidat pour cet archetype** -- pour un poste en cabinet, c'est la bande d'anciennete/promotion (strict, voir les verrous durs) ; pour le juridique d'entreprise, c'est l'echelle de titres (Juriste -> Juriste Senior -> Counsel -> Directeur Juridique Adjoint -> Directeur Juridique), ou le titre est le levier de remuneration
2. **Plan "vendre senior sans mentir"** : formulations specifiques adaptees a l'archetype, dossiers/matieres concrets a mettre en avant, comment positionner une formation en cabinet ou une experience regulateur comme un atout
3. **Plan "si je suis downlevel"** : en cabinet -- le repositionnement de promotion se negocie a la marge, a l'offre (parfois descendre d'un cran achete du temps avant l'echeance associariat) ; en entreprise -- se battre pour le niveau/titre (Juriste Senior vs Juriste, Counsel vs Juriste Senior) avant de negocier le chiffre, car le pourcentage de bonus et la bande suivent le titre

## Bloc D -- Remuneration et demande

Utiliser WebSearch pour :
- Remuneration actuelle du role, avec les sources canoniques par type d'employeur (voir `_shared.md` -> Intelligence remuneration) :
  - **Cabinets d'avocats :** enquetes des recruteurs juridiques specialises (Michael Page Legal & Fiscal, Robert Half Legal, Fed Legal) + presse juridique specialisee (Le Monde du Droit, Decideurs Juridiques) pour les grilles des cabinets d'affaires
  - **Juridique d'entreprise :** barometre annuel AFJE + elements Cercle Montesquieu pour les postes de direction juridique
  - **Secteur public :** grilles indiciaires officielles de la fonction publique du pays/de la juridiction concernee
  - **Legal ops / legal tech :** pas de source canonique -- recherche WebSearch ciblee, a signaler comme donnee moins fiable
- Reputation de remuneration de l'employeur
- Tendance de demande du role sur le marche francophone

Tableau avec donnees et sources citees. Si pas de donnees, le dire clairement -- ne rien inventer.

**Silence salarial normal en cabinet.** Les offres de cabinets d'avocats mentionnent rarement un chiffre ("remuneration attractive" est la norme) -- ce n'est pas un signal d'alerte en soi.

**Verifications obligatoires -- marche francophone :**
- 13e mois / prime de fin d'annee mentionne ? L'inclure dans le calcul brut annuel.
- Part variable (bonus, participation, interessement) ?
- Convention collective applicable (avocats salaries, SYNTEC, ou autre) ? Si oui, verifier la classification et les minima.
- Statut propose : collaborateur liberal (retrocession d'honoraires) ou collaborateur salarie (contrat de travail) ? Ce n'est pas la meme chose -- le clarifier explicitement dans le rapport.
- CDI ou CDD ? Si CDD : duree, motif, possibilite de CDI-isation.

## Bloc E -- Plan de personnalisation

| # | Section | Etat actuel | Changement propose | Justification |
|---|---------|-------------|--------------------|----- ---------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 modifications du CV + Top 5 modifications LinkedIn pour maximiser le match.

## Bloc F -- Plan d'entretiens

6-10 stories STAR+R mappees sur les prerequis de l'offre (STAR + **Reflection**) :

| # | Prerequis de l'offre | Story STAR+R | S | T | A | R | Reflection |
|---|---------------------|--------------|---|---|---|---|------------|

La colonne **Reflection** capture ce qui a ete appris ou ce qui serait fait differemment. Cela signale la seniorite -- les juniors decrivent ce qui s'est passe, les seniors en tirent des enseignements.

**Story Bank :** Si `interview-prep/story-bank.md` existe, verifier si ces stories y sont deja. Sinon, ajouter les nouvelles. Avec le temps, cela construit une banque reutilisable de 5-10 stories maitre adaptables a n'importe quelle question d'entretien.

**Selectionnees et cadrees selon l'archetype :**
- Avocat Collaborateur -- Transactionnel -> mettre en avant l'execution d'operations, la redaction autonome, le pilotage de work-streams specialises
- Avocat Collaborateur -- Contentieux -> mettre en avant la strategie contentieuse, les conclusions gagnees, la mise en etat, l'ecrit sous pression
- Juriste d'Entreprise -- Produit / Commercial / Donnees -> mettre en avant le conseil transverse ("permettre au business d'avancer en toute securite"), le volume gere, la pedagogie juridique
- Juriste Conformite & Reglementaire -> mettre en avant la construction de programme, les interactions avec des regulateurs, les enquetes menees
- Avocat Secteur Public / Interet General -> mettre en avant le volume de dossiers, le jugement sous contrainte de moyens, l'engagement pour l'interet general
- Legal Engineer / Legal Tech -> mettre en avant la traduction d'une expertise metier en decisions produit/workflow, les metriques d'adoption

Inclure aussi :
- 1 dossier/matiere recommande a presenter (quel deal/dossier de la deal sheet ou de la liste de matieres, et comment, dans le respect de la confidentialite)
- Questions red-flag et comment y repondre (ex : "Pourquoi quittez-vous votre cabinet ?", "Pourquoi n'etes-vous pas passe associe ?", "Quel est votre historique d'heures facturables ?", "Pourquoi passer en entreprise / pourquoi revenir en cabinet ?")

## Bloc G -- Legitimite de l'offre

Analyser l'offre pour des signaux indiquant s'il s'agit d'une ouverture reelle et active. Cela aide le candidat a prioriser son temps sur les opportunites les plus susceptibles d'aboutir a un processus reel.

**Cadrage ethique :** Presenter des observations, pas des accusations. Chaque signal a des explications legitimes. Le candidat decide comment les ponderer.

**Signaux specifiques au marche juridique francophone :**
- **Annonces de cabinets de recrutement "cabinet confidentiel" :** frequent sur le marche des cabinets d'affaires -- pas automatiquement un signal negatif, mais sans employeur nomme, sans bande d'anciennete, et avec un texte tres generique, ponderer comme "A surveiller".
- **Meme poste republie par plusieurs cabinets de recrutement :** le poste est reel, mais le processus sera probablement chaotique -- et la regle de verrouillage du canal (le premier canal soumis "possede" la candidature pendant une periode d'exclusivite) rend le choix du canal important. Verifier `data/scan-history.tsv` et les entrees `via=` du tracker avant toute soumission.
- **Services de placement payants :** un recruteur juridique legitime est TOUJOURS remunere par l'employeur, jamais par le candidat. Toute demande de paiement au candidat (frais de dossier, d'inscription, de "placement") est un signal d'arnaque -- marquer Suspect.

**Trois niveaux :**
- **Confiance elevee** -- Ouverture reelle et active (la plupart des signaux positifs)
- **A surveiller** -- Signaux mixtes, a noter (quelques inquietudes)
- **Suspect** -- Plusieurs indicateurs de poste fantome, le candidat devrait investiguer avant de s'investir

---

## Post-evaluation

**TOUJOURS** executer apres les blocs A-G :

### 1. Sauvegarder le report .md

Sauvegarder l'evaluation complete dans `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = prochain numero sequentiel (3 chiffres, zero-padded). Pour l'allouer de maniere atomique et eviter les conditions de concurrence, vous devez executer `node reserve-report-num.mjs` pour reserver le numero (stdout renvoie `{###}`), ecrire le rapport, puis executer `node reserve-report-num.mjs --release {###}` pour liberer le sentinel.
- `{company-slug}` = nom de l'employeur en minuscules, sans espaces (utiliser des tirets)
- `{YYYY-MM-DD}` = date du jour

**Format du report :**

```markdown
# Evaluation : {Employeur} -- {Role}

**Date :** {YYYY-MM-DD}
**Archetype :** {detecte}
**Score :** {X/5}
**URL :** {URL de l'offre}
**Via :** {cabinet de recrutement, ou -- pour une candidature directe}
**Legitimite :** {Confiance elevee | A surveiller | Suspect}
**PDF :** {chemin ou en attente}

---

## A) Resume du role
(contenu complet du bloc A)

## B) Match avec le CV
(contenu complet du bloc B, y compris le tableau des verrous durs)

## C) Niveau et strategie
(contenu complet du bloc C)

## D) Remuneration et demande
(contenu complet du bloc D)

## E) Plan de personnalisation
(contenu complet du bloc E)

## F) Plan d'entretiens
(contenu complet du bloc F)

## G) Legitimite de l'offre
(contenu complet du bloc G)

## H) Brouillons de reponses pour la candidature
(uniquement si score >= 4.5 -- brouillons de reponses pour le formulaire de candidature)

---

## Mots-cles extraits
(liste de 15-20 mots-cles de l'offre pour l'optimisation ATS)
```

### 2. Enregistrer dans le tracker

**TOUJOURS** enregistrer dans `data/applications.md` :
- Prochain numero sequentiel
- Date du jour
- Employeur -- l'employeur final. Si l'offre est mediee par un cabinet de recrutement ("notre client", domaine du cabinet, employeur non nomme), DEMANDER au candidat par quel cabinet elle est passee, utiliser `?` comme Employeur, et mettre un descriptif distinctif en Notes.
- Via -- le cabinet de recrutement, `--` pour une candidature directe.
- Role
- Score : moyenne du match (1-5)
- Statut : `Evaluated`
- PDF : non (ou oui si l'auto-pipeline a genere un PDF)
- Report : lien relatif vers le fichier report (ex : `[001](reports/001-employeur-2026-01-01.md)`)

**Format du tracker :**

```markdown
| # | Date | Employeur | Via | Role | Score | Statut | PDF | Report |
```
