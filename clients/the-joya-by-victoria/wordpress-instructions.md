# Instrucciones WordPress — The Joya by Victoria modular

## Estado
Prototipo completo para revisión, todavía **no publicable**. Fotografías, catálogo, historia, datos comerciales, WhatsApp y políticas siguen por confirmar. Los placeholders son intencionales y evitan presentar información inventada o imágenes rotas.

## Archivos finales
- `wordpress-body.html`: body ensamblado con cabecera, seis módulos y footer dentro de `.wao-the-joya`.
- `style.css`: estilos base más los seis módulos, siempre encapsulados bajo `.wao-the-joya`.
- `preview.html`: documento local completo que carga `style.css`.
- `modules-manifest.md`: orden, objetivo y dependencias de cada módulo.
- `assets/image-links.md` y `assets/image-map.json`: registro de URLs, alt text y permisos.
- `references/`: referencias sugeridas y adaptación original documentada.

## Instalación completa
1. Crear una página WordPress en borrador y mantenerla sin indexar.
2. Pegar `wordpress-body.html` completo en un bloque HTML personalizado.
3. Añadir `style.css` al mecanismo CSS aprobado del tema o editor.
4. No eliminar ni renombrar `.wao-the-joya`.
5. Sustituir placeholders y CTA únicamente con datos aprobados.
6. Probar móvil, tablet, desktop, teclado y reducción de movimiento antes de publicar.

## Instalación por módulo
Cada `modules/<módulo>/section.html` puede copiarse dentro de una raíz `.wao-the-joya`. Añadir también sus reglas `section.css` y conservar los estilos base de `style.css`. Revisar `modules-manifest.md` antes de cambiar orden, IDs o enlaces internos.

## Sustituir un placeholder por imagen URL
1. Confirmar propiedad o permiso y registrar URL/alt en `assets/image-links.md` y `assets/image-map.json`.
2. Reemplazar el `<div class="wao-the-joya__media ..." role="img" ...>` por un contenedor equivalente con `<img src="URL_APROBADA" alt="ALT_APROBADO" width="..." height="..." loading="lazy">`.
3. Para el hero, decidir si se omite `loading="lazy"` por ser el recurso principal.
4. Añadir una regla encapsulada para que la imagen cubra el contenedor (`width`, `height`, `object-fit`) y conservar la proporción.
5. Si la URL falla, restaurar el placeholder; no publicar imágenes rotas.

## Efectos y accesibilidad
- Los efectos son mejoras progresivas CSS: la página funciona sin JavaScript.
- No retirar `:focus-visible`, controles nativos de FAQ ni `prefers-reduced-motion`.
- No aumentar zoom, duración o glow sin revisar legibilidad, rendimiento y sobriedad.
- No ocultar información esencial detrás de hover o animación.

## Bloqueadores antes de publicar
- [ ] Fotografías propias/autorizadas, URLs estables, dimensiones y alt text final.
- [ ] Nombres, descripciones, materiales, medidas, precios y disponibilidad reales.
- [ ] Historia y atributos verificables de la marca.
- [ ] WhatsApp oficial, mensaje, horario y responsable.
- [ ] Flujo real de compra/consulta, pagos, envíos, cambios y devoluciones.
- [ ] Mercado, moneda, datos legales, privacidad e indexación.
- [ ] Revisión final de contraste, responsive, enlaces y permisos.

## Mantenimiento
Después de editar un módulo, sincronizar `wordpress-body.html`, `style.css` y `preview.html`. Registrar cualquier cambio funcional o comercial en `quality-report.md`.
