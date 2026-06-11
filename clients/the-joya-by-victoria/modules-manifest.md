# Modules manifest — The Joya by Victoria

## Propósito
La página se divide en seis módulos editables. Cada `section.html` puede copiarse por separado **dentro de un contenedor con la clase raíz `.wao-the-joya`**. Cada `section.css` contiene únicamente estilos encapsulados y se ensambla en el orden indicado dentro de `style.css`.

| Orden | Módulo | Objetivo | HTML | CSS | Slots de imagen |
|---|---|---|---|---|---|
| 01 | Hero | Presentar marca y conducir a selección/consulta | `modules/01-hero/section.html` | `modules/01-hero/section.css` | `hero_campaign` |
| 02 | Featured products | Mostrar tres piezas sin inventar catálogo | `modules/02-featured-products/section.html` | `modules/02-featured-products/section.css` | `product_01`, `product_02`, `product_03` |
| 03 | Brand story | Reservar narrativa verificable de marca | `modules/03-brand-story/section.html` | `modules/03-brand-story/section.css` | `brand_founder`, `brand_texture` opcional |
| 04 | Consultation process | Explicar proceso propuesto y pendientes | `modules/04-consultation-process/section.html` | `modules/04-consultation-process/section.css` | Ninguno |
| 05 | FAQ | Resolver preguntas con controles nativos | `modules/05-faq/section.html` | `modules/05-faq/section.css` | Ninguno |
| 06 | Final CTA | Cerrar el recorrido sin enlace inventado | `modules/06-final-cta/section.html` | `modules/06-final-cta/section.css` | `final_cta` |

## Ensamblado
- `wordpress-body.html` contiene cabecera, los seis módulos en este orden y footer, todo dentro de una única raíz `.wao-the-joya`.
- `style.css` contiene primero los tokens y estilos base, seguidos por los seis archivos `section.css` en orden.
- `preview.html` envuelve exactamente el body ensamblado en un documento local y carga únicamente `style.css`.
- Los archivos modulares son la fuente para editar secciones; después de un cambio se deben volver a ensamblar los tres entregables finales.

## Uso individual en WordPress
1. Confirmar que la página o bloque exterior incluye `.wao-the-joya`.
2. Copiar el `section.html` del módulo elegido en un bloque HTML personalizado.
3. Copiar su `section.css` junto con los estilos base de `style.css`; nunca publicar un módulo sin tokens/base.
4. Sustituir solo datos e imágenes aprobados, conservar IDs únicos y probar enlaces internos.
5. Ejecutar QA del módulo y de la página completa.
