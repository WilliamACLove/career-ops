# Modo: oferta -- Evaluación completa A-F

Cuando el candidato pegue una oferta (texto o URL), SIEMPRE entregar los 6 bloques (más el Paso 0.5 de barreras legales).

## Paso 0 -- Detección de arquetipo

Clasificar la oferta en uno de los 6 arquetipos legales (ver `_shared.md`). Si es híbrida, indicar los 2 más cercanos. Esto determina:
- Qué proof points priorizar en el bloque B
- Cómo reescribir el summary en el bloque E
- Qué stories STAR preparar en el bloque F

## Paso 0.5 -- Barreras legales (pass/fail, nunca promediadas en silencio)

Antes de puntuar nada, comprobar la oferta contra el bloque `legal:` de `config/profile.yml` del candidato. Son filtros estructurales, no factores ponderados — una barrera fallida debe aparecer **explícitamente** en la dimensión Red flags Y en la recomendación final. Nunca dejar que el fallo de una barrera se diluya en un score que en apariencia queda bien.

1. **Colegiación / jurisdicción** — comparar la sede/oficina de la oferta con `legal.bar_admissions`. Aplicar la escala de rigor:
   - **Despachos: estricto.** Muchos exigen colegiación (o un compromiso realista de colegiarse) en el Colegio de Abogados de la demarcación donde radica la oficina. Un desajuste sin colegiación previa ni plan realista de colegiarse a la incorporación es casi un bloqueo — decirlo con claridad.
   - **In-house: moderado.** No siempre se exige colegiación activa; señalar el requisito de alta colegial si aplica, en vez de bloquear.
   - **Sector público y legal tech: mínimo.** Basta con el grado en Derecho y, en su caso, superar el proceso selectivo correspondiente; un desajuste es una nota a pie de página, no un flag.
2. **Banda de experiencia (nivel/seniority)** — si la oferta indica una banda ("3-5 años de experiencia", "asociado senior", "colaborador junior"), compararla con `legal.class_year`. Quedar fuera de la banda indicada en una oferta de asociado de despacho es casi un motivo automático de descarte: recomendar no presentar la candidatura, señalando que la renegociación de nivel solo ayuda de forma marginal en la oferta final.
3. **Agente de la Propiedad Industrial** — los roles de tramitación de patentes requieren la inscripción como Agente de la Propiedad Industrial (o titulación habilitante equivalente). Si la oferta lo exige y `legal.patent_bar` es `false`, es una barrera dura.
4. **Riesgo de conflictos** — en roles senior/counsel/socio, señalar que toda oferta está condicionada a superar el control de conflictos de intereses. Anotarlo; no puntuarlo.

Reportar el resultado de las barreras como una tabla breve de pass/fail al inicio del Bloque B. Una barrera fallida limita la recomendación con independencia de lo bien que encaje el resto.

## Bloque A -- Resumen del rol

Tabla con:
- Arquetipo detectado
- Dominio (transaccional / procesal-litigios / in-house / compliance / sector público / legal tech)
- Función (asesorar / negociar / litigar / gestionar / construir)
- Seniority (banda de experiencia / nivel del puesto en in-house)
- Remoto (Full remote / Híbrido / Presencial)
- Tamaño del equipo (si se menciona)
- TL;DR en 1 frase

## Bloque B -- Match con el CV

Leer `cv.md`. Crear una tabla donde cada requisito de la oferta se mapea sobre líneas exactas del CV.

**Adaptado al arquetipo:**
- Despacho — Transaccional -> priorizar operaciones cerradas en la banda correcta: tipo y volumen de operación, titularidad del drafting, gestión de workstreams especializados
- Despacho — Procesal/Litigios -> priorizar declaraciones testificales, recursos redactados y defendidos, experiencia en juicio/arbitraje, calidad de escritura
- In-House (Producto/Mercantil/Privacidad) -> priorizar volumen de contratos (SaaS/MSA/DPA), asesoramiento cross-functional, amplitud regulatoria, comunicación en lenguaje llano
- Compliance y Regulatorio -> priorizar regímenes concretos (PBC/FT, protección de datos, normativa sectorial), interlocución con el regulador, investigaciones internas, programas propios
- Sector Público / Interés Público -> priorizar volumen en sala, experiencia en apelación, compromiso demostrado con el servicio público (clínicas jurídicas, becas, experiencia previa)
- Legal Tech / Legal Engineer -> priorizar formación de despacho de primer nivel MÁS fluidez real en producto/IA: playbooks construidos, flujos automatizados, proyectos legal-tech propios

