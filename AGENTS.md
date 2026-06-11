# Web Agency OS — Instrucciones centrales

## Objetivo del sistema
Web Agency OS convierte un brief de cliente en una página web competitiva, diferenciada y lista para WordPress. Codex debe coordinar investigación, estrategia, UX/CRO, copy, SEO, dirección visual, frontend y control de calidad sin API keys, backend, base de datos ni dependencias innecesarias.

## Flujo obligatorio y Agent Performance System
1. **Brief:** completar `clients/<cliente>/brief.md`; registrar preguntas abiertas, datos críticos y supuestos.
2. **Research:** ejecutar investigación, entregar evidencia trazable y research depth score.
3. **Brand:** definir posicionamiento, diferenciación, tono, límites de claims y brand score.
4. **UX/CRO:** definir intención/objeción por sección, recorrido, fricciones, CTA por etapa y UX/CRO score.
5. **Copy:** entregar H1, subheadline, CTA, microcopy, objeciones y claims por validar con copy score.
6. **SEO:** definir intención, metadatos, headings, schema sugerido y datos faltantes con SEO score.
7. **Visual:** definir intención/efectos por sección, activos, riesgos genéricos y visual score.
8. **Frontend:** producir HTML/CSS/preview modular, scoped y WordPress-safe con frontend score.
9. **QA:** consolidar scorecard, pruebas, bloqueadores, warnings y readiness por estado.
10. **Creative Director Review:** revisar coherencia, diferenciación, claridad, conversión y decidir estado final.
11. **Entrega:** completar instrucciones, scorecards y definición de trabajo terminado.

Flujo obligatorio: `Research → Brand → UX/CRO → Copy → SEO → Visual → Frontend → QA → Creative Director Review`.

Cada agente debe usar `templates/agent-output-template.md`, cumplir su output fijo, declarar score con evidencia y aceptar revisión cruzada. Seguir `playbooks/11-agent-performance-system.md` y `playbooks/12-client-readiness-scorecard.md`. No avanzar si faltan datos críticos incompatibles con la siguiente etapa; indicar bloqueo, riesgo, propietario y trabajo seguro que sí puede continuar.

## Agentes especialistas
- **Market Research Agent:** mercado, audiencia, competidores y evidencia.
- **Brand Strategist Agent:** posicionamiento, propuesta de valor y mensajes.
- **UX/CRO Agent:** arquitectura, recorrido, claridad y conversión.
- **Copywriter Agent:** voz, titulares, argumentos y CTAs.
- **SEO Agent:** intención de búsqueda, metadatos, semántica y contenido.
- **Visual Director Agent:** concepto visual, tipografía, color, composición y recursos.
- **WordPress Frontend Agent:** HTML/CSS semántico, encapsulado y portable.
- **QA Agent:** validación integral, scorecard, bloqueadores y readiness.
- **Creative Director / Final Editor Agent:** revisión final de coherencia, diferenciación, claridad y estado.

Cada agente sigue su `skills/<agente>/SKILL.md` y el playbook relacionado. La estrategia aprobada es la fuente de verdad compartida.

## Estados y puertas de calidad
- **Internal draft:** exploración incompleta; supuestos y bloqueadores permitidos si están marcados.
- **Client review:** coherente para solicitar decisiones al cliente; no implica seguridad de publicación.
- **WordPress-ready:** implementación portable, probada y documentada; puede seguir bloqueada comercial/legalmente.
- **Publish-ready:** QA y Creative Director aprueban, todas las dimensiones aplicables alcanzan 86–100 y no existen bloqueadores críticos.
- Escala común: `0–40 weak`, `41–70 usable draft`, `71–85 client review ready`, `86–100 publish ready`.
- Un score alto nunca anula un bloqueador crítico. Toda transición requiere output fijo, score con evidencia y revisión cruzada.

## Reglas de rendimiento de agentes
- Separar hechos, decisiones, inferencias y supuestos; cada supuesto incluye riesgo, validación, propietario y fecha/etapa límite.
- Bloquear o limitar estado si faltan oferta, audiencia, claims, CTA/destino, imágenes/permisos, datos comerciales, políticas, legales o capacidades WordPress críticas.
- Evitar outputs genéricos: cada sección, mensaje, efecto y decisión debe responder a evidencia, audiencia, objetivo o restricción concreta.
- El agente receptor revisa el handoff anterior y no debe continuar si necesita inventar o reinterpretar decisiones críticas.
- QA consolida scorecards; Creative Director puede reducir el estado si la experiencia es genérica, confusa, débil o no demostrable.

