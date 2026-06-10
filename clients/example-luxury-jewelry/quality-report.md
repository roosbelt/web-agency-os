# Reporte de calidad — Luméra Atelier (ejemplo ficticio)

## Veredicto
**Estado:** Aprobado como demostración; no aprobado para publicación comercial hasta sustituir y verificar los datos pendientes.

## Alcance revisado
Coherencia documental, copy, estructura semántica, encapsulado CSS, responsive por inspección, accesibilidad básica y portabilidad a WordPress.

## Checklist
- [x] Brief, investigación, estrategia, copy y página son coherentes.
- [x] Las limitaciones y afirmaciones no verificadas están identificadas.
- [x] HTML semántico con un H1 y jerarquía de encabezados lógica.
- [x] Enlaces con foco visible y objetivos principales comprensibles.
- [x] CSS mobile-first y breakpoints para tablet y escritorio.
- [x] Selectores CSS encapsulados bajo `.wao-lumera`.
- [x] Sin scripts, frameworks ni recursos externos.
- [x] Instrucciones WordPress incluidas.

## Incidencias y pendientes
| Severidad | Hallazgo | Resolución requerida | Estado |
|---|---|---|---|
| Bloqueador para publicación real | `consulta@example.com` es una dirección de demostración | Sustituir por formulario o contacto aprobado | Abierto |
| Alta para publicación real | No existen datos verificados de oferta, proceso, materiales, tiempos o ubicación | Validar con cliente y actualizar documentos/copy | Abierto |
| Media | No hay fotografías ni logotipo final | Incorporar activos optimizados con derechos confirmados | Abierto |
| Baja | `preview.html` usa un estilo inline únicamente para retirar el margen del documento de preview | No se copia a WordPress; opcional mover a regla de preview | Aceptado |

## Pruebas documentales realizadas
- Confirmación de clase raíz única y ausencia de `!important`, scripts y dependencias remotas.
- Revisión del orden de lectura y de la estructura de secciones.
- Revisión de CTAs, enlaces internos, foco visible y nota explícita sobre el email ficticio.

## Riesgos aceptados
El ejemplo demuestra el sistema, no una empresa real. Debe ejecutarse investigación y QA visual en navegador antes de cualquier uso comercial.
