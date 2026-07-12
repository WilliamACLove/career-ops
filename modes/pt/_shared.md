# Contexto Compartilhado -- career-ops (Português BR)

<!-- ============================================================
     THIS FILE IS AUTO-UPDATABLE. Don't put personal data here.
     
     Your customizations go in modes/_profile.md (never auto-updated).
     This file contains system rules, scoring logic, and tool config
     that improve with each career-ops release.
     ============================================================ -->

## Fontes da Verdade (SEMPRE ler antes de cada avaliação)

| Arquivo | Caminho | Quando |
|---------|---------|--------|
| cv.md | `cv.md` (raiz do projeto) | SEMPRE |
| article-digest.md | `article-digest.md` (se existir) | SEMPRE (proof points detalhados) |
| profile.yml | `config/profile.yml` | SEMPRE (identidade e vagas-alvo) |
| _profile.md | `modes/_profile.md` | SEMPRE (arquétipos, narrativa, negociação do usuário) |

**REGRA: NUNCA fazer hardcode de métricas de proof points.** Leia-as de `cv.md` e `article-digest.md` no momento da avaliação.
**REGRA: Para métricas de artigos/projetos, `article-digest.md` tem prioridade sobre `cv.md`** (`cv.md` pode conter números desatualizados).
**REGRA: Leia `_profile.md` DEPOIS deste arquivo. As personalizações do usuário em `_profile.md` sobrescrevem os valores padrão aqui.**

---

## Sistema de Pontuação

A avaliação usa 6 blocos (A-F) com uma nota global de 1-5:

| Dimensão | O que mede |
|----------|------------|
| Match com CV | Habilidades, experiência, alinhamento de proof points |
| Alinhamento North Star | Quão bem a vaga encaixa nos arquétipos-alvo do usuário (de `_profile.md`) |
| Remuneração | Salário vs mercado (5=quartil superior, 1=bem abaixo) |
| Sinais culturais | Cultura da empresa, crescimento, estabilidade, política de trabalho remoto |
| Red flags | Bloqueadores, alertas (ajustes negativos) |
| **Global** | Média ponderada dos itens acima |

**Interpretação da nota:**
- 4.5+ → Match forte, recomendado aplicar imediatamente
- 4.0-4.4 → Bom match, vale a pena aplicar
- 3.5-3.9 → Razoável mas não ideal, aplicar apenas se houver motivo específico
- Abaixo de 3.5 → Recomendado não aplicar (veja Ethical Use no AGENTS.md)

### Hard Gates Jurídicos (Brasil) -- pass/fail, nunca dissolvidos na média

Verificar ANTES de ponderar qualquer dimensão. Leem o bloco `legal:` do candidato em `config/profile.yml` (equivalentes locais de `bar_admissions`, `class_year`, `patent_bar`, `practice_areas`, `recruiter_channel`). Um gate reprovado aparece explicitamente na dimensão Red flags E como linha nomeada no relatório -- um bom match de CV nunca compensa ou esconde um hard gate reprovado.

1. **OAB / jurisdição de atuação** -- compare a seccional/UF da vaga com a inscrição do candidato na OAB. O rigor varia por tipo de empregador:
   - **Escritórios de advocacia: rigoroso.** Bancas normalmente exigem inscrição principal (ou inscrição suplementar/transferência) na seccional onde o escritório atua. Falta de inscrição na UF, sem caminho realista de inscrição suplementar, é quase bloqueante -- diga isso.
   - **Jurídico interno (in-house): moderado.** Menos ligado à seccional específica -- o que importa é ter OAB ativa; a atuação processual (quando existe) normalmente é terceirizada a escritórios externos.
   - **Carreira pública / legal tech: mínimo.** OAB ativa em qualquer seccional geralmente basta; em concursos, o requisito real é a aprovação no próprio certame, não a seccional de origem.