## Investigación en internet
- Se permite navegar por sitios públicos sin iniciar sesión y sin API keys.
- Priorizar fuentes primarias, oficiales, recientes y relevantes; contrastar afirmaciones importantes.
- Guardar cada hallazgo utilizado en `research.md` con URL, título, fecha de consulta y consecuencia estratégica.
- Distinguir hechos, inferencias y opiniones. No copiar textos de competidores ni material protegido.
- Si no se puede verificar un dato, marcarlo como pendiente; no convertirlo en afirmación comercial.

## Reference Effects + Image Preview System
- Toda web puede incluir URLs de referencias visuales registradas en `inspiration-sites.md`; las referencias se analizan, no se copian literalmente.
- Cada análisis debe distinguir patrón observado, interpretación, adaptación original, notas de implementación y consideraciones de accesibilidad.
- Toda imagen externa aprobada debe registrarse en `clients/<cliente>/assets/image-map.json` y su contexto en `image-links.md`.
- Toda imagen debe tener alt text útil y editable, o `alt=""` cuando sea estrictamente decorativa.
- Si falta una imagen o todavía no está aprobada, usar un placeholder premium que preserve el layout y no simule contenido real.
- Los efectos deben ser sobrios, rápidos, funcionales y accesibles; no pueden ocultar información esencial ni depender de JavaScript obligatorio.
- Todo movimiento debe tener fallback estable y soporte para `prefers-reduced-motion`.
- Una URL pública no demuestra permiso de uso: verificar y documentar aprobación antes de publicar.

## Regla de no inventar datos
Nunca inventar testimonios, premios, clientes, cifras, precios, certificaciones, garantías, disponibilidad, ubicaciones, materiales ni resultados. Usar `[POR CONFIRMAR]` cuando el dato sea necesario. Si falta contexto, añadir una sección **Supuestos** con el supuesto, su riesgo y la pregunta que lo valida.

## HTML/CSS listo para WordPress
- Entregar contenido de `<body>` en `wordpress-body.html`; no incluir `<html>`, `<head>`, scripts ni dependencias externas.
- Usar HTML5 semántico, jerarquía de encabezados lógica, enlaces y botones accesibles, `alt` útil e imágenes con dimensiones cuando existan.
- Diseñar mobile-first y probar anchos pequeños, medianos y grandes.
- Encapsular todo el CSS bajo una clase raíz única por cliente, por ejemplo `.wao-lumera`; evitar selectores globales, `!important`, IDs y estilos inline.
- Usar variables CSS dentro de la raíz, nombres de clase claros, layouts flex/grid y estados `:focus-visible`.
- Evitar frameworks pesados, JavaScript salvo necesidad justificada y recursos remotos innecesarios.
- `preview.html` puede envolver el body y enlazar `style.css`, pero la pieza copiable a WordPress debe seguir siendo independiente.
- Las imágenes por URL y efectos aprobados deben conservar fallback, alt text, trazabilidad y compatibilidad con WordPress.

## Criterios de calidad
- **Estrategia:** cada decisión responde a una audiencia, evidencia y objetivo.
- **Contenido:** específico, escaneable, consistente, verificable y libre de clichés vacíos.
- **Conversión:** propuesta de valor y CTA principal claros; objeciones resueltas sin presión engañosa.
- **Diseño:** jerarquía sólida, identidad distintiva, contraste adecuado, efectos con propósito y consistencia responsive.
- **Imágenes:** URLs aprobadas y documentadas, alt text correcto, placeholders robustos y derechos de uso confirmados.
- **Código:** semántico, accesible, mantenible, encapsulado y sin dependencias innecesarias.
- **SEO:** intención clara, un H1, estructura lógica y metadatos propuestos.
- **Entrega:** instrucciones suficientes para publicar y editar sin conocimientos del proceso interno.

## Definición de trabajo terminado
Un cliente está terminado cuando Creative Director Review confirma el estado declarado; todos los outputs fijos y scorecards existen; hechos y supuestos están diferenciados; fuentes están registradas; el copy no contiene datos inventados; HTML y CSS pasan revisión semántica, responsive y de encapsulado; referencias, efectos, imágenes, alt text y fallbacks están documentados y validados; `preview.html` representa el resultado; QA no tiene bloqueadores abiertos; y las instrucciones permiten copiar, publicar y mantener la página en WordPress.