Sección **Gaps** con estrategia de mitigación para cada uno. Para cada gap:
1. ¿Es un bloqueador duro o un nice-to-have?
2. ¿Puede el candidato demostrar experiencia adyacente?
3. ¿Hay algún proyecto del portfolio que cubra este gap?
4. Plan de mitigación concreto (frase para la carta de presentación, mini-proyecto rápido, etc.)

## Bloque C -- Nivel y estrategia

1. **Nivel detectado** en la oferta vs. **nivel natural del candidato para ese arquetipo** — en despacho, esto es la banda de experiencia (ver barreras legales); en in-house es la escala de títulos (Counsel → Senior Counsel → Director/DGC → GC), donde el **título es la palanca de remuneración**
2. **Plan "vender senior sin mentir"**: formulaciones específicas adaptadas al arquetipo, asuntos/operaciones concretas a destacar, cómo posicionar la formación de despacho, clerkships u oposiciones aprobadas como ventaja
3. **Plan "si me bajan de nivel"**: en despacho, la banda de experiencia es negociable ±1 año en la oferta final (a veces bajar un año compra tiempo hasta la promoción); en in-house, defender el nivel/título (Senior Counsel vs. Counsel) antes de negociar cifras, ya que el % de bonus objetivo y el equity siguen al título

## Bloque D -- Remuneración y demanda

Usar WebSearch para consultar las fuentes canónicas del mercado legal según el tipo de empleador (ver `_shared.md` → Inteligencia de remuneración):
- **Despachos:** guías salariales de Hays, Michael Page/PageGroup y Robert Walters (práctica legal); secciones de empleo de Economist & Jurist e Iberley
- **In-house:** las mismas guías salariales generales filtradas por legal/compliance; LinkedIn Salary Insights como señal complementaria
- **Sector público:** tablas retributivas publicadas en la convocatoria de la oposición correspondiente
- Reputación de remuneración de la empresa (LinkedIn, referencias del sector)
- Tendencia de demanda del rol en el mercado hispanohablante

Tabla con datos y fuentes citadas. Si no hay datos, decirlo claramente — no inventar nada.

**El silencio salarial es normal en despacho.** Las ofertas de despacho rara vez indican una cifra ("salario competitivo" es el estándar de mercado) — no lo tratar como señal de alerta por sí solo.

**Mercado español -- Verificaciones obligatorias:**
- ¿Se mencionan pagas extra (14 pagas)? Incluirlas en el cálculo del bruto anual.
- ¿Parte variable (bonus, comisión, participación en resultados)?
- ¿Plan de pensiones o seguro médico mencionados? ¿Histórico disponible?
- ¿Qué convenio colectivo aplica (p. ej. el Convenio Colectivo Estatal de Despachos de Abogados, u otro sectorial)? Si es así, verificar la categoría profesional.
- ¿Contrato indefinido o temporal? Si es temporal: duración, motivo, posibilidad de conversión a indefinido.
- ¿Colaborador externo / of counsel / autónomo? Tarifa diaria o mensual, duración del proyecto, cuota de autónomo y ausencia de vacaciones/baja a sumar en la comparación.
- Si el rol exige colegiación o Agente de la Propiedad Industrial, ¿el candidato cumple el requisito? (ver Barreras legales, Paso 0.5)

## Bloque E -- Plan de personalización

| # | Sección | Estado actual | Cambio propuesto | Justificación |
|---|---------|---------------|------------------|---------------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 modificaciones del CV + Top 5 modificaciones de LinkedIn para maximizar el match.

## Bloque F -- Plan de entrevistas

