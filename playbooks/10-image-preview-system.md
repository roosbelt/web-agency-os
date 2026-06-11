# Playbook 10 — Image Preview System

## Objetivo
Incorporar imágenes públicas por URL en previews y entregables WordPress sin romper el layout, perder trazabilidad ni depender de servicios privados.

## Archivos por cliente
```text
clients/<cliente>/
├── image-links.md              # enlaces y notas aportados por cliente/equipo
└── assets/
    └── image-map.json          # mapa técnico de slots a URLs públicas
```
Crear ambos desde `templates/image-links-template.md` y `templates/image-map-template.json`. No guardar credenciales, tokens, URLs privadas ni datos sensibles.

## Flujo práctico
1. Recibir enlaces en `image-links.md`; conservar contexto, propietario y estado de aprobación.
2. Verificar en navegador sin sesión que cada URL responde y muestra el archivo esperado.
3. Preferir archivos estables `.webp`, `.jpg` o `.png`; evitar páginas compartidas, URLs temporales, parámetros con tokens y hotlinks sin permiso.
4. Copiar únicamente las URLs aprobadas a `assets/image-map.json`, usando claves estables por función, no por nombre visual cambiante.
5. Definir para cada imagen alt text editable, sección, proporción prevista y fallback.
6. Implementar `<img>` con `alt`, dimensiones cuando se conozcan, `loading="lazy"` fuera del hero y estilos que preserven proporción. El hero puede cargar de forma prioritaria cuando esté justificado.
7. Mostrar un placeholder premium con proporción, fondo y etiqueta discretos cuando la URL falte o todavía no esté aprobada.
8. Probar preview, WordPress y breakpoints; documentar imágenes faltantes y bloqueadores en `quality-report.md` y `wordpress-instructions.md`.

## Reglas técnicas
- `image-map.json` debe ser JSON válido y funcionar como registro; WordPress no debe depender de leerlo en tiempo de ejecución.
- Copiar las URLs aprobadas al HTML/CSS final solo cuando el editor de WordPress pueda servirlas públicamente.
- No usar una URL externa como única fuente de información crítica ni permitir que su ausencia colapse el layout.
- Usar `object-fit` y un contenedor con proporción definida cuando el encuadre pueda variar.
- No insertar imágenes mediante scripts obligatorios ni añadir dependencias externas.
- Mantener todo selector CSS bajo la clase raíz del cliente.
- Confirmar derechos de uso; una URL accesible no equivale a permiso de publicación.

## Placeholder premium
Debe preservar las dimensiones finales, tener contraste suficiente, comunicar que el recurso está pendiente sin parecer un error y poder sustituirse sin cambiar la estructura. No simular productos, personas, certificaciones ni resultados.

## QA mínimo
- URL pública y documentada.
- Formato y permiso adecuados.
- Alt text útil o `alt=""` cuando sea decorativa.
- `loading="lazy"` aplicado donde corresponde.
- Fallback visible y estable.
- Sin desbordes en móvil, tablet o desktop.
- Lista de imágenes pendientes actualizada.

## Criterio de salida
Las imágenes aprobadas se previsualizan de forma robusta; las faltantes usan placeholders elegantes; y toda URL, alt text, permiso y pendiente queda documentado para WordPress.
