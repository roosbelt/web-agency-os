# Instrucciones WordPress — Luméra Atelier (ejemplo ficticio)

## Antes de publicar
1. Sustituye `consulta@example.com` por la URL de un formulario o email aprobado.
2. Valida todo el copy, proceso, oferta, datos legales y metadatos con el cliente.
3. Añade los activos de marca y producto únicamente con derechos confirmados.
4. Ejecuta QA visual y funcional dentro del tema WordPress real.

## Instalación
1. Abre la página de destino en WordPress.
2. Inserta un bloque **HTML personalizado** y pega el contenido completo de `wordpress-body.html`.
3. Pega `style.css` en el área de CSS adicional del tema/editor o en el mecanismo CSS aprobado del sitio.
4. Configura el title y la meta description propuestos mediante la solución SEO ya instalada, si existe.
5. Previsualiza sin publicar y verifica móvil, tablet y escritorio.

## Por qué es seguro para integrar
Todos los estilos están encapsulados bajo `.wao-lumera`; el body no incluye scripts, estilos inline, recursos externos ni etiquetas de documento. `preview.html` es solo una vista local y no debe pegarse en WordPress.

## Verificación posterior
- [ ] La apariencia coincide con `preview.html` y no altera otras páginas.
- [ ] El CTA abre el destino real correcto.
- [ ] La navegación por anclas no queda cubierta por elementos del tema.
- [ ] Foco, contraste y lectura se verificaron en el tema real.
- [ ] Se revisaron 320 px, 768 px y 1440 px.
- [ ] Se purgó caché, si corresponde.

## Mantenimiento
Conserva la clase raíz `.wao-lumera`. Para cambiar color, tipografía o espaciado, edita primero las variables al inicio de `style.css`; evita reglas globales o `!important`.
