# Análisis de efectos y adaptación original — The Joya by Victoria

## Principio
La propuesta toma patrones generales habituales en experiencias premium de joyería y los adapta a The Joya by Victoria. No copia diseños, textos, imágenes o código de Cartier, Tiffany & Co., Van Cleef & Arpels, Bvlgari ni Mejuri.

| Observed pattern | Interpretation | Proposed original adaptation | Section affected | CSS/HTML notes | Accessibility notes |
|---|---|---|---|---|---|
| Fotografía de campaña con gran escala y copy contenido | La imagen establece deseo mientras el texto orienta | Hero dividido con placeholder editorial propio y mensaje breve | Hero | Grid responsive; media con proporción estable y glow discreto | Orden DOM conserva H1 antes del recurso visual; placeholder tiene etiqueta accesible |
| Cards de producto con feedback visual mínimo | El movimiento comunica interactividad sin restar atención | Elevación de 4px, borde dorado suave y zoom máximo de 1.8% | Featured products | `transform` y `box-shadow` solo en dispositivos con hover | Contenido completo permanece visible sin hover; movimiento desactivado con reduced motion |
| Ritmo editorial con secciones claras y espacio negativo | La pausa refuerza percepción premium y legibilidad | Alternancia canvas, ink y soft con módulos autónomos | Todas las secciones | Tokens compartidos y padding fluido mobile-first | Contraste y orden semántico se mantienen sin CSS |
| Storytelling acompañado por retrato o estudio | Humaniza la marca y aporta contexto verificable | Módulo de historia con placeholder y hechos explícitamente pendientes | Brand story | Grid de dos columnas en desktop; fallback textual completo | No inventa historia; alt editable cuando exista imagen real |
| Procesos comerciales resumidos en pocos pasos | Reduce incertidumbre antes de consultar | Secuencia propuesta de tres pasos, marcada para aprobación | Consultation process | Lista ordenada semántica; CTA deshabilitado hasta confirmar WhatsApp | No hay enlace engañoso ni acción rota |
| FAQ expandible con interacción nativa | Permite profundizar sin saturar la página | Acordeón con `details` y `summary` nativos | FAQ | Sin JavaScript; estado abierto recibe cambio de color | Operable con teclado y legible sin scripts |
| Revelados suaves al entrar en viewport | Añaden ritmo sin dominar la experiencia | Animación corta por módulo mediante CSS, con fallback estático | Todas las secciones | `animation-timeline: view()` como mejora progresiva | Sin soporte se muestra contenido; `prefers-reduced-motion` elimina animación |
| Botones con transición contenida | Confirma acción y calidad de acabado | Cambio de fondo y desplazamiento de 2px solo en enlaces activos | Hero / process / final CTA | Transiciones CSS rápidas; estados pendientes no reaccionan | Foco visible; CTA no operativo usa `aria-disabled` |

## Decisiones pendientes
- Confirmar si la marca acepta movimiento sutil o prefiere una experiencia completamente estática.
- Sustituir placeholders solo con imágenes propias o autorizadas y alt text aprobado.
- Activar CTAs únicamente después de confirmar WhatsApp y condiciones comerciales.
