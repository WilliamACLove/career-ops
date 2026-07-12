# career-ops -- Modes francophones (`modes/fr/`)

Ce dossier contient les traductions francaises des modes career-ops, edition carrieres juridiques, pour les candidats (avocats, juristes d'entreprise) qui ciblent le marche francophone (France, Belgique, Suisse romande, Luxembourg, Quebec).

## Quand utiliser ces modes ?

Utilise `modes/fr/` si au moins une de ces conditions est remplie :

- Tu postules principalement a des **offres d'emploi juridiques en francais** (Village de la Justice, Carrieres-Juridiques.com, Welcome to the Jungle, Indeed FR, APEC, Pole emploi / France Travail, LinkedIn FR, sites carrieres de cabinets)
- Ton **CV est en francais** ou tu alternes entre FR et EN selon l'offre
- Tu as besoin de reponses et lettres de motivation en **francais juridique naturel**, pas traduit par une machine
- Tu dois gerer des **specificites contractuelles et professionnelles francophones** : convention collective des avocats salaries ou SYNTEC, collaboration liberale vs salariat, retrocession d'honoraires, RTT, mutuelle, prevoyance, 13e mois, periode d'essai, preavis, interessement/participation

Si la plupart de tes offres sont en anglais, reste sur les modes standard dans `modes/`. Les modes anglais fonctionnent pour les offres francophones, mais ne connaissent pas les specificites du marche francophone en detail.

## Comment activer ?

### Option 1 -- Par session

Dis a Claude en debut de session :

> "Utilise les modes francais sous `modes/fr/`."

Claude lira alors les fichiers de ce dossier au lieu de `modes/`.

### Option 2 -- En permanence

Ajoute dans `config/profile.yml` :

```yaml
language:
  primary: fr
  modes_dir: modes/fr
```

Rappelle-le a Claude lors de ta premiere session ("Regarde dans `profile.yml`, j'ai configure `language.modes_dir`"). Claude utilisera automatiquement les modes francais.

## Quels modes sont traduits ?

Cette premiere iteration couvre les quatre modes a plus fort impact :

| Fichier | Traduit depuis | Role |
|---------|----------------|------|
| `_shared.md` | `modes/_shared.md` (EN) | Contexte partage, archetypes juridiques, verrous durs, regles globales, specificites marche francophone |
| `offre.md` | `modes/oferta.md` (EN) | Evaluation complete d'une offre (Blocs A-G, y compris le Bloc G Legitimite de l'offre) |
| `postuler.md` | `modes/apply.md` (EN) | Assistant live pour remplir les formulaires de candidature, avec verrou de canal recruteur |
| `pipeline.md` | `modes/pipeline.md` (EN) | Inbox d'URLs / Second Brain pour les offres collectees |
| `interview/plan.md`, `interview/practice.md`, `interview/debrief.md` | `modes/interview/*.md` (EN) | Preparation d'entretien, entrainement, et debriefing -- rounds calibres sur le processus des cabinets et du juridique d'entreprise (screen, hiring-partner, callback, writing-exercise, panel, business-stakeholder, behavioral) |

Les autres modes (`scan`, `batch`, `pdf`, `tracker`, `auto-pipeline`, `deep`, `contacto`, `project`, `training`) restent en EN. Leur contenu est surtout du tooling, des chemins et des commandes -- il doit rester independant de la langue.

## Ce qui reste en anglais

Volontairement non traduit car vocabulaire tech standard :

- `cv.md`, `pipeline`, `tracker`, `report`, `score`, `archetype`, `proof point`
- Noms d'outils (`Playwright`, `WebSearch`, `WebFetch`, `Read`, `Write`, `Edit`, `Bash`)
- Valeurs de statut dans le tracker (`Evaluated`, `Applied`, `Interview`, `Offer`, `Rejected`)
- Extraits de code, chemins, commandes

Les modes utilisent du francais juridique naturel, tel qu'il est parle dans les cabinets d'avocats et les directions juridiques a Paris, Lyon, Bruxelles ou Geneve : texte courant en francais, termes de metier reconnus tels quels la ou c'est l'usage (deal, closing, due diligence, compliance officer). Pas de traduction forcee de "Compliance" en "Mise en conformite systematique" ni de termes qui sonnent artificiels dans la bouche d'un praticien.

## Lexique de reference

Pour garder un ton coherent si tu modifies ou etends les modes :

| Anglais | Francais (dans cette codebase) |
|---------|-------------------------------|
| Job posting | Offre d'emploi / Annonce |
| Application | Candidature |
| Cover letter | Lettre de motivation |
| Resume / CV | CV |
| Salary | Salaire / Remuneration |
| Compensation | Remuneration / Package |
| Skills | Competences |
| Interview | Entretien |
| Hiring manager | Manager recruteur / Hiring manager |
| Recruiter | Recruteur (ou Recruiter) |
| AI | IA (Intelligence Artificielle) |
| Requirements | Prerequis / Exigences |
| Career history | Parcours professionnel |
| Notice period | Preavis |
| Probation | Periode d'essai |
| Vacation | Conges payes (CP) |
| 13th month salary | 13e mois / Prime de fin d'annee |
| Permanent employment | CDI (Contrat a Duree Indeterminee) |
| Fixed-term contract | CDD (Contrat a Duree Determinee) |
| Freelance | Freelance / Independant / Auto-entrepreneur |
| Collective agreement | Convention collective |
| Works council | CSE (Comite Social et Economique) |
| Profit sharing | Interessement / Participation |
| Meal vouchers | Titres-restaurant / Cheques-dejeuner |
| Health insurance | Mutuelle d'entreprise |
| Disability/life insurance | Prevoyance |
| RTT | RTT (Reduction du Temps de Travail) |
| Cadre status | Statut cadre |
| SYNTEC | Convention SYNTEC (IT/consulting) |
| Bar admission | Admission au barreau |
| Law firm associate | Avocat collaborateur / Avocate collaboratrice |
| Partner | Associe / Associee |
| Class year | Promotion (annee d'entree au barreau ou en cabinet) |
| In-house counsel | Juriste d'entreprise |
| General Counsel | Directeur juridique / Directrice juridique |
| Deputy General Counsel | Directeur juridique adjoint / Directrice juridique adjointe |
| Compliance officer | Responsable conformite / Juriste conformite |
| Patent attorney | CPI (Conseil en Propriete Industrielle) |
| Deal sheet / matters list | Liste de dossiers / Deal sheet |
| Billable hours | Heures facturables |
| Independent contractor collaboration (law firm) | Collaboration liberale (retrocession d'honoraires) |
| Employee associate (law firm) | Collaborateur salarie |
| Contract/staffing attorney | Juriste en mission / Legal staffing |

## Contribuer

Pour ameliorer une traduction ou ajouter un mode :

1. Ouvre une Issue avec ta proposition (voir `CONTRIBUTING.md`)
2. Respecte le lexique ci-dessus pour garder le ton coherent
3. Traduis de maniere idiomatique -- pas de traduction mot a mot
4. Conserve les elements structurels (Blocs A-G, tableaux, blocs de code, instructions outils) a l'identique
5. Teste avec une vraie offre francophone (Village de la Justice, Carrieres-Juridiques.com, APEC, Indeed FR) avant de soumettre la PR
