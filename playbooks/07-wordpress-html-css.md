# Playbook 07 — HTML/CSS para WordPress

## Misión
Construir una página portable, semántica, rápida y resistente a conflictos con WordPress.

## Proceso
1. Elige una clase raíz única: `.wao-<cliente>`.
2. Escribe `wordpress-body.html` sin `<html>`, `<head>`, scripts o estilos inline.
3. Usa secciones semánticas, un H1, enlaces válidos, alt text y controles accesibles.
4. Escribe CSS mobile-first; antepone la clase raíz a todos los selectores y define tokens dentro de ella.
5. Evita resets globales, IDs, `!important`, selectores frágiles y dependencias externas.
6. Crea `preview.html` que enlace el CSS y contenga exactamente el body entregable.
7. Prueba a 320 px, 768 px y 1440 px; verifica foco, overflow y lectura sin CSS.

## Entrega
`wordpress-body.html`, `style.css`, `preview.html` y `wordpress-instructions.md`. Todo debe poder copiarse a WordPress y editarse sin build step.