6-10 stories STAR+R mapeadas sobre los requisitos de la oferta (STAR + **Reflexión**):

| # | Requisito de la oferta | Story STAR+R | S | T | A | R | Reflexión |
|---|------------------------|--------------|---|---|---|---|-----------|

La columna **Reflexión** captura lo aprendido o lo que se haría diferente. Señala la seniority — los juniors describen lo que ocurrió, los seniors extraen aprendizajes.

**Story Bank:** Si existe `interview-prep/story-bank.md`, verificar si estas stories ya están ahí. Si no, añadir las nuevas. Con el tiempo, esto construye un banco reutilizable de 5-10 stories maestras adaptables a cualquier pregunta de entrevista.

**Seleccionadas y enmarcadas según el arquetipo:**
- Despacho — Transaccional -> destacar la ejecución de operaciones, la titularidad del drafting, la gestión de workstreams especializados
- Despacho — Procesal/Litigios -> destacar la estrategia procesal, recursos ganados, declaraciones testificales, escritura bajo presión
- In-House (Producto/Mercantil/Privacidad) -> destacar el "ayudar al negocio a decir sí de forma segura", el volumen gestionado, el asesoramiento cross-functional
- Compliance y Regulatorio -> destacar la construcción de programas, la interlocución con el regulador, las investigaciones gestionadas
- Sector Público / Interés Público -> destacar el volumen en sala, el criterio bajo restricción de recursos, el compromiso con la misión
- Legal Tech / Legal Engineer -> destacar cómo se traduce la experiencia de despacho en decisiones de producto/flujo de trabajo, métricas de adopción

Incluir también:
- 1 asunto representativo recomendado (qué operación/caso de la relación de asuntos presentar y cómo, dentro de los límites de confidencialidad)
- Preguntas red-flag y cómo responderlas (ej.: "¿Por qué dejas tu despacho?", "¿Por qué no has llegado a socio?", "¿Cuál es tu historial de horas facturables?", "¿Por qué in-house / por qué volver a despacho?")

---

## Post-evaluación

**SIEMPRE** ejecutar tras los bloques A-F:

### 1. Guardar el report .md

Guardar la evaluación completa en `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = siguiente número secuencial (3 dígitos, zero-padded). Para asignarlo de forma atómica y evitar condiciones de carrera, ejecutar `node reserve-report-num.mjs` para reservar el número (stdout devuelve `{###}`), escribir el report y luego ejecutar `node reserve-report-num.mjs --release {###}` para liberar el sentinel.
- `{company-slug}` = nombre de empresa en minúsculas, sin espacios (usar guiones)
- `{YYYY-MM-DD}` = fecha de hoy

**Formato del report:**

```markdown
# Evaluación: {Empresa} -- {Rol}

**Fecha:** {YYYY-MM-DD}
**Arquetipo:** {detectado}
**Score:** {X/5}
**URL:** {URL de la oferta}
**PDF:** {ruta o pendiente}

---

## A) Resumen del rol
(contenido completo del bloque A)

## B) Match con el CV
(contenido completo del bloque B)

## C) Nivel y estrategia
(contenido completo del bloque C)

## D) Remuneración y demanda
(contenido completo del bloque D)

## E) Plan de personalización
(contenido completo del bloque E)

## F) Plan de entrevistas
(contenido completo del bloque F)

## G) Borradores de respuestas para la candidatura
(solo si score >= 4.5 -- borradores de respuestas para el formulario de candidatura)

---

## Palabras clave extraídas
(lista de 15-20 palabras clave de la oferta para optimización ATS)
```

### 2. Registrar en el tracker

**SIEMPRE** registrar en `data/applications.md`:
- Siguiente número secuencial
- Fecha de hoy
- Empresa
- Rol
- Score: media del match (1-5)
- Estado: `Evaluated`
- PDF: no (o sí si el auto-pipeline generó un PDF)
- Report: enlace relativo al archivo del report (ej.: `[001](reports/001-company-2026-01-01.md)`)

**Formato del tracker:**

```markdown
| # | Fecha | Empresa | Rol | Score | Estado | PDF | Report |
```
