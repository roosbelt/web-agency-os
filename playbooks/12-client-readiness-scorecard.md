# Playbook 12 — Client Readiness Scorecard

## Objetivo
Medir calidad por etapa y distinguir una ejecución atractiva de una entrega realmente presentable, implementable o publicable.

## Escala común
| Score | Nivel | Interpretación |
|---|---|---|
| 0–40 | Weak | Faltan fundamentos o existen errores graves; mantener como internal draft. |
| 41–70 | Usable draft | Útil para continuar internamente, pero requiere decisiones o correcciones relevantes. |
| 71–85 | Client review ready | Coherente para revisión del cliente; todavía puede tener pendientes de implementación/publicación. |
| 86–100 | Publish ready | Evidencia, ejecución y QA sólidos; solo aplica sin bloqueadores críticos. |

## Método de puntuación
1. Puntuar cada dimensión sobre 100 usando evidencia existente, no trabajo prometido.
2. Escribir una justificación breve, links/archivos revisados, bloqueadores y acción para mejorar.
3. No promediar un criterio crítico ausente: marcar bloqueo y limitar estado.
4. Calcular `Overall readiness` como promedio simple de dimensiones aplicables, pero aplicar las puertas de estado.
5. QA propone el score final; Creative Director confirma o reduce el estado según coherencia y calidad percibida.

## Scorecards por dimensión
| Dimensión | Criterios evaluados |
|---|---|
| Research quality | preguntas útiles, mínimo de fuentes cumplido, fuentes primarias/recientes, patrones contrastados, oportunidades, riesgos y trazabilidad |
| Brand strategy | audiencia, posicionamiento, diferenciación, razones para creer, tono, límites de claims y decisiones descartadas |
| UX/CRO | intención/objeción por sección, recorrido, CTA por etapa, fricciones, escaneabilidad, accesibilidad y conversión ética |
| Copywriting | H1, subheadline, CTA, microcopy, voz, objeciones, claridad y claims validados/marcados |
| SEO | intención, title, meta description, headings, enlaces, alt text, schema sugerido y datos locales/negocio faltantes |
| Visual direction | intención visual, diferenciación, jerarquía, sistema, efectos con propósito, imágenes, responsive y riesgo genérico |
| WordPress implementation | HTML semántico, CSS scoped, modularidad, compatibilidad, instrucciones, rendimiento y ausencia de scripts obligatorios |
| Accessibility | teclado, foco, contraste, headings, nombres accesibles, alt text, reflow y reduced motion |
| Image readiness | mapa/links, permisos, calidad, dimensiones, alt text, fallbacks y sustituciones pendientes |
| Client readiness | claridad de presentación, decisiones solicitadas, placeholders controlados y ausencia de errores que dañen confianza |
| Publish readiness | datos comerciales/legales, destinos reales, permisos, QA final, SEO técnico y cero bloqueadores críticos |

## Puertas por estado
- **Internal draft:** cualquier score; supuestos y bloqueadores explícitos.
- **Client review:** Research, Brand, UX, Copy y Visual ≥71; presentación sin errores graves; preguntas al cliente claras.
- **WordPress-ready:** Frontend y Accessibility ≥86; HTML/CSS probado, scoped y documentado; puede quedar bloqueado para publicación por contenido.
- **Publish-ready:** todas las dimensiones aplicables ≥86, QA aprobado, Creative Director aprobado y cero bloqueadores críticos.

## Bloqueadores automáticos de publicación
Claims sin evidencia; CTA roto o no confirmado; datos comerciales requeridos ausentes; imágenes sin permiso; políticas/legales obligatorios ausentes; fallos críticos de accesibilidad; HTML/CSS no portable; placeholders presentados como reales; o QA/Creative Director sin aprobación.