2. **Faixa de senioridade (anos de OAB / experiência)** -- vagas de associado(a) costumam declarar uma faixa ("associado(a) pleno(a), 3 a 5 anos", "sênior, 6+ anos"). Se a experiência do candidato ficar fora da faixa declarada, tratar como rejeição quase automática -- recomendar não aplicar (reclassificação de nível se negocia na proposta, não na triagem).
3. **Agente da Propriedade Industrial (INPI)** -- vagas de prosecução de patentes exigem registro como Agente da Propriedade Industrial junto ao INPI, além de formação técnica. Se a vaga pede e o candidato não tem o registro, é hard gate. (Marcas e contencioso de PI geralmente não exigem.)
4. **Conflitos de interesse (posições sênior/sócio)** -- toda proposta lateral sênior fica condicionada à liberação de conflitos de clientes; um único conflito pode encerrar uma candidatura sênior/de sócio. Registrar o risco no relatório -- não pontuar.

> Nota Portugal: para vagas no mercado português, o equivalente é a inscrição na Ordem dos Advogados (OA) -- aplique a mesma lógica de rigor (rigoroso para escritórios, moderado para in-house).

## Arquétipos Jurídicos -- Vagas-Alvo

O skill trata TODAS as vagas-alvo com o mesmo cuidado. Nenhuma é primária ou secundária — qualquer uma é uma vitória, desde que a remuneração e a perspectiva de crescimento estejam adequadas:

| Arquétipo | Sinais no JD | O que estão comprando |
|-----------|--------------|------------------------|
| **Advogado(a) Associado(a) -- Societário / Transacional** | "associado(a)", "advogado(a) pleno(a)/sênior", "societário", "M&A", "fusões e aquisições", "mercado de capitais", "fundos de investimento", "financeiro", "due diligence", "estruturação de operações" | Alguém que executa e fecha operações com qualidade técnica e ritmo de banca |
| **Advogado(a) Associado(a) -- Contencioso / Disputas** | "contencioso", "advogado(a) contencioso(a)", "disputas", "arbitragem", "audiências", "sustentação oral", "recursos", "produção de provas", "estratégia processual" | Alguém que sustenta a tese em juízo/câmara arbitral e conduz o processo com autonomia |
| **Advogado(a) Interno / Jurídico -- Produto / Comercial / Privacidade** | "advogado(a) interno(a)", "in-house", "jurídico de produto", "jurídico comercial", "contratos SaaS", "MSA", "DPA", "LGPD", "privacidade", "negociação de contratos", "atuação cross-functional", "diretor(a) jurídico(a)" (head of legal) | Alguém que resolve rápido, em português claro, sem travar o negócio |
| **Compliance & Regulatório** | "compliance", "regulatório", "LGPD", "prevenção à lavagem de dinheiro (PLD/FT)", "anticorrupção", "Lei Anticorrupção (Lei 12.846)", "investigações internas", "licenciamento", "risco", "auditoria" | Alguém que constrói e roda programas de conformidade e responde ao regulador |
| **Procurador(a) / Defensor(a) Público(a) / Magistratura (carreira pública / concursos)** | "concurso público", "procurador(a) do estado/município", "procurador(a) federal", "defensoria pública", "magistratura", "cargo efetivo", "edital", "carreira jurídica de estado", "ONG", "interesse público", "direitos humanos" | Alguém aprovado(a) em concurso (ou com trajetória de interesse público), com volume de atuação em juízo e compromisso de carreira |
| **Legal Tech / Legal Engineer** | "legal engineer", "legal ops", "inovação jurídica", "automação jurídica", "legal design", "legaltech", "IA jurídica", "practice innovation" | Alguém com bagagem jurídica sólida que também constrói produto/fluxo com tecnologia |

> Nota: "correspondente jurídico" (audiências/diligências avulsas pagas por ato, sem vínculo) não é um arquétipo de carreira -- trate como trabalho gig, ver a tabela de tipos de empregador abaixo.

<!-- [PERSONALIZAR] Adapte os arquétipos acima para suas áreas de atuação-alvo.
     Exemplo para quem mira apenas contencioso trabalhista:
     - Advogado(a) Trabalhista Contencioso
     - Advogado(a) Trabalhista Consultivo
     etc. -->

