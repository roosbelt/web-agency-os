# Playbook 00 — One-Command Client Generation

## Propósito

One-Command Generation Mode convierte un único brief estructurado en un workspace completo de cliente, listo para revisión y técnicamente portable a WordPress. Es una capa orquestadora: no elimina las puertas de calidad ni permite inventar información para completar archivos.

Usar este playbook cuando el usuario pida crear una web completa para un cliente o solicite explícitamente el modo one-command. La estrategia aprobada, la evidencia y los datos confirmados siguen siendo la fuente de verdad.

## Restricciones invariables

- No usar API keys, backend, base de datos, frameworks pesados ni dependencias externas innecesarias.
- Crear una rama limpia desde `origin/main` actualizado y modificar únicamente `clients/<client_slug>/`.
- Nunca sobrescribir otro cliente ni modificar el dashboard o el sistema base durante una generación.
- Investigar fuentes públicas sin login cuando internet esté disponible y registrar toda fuente utilizada.
- No inventar claims, productos, precios, materiales, testimonios, políticas, contacto ni datos legales.
- Si falta información, marcar `[POR CONFIRMAR]`, documentar el supuesto y usar un fallback seguro.
- Un score alto no elimina bloqueadores. Sin fotos aprobadas, precios, WhatsApp/destino operativo, políticas o datos legales aplicables, `Publish-ready` queda bloqueado.

## Orden obligatorio de agentes

`Research → Brand → UX/CRO → Copy → SEO → Visual → WordPress Frontend → QA → Creative Director Review`

Cada agente debe revisar el handoff anterior, usar `templates/agent-output-template.md`, asignar score con evidencia y registrar blockers. Si un input crítico impide decisiones honestas, el agente limita el estado y continúa solo con trabajo seguro basado en supuestos visibles.

## Preflight y control de alcance

1. Ejecutar `git fetch origin main --prune`.
2. Crear una rama nueva desde `origin/main` con un nombre específico para el cliente.
3. Validar `client_slug`: minúsculas, números y guiones; no puede estar vacío ni apuntar fuera de `clients/`.
4. Confirmar si `clients/<client_slug>/` ya existe. No reemplazarlo sin autorización explícita.
5. Normalizar el brief recibido usando `templates/one-command-client-brief-template.md`.
6. Seleccionar y documentar el Industry Playbook primario; registrar uno secundario solo si el modelo comercial lo exige.
7. Crear una matriz inicial de datos confirmados, pendientes, supuestos y bloqueadores.
8. Verificar al terminar que el diff contiene únicamente `clients/<client_slug>/`.

## Flujo completo y criterios de salida

### 1. Intake
- Crear `brief.md` con objetivos, audiencia, oferta, CTAs, restricciones, datos confirmados y preguntas abiertas.
- Separar hechos, preferencias, supuestos y datos críticos ausentes.
- Bloquear claims finales y destinos activos si no están confirmados.

### 2. Research — Market Research Agent
- Seguir `playbooks/01-market-research.md` y el Industry Playbook.
- Crear `research.md` con fuentes, fecha de consulta, hallazgos, implicaciones, oportunidades, riesgos y research depth score.
- Registrar fuentes bloqueadas o no accesibles; no convertir inferencias en hechos.

### 3. Brand strategy — Brand Strategist Agent
- Crear `strategy.md` con posicionamiento, diferenciación, audiencia prioritaria, propuesta, razones para creer, tono, mensajes permitidos/prohibidos y brand score.
- No cerrar posicionamiento definitivo cuando dependa de información crítica no validada.

### 4. UX/CRO architecture — UX/CRO Agent
- Documentar en `strategy.md` la arquitectura, intención y objeción por sección, prueba necesaria, fricciones, CTA por etapa y UX/CRO score.
- Todo CTA debe tener destino real o estado pendiente no interactivo.

### 5. Copywriting — Copywriter Agent
- Crear `copy.md` con H1, subheadline, copy por sección, CTAs, microcopy, FAQ/objeciones, claims por validar y copy score.
- Mantener `[POR CONFIRMAR]` donde corresponda; no disfrazar placeholders como hechos.

### 6. SEO — SEO Agent
- Documentar intención, title, meta description, slug sugerido, headings, alt text, schema sugerido, datos faltantes y SEO score.
- No implementar schema ni datos locales no demostrados.

### 7. Visual direction — Visual Director Agent
- Definir en `strategy.md` intención visual por sección, tokens, composición, imágenes, placeholders, efectos, fallbacks, accesibilidad, riesgos genéricos y visual score.
- Crear `references/inspiration-sites.md` y `references/effects-analysis.md`; analizar referencias sin copiarlas.

### 8. Reference effects analysis
- Seguir `playbooks/09-reference-effects-analysis.md`.
- Separar patrón observado, interpretación, adaptación original, notas HTML/CSS y accesibilidad.
- Limitar movimiento y soportar `prefers-reduced-motion`.

