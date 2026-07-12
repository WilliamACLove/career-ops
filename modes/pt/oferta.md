# Modo: oferta -- Avaliação Completa A-F

Quando o candidato cola uma vaga (texto ou URL), entregar SEMPRE os 6 blocos:

## Passo 0 -- Detecção de Arquétipo

Classificar a vaga em um dos 6 arquétipos (ver `_shared.md`). Se for híbrido, indicar os 2 mais próximos. Isso determina:
- Quais proof points priorizar no bloco B
- Como reescrever o summary no bloco E
- Quais histórias STAR preparar no bloco F

## Passo 0.5 -- Hard Gates Jurídicos (pass/fail, nunca dissolvidos na média)

Antes de pontuar qualquer dimensão, checar a vaga contra o bloco `legal:` do candidato em `config/profile.yml`. São filtros estruturais, não fatores ponderados -- um gate reprovado DEVE aparecer explicitamente na dimensão Red flags E como linha nomeada na recomendação final. Nunca deixar um hard gate reprovado se diluir silenciosamente numa nota boa.

1. **OAB / jurisdição** -- comparar a seccional/UF da vaga com `legal.bar_admissions`. Aplicar a escada de rigor:
   - **Escritórios: rigoroso.** Bancas normalmente exigem (ou exigem em até ~1 ano) inscrição na seccional onde o escritório atua. Mismatch de seccional sem caminho de inscrição suplementar é quase bloqueante -- diga isso.
   - **In-house: moderado.** OAB ativa geralmente basta, independente da seccional; a atuação processual (quando existe) costuma ser terceirizada.
   - **Setor público e legal tech: mínimo.** OAB ativa em qualquer seccional geralmente basta; para concursos, o que importa é a aprovação no certame.
2. **Faixa de senioridade (anos de OAB / experiência)** -- se a vaga declara uma faixa ("associado(a) pleno(a), 3-5 anos"), comparar com `legal.class_year`. Fora da faixa declarada numa vaga de associado(a) é rejeição quase automática: recomendar não aplicar, e mencionar que a reclassificação de nível só ajuda na margem (negociada na proposta, não na triagem).
3. **Agente da Propriedade Industrial (INPI)** -- vagas de prosecução de patentes exigem registro no INPI mais formação técnica. Se a vaga pede e `legal.patent_bar` é falso, é bloqueador.
4. **Risco de conflitos** -- para vagas sênior/de sócio, registrar que toda proposta fica condicionada à liberação de conflitos de clientes. Registrar; não pontuar.

Reportar o resultado dos gates como uma tabela curta pass/fail no topo do Bloco B. Um gate reprovado limita a recomendação, independente de quão bem o resto encaixe.

## Bloco A -- Resumo da Vaga

Tabela com:
- Arquétipo detectado
- Domain (transacional/contencioso/in-house/compliance/público/legal-tech)
- Função (aconselhar/negociar/litigar/gerenciar/construir)
- Senioridade (faixa de anos de OAB / PQE-equivalente, ou nível de título no in-house)
- Remoto (full/híbrido/presencial)
- Tamanho do time (se mencionado)
- TL;DR em 1 frase

## Bloco B -- Match com o Currículo

Ler `cv.md`. Criar tabela com cada requisito do JD mapeado para linhas exatas do currículo.

**Adaptado ao arquétipo:**
- Se Societário/Transacional → priorizar matters no nível de senioridade certo: tipos e portes de deals, autoria de minutas, gestão de fluxos especializados
- Se Contencioso/Disputas → priorizar experiência de "estar em pé": depoimentos/audiências conduzidas, sustentações, atuação em arbitragem/juízo, força de redação
- Se In-house (Produto/Comercial/Privacidade) → priorizar volume de contratos (SaaS/MSA/DPA), aconselhamento cross-functional, abrangência regulatória, comunicação em português claro com não-advogados
- Se Compliance & Regulatório → priorizar regimes nomeados (LGPD, PLD/FT, Lei Anticorrupção), atuação junto a reguladores, investigações conduzidas, programa construído do zero
- Se Público/Interesse Público → priorizar volume em juízo, experiência recursal, comprometimento com atuação pública demonstrado (núcleos de prática, projetos sociais, atuação prévia)
- Se Legal Tech/Legal Engineer → priorizar pedigree jurídico sólido + fluência real em produto/IA: playbooks construídos, fluxos automatizados, projetos de legal tech