### Framing Adaptativo por Arquétipo

> **Métricas concretas: ler de `cv.md` e `article-digest.md` no momento da avaliação. NUNCA fazer hardcode aqui.**

| Se a vaga é... | Enfatizar no candidato... | Fontes de Proof Points |
|----------------|--------------------------|------------------------|
| Societário / Transacional | Matters/operações no nível de senioridade certo, tipos e portes de deals, autoria de minutas, gestão de fluxos especializados | article-digest.md + cv.md |
| Contencioso / Disputas | Experiência de "estar em pé": depoimentos/audiências conduzidas, teses sustentadas, processos ganhos, força de redação | article-digest.md + cv.md |
| Interno -- Produto / Comercial / Privacidade | Volume de contratos (SaaS/MSA/DPA), aconselhamento cross-functional, abrangência regulatória, comunicação em português claro com não-advogados | cv.md + article-digest.md |
| Compliance & Regulatório | Regimes nomeados (LGPD, PLD/FT, Lei Anticorrupção), atuação junto a reguladores, investigações conduzidas, programa construído do zero | article-digest.md + cv.md |
| Público (concursos) / Interesse Público | Volume em juízo, experiência recursal, comprometimento com atuação pública comprovado (núcleos de prática, projetos sociais, atuação prévia) | cv.md + article-digest.md |
| Legal Tech / Legal Engineer | Pedigree jurídico sólido + fluência real em produto/IA -- playbooks construídos, fluxos automatizados, projetos de legal tech | cv.md + article-digest.md |

<!-- [PERSONALIZAR] Mapeie seus projetos/artigos concretos para os arquétipos acima -->

### Narrativa de Transição (usar em TODOS os framings)

<!-- [PERSONALIZAR] Substitua pela sua própria narrativa. Exemplos:
     - "Fui associado(a) sênior em banca full-service por 6 anos; migrei para dentro de casa buscando proximidade com o negócio."
     - "Construí a área de compliance do zero em uma fintech durante hyper-growth. Buscando o próximo desafio regulatório."
     - "Saí da magistratura/procuradoria para o mercado privado, buscando atuação estratégica em contencioso relevante."
     Lido de config/profile.yml -> narrative.exit_story -->

Use a narrativa de transição de `config/profile.yml` para enquadrar TODO o conteúdo:
- **Em PDF Summaries:** Construir a ponte do passado para o futuro — "Aplico as mesmas [habilidades] agora em [domínio do JD]."
- **Em histórias STAR:** Referenciar proof points de `article-digest.md`.
- **Em respostas rascunho (Bloco G):** A narrativa de transição vai na primeira resposta.
- **Quando a vaga menciona "dono(a) da carteira", "responsabilidade direta com o cliente", "autonomia", "sócio(a) hands-on":** Esse é o diferencial número 1. Aumentar peso de match.

### Vantagem Transversal

Enquadrar o perfil como **"Advogado(a) técnico(a) com histórico comprovado de execução"**, adaptando o framing à vaga:
- Para Societário/Transacional: "Advogado(a) que fecha operações com qualidade técnica e ritmo de banca, sem perder rigor na diligência"
- Para Contencioso: "Advogado(a) que sustenta tese com preparo e entrega resultado em juízo/câmara arbitral"
- Para In-house: "Advogado(a) que resolve rápido, em português claro, sem travar o negócio"
- Para Compliance: "Advogado(a) que constrói programa e sustenta relação com o regulador"
- Para Legal Tech: "Advogado(a) que traduz prática jurídica em produto e fluxo com tecnologia"

Posicionar essa combinação como sinal profissional -- proof points reais (matters, casos, programas) tornam isso crível.

### Portfolio como Proof Point (usar em candidaturas de alto valor)

<!-- [PERSONALIZAR] Se você tem artigos publicados, participação em eventos/palestras, ou um canal/blog jurídico, configure aqui.
     Exemplo:
     content:
       url: "https://seudominio.com/artigos"
       when_to_share: "vagas de Compliance, Legal Tech, cargos com componente de thought leadership"
     Lido de config/profile.yml -> narrative.proof_points e narrative.dashboard -->

