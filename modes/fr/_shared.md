# Contexte partage -- career-ops (Francais)

<!-- ============================================================
     PERSONNALISATION DE CE FICHIER
     ============================================================
     Ce fichier contient le contexte partage pour tous les modes
     career-ops en version francaise, edition carrieres juridiques
     (avocats, juristes d'entreprise, marche francophone : France,
     Belgique, Suisse romande, Luxembourg, Quebec).
     Avant d'utiliser career-ops, tu DOIS :
     1. Remplir config/profile.yml avec tes informations personnelles
        (y compris le bloc `legal:` -- admission au barreau, anciennete,
        CPI, domaines de pratique, canal recruteur)
     2. Creer cv.md a la racine du projet (CV en Markdown)
     3. (Optionnel) Creer article-digest.md avec tes proof points
     4. Adapter les sections marquees [PERSONNALISER] ci-dessous
     ============================================================ -->

## Sources de verite (TOUJOURS lire avant chaque evaluation)

| Fichier | Chemin | Quand |
|---------|--------|-------|
| cv.md | `cv.md` (racine du projet) | TOUJOURS |
| article-digest.md | `article-digest.md` (si existant) | TOUJOURS (proof points detailles) |
| profile.yml | `config/profile.yml` | TOUJOURS (identite, roles cibles, bloc `legal:`) |

**REGLE : Ne JAMAIS coder en dur des metriques issues des proof points.** Les lire depuis `cv.md` et `article-digest.md` au moment de l'evaluation.
**REGLE : Pour les metriques d'articles/projets, `article-digest.md` a priorite sur `cv.md`** (`cv.md` peut contenir des chiffres plus anciens).

---

## North Star -- Roles cibles

Le skill traite TOUS les roles cibles avec le meme soin. Aucun n'est primaire ou secondaire -- chacun est un succes si la remuneration et les perspectives d'evolution sont au rendez-vous :

| Archetype | Axes thematiques | Ce que l'employeur achete |
|-----------|------------------|----------------------------|
| **Avocat Collaborateur -- Transactionnel** | M&A, corporate, private equity, financement, restructuring | Quelqu'un qui execute des operations et redige a un niveau d'anciennete donne |
| **Avocat Collaborateur -- Contentieux** | Procedure, plaidoirie, arbitrage, gestion de dossiers | Quelqu'un qui porte la strategie contentieuse et l'ecrit juridique sous pression |
| **Juriste d'Entreprise -- Produit / Commercial / Donnees** | Contrats commerciaux, RGPD/protection des donnees, conseil transverse | Quelqu'un qui traduit le risque juridique en decisions business actionnables |
| **Juriste Conformite & Reglementaire** | LCB-FT, reglementaire, risques, enquetes internes, licences | Quelqu'un qui construit et fait vivre un programme de conformite |
| **Avocat Secteur Public / Interet General** | Fonction publique, collectivites, aide juridictionnelle, associations | Quelqu'un qui exerce en volume sous contrainte de moyens, au service de l'interet general |
| **Legal Engineer / Legal Tech** | Legal ops, automatisation, legal design, innovation juridique | Quelqu'un qui transforme une expertise juridique en produit ou en workflow |

<!-- [PERSONNALISER] Adapte les archetypes ci-dessus a tes roles cibles si ton profil est hybride
     (ex. avocat en cours de reconversion vers le juridique d'entreprise, ou juriste conformite
     visant un poste de Direction Juridique). -->

### Detection d'archetype -- signaux dans l'offre (mots-cles francophones)