### 9. Image preview system
- Seguir `playbooks/10-image-preview-system.md`.
- Crear `assets/image-links.md` y `assets/image-map.json`.
- Registrar permisos/estado y alt text; si una imagen falta, usar placeholder premium sin recurso roto.

### 10. Modular WordPress build — WordPress Frontend Agent
- Crear `modules/<orden>-<nombre>/section.html` y `section.css` por sección.
- Crear `modules-manifest.md`, ensamblar `wordpress-body.html` y `style.css`.
- El HTML copiable contiene solo body; el CSS queda encapsulado bajo una raíz única, mobile-first y sin scripts obligatorios.

### 11. Preview generation
- Crear `preview.html` como documento completo que represente fielmente el ensamblado y cargue `style.css`.
- Puede mostrar imágenes demo claramente etiquetadas; no introducir datos comerciales ficticios.

### 12. Copy-ready exports
- Crear `exports/README.md`, un par HTML/CSS independiente por módulo y exports full-page.
- Cada export conserva raíz, estilos mínimos necesarios, responsive, fallbacks y compatibilidad WordPress.

### 13. QA review — QA Agent
- Crear `quality-report.md` con pruebas reproducibles, resultados, warnings, blockers y decisión de estado.
- Validar estructura, HTML, enlaces, módulos/ensamblado, CSS scoped, responsive, accesibilidad, imágenes, placeholders, scripts/dependencias y portabilidad WordPress.
- Validar explícitamente el inventario obligatorio de One-Command Mode.

### 14. Agent performance scoring
- Crear `agent-performance-report.md` con agentes ejecutados, outputs, scores, handoffs, riesgos y blockers.
- Cuestionar scores sin evidencia y conservar el estado máximo permitido por bloqueadores.

### 15. Client readiness scorecard
- Crear `client-readiness-scorecard.md` con todas las dimensiones de `playbooks/12-client-readiness-scorecard.md`.
- Diferenciar `Internal draft`, `Client review`, `WordPress-ready` y `Publish-ready`.

### 16. Creative Director final review
- Crear `final-creative-review.md` usando la plantilla correspondiente.
- Determinar qué funciona, qué se siente genérico, qué retirar/fortalecer, riesgos de conversión/visuales y estado final honesto.

### 17. Pull request summary
- Crear `generation-report.md` usando `templates/one-command-generation-report-template.md`.
- Crear `wordpress-instructions.md` con instalación, sustituciones, mantenimiento y blockers.
- Ejecutar validaciones finales, confirmar el alcance Git, hacer commit y crear un PR limpio con resumen, readiness, blockers y pruebas.

## Inventario obligatorio por cliente

```text
clients/<client_slug>/
├── brief.md
├── research.md
├── strategy.md
├── copy.md
├── references/
│   ├── inspiration-sites.md
│   └── effects-analysis.md
├── assets/
│   ├── image-links.md
│   └── image-map.json
├── modules/
│   └── <orden>-<nombre>/
│       ├── section.html
│       └── section.css
├── modules-manifest.md
├── wordpress-body.html
├── style.css
├── preview.html
├── exports/
│   ├── README.md
│   ├── <módulo>-copy-ready.html
│   ├── <módulo>-copy-ready.css
│   ├── full-page-copy-ready.html
│   └── full-page-copy-ready.css
├── agent-performance-report.md
├── client-readiness-scorecard.md
├── final-creative-review.md
├── quality-report.md
├── wordpress-instructions.md
└── generation-report.md
```

## Puertas y bloqueo

- **Internal draft:** puede avanzar con supuestos visibles y fallbacks seguros.
- **Client review:** exige una experiencia coherente, preview funcional, decisiones pendientes claras y ausencia de claims inventados.
- **WordPress-ready:** exige ensamblado/exports portables, CSS scoped, responsive, accesibilidad básica, instrucciones y QA técnico.
- **Publish-ready:** exige además activos y permisos finales, precios/datos comerciales, CTA operativo, políticas/legal, SEO final y QA en el WordPress real.

Si falla una puerta, no detener todo el trabajo: producir el máximo estado seguro, documentar el blocker, su riesgo, responsable y siguiente acción.

## Validación final mínima

1. Todos los archivos obligatorios existen y no están vacíos.
2. `wordpress-body.html` no contiene `<html>`, `<head>`, scripts ni estilos inline.
3. Existe un H1 lógico; IDs y anchors son únicos/válidos.
4. `style.css` está encapsulado bajo la raíz del cliente, sin `!important` ni dependencias injustificadas.
5. Módulos, ensamblado, preview y exports están sincronizados.
6. Imágenes, alt text, permisos, fallbacks y placeholders están documentados.
7. QA y scorecards distinguen readiness técnico, de cliente y de publicación.
8. `generation-report.md` registra inputs, outputs, assumptions, blockers, scores, archivos y próximas acciones.
9. `git diff --name-only origin/main...HEAD` contiene únicamente `clients/<client_slug>/`.
10. El commit y PR describen pruebas, blockers y estado final sin exagerar readiness.