Quando o candidato tem artigo publicado, participação em eventos, ou outro material público (verificar `profile.yml`), mencionar/oferecer acesso em candidaturas relevantes.

### Inteligência de Remuneração (Comp Intelligence)

<!-- [PERSONALIZAR] Pesquise faixas salariais para suas vagas-alvo e ajuste os valores -->

**Fontes de pesquisa por tipo de empregador (mercado jurídico -- não usar sites de tech):**
- **Escritórios de advocacia:** guias salariais de recrutadoras especializadas em jurídico (ex. Michael Page, Robert Half, Hays); o ranking "Anuário Análise Advocacia 400" como referência de porte/faturamento do escritório (não de salário individual). Escritórios full-service (categoria: Pinheiro Neto, Mattos Filho e pares) tendem a ter faixas mais estruturadas e bônus formal; boutiques e regionais variam mais e raramente publicam faixa.
- **Jurídico interno (in-house):** pesquisas de recrutamento especializado em jurídico corporativo/GC, benchmarks de associações de compliance e jurídico corporativo (ex. LEC -- Legal, Ethics and Compliance) quando disponíveis.
- **Carreira pública (concursos):** tabela de subsídio publicada no próprio edital -- é o dado mais confiável disponível; sempre citar o edital como fonte.
- **Legal ops / legal tech:** pesquisas de mercado de recrutadoras especializadas + comunidades de legal ops, quando existirem dados públicos.

Se não houver dado confiável para a vaga, diga isso explicitamente em vez de estimar um número.

**Orientações gerais:**
- Enquadrar por título/nível na carreira, não por skills isoladas — título e faixa de anos de OAB definem a faixa salarial
- Taxas de PJ geralmente ficam 30-60% acima do equivalente bruto CLT (compensa ausência de encargos, férias, FGTS, INSS, contador)
- Geo-arbitragem funciona em vagas remotas: custo de vida menor = melhor líquido

**Estrutura do mercado (classificar o empregador antes de interpretar a remuneração publicada):**

| Tipo de empregador | Confiabilidade da remuneração publicada | Sinais |
|---|---|---|
| Full-service (categoria: Pinheiro Neto, Mattos Filho e pares) | Média-alta -- bônus e faixa mais estruturados, raramente publicados no próprio anúncio | Banca grande, múltiplas áreas, processo seletivo estruturado |
| Boutique / especializada | Média -- depende muito do nicho e do sócio responsável | Foco em 1-2 áreas, equipe enxuta, bônus discricionário |
| In-house corporativo | Média-alta | Escada de títulos (Advogado(a) -> Advogado(a) Sênior -> Gerente Jurídico(a) -> Diretor(a) Jurídico(a)), bônus target + benefícios CLT |
| Setor público (concursos) | Alta -- subsídio publicado no edital | Cargo efetivo, tabela de subsídio pública, estabilidade |
| Legal tech / legaltech | Média -- variável conforme estágio da empresa | Startup ou scale-up, pode ter equity/VSOP |
| Correspondente jurídico | Baixa -- pagamento por diligência/audiência avulsa, sem vínculo | Pagamento por ato, sem CLT, alta rotatividade -- tratar como trabalho gig, não como cargo de carreira (mesmo alerta que trabalho de doc-review em outros mercados) |

### Mercado Brasileiro -- Especificidades (IMPORTANTE)

Em vagas e negociações brasileiras, existem termos e práticas que não aparecem nos mercados EN/ES/DE. Eles DEVEM ser avaliados corretamente:

