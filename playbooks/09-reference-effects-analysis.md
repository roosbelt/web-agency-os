# Playbook 09 — Reference Effects Analysis

## Objetivo
Convertir URLs de referencia en decisiones visuales originales y ejecutables, sin copiar diseños, contenido protegido ni identidad de terceros.

## Entradas y entregables
- Recibir las URLs en `inspiration-sites.md` usando `templates/inspiration-sites-template.md`.
- Registrar el análisis en `effects-analysis.md` usando `templates/effects-analysis-template.md`.
- Trasladar únicamente las adaptaciones aprobadas a `strategy.md`, `wordpress-body.html` y `style.css`.
- Guardar URL, fecha de consulta y alcance observado; si una referencia no es pública o no carga, marcarla como pendiente.

## Proceso práctico
1. **Aclarar propósito:** anotar por qué se eligió cada referencia, qué sección interesa y su prioridad.
2. **Observar sin replicar:** revisar estructura, navegación, hero, cards, galerías, CTAs, ritmo, composición, uso de imágenes y sensación de marca.
3. **Analizar comportamiento:** documentar transiciones, hover states, estados de foco, revelados, cambios de escala, desplazamiento y otras microinteracciones.
4. **Separar evidencia de decisión:** para cada hallazgo completar obligatoriamente:
   - **Observed pattern:** qué se ve objetivamente.
   - **Interpretation:** qué función podría cumplir; marcarla como inferencia.
   - **Proposed original adaptation:** propuesta propia adecuada a la estrategia del cliente.
   - **Implementation notes:** HTML/CSS necesario, fallback y límites técnicos.
   - **Accessibility considerations:** teclado, foco, contraste, movimiento y legibilidad.
5. **Priorizar:** clasificar la propuesta como esencial, deseable o descartada según impacto, esfuerzo, rendimiento y riesgo.
6. **Validar originalidad:** comparar la adaptación con la referencia y cambiar cualquier combinación que replique de forma demasiado cercana composición, copy, recursos o identidad.
7. **Entregar a frontend:** especificar sección afectada, estado inicial/final, duración orientativa y comportamiento sin animación.

## Matriz mínima de revisión
| Área | Qué observar | Pregunta de adaptación |
|---|---|---|
| Estructura y navegación | Jerarquía, densidad, orientación | ¿Facilita el recorrido del cliente? |
| Hero y CTAs | Foco, orden, contraste, acción | ¿Aclara propuesta y próximo paso? |
| Cards y galerías | Ritmo, proporción, estados | ¿Presenta contenido real con claridad? |
| Transiciones y hover | Propósito, duración, feedback | ¿Mejora comprensión sin distraer? |
| Imágenes | Encuadre, escala, carga, fallback | ¿Refuerza marca y resiste datos faltantes? |
| Sensación de marca | Ritmo, detalle, tono | ¿Es coherente con la estrategia aprobada? |

## Reglas de efectos premium
- Preferir efectos sobrios, rápidos y funcionales; evitar animación ornamental continua.
- Implementar primero con CSS y sin JavaScript obligatorio.
- Mantener la interfaz usable si hover, animación o imagen no están disponibles.
- Incluir estados `:focus-visible` equivalentes y soporte para `prefers-reduced-motion`.
- No ocultar información esencial detrás de una interacción.
- No copiar literalmente layouts, secuencias, assets, textos ni rasgos distintivos de una referencia.

## Criterio de salida
El análisis distingue observación, interpretación y adaptación original; cada efecto propuesto tiene propósito, notas de implementación, fallback y consideración accesible.
