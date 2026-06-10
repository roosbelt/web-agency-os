# Instrucciones WordPress — The Joya by Victoria

## Estado actual

Esta entrega es una **versión de revisión para cliente**, preparada para evaluar visualmente la web antes de recibir fotografías, fichas de producto y datos comerciales finales. Puede integrarse en WordPress como borrador no público, pero no debe publicarse mientras conserve marcadores o CTA no configurados.

## Archivos principales

- `preview.html`: archivo que debe abrirse para revisar visualmente la propuesta.
- `wordpress-body.html`: contenido semántico para pegar en un bloque de HTML personalizado.
- `style.css`: estilos mobile-first completamente encapsulados bajo `.wao-the-joya`.
- `client-review-summary.md`: explicación simple para presentar la propuesta a la clienta.
- `client-assets-needed.md`: checklist de materiales que deben recibirse antes de publicar.

## Integración en WordPress

1. Crea una página nueva en borrador y evita su indexación.
2. Añade un bloque de **HTML personalizado** y pega todo `wordpress-body.html`, incluida la raíz `<div class="wao-the-joya">`.
3. Añade `style.css` al mecanismo CSS aprobado: child theme, CSS adicional o campo CSS global del editor.
4. Conserva `.wao-the-joya` en todos los selectores para evitar conflictos con el tema o plugins.
5. Sustituye los marcadores y datos pendientes antes de habilitar indexación o publicar.
6. Repite QA dentro del WordPress real en móvil, tablet y escritorio.

## Cómo sustituir los marcadores de imagen

Cada marcador visual usa un `<div role="img">` con un nombre accesible. Cuando exista una fotografía aprobada:

1. reemplázalo por un `<img>` con `src`, `width`, `height` y `alt` verificados;
2. conserva una clase encapsulada equivalente para mantener la composición;
3. optimiza el archivo y comprueba el recorte en todos los breakpoints;
4. valida contraste y legibilidad de cualquier texto cercano.

## WhatsApp: activación segura

Los CTA actuales son estados no interactivos y no contienen un destino inventado. Para activarlos:

1. confirma número oficial, enlace completo, mensaje inicial, responsable, horario y tratamiento de datos;
2. sustituye cada `<span ... aria-disabled="true">` de WhatsApp por un `<a>` con el destino aprobado y la misma clase visual;
3. prueba todos los enlaces en móvil y escritorio;
4. personaliza consultas por pieza únicamente cuando cada pieza tenga nombre o referencia real.

## Sustituciones requeridas antes de publicar

Sigue la checklist completa de `client-assets-needed.md`. Como mínimo:

- [ ] incorporar fotografías, nombres y fichas reales de producto;
- [ ] confirmar precios, moneda y disponibilidad;
- [ ] activar WhatsApp e Instagram oficial;
- [ ] aprobar historia, logotipo, colores y mensajes;
- [ ] añadir políticas de envíos, cambios, pagos, privacidad y datos legales;
- [ ] configurar metadatos SEO e indexación final;
- [ ] retirar la franja superior de “Vista de revisión para cliente” cuando la web sea aprobada para publicación;
- [ ] repetir QA y resolver todos los bloqueadores del `quality-report.md`.

## Verificación posterior

- [ ] No quedan textos “por confirmar”, marcadores ni estados deshabilitados en la página pública.
- [ ] La raíz `.wao-the-joya` está presente y no altera otras páginas.
- [ ] Existe un único H1 y el orden de lectura sigue siendo lógico.
- [ ] Enlaces, CTA, imágenes y políticas funcionan.
- [ ] Foco, contraste y alt text se validaron con activos finales.
- [ ] No existe overflow horizontal a 320, 375, 768, 1024 y 1440 px.
- [ ] Title, meta description, canonical e indexación están configurados.
- [ ] Un QA final aprobó la publicación dentro del WordPress real.