| Termo | Significado | Impacto na Avaliação |
|-------|-------------|----------------------|
| **CLT** (Consolidação das Leis do Trabalho) | Contrato formal com carteira assinada | Inclui FGTS, INSS, férias, 13º, aviso prévio. Na comparação, considerar o custo total empregador |
| **PJ** (Pessoa Jurídica) | Contratação como prestador de serviços (nota fiscal) | Valor mensal mais alto, mas sem benefícios CLT. Calcular equivalente CLT para comparação justa |
| **13º Salário** | Pagamento extra obrigatório para CLT | Comp CLT = salário x 13 (ou 13,33 com 1/3 de férias). NUNCA esquecer na comparação |
| **FGTS** (Fundo de Garantia) | 8% do salário depositado pelo empregador | Benefício CLT, não aparece no contra-cheque mas é remuneração real |
| **Vale-Refeição / Vale-Alimentação** | Benefício alimentação (iFood, Sodexo, Alelo) | Comum em vagas CLT, pode chegar a R$ 1.500+/mês. Incluir na comp total |
| **PLR** (Participação nos Lucros e Resultados) | Bônus atrelado a resultados da empresa | Pode ser 1-3 salários extras/ano. Variável — ponderar com cautela |
| **Stock Options / VSOP** | Equity em startups | Comum em startups brasileiras. Avaliar vesting, cliff e liquidez |
| **Período de Experiência** | 45+45 dias (CLT) ou conforme contrato (PJ) | Padrão de mercado, não é red flag |
| **Aviso Prévio** | 30 dias (CLT) + 3 dias por ano trabalhado | Planejar data de início conforme vínculo atual |
| **Plano de Saúde** | Benefício médico (Amil, SulAmérica, Bradesco Saúde) | Muito valorizado no Brasil. Sem plano = red flag em vagas CLT |
| **Cooperativa / MEI** | Formas alternativas de contratação | Avaliar com cautela — pode indicar precarização trabalhista |

### Scripts de Negociação

<!-- [PERSONALIZAR] Adapte para sua situação -->

**Pretensão salarial (framework geral):**
> "Com base em dados atuais de mercado para essa vaga, minha expectativa está na faixa de [FAIXA do profile.yml]. Tenho flexibilidade na estrutura — o que importa é o pacote total e a perspectiva de crescimento."

**Pushback contra desconto geográfico:**
> "As vagas em que estou concorrendo são orientadas a resultados, não a localização. Meu track record não muda com o CEP."

**Quando a oferta está abaixo do alvo:**
> "Estou comparando com ofertas na faixa de [faixa mais alta]. [Empresa] me atrai por [motivo]. É possível chegarmos em [valor-alvo] juntos?"

**CLT vs PJ:**
> "Para comparar de forma justa, preciso entender a composição completa: salário-base, 13º, férias, FGTS, vale-refeição, plano de saúde e PLR. Se for PJ, qual o valor mensal equivalente considerando esses itens?"

### Política de Localização (Location Policy)

<!-- [PERSONALIZAR] Adapte para sua situação. Lido de config/profile.yml -> location -->

**Em formulários:**
- Perguntas binárias "Você pode trabalhar presencialmente?": responder conforme disponibilidade real de `profile.yml`
- Em campos de texto livre: informar fuso horário e disponibilidade explicitamente

**Em avaliações (Scoring):**
- Dimensão remoto em híbrido fora do seu estado/país: Score **3.0** (não 1.0)
- Score 1.0 apenas se a vaga diz explicitamente "deve estar presencial 4-5 dias/semana, sem exceções"

### Prioridade Time-to-Offer
- Pacote de candidatura enxuto (currículo + lista de matters/casos) > perfeição
- Aplicar mais rápido > aprender mais
- Abordagem 80/20, tudo com prazo definido

---

## Regras Globais

### NUNCA

1. Inventar experiência ou métricas
2. Modificar `cv.md` ou arquivos do portfolio
3. Enviar candidaturas em nome do candidato
4. Compartilhar número de telefone em mensagens geradas
5. Recomendar remuneração abaixo do mercado
6. Gerar PDF sem ter lido a descrição da vaga antes
7. Usar jargão corporativo ou "corporates"
8. Ignorar o tracker (toda vaga avaliada é registrada)
9. Redigir ou preparar candidatura direta a um escritório de advocacia onde um(a) recrutador(a)/headhunter jurídico já submeteu (ou foi contratado(a) para submeter) o(a) candidato(a) -- quem submete primeiro é "dono(a)" da candidatura por tipicamente 6-12 meses, e dupla submissão costuma resultar em descarte do(a) candidato(a) por conflito. SEMPRE verificar `legal.recruiter_channel` em `config/profile.yml` e os campos `via=` do tracker antes de redigir qualquer candidatura direta a um escritório

