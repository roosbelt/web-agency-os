# Exports copy-ready — The Joya by Victoria

## Propósito
Esta carpeta contiene bloques autocontenidos para copiar y pegar en WordPress. Cada export HTML incluye su propia raíz `.wao-the-joya`; cada CSS contiene los estilos compartidos y específicos necesarios para ese bloque, siempre encapsulados bajo esa raíz.

Los exports conservan placeholders y estados no interactivos porque imágenes finales, catálogo, WhatsApp y datos comerciales siguen por confirmar. No publicar hasta sustituirlos y completar QA.

## Qué archivo usar
| Necesidad | HTML para bloque de HTML personalizado | CSS para WordPress |
|---|---|---|
| Solo hero | `01-hero-copy-ready.html` | `01-hero-copy-ready.css` |
| Solo productos destacados | `02-featured-products-copy-ready.html` | `02-featured-products-copy-ready.css` |
| Solo historia de marca | `03-brand-story-copy-ready.html` | `03-brand-story-copy-ready.css` |
| Solo proceso de consulta | `04-consultation-process-copy-ready.html` | `04-consultation-process-copy-ready.css` |
| Solo FAQ | `05-faq-copy-ready.html` | `05-faq-copy-ready.css` |
| Solo CTA final | `06-final-cta-copy-ready.html` | `06-final-cta-copy-ready.css` |
| Página completa | `full-page-copy-ready.html` | `full-page-copy-ready.css` |

## Copiar un módulo independiente
1. Crear o abrir una página en borrador en WordPress.
2. Añadir un bloque **HTML personalizado** y pegar el archivo `.html` elegido completo, incluida la raíz `<div class="wao-the-joya">`.
3. Pegar el CSS del mismo nombre en el mecanismo CSS aprobado: estilos adicionales del tema, child theme o campo global del editor.
4. No combinar el CSS individual con `full-page-copy-ready.css`; contienen reglas compartidas y hacerlo duplicaría estilos.
5. Sustituir placeholders y estados pendientes solo con contenido aprobado.
6. Probar el bloque en móvil, tablet, desktop y teclado antes de publicar.

## Copiar la página completa
1. Pegar `full-page-copy-ready.html` en un único bloque HTML personalizado.
2. Añadir `full-page-copy-ready.css` una sola vez.
3. Seguir `../wordpress-instructions.md` para imágenes, WhatsApp, contenido pendiente y QA.

## Comportamiento independiente
- Cada módulo individual incluye `.wao-the-joya`, por lo que conserva variables, tipografía, encapsulado, responsive y reducción de movimiento sin depender de otro export.
- El hero independiente convierte “Explorar piezas” en un estado pendiente porque el destino `#joya-seleccion` no existe cuando se pega solo. Configurar un destino real antes de activarlo.
- Los módulos que usan imágenes mantienen placeholders premium y no cargan URLs demo o activos no aprobados.
- El FAQ funciona con controles nativos `details`/`summary` y no necesita JavaScript.
- Los efectos son CSS progresivo y respetan `prefers-reduced-motion`.

## Reglas de mantenimiento
- Los archivos fuente siguen siendo `../modules/`, `../wordpress-body.html` y `../style.css`.
- Si cambia un módulo fuente, regenerar y volver a validar su par copy-ready y la página completa.
- No renombrar `.wao-the-joya`, no añadir estilos globales y no eliminar estados de foco.