Seção de **gaps** com estratégia de mitigação para cada um. Para cada gap:
1. É um hard blocker ou um nice-to-have?
2. O candidato consegue demonstrar experiência adjacente?
3. Existe um projeto do portfolio que cubra esse gap?
4. Plano de mitigação concreto (frase para carta de apresentação, projeto rápido, etc.)

## Bloco C -- Nível e Estratégia

1. **Nível detectado** no JD vs **nível natural do candidato para esse arquétipo** -- para vagas de escritório, isso é matching de faixa de anos de OAB (rigoroso, ver hard gates); para in-house, é a escada de títulos (Advogado(a) -> Advogado(a) Sênior -> Gerente Jurídico(a) -> Diretor(a) Jurídico(a)), onde **o título é a alavanca de comp**
2. **Plano "vender senior sem mentir"**: frases específicas adaptadas ao arquétipo, matters/casos concretos a destacar, como posicionar formação em banca, período em setor público ou experiência regulatória como vantagem
3. **Plano "se me downlevelearem"**: em escritório, reclassificação de faixa de anos é negociável na margem (às vezes 1 ano a menos compra fôlego para sociedade); no in-house, brigar pelo título (Advogado(a) Sênior vs Advogado(a), Diretor(a) vs Gerente) antes de negociar valores, já que % de bônus-alvo e faixa de equity seguem o título

## Bloco D -- Remuneração e Demanda

Usar WebSearch para as fontes canônicas do mercado jurídico por tipo de empregador (ver `_shared.md` -- Inteligência de Remuneração):
- **Escritórios:** guias salariais de recrutadoras especializadas em jurídico (Michael Page, Robert Half, Hays); "Anuário Análise Advocacia 400" como referência de porte do escritório, não de salário individual
- **In-house:** pesquisas de recrutamento jurídico corporativo/GC; benchmarks de associações de compliance/jurídico quando disponíveis
- **Setor público:** tabela de subsídio do próprio edital -- fonte mais confiável
- **Legal ops/legal tech:** pesquisas de mercado de recrutadoras especializadas

Tabela com dados e fontes citadas. Se não houver dados, dizer isso em vez de inventar.

**Silêncio salarial é normal em vagas de escritório.** Anúncios de banca raramente trazem número ("remuneração compatível com o mercado" é padrão) -- a ausência de faixa NÃO é red flag por si só nesse segmento.

**Mercado Brasileiro -- Checks obrigatórios:**
- CLT ou PJ? Se CLT: considerar 13º, férias, FGTS, plano de saúde, VR/VA na comparação.
- Se PJ: qual o valor mensal? Calcular equivalente CLT.
- PLR mencionado? Quantos salários extras?
- Stock options / VSOP? Avaliar vesting, cliff e liquidez.
- Vale-refeição / vale-alimentação? Valor mensal?
- Plano de saúde? Coparticipação ou integral?
- Correspondente jurídico? Tratar como trabalho gig (pagamento por diligência/audiência, sem vínculo) -- não avaliar como cargo de carreira.

## Bloco E -- Plano de Personalização

| # | Seção | Estado atual | Mudança proposta | Por que |
|---|-------|-------------|------------------|---------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 mudanças no currículo + Top 5 mudanças no LinkedIn para maximizar o match.

## Bloco F -- Plano de Entrevistas

6-10 histórias STAR+R mapeadas para requisitos do JD (STAR + **Reflection**):

