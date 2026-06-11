# Enlaces de imágenes — The Joya by Victoria

## Estado
Todos los slots están vacíos. La preview usa placeholders premium para evitar imágenes rotas. Pegar únicamente URLs públicas que funcionen sin iniciar sesión y pertenezcan a la marca o cuenten con permiso de publicación.

| Slot en `image-map.json` | URL pública | Alt text editable | Propietario / permiso | Estado |
|---|---|---|---|---|
| `hero_campaign` | `[POR CONFIRMAR]` | Fotografía editorial principal de [pieza/colección por confirmar] | `[POR CONFIRMAR]` | Pendiente |
| `product_01` | `[POR CONFIRMAR]` | [Nombre real de pieza 01 y descripción visual útil] | `[POR CONFIRMAR]` | Pendiente |
| `product_02` | `[POR CONFIRMAR]` | [Nombre real de pieza 02 y descripción visual útil] | `[POR CONFIRMAR]` | Pendiente |
| `product_03` | `[POR CONFIRMAR]` | [Nombre real de pieza 03 y descripción visual útil] | `[POR CONFIRMAR]` | Pendiente |
| `brand_founder` | `[POR CONFIRMAR]` | [Victoria / estudio / historia, según imagen aprobada] | `[POR CONFIRMAR]` | Pendiente |
| `brand_texture` | `[POR CONFIRMAR]` | Vacío si es estrictamente decorativa | `[POR CONFIRMAR]` | Pendiente |
| `final_cta` | `[POR CONFIRMAR]` | [Imagen de cierre de campaña aprobada] | `[POR CONFIRMAR]` | Pendiente |

## Reglas de integración
1. Confirmar que la URL abre el archivo directamente y sin sesión; preferir `.webp`, `.jpg` o `.png` estables.
2. Registrar la URL aprobada en `image-map.json`; este JSON documenta slots y no se lee en tiempo de ejecución.
3. Sustituir el placeholder correspondiente por un `<img>` con `src`, `alt`, `width`, `height` y `loading="lazy"`. La imagen hero puede omitir lazy loading si se confirma como recurso principal.
4. Mantener la clase exterior y proporción del placeholder para no cambiar el layout.
5. Si la URL falla o se retira, restaurar el placeholder; nunca dejar una imagen rota.
6. Verificar derechos de uso antes de publicar. Una URL pública no equivale a permiso.