### SEMPRE

0. **Carta de apresentação:** Se o formulário permite anexar ou escrever uma carta, SEMPRE inclua uma. PDF no mesmo design visual do currículo. Conteúdo: citações da descrição da vaga mapeadas para proof points, links para case studies relevantes. Máximo 1 página.
1. Ler `cv.md`, `_profile.md` e `article-digest.md` (se existir) antes de avaliar qualquer vaga
1b. **Na primeira avaliação de cada sessão:** Executar `node cv-sync-check.mjs` via Bash. Se houver avisos, informar o candidato antes de continuar
2. Detectar o arquétipo da vaga e adaptar o framing conforme `_profile.md`
3. Ao fazer matching, citar linhas exatas do currículo
4. Usar WebSearch para dados de remuneração e empresa
5. Registrar no tracker após cada avaliação
6. Gerar conteúdo na língua da descrição da vaga (PT-BR padrão)
7. Ser direto e prático — sem enrolação
8. Ao gerar texto em português (PDF summaries, bullets, mensagens LinkedIn, histórias STAR): português tech natural, não tradução literal. Frases curtas, verbos de ação, evitar voz passiva. Termos técnicos (stack, pipeline, deployment, embedding) não precisam ser traduzidos
8b. **URLs de case studies no PDF Professional Summary:** Se o PDF menciona case studies ou demos, as URLs DEVEM aparecer já no primeiro parágrafo (Professional Summary). Recrutadores frequentemente só leem o resumo. Todos os URLs no HTML com `white-space: nowrap`
9. **Entradas no tracker como TSV** — NUNCA editar `applications.md` diretamente para novos registros. Escrever TSV em `batch/tracker-additions/`, `merge-tracker.mjs` cuida do merge
10. **Incluir `**URL:**` em todo header de report** — entre Score e PDF

### Tools

| Tool | Uso |
|------|-----|
| WebSearch | Pesquisa de remuneração, tendências, cultura da empresa, contatos LinkedIn, fallback para descrições de vagas |
| WebFetch | Fallback para extrair descrições de vagas de páginas estáticas |
| Playwright | Verificar se vagas ainda estão ativas (browser_navigate + browser_snapshot), extrair descrições de SPAs. **CRÍTICO: NUNCA iniciar 2+ agentes com Playwright em paralelo — eles compartilham a mesma instância do navegador** |
| Read | cv.md, _profile.md, article-digest.md, cv-template.html |
| Write | HTML temporário para PDF, reports .md, TSV em `batch/tracker-additions/` |
| Edit | Ajustes de conteúdo (não usar para criar novos registros no tracker) |
| Bash | `node generate-pdf.mjs`, `node merge-tracker.mjs` |

### Canal de Recrutamento Jurídico (Brasil)

No Brasil, recrutadoras especializadas em jurídico (ex. Michael Page, Robert Half, headhunters boutique de jurídico) são o canal principal para posições em bancas e para cargos in-house sênior -- o mesmo princípio de "nunca submeter duas vezes" se aplica: quem submeteu primeiro tem prioridade sobre a candidatura por um período (tipicamente 6-12 meses).

- Recrutadores jurídicos legítimos são SEMPRE pagos pelo empregador (contingência, percentual da remuneração do primeiro ano) -- NUNCA pelo candidato. Qualquer cobrança de "taxa de colocação", inscrição ou "marketing" ao candidato é sinal de golpe.
- Vagas publicadas em boards gerais (LinkedIn, Catho, Vagas.com) convivem com o canal de recrutador -- sempre checar `data/scan-history.tsv` e o campo `via=` do tracker antes de aplicar diretamente a uma vaga que também pode estar sendo trabalhada por um recrutador.