| # | Requisito do JD | História STAR+R | S | T | A | R | Reflection |
|---|----------------|-----------------|---|---|---|---|------------|

A coluna **Reflection** captura o que foi aprendido ou o que seria feito diferente. Isso sinaliza senioridade — candidatos juniores descrevem o que aconteceu, candidatos seniores extraem lições.

**Story Bank:** Se `interview-prep/story-bank.md` existir, verificar se alguma dessas histórias já está lá. Se não, adicionar as novas. Com o tempo, isso constrói um banco reutilizável de 5-10 histórias-mestre que podem ser adaptadas para qualquer pergunta de entrevista.

**Selecionadas e enquadradas conforme o arquétipo:**
- Societário/Transacional → enfatizar execução de deals, autoria de minutas, gestão de fluxos especializados
- Contencioso/Disputas → enfatizar estratégia de caso, teses vencidas, audiências, redação sob pressão
- In-house (Produto/Comercial/Privacidade) → enfatizar viabilização do negócio ("dizer sim com segurança"), gestão de volume, aconselhamento cross-functional
- Compliance & Regulatório → enfatizar construção de programa, interação com reguladores, investigações conduzidas
- Público/Interesse Público → enfatizar volume em juízo, julgamento sob restrição de recursos, compromisso com a missão
- Legal Tech/Legal Engineer → enfatizar tradução de expertise jurídica em decisões de produto/fluxo, métricas de adoção

Incluir também:
- 1 matter/caso representativo recomendado (qual deal/processo do dossiê apresentar e como, respeitando limites de confidencialidade)
- Perguntas red-flag e como respondê-las (ex: "Por que você está saindo do escritório?", "Por que ainda não é sócio(a)?", "Qual seu histórico de horas faturáveis?", "Por que sair do in-house para voltar a um escritório (ou vice-versa)?")

---

## Pós-avaliação

**SEMPRE** após gerar os blocos A-F:

### 1. Salvar report .md

Salvar avaliação completa em `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = próximo número sequencial (3 dígitos, zero-padded). Para alocar de forma atômica e evitar condições de corrida, você DEVE executar `node reserve-report-num.mjs` para reservar o número (a saída retornará `{###}`), escrever o relatório, e em seguida executar `node reserve-report-num.mjs --release {###}` para liberar o sentinel.
- `{company-slug}` = nome da empresa em lowercase, sem espaços (usar hifens)
- `{YYYY-MM-DD}` = data atual

**Formato do report:**

```markdown
# Avaliação: {Empresa} -- {Vaga}

**Data:** {YYYY-MM-DD}
**Arquétipo:** {detectado}
**Score:** {X/5}
**URL:** {URL da vaga}
**PDF:** {caminho ou pendente}

---

## A) Resumo da Vaga
(conteúdo completo do bloco A)

## B) Match com o Currículo
(conteúdo completo do bloco B)

## C) Nível e Estratégia
(conteúdo completo do bloco C)

## D) Remuneração e Demanda
(conteúdo completo do bloco D)

## E) Plano de Personalização
(conteúdo completo do bloco E)

## F) Plano de Entrevistas
(conteúdo completo do bloco F)

## G) Rascunhos de Respostas para Candidatura
(apenas se score >= 4.5 -- rascunhos de respostas para o formulário de candidatura)

---

## Keywords extraídas
(lista de 15-20 keywords do JD para otimização ATS)
```

### 2. Registrar no tracker

**SEMPRE** registrar em `data/applications.md`:
- Próximo número sequencial
- Data atual
- Empresa
- Vaga
- Score: média do match (1-5)
- Status: `Evaluated`
- PDF: ❌ (ou ✅ se a auto-pipeline gerou PDF)
- Report: link relativo ao report .md (ex: `[001](reports/001-company-2026-01-01.md)`)

**Formato do tracker:**

```markdown
| # | Data | Empresa | Vaga | Score | Status | PDF | Report |
```
