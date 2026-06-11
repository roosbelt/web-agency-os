# Playbook 11 — Agent Performance System

## Objetivo
Convertir el trabajo de agentes en una cadena de decisiones trazable, consistente y revisable. Cada agente debe investigar o ejecutar, explicar decisiones, medir calidad, declarar incertidumbre y bloquear el avance cuando falten datos críticos.

## Estados de entrega
- **Internal draft:** incompleto o exploratorio; puede contener supuestos marcados y bloqueadores. No mostrar como propuesta final.
- **Client review:** suficientemente coherente para obtener decisiones del cliente; no implica integración o publicación segura.
- **WordPress-ready:** HTML/CSS portable, probado y documentado; puede contener contenido aprobado para implementación, pero aún puede estar bloqueado comercial o legalmente.
- **Publish-ready:** QA y Creative Director aprueban; no quedan bloqueadores críticos, claims sin demostrar, placeholders accidentales ni datos operativos pendientes.

Un score no sustituye un estado: cualquier bloqueador crítico impide `Publish-ready`, incluso con promedio alto.

## Flujo y puertas obligatorias
`Research → Brand → UX/CRO → Copy → SEO → Visual → Frontend → QA → Creative Director Review`

1. Cada agente recibe brief, outputs aprobados previos, preguntas abiertas y estado objetivo.
2. Antes de trabajar, confirma inputs suficientes; si falta un dato crítico, declara bloqueo y produce solo lo seguro.
3. Entrega un registro con `templates/agent-output-template.md` y actualiza el artefacto principal de su etapa.
4. Puntúa su etapa con criterios verificables, adjunta evidencia y separa hechos, inferencias y supuestos.
5. El siguiente agente realiza revisión cruzada: confirma que puede usar el output sin reinterpretar ni inventar.
6. QA consolida scorecards; Creative Director decide estado final y solicita correcciones si el resultado es genérico, confuso o débil.

## Output fijo y criterios por agente
| Agente | Output fijo mínimo | Criterios principales | Revisión cruzada |
|---|---|---|---|
| Market Research | preguntas, fuentes, patrones, oportunidades, riesgos, bloqueos y research depth score | profundidad, actualidad, trazabilidad, relevancia | Brand verifica que evidencia soporte decisiones |
| Brand Strategy | posicionamiento, diferenciación, audiencia, tono, mensajes permitidos/prohibidos y brand score | especificidad, defendibilidad, diferenciación | UX y Copy prueban claridad y utilidad |
| UX/CRO | intención y objeción por sección, recorrido, CTA por etapa, fricciones y UX/CRO score | claridad, baja fricción, conversión ética | Copy y QA revisan recorrido y acciones |
| Copywriting | H1, subheadline, CTA, microcopy, objeciones, claims por validar y copy score | claridad, voz, evidencia, escaneabilidad | Brand y SEO revisan coherencia e intención |
| SEO | intención, title, meta, headings, schema sugerido, datos faltantes y SEO score | honestidad, semántica, intención | Copy y Frontend revisan implementación |
| Visual Direction | intención/efectos por sección, sistema visual, imágenes necesarias, riesgos genéricos y visual score | diferenciación, jerarquía, accesibilidad | Frontend y Creative Director revisan viabilidad |
| WordPress Frontend | HTML/CSS, preview, modularidad, seguridad WordPress, rendimiento y frontend score | portabilidad, encapsulado, responsive, accesibilidad | QA valida con pruebas reproducibles |
| QA | scorecard final, evidencias, bloqueadores, warnings y estados de readiness | cobertura, severidad, reproducibilidad | Creative Director cuestiona veredicto y experiencia |
| Creative Director | revisión creativa final, correcciones prioritarias, estado y recomendación | claridad, diferenciación, conversión, coherencia | puerta final antes de presentar o publicar |

## Scorecards
- Usar `playbooks/12-client-readiness-scorecard.md` y `templates/client-readiness-scorecard-template.md`.
- Cada score debe citar evidencia; no asignar puntos por intención futura.
- Evaluar criterios como `0` cuando son obligatorios y no existen; marcar `N/A` solo con justificación.
- Registrar score anterior, score nuevo y razón del cambio para evitar inflación silenciosa.
- Escalas: `0–40 weak`, `41–70 usable draft`, `71–85 client review ready`, `86–100 publish ready`.

## Bloqueadores y no avance
Detener la transición o limitar el estado cuando falten datos críticos como oferta real, audiencia, claims verificables, CTA/destino operativo, precios obligatorios, imágenes con permiso, políticas, datos legales o capacidades WordPress. El agente debe indicar: dato faltante, riesgo, propietario de respuesta, siguiente acción y qué trabajo seguro sí puede continuar.

## Supuestos
Todo supuesto debe incluir: declaración, motivo, riesgo, cómo validarlo, propietario y fecha/etapa límite. Usar `[POR CONFIRMAR]` en contenido visible; nunca convertir un supuesto en claim, prueba, política o capacidad operativa.

## Cómo evitar trabajo genérico
- Exigir que cada decisión responda a evidencia, audiencia, objetivo o restricción concreta.
- Señalar clichés, layouts intercambiables, adjetivos vacíos, secciones sin función y efectos sin propósito.
- Comparar contra alternativas y explicar por qué la propuesta pertenece a esta marca.
- Eliminar componentes que solo llenan espacio; reforzar una idea distintiva defendible.
- No confundir estética premium con grandes espacios, serif o dorado sin justificación estratégica.

## Reglas para mejorar investigación y diseño
- Investigación: formular preguntas antes de navegar, usar fuentes primarias y variadas, registrar fuentes inaccesibles, contrastar patrones y convertir hallazgos en decisiones/riesgos.
- Diseño: definir intención por sección, probar jerarquía sin imágenes, documentar necesidades reales, validar responsive/accesibilidad y usar referencias solo como patrones para adaptaciones originales.

## Criterio de salida
La etapa está lista para avanzar cuando su output fijo existe, su score tiene evidencia, no hay bloqueadores incompatibles con el próximo estado y el agente receptor acepta el handoff sin necesitar inventar o reinterpretar decisiones críticas.