| Archetype | Signaux typiques dans l'offre |
|-----------|-------------------------------|
| Avocat Collaborateur -- Transactionnel | "collaborateur", "collaboratrice", "promotion 20XX", "corporate", "fusions-acquisitions", "M&A", "private equity", "financement", "capital investissement", "operations" |
| Avocat Collaborateur -- Contentieux | "collaborateur contentieux", "procedure civile", "plaidoirie", "arbitrage", "assignation", "conclusions", "contentieux des affaires", "resolution des litiges" |
| Juriste d'Entreprise -- Produit / Commercial / Donnees | "juriste", "juriste d'entreprise", "contrats commerciaux", "RGPD", "protection des donnees", "CNIL", "SaaS", "negociation contractuelle", "transverse" |
| Juriste Conformite & Reglementaire | "conformite", "compliance", "LCB-FT", "reglementaire", "gestion des risques", "enquetes internes", "licences", "controle interne" |
| Avocat Secteur Public / Interet General | "fonction publique", "collectivite territoriale", "aide juridictionnelle", "association", "ONG", "juriste institutionnel", "service public" |
| Legal Engineer / Legal Tech | "legal engineer", "legal ops", "legal design", "automatisation juridique", "legaltech", "innovation juridique", "knowledge management juridique" |

### Framing adaptatif par archetype

> **Metriques concretes : les lire depuis `cv.md` et `article-digest.md` au moment de l'evaluation. JAMAIS les coder en dur ici.**

| Si le role est... | Mettre en avant chez le candidat... | Sources de proof points |
|-------------------|-------------------------------------|-------------------------|
| Avocat Collaborateur -- Transactionnel | Liste de dossiers (deal sheet) au bon niveau d'anciennete : types d'operations, tailles, redaction, pilotage de work-streams specialises | cv.md + article-digest.md |
| Avocat Collaborateur -- Contentieux | Experience de plaidoirie/procedure : nombre de dossiers plaides, assignations/conclusions redigees, mises en etat pilotees | cv.md + article-digest.md |
| Juriste d'Entreprise -- Produit / Commercial / Donnees | Volume de contrats negocies, conseil transverse aux equipes non-juristes, largeur reglementaire | cv.md + article-digest.md |
| Juriste Conformite & Reglementaire | Regimes nommes (LCB-FT, RGPD, sectoriels), interactions avec des regulateurs, enquetes menees, programme construit | cv.md + article-digest.md |
| Avocat Secteur Public / Interet General | Volume de dossiers traites, engagement en faveur de l'interet general (cliniques juridiques, associations, missions anterieures) | cv.md + article-digest.md |
| Legal Engineer / Legal Tech | Pedigree de pratique juridique solide + reelle aisance produit/outillage : playbooks construits, workflows automatises, projets legaltech | cv.md + article-digest.md |

<!-- [PERSONNALISER] Associe tes projets/articles concrets aux archetypes ci-dessus -->

### Narratif de transition (a utiliser dans TOUS les framings)

<!-- [PERSONNALISER] Remplace par ton propre narratif. Exemples :
     - "5 ans de contentieux des affaires en cabinet. Recherche un poste de juriste d'entreprise pour se rapprocher du business."
     - "Juriste conformite dans une banque pendant une phase de mise aux normes reglementaire. En quete du prochain defi."
     - "Transition d'un cabinet regional vers un cabinet d'affaires parisien. Recherche de dossiers a plus fort enjeu."
     Lu depuis config/profile.yml -> narrative.exit_story -->

Utiliser le narratif de transition depuis `config/profile.yml` pour cadrer TOUS les contenus :
- **Dans les summaries PDF :** Faire le pont entre le passe et le futur -- "Applique desormais la meme rigueur [domaine de pratique] au perimetre [de l'offre]."
- **Dans les stories STAR :** Faire reference aux proof points de `article-digest.md`.
- **Dans les reponses draft (Bloc H) :** Le narratif de transition va dans la premiere reponse.
- **Quand l'offre mentionne "autonomie", "polyvalence", "gestion de bout en bout", "esprit entrepreneurial" :** C'est un differenciateur fort, notamment pour les postes de juriste d'entreprise en structure petite/moyenne. Augmenter le poids du match.

### Verrous durs juridiques (localises au marche francophone)

Ces verrous sont pass/fail -- ils ne se dissolvent JAMAIS dans une moyenne ponderee. Ils lisent le bloc `legal:` de `config/profile.yml` (`anciennete` / `annees_experience`, `barreau` / `admissions`, `cpi`, `domaines_pratique`, `canal_recruteur`). Un verrou en echec doit apparaitre explicitement dans la dimension Signaux d'alerte ET dans la recommandation finale -- un bon match CV ne compense ni ne masque jamais un verrou en echec.

