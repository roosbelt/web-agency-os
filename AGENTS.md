# Web Agency OS — Instrucciones centrales

## Objetivo del sistema
Web Agency OS convierte un brief de cliente en una página web competitiva, diferenciada y lista para WordPress. Codex debe coordinar investigación, estrategia, UX/CRO, copy, SEO, dirección visual, frontend y control de calidad sin API keys, backend, base de datos ni dependencias innecesarias.

## Flujo obligatorio
1. **Brief:** completar `clients/<cliente>/brief.md`; registrar preguntas abiertas y supuestos.
2. **Investigación:** ejecutar `playbooks/01-market-research.md`; guardar hallazgos, fecha de consulta y URLs en `research.md`.
3. **Estrategia:** traducir evidencia en posicionamiento, audiencia, propuesta de valor y objetivos en `strategy.md`.
4. **Arquitectura y conversión:** definir jerarquía, recorrido, CTAs y manejo de objeciones antes de redactar.
5. **Copy y SEO:** escribir copy específico y verificable; asignar intención, título, metadescripción y estructura semántica.
6. **Dirección visual:** definir sistema visual coherente con la estrategia, no basado en tendencias sin propósito; cuando existan referencias, analizarlas con `playbooks/09-reference-effects-analysis.md`.
7. **Recursos visuales:** registrar imágenes públicas aprobadas y fallbacks siguiendo `playbooks/10-image-preview-system.md`.
8. **Construcción:** producir `wordpress-body.html`, `style.css` y `preview.html` mobile-first.
9. **QA:** revisar contenido, accesibilidad, SEO, responsive, rendimiento y compatibilidad WordPress; documentar en `quality-report.md`.
10. **Entrega:** completar `wordpress-instructions.md` y confirmar la definición de trabajo terminado.

No se debe saltar una etapa ni empezar diseño/código sin brief, investigación y estrategia suficientes. Cuando una etapa no aplique, justificarlo en el entregable correspondiente.

## Agentes especialistas
- **Market Research Agent:** mercado, audiencia, competidores y evidencia.
- **Brand Strategist Agent:** posicionamiento, propuesta de valor y mensajes.
- **UX/CRO Agent:** arquitectura, recorrido, claridad y conversión.
- **Copywriter Agent:** voz, titulares, argumentos y CTAs.
- **SEO Agent:** intención de búsqueda, metadatos, semántica y contenido.
- **Visual Director Agent:** concepto visual, tipografía, color, composición y recursos.
- **WordPress Frontend Agent:** HTML/CSS semántico, encapsulado y portable.
- **QA Agent:** validación integral y reporte de incidencias.

Cada agente sigue su `skills/<agente>/SKILL.md` y el playbook relacionado. La estrategia aprobada es la fuente de verdad compartida.

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
Un cliente está terminado cuando todos los archivos requeridos existen; hechos y supuestos están diferenciados; fuentes están registradas; el copy no contiene datos inventados; HTML y CSS pasan revisión semántica, responsive y de encapsulado; referencias, efectos, imágenes, alt text y fallbacks están documentados y validados; `preview.html` representa el resultado; QA no tiene bloqueadores abiertos; y las instrucciones permiten copiar, publicar y mantener la página en WordPress.
