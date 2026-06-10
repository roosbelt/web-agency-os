# Instrucciones WordPress — The Joya by Victoria

## Estado de esta entrega
Esta implementación es un **prototipo frontend no publicable todavía**. Presenta placeholders honestos porque catálogo, fotografías, datos de producto, canal de WhatsApp, condiciones comerciales y textos legales siguen por confirmar. No solicitar indexación ni publicar hasta completar las sustituciones y el QA final.

## Archivos
- `wordpress-body.html`: contenido semántico listo para pegar en un bloque de HTML personalizado. No incluye documento completo, scripts, estilos inline ni recursos externos.
- `style.css`: estilos mobile-first encapsulados bajo la clase raíz única `.wao-the-joya`.
- `preview.html`: documento local para revisar la composición; enlaza `style.css` y contiene exactamente el mismo body entregable.

## Publicación en WordPress
1. Crea una página nueva en borrador y evita su indexación mientras conserve placeholders.
2. Añade un bloque de **HTML personalizado** y pega todo el contenido de `wordpress-body.html`, incluida la raíz `<div class="wao-the-joya">`.
3. Añade el contenido completo de `style.css` al mecanismo CSS aprobado del sitio: CSS adicional del tema, hoja del child theme o campo CSS global del editor.
4. No elimines ni renombres `.wao-the-joya`: es el límite que evita conflictos con el tema y otros plugins.
5. Sustituye placeholders, valida todos los enlaces y configura los metadatos SEO aprobados.
6. Previsualiza en móvil, tablet y escritorio antes de publicar.

## WhatsApp: sustitución segura obligatoria
Los CTA actuales son estados **no interactivos** y no contienen número ni URL inventados. Para habilitarlos:

1. Confirma por escrito el número oficial, enlace completo, mensaje precargado, responsable, horario, tiempo esperado de respuesta y tratamiento de datos.
2. Sustituye cada `<span ... aria-disabled="true">...</span>` asociado a WhatsApp por un enlace real, por ejemplo con la misma clase visual: `<a class="wao-the-joya__button" href="URL_OFICIAL_APROBADA">Consultar por WhatsApp</a>`.
3. Si abre un servicio externo, añade microcopy visible que lo indique. Valida el destino en móvil y escritorio.
4. Personaliza consultas por pieza solo cuando cada pieza tenga nombre o referencia real y aprobada.
5. Si el canal deja de estar disponible, restaura un estado informativo no interactivo; nunca dejes un enlace roto o engañoso.

## Sustituciones requeridas antes de publicar
- [ ] Reemplazar la marca textual por logotipo solo si existe un archivo aprobado y con derechos de uso.
- [ ] Sustituir los cinco campos visuales por fotografías propias o licenciadas; añadir dimensiones y `alt` literal aprobado según cada imagen.
- [ ] Sustituir las tres tarjetas de muestra por piezas reales con nombre, categoría, descripción, materiales, medidas, precio/moneda y disponibilidad confirmados.
- [ ] Decidir si se publicará precio o consulta; no ocultar información esencial sin una decisión comercial aprobada.
- [ ] Reescribir el bloque de marca con historia, visión y origen verificables o retirarlo si no existe contenido aprobado.
- [ ] Confirmar el proceso real de consulta o compra, pagos, entregas, cambios, devoluciones, garantías y cuidado.
- [ ] Configurar el enlace oficial de WhatsApp siguiendo el procedimiento anterior.
- [ ] Añadir correo, mercado, horario y páginas legales únicamente cuando estén aprobados.
- [ ] Sustituir año de copyright y revisar idioma/variante regional.
- [ ] Confirmar title, meta description, slug, canonical e indexabilidad en el plugin SEO o ajustes de WordPress.
- [ ] Mantener fuera de esta web afiliados, productos de terceros, outfits y perfiles externos asociados a esas actividades.

## Edición de contenido sin romper la implementación
- Conserva un único `h1`; usa `h2` para secciones y `h3` para piezas, pasos o preguntas.
- Conserva el orden del DOM para que la lectura sin CSS siga siendo lógica.
- No añadas estilos inline ni selectores globales. Todo selector nuevo debe comenzar por `.wao-the-joya`.
- Para imágenes reales, reemplaza el `<div role="img">` correspondiente por `<img>` con `src`, `width`, `height` y `alt` verificados; conserva la clase exterior o adapta una clase encapsulada.
- No conviertas un estado pendiente en acción hasta que su destino exista y haya sido probado.
- No añadas scripts, sliders, popups o dependencias externas sin necesidad validada y una nueva revisión de accesibilidad/rendimiento.

## Verificación posterior a integración
- [ ] La raíz `.wao-the-joya` está presente y los estilos no afectan otras páginas.
- [ ] No quedan placeholders, textos “por confirmar” ni estados no operativos en una página pública.
- [ ] Todos los enlaces internos, CTA, imágenes y páginas legales funcionan.
- [ ] Existe un único H1 y la jerarquía de encabezados es lógica.
- [ ] Navegación, enlaces, CTA y FAQ funcionan con teclado y muestran foco visible.
- [ ] Contraste y textos alternativos fueron revisados con los activos finales.
- [ ] No hay overflow horizontal a 320, 375, 768, 1024 y 1440 px; el zoom/reflow al 400% conserva contenido y acciones.
- [ ] La página funciona sin JavaScript y respeta `prefers-reduced-motion`.
- [ ] Title, meta description, canonical e indexabilidad están configurados.
- [ ] Cachés del sitio/CDN fueron purgadas si aplica.
- [ ] Un QA final aprobó publicación sin bloqueadores.

## Mantenimiento
Mantén `wordpress-body.html`, `style.css` y `preview.html` sincronizados después de cualquier cambio. Registra en `quality-report.md` toda modificación que altere copy, enlaces, datos comerciales, estructura, contraste o comportamiento responsive.
