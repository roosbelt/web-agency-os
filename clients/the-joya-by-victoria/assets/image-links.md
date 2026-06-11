# Enlaces de imágenes demo — The Joya by Victoria

## Estado y uso permitido
La preview usa fotografías de ejemplo alojadas públicamente en Wikimedia Commons. Los archivos seleccionados están identificados por sus páginas fuente como **CC0 o dominio público** y no pertenecen a marcas de lujo ni competidores. Se usan únicamente para visualizar proporciones, recortes y ritmo editorial.

Estas fotografías **no representan productos, campaña, fundadora ni activos reales de The Joya by Victoria**. Deben sustituirse antes de publicar. Revisar nuevamente licencia, atribución, disponibilidad y adecuación antes de cualquier uso externo.

| Slot | URL cargada en demo | Página fuente y licencia declarada | Reemplazo requerido |
|---|---|---|---|
| `hero_campaign` | `https://upload.wikimedia.org/wikipedia/commons/e/e4/Necklace_with_Filigree_and_Beads_MET_DP233244.jpg` | [Wikimedia Commons — Necklace with Filigree and Beads, CC0](https://commons.wikimedia.org/wiki/File:Necklace_with_Filigree_and_Beads_MET_DP233244.jpg) | Fotografía editorial propia y alt final |
| `product_01` | `https://upload.wikimedia.org/wikipedia/commons/7/7e/Ring_MET_sf48-154-10c.jpg` | [Wikimedia Commons — Ring MET, CC0](https://commons.wikimedia.org/wiki/File:Ring_MET_sf48-154-10c.jpg) | Fotografía y datos reales de pieza 01 |
| `product_02` | `https://upload.wikimedia.org/wikipedia/commons/d/df/Finger_Ring_LACMA_M.76.174.298.jpg` | [Wikimedia Commons — Finger Ring LACMA, dominio público](https://commons.wikimedia.org/wiki/File:Finger_Ring_LACMA_M.76.174.298.jpg) | Fotografía y datos reales de pieza 02 |
| `product_03` | `https://upload.wikimedia.org/wikipedia/commons/f/fc/Necklace_LACMA_M.85.286.6.jpg` | [Wikimedia Commons — Necklace LACMA, dominio público](https://commons.wikimedia.org/wiki/File:Necklace_LACMA_M.85.286.6.jpg) | Fotografía y datos reales de pieza 03 |
| `brand_founder` | `https://upload.wikimedia.org/wikipedia/commons/0/0a/Jewelry_ring_necklaces.jpg` | [Wikimedia Commons — Jewelry ring necklaces, CC0](https://commons.wikimedia.org/wiki/File:Jewelry_ring_necklaces.jpg) | Retrato, estudio o imagen narrativa propia |
| `brand_texture` | `https://upload.wikimedia.org/wikipedia/commons/b/b3/Necklace_1.jpg` | [Wikimedia Commons — Necklace 1, CC0](https://commons.wikimedia.org/wiki/File:Necklace_1.jpg) | Textura propia o retirar slot; no se muestra actualmente |
| `final_cta` | `https://upload.wikimedia.org/wikipedia/commons/b/b3/Necklace_1.jpg` | [Wikimedia Commons — Necklace 1, CC0](https://commons.wikimedia.org/wiki/File:Necklace_1.jpg) | Imagen final propia y alt final |

## Alt text demo usado en preview
- Hero: `Imagen demo de campaña; reemplazar por fotografía editorial aprobada`.
- Productos: cada alt indica que es demo y que no representa un producto real.
- Historia: `Imagen demo para historia de marca; reemplazar por activo aprobado`.
- Cierre: `Imagen demo de cierre; reemplazar por fotografía aprobada`.

## Notas de reemplazo
1. Las siete URLs respondieron públicamente como `image/jpeg` el **2026-06-11**; la disponibilidad futura no está garantizada.
2. `preview.html` carga seis imágenes demo y muestra un aviso visible. `brand_texture` queda registrada pero no se muestra.
3. `wordpress-body.html` conserva placeholders premium sin URLs demo para evitar publicar estos recursos accidentalmente.
4. Al recibir fotografías finales, verificar propiedad o permiso, actualizar `image-map.json`, sustituir las imágenes de la preview y después integrar activos aprobados en `wordpress-body.html`.
5. Mantener dimensiones, alt text útil y `loading="lazy"` fuera del hero.
6. Si una URL falla, restaurar el placeholder visual; nunca dejar una imagen rota.