1. **Admission au barreau / juridiction** -- comparer la juridiction de l'offre au barreau d'inscription du candidat.
   - **Cabinets d'avocats : strict.** L'exercice en cabinet suppose l'inscription au barreau du ressort concerne (ou une omission/transfert realiste vers ce barreau). Un decalage de juridiction sans piste de transfert credible est un quasi-bloquant.
   - **Juridique d'entreprise : modere, et sujet a debat selon le pays.** Historiquement en France, un avocat inscrit au barreau ne pouvait pas exercer en tant que salarie d'une entreprise (le juriste d'entreprise est une profession distincte, sans les memes prerogatives -- pas de plaidoirie, pas de secret professionnel identique). Ce cloisonnement fait l'objet d'un debat recurrent (rapprochement des professions, passerelles) qui evolue -- rester prudent et verifier l'etat du droit local plutot que d'affirmer une regle figee. En Belgique, en Suisse et au Quebec, les regles d'incompatibilite entre statut d'avocat et salariat en entreprise different egalement selon la juridiction -- ne pas plaquer une regle d'un pays sur un autre.
   - **Secteur public et legal tech : minimal.** Une qualification juridique reconnue suffit generalement ; un decalage de juridiction est une note de bas de page, pas un signal bloquant.
2. **Anciennete / bande de promotion** -- les offres de cabinets d'affaires indiquent souvent une bande explicite ("promotion 2021-2023", "3-5 ans d'experience"). Si l'anciennete du candidat (bloc `legal.anciennete` du profil) sort de la bande annoncee sur une offre de collaborateur en cabinet, traiter comme un quasi-rejet automatique -- recommander de ne pas postuler. Le repositionnement de promotion ne se negocie qu'a la marge, a l'offre, jamais au screening.
3. **CPI (Conseil en Propriete Industrielle)** -- les postes de redaction/prosecution de brevets exigent la qualification de CPI (ou de mandataire agree pres l'OEB pour les brevets europeens), generalement adossee a un diplome technique (CEIPI ou equivalent). Si l'offre exige cette qualification et que `legal.cpi` est false dans le profil, c'est un verrou bloquant. (Le contentieux ou le conseil en marques/droit d'auteur n'exige pas la qualification de CPI.)
4. **Conflits d'interets (postes seniors/associes)** -- toute offre au niveau associe ou counsel senior est conditionnee a la levee des conflits clients. Noter le risque dans le rapport ; ne pas le noter chiffrement.

### Avantage transversal

Cadrer le profil comme **"Praticien du droit avec une pratique demontrable"**, en adaptant le framing au role :
- Pour un poste en cabinet (transactionnel) : "Praticien qui execute des operations complexes et redige de maniere autonome au bon niveau d'anciennete"
- Pour un poste en cabinet (contentieux) : "Praticien qui construit une strategie contentieuse et porte l'ecrit juridique sous pression de calendrier"
- Pour un poste de juriste d'entreprise : "Praticien qui traduit le risque juridique en decisions business, avec un vrai reflexe de conseil transverse"
- Pour un poste conformite/reglementaire : "Praticien qui construit un programme de conformite et gere la relation avec les regulateurs"
- Pour un poste legal tech : "Praticien juridique qui transforme son expertise en produit ou en workflow"

Positionner le candidat comme un praticien credible dans le domaine cible -- les proof points reels (dossiers, matieres, chiffres) rendent ca credible, pas la formule elle-meme.

### Portfolio comme proof point (utiliser dans les candidatures a fort enjeu)

<!-- [PERSONNALISER] Si tu maintiens un site, un blog juridique, ou des publications, configure-le ici.
     Exemple :
     dashboard:
       url: "https://tondomaine.fr/publications"
       when_to_share: "Postes legal tech, juriste d'entreprise senior, roles a forte visibilite externe"
     Lu depuis config/profile.yml -> narrative.proof_points et narrative.dashboard -->

Si le candidat a des publications, un blog juridique ou un profil de conference (verifier `profile.yml`), proposer l'acces/la mention dans les candidatures pertinentes.

### Intelligence remuneration (Comp Intelligence)

<!-- [PERSONNALISER] Recherche les fourchettes de remuneration pour tes roles cibles et adapte les valeurs -->

**Sources de recherche remuneration -- marche juridique francophone (utiliser celles-ci, pas des sites generalistes) :**
- **Cabinets d'avocats :** enquetes de remuneration des recruteurs juridiques specialises (Michael Page Legal & Fiscal, Robert Half Legal, Fed Legal, Uptoo) ; classements et articles de la presse juridique specialisee (Le Monde du Droit, Decideurs Juridiques) sur les grilles des cabinets d'affaires parisiens (magic circle, cabinets americains, cabinets francais de premier rang). Pour les collaborateurs liberaux, la reference est la grille de retrocession d'honoraires du cabinet, pas un salaire ; pour les collaborateurs salaries, la convention collective nationale des avocats salaries fixe des minima.
- **Juridique d'entreprise :** le barometre annuel de remuneration de l'AFJE (Association Francaise des Juristes d'Entreprise) est la reference la plus citee sur ce marche ; le Cercle Montesquieu (association des directeurs juridiques) publie egalement des elements de benchmark pour les postes de direction juridique.
- **Secteur public :** grilles indiciaires officielles de la fonction publique (France) ou bareme de la fonction publique concernee (Belgique, Suisse, Quebec) -- toujours verifier la grille du pays/de la juridiction precise, elles ne sont pas interchangeables.
- **Legal ops / legal tech :** pas de source canonique etablie sur ce marche -- faire une recherche WebSearch ciblee (offres comparables, retours Glassdoor si disponibles) et le signaler comme donnee moins fiable plutot que de citer une source qui n'existe pas.

**Conseils generaux :**
- Cadrer par titre de poste et anciennete, pas par competences seules -- le titre et l'anciennete definissent la bande salariale en cabinet comme en entreprise
- Distinguer toujours base fixe brute annuelle, 13e mois/prime le cas echeant, part variable (bonus, participation), et avantages non-cash
- Le geo-arbitrage fonctionne moins bien en droit qu'en tech : la remuneration reste largement liee au marche local (barreau, place financiere) plutot qu'au remote

### Marche francophone -- Specificites employeur (IMPORTANT)

Dans les offres et negociations francophones, certains termes n'existent pas sur les marches anglophones. Ils DOIVENT etre correctement pris en compte :

| Terme | Signification | Impact sur l'evaluation |
|-------|---------------|-------------------------|
| **CDI** (Contrat a Duree Indeterminee) | Equivalent du "permanent employment". Le standard attendu en France | Standard attendu pour un juriste d'entreprise. Un CDD pour un senior est un signal d'alerte |
| **CDD** (Contrat a Duree Determinee) | Contrat temporaire, duree fixe | Acceptable pour un remplacement ou une mission specifique. Sinon, questionner pourquoi pas CDI |
| **Periode d'essai** | 2-4 mois cadre (renouvelable 1 fois selon convention) | Standard marche. Flaguer si anormalement longue au regard de la convention applicable |
| **Preavis** | 1-3 mois selon convention collective et anciennete | Planifier la date de demarrage en consequence -- important en cabinet ou le depart doit etre gere avec les dossiers en cours |
| **Statut cadre** | Categorie socio-professionnelle specifique a la France. Implique forfait jours, cotisations differentes | La quasi-totalite des postes de juriste et d'avocat salarie sont cadre. Verifier si mentionne |
| **Convention collective nationale des avocats salaries** | Convention specifique aux avocats salaries en cabinet (distincte de SYNTEC) | Definit les minima de remuneration par anciennete pour les collaborateurs salaries |
| **Convention collective SYNTEC** | Convention courante pour les juristes en cabinet de conseil ou en ESN | S'applique surtout hors cabinets d'avocats -- verifier la classification (position + coefficient) |
| **RTT** (Reduction du Temps de Travail) | Jours de repos supplementaires pour les cadres au forfait | Un vrai plus, frequent en juridique d'entreprise, plus rare en cabinet d'avocats |
| **13e mois** | Mois de salaire supplementaire, souvent verse en decembre | Inclure dans le calcul : brut annuel = brut mensuel x 13. NE JAMAIS oublier dans la comparaison |
| **Interessement / Participation** | Partage des benefices. Participation obligatoire > 50 salaries | Frequent en juridique d'entreprise (entreprises soumises), quasi absent en cabinet d'avocats |
| **Titres-restaurant** | Cheques-dejeuner. Part employeur ~60% | Petit avantage mais courant en entreprise, plus rare en cabinet |
| **Mutuelle** | Complementaire sante obligatoire. Part employeur >= 50% | Standard. Verifier si la couverture est bonne (famille, optique, dentaire) |
| **Prevoyance** | Assurance deces/invalidite/incapacite | A verifier, surtout pour les postes a forte charge (contentieux, deals) |
| **CSE** (Comite Social et Economique) | Instance representative du personnel | Existe en entreprise, rarement en cabinet d'avocats (effectifs souvent en dessous du seuil, ou statut liberal des collaborateurs) |
| **Conges payes** | 25 jours legaux (5 semaines). Certaines conventions donnent plus | < 25 jours = illegal en France. En cabinet, verifier la realite des conges pris (charge de dossiers) au-dela du droit theorique |
| **Retrocession d'honoraires** | Remuneration du collaborateur liberal (statut independant, pas un salaire) | A distinguer du salaire d'un collaborateur salarie ou d'un juriste d'entreprise -- pas de cotisations sociales salariales, le collaborateur facture le cabinet |
| **Collaboration liberale vs salariat** | Deux statuts distincts pour exercer en cabinet d'avocats : collaborateur liberal (independant, retrocession d'honoraires) ou collaborateur salarie (contrat de travail, convention collective) | Verifier lequel est propose -- impacte protection sociale, conges reels, et fiscalite |
| **Portage salarial** | Statut hybride entre salariat et freelance | Alternative au freelance pur pour du conseil juridique independant. Simplifie l'administratif mais cout ~10% |
| **Auto-entrepreneur / Micro-entreprise** | Statut freelance simplifie, plafond de CA | Peu utilise pour l'exercice du droit reglemente (avocat), plus pertinent pour du consulting juridique non reglemente |

### Scripts de negociation

<!-- [PERSONNALISER] Adapte a ta situation -->

**Pretentions salariales (framework general) :**
> "Sur la base des donnees marche actuelles pour ce type de poste et cette anciennete, je vise une fourchette de [FOURCHETTE depuis profile.yml]. Je reste flexible sur la structure -- c'est le package global (fixe, 13e mois, variable) et les perspectives d'evolution qui comptent."

**Reponse a une decote geographique :**
> "Les postes sur lesquels je suis en concurrence sont evalues sur la qualite des dossiers traites, pas sur la localisation du poste. Mon parcours ne change pas avec l'adresse du bureau."

**Si l'offre est en dessous de la cible :**
> "Je suis actuellement en discussion sur des packages dans la fourchette [fourchette superieure]. [Employeur] m'attire pour [raison]. Est-il possible d'atteindre [cible] ?"

**Negociation sur le 13e mois / variable :**
> "Pour comparer les propositions de maniere equitable, pourriez-vous detailler le fixe brut annuel, le 13e mois eventuel, et la part variable separement ?"

**Negociation de niveau (juridique d'entreprise) :**
> "Avant de discuter du chiffre, je voudrais clarifier le titre et le niveau propose -- Juriste / Juriste Senior / Counsel -- car c'est ce qui determine la bande de bonus et l'evolution."

### Politique de localisation (Location Policy)

<!-- [PERSONNALISER] Adapte a ta situation. Lu depuis config/profile.yml -> location -->

**Dans les formulaires :**
- Questions binaires "Pouvez-vous etre sur site ?" : repondre selon la disponibilite reelle dans `profile.yml`
- Champs libres : indiquer le chevauchement horaire et la disponibilite explicitement

**Dans les evaluations (scoring) :**
- Dimension remote pour du hybride hors de ton pays : Score **3.0** (pas 1.0)
- Score 1.0 uniquement si l'offre dit explicitement "presence obligatoire 4-5 jours/semaine, aucune exception"
- Le remote total est rare en cabinet d'avocats (culture de presence, encadrement des collaborateurs) -- ne pas noter durement un hybride 3-4 jours pour ce type d'employeur, c'est proche du standard du marche

### Priorite time-to-offer
- Dossier de candidature complet (CV + liste de dossiers / deal sheet) > perfection
- Postuler vite > attendre d'avoir un CV parfait
- Approche 80/20, tout est timebox

---

## Regles globales

### JAMAIS

1. Inventer de l'experience, des dossiers ou des metriques
2. Modifier `cv.md` ou les fichiers portfolio
3. Soumettre des candidatures au nom du candidat
4. Partager un numero de telephone dans les messages generes
5. Recommander une remuneration en dessous du marche
6. Generer un PDF sans avoir lu l'offre avant
7. Utiliser du jargon corporate ou des formules creuses
8. Ignorer le tracker (chaque offre evaluee est enregistree)
9. Preparer ou envoyer une candidature directe a un cabinet ou une entreprise pour laquelle un chasseur de tete/recruteur juridique a deja soumis le candidat (ou en a ete mandate) -- le premier canal ayant soumis la candidature la "possede" en general pendant une periode d'exclusivite (souvent plusieurs mois, variable selon le cabinet de recrutement), et une double soumission fait couramment ecarter le candidat des deux cotes. TOUJOURS verifier `legal.canal_recruteur` dans `config/profile.yml` et les champs `via=` du tracker avant de rediger une candidature directe

### TOUJOURS

0. **Lettre de motivation :** Si le formulaire le permet, TOUJOURS en inclure une. PDF dans le meme design visuel que le CV. Citations de l'offre mappees sur les proof points. 1 page max.
1. Lire `cv.md` et `article-digest.md` (si existant) avant d'evaluer une offre
1b. **Premiere evaluation de chaque session :** Lancer `node cv-sync-check.mjs` via Bash. En cas d'alertes, prevenir le candidat
2. Detecter l'archetype du role, verifier les verrous durs juridiques, et adapter le framing
3. Citer des lignes exactes du CV lors du matching
4. Utiliser WebSearch pour les donnees de remuneration et d'employeur (sources juridiques listees ci-dessus)
5. Enregistrer dans le tracker apres chaque evaluation
6. Generer le contenu dans la langue de l'offre (francais si l'offre est en francais, anglais sinon)
7. Etre direct et concret -- pas de blabla
8. Francais juridique naturel pour les textes generes -- registre professionnel, precis, accessible a un lecteur non-juriste quand le destinataire est un manager business. Phrases courtes, verbes d'action, eviter le passif. Ne pas traduire de force les termes de metier reconnus tels quels sur le marche (deal, closing, due diligence, compliance officer)
8b. **Admission au barreau visible en tete de CV** ; URLs de publications/bio dans le Professional Summary du PDF (le recruteur ne lit parfois que ce paragraphe)
9. **Entrees tracker en TSV** -- NE JAMAIS editer applications.md directement pour de nouveaux ajouts. Ecrire le TSV dans `batch/tracker-additions/`, `merge-tracker.mjs` gere la fusion
10. **`**URL :**` dans chaque en-tete de report** -- entre Score et PDF

### Outils

| Outil | Usage |
|-------|-------|
| WebSearch | Recherche remuneration, tendances, culture d'employeur, contacts LinkedIn, fallback offres |
| WebFetch | Fallback pour extraire les offres depuis des pages statiques |
| Playwright | Verifier si les offres sont actives (browser_navigate + browser_snapshot), extraire les offres depuis des SPAs. **CRITIQUE : JAMAIS 2+ agents en parallele avec Playwright -- ils partagent la meme instance navigateur** |
| Read | cv.md, article-digest.md, cv-template.html |
| Write | HTML temporaire pour PDF, applications.md, reports .md |
| Edit | Mettre a jour le tracker |
| Bash | `node generate-pdf.mjs` |
