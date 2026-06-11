# Web Agency OS

Web Agency OS es un sistema de trabajo basado en archivos para investigar, planificar, redactar, diseñar y construir páginas web competitivas listas para WordPress con agentes especializados. No requiere API keys, backend, base de datos ni frameworks pesados.

## Cómo funciona

Cada proyecto avanza en orden por disciplinas especializadas y una revisión creativa final:

1. investigación de mercado;
2. estrategia de marca;
3. UX y conversión;
4. copywriting;
5. SEO;
6. dirección visual;
7. HTML/CSS para WordPress;
8. revisión de calidad;
9. Creative Director / Final Editor.

Las reglas generales viven en [`AGENTS.md`](AGENTS.md), los procesos en [`playbooks/`](playbooks/), las instrucciones de especialistas en [`skills/`](skills/) y los formatos reutilizables en [`templates/`](templates/).

## Uso para un cliente

1. Duplica `clients/example-luxury-jewelry/` como `clients/<slug-del-cliente>/` o crea la carpeta desde las plantillas.
2. Completa `brief.md`; marca explícitamente preguntas pendientes y supuestos.
3. Sigue los playbooks en orden. Guarda toda evidencia web y sus fuentes en `research.md`.
4. Aprueba `strategy.md` antes de producir copy o diseño.
5. Construye el body copiable en WordPress, el CSS encapsulado y una vista previa local.
6. Ejecuta QA, resuelve bloqueadores y completa las instrucciones de publicación.

## Entregables por cliente

```text
clients/<cliente>/
├── brief.md                    # contexto, objetivos, restricciones y pendientes
├── research.md                 # hallazgos, fuentes e implicaciones
├── strategy.md                 # posicionamiento, audiencia, mensajes y plan UX
├── copy.md                     # copy aprobado y metadatos SEO propuestos
├── wordpress-body.html         # HTML semántico para pegar en WordPress
├── style.css                   # CSS mobile-first encapsulado
├── preview.html                # vista previa local
├── quality-report.md           # QA, incidencias y decisión de entrega
├── inspiration-sites.md        # URLs y propósito de referencias visuales
├── effects-analysis.md         # patrones observados y adaptaciones originales
├── image-links.md              # URLs, alt text, permisos y pendientes
├── assets/image-map.json       # mapa técnico de imágenes públicas aprobadas
└── wordpress-instructions.md   # pasos de publicación y mantenimiento
```

## Reference Effects + Image Preview System

El sistema permite convertir referencias visuales e imágenes públicas en una dirección original y portable a WordPress, sin copiar sitios ni añadir infraestructura.

### Agregar y analizar referencias

1. Copia `templates/inspiration-sites-template.md` a `clients/<cliente>/inspiration-sites.md` y pega URLs públicas con su propósito y prioridad.
2. Pide el análisis siguiendo `playbooks/09-reference-effects-analysis.md` y documenta el resultado en `effects-analysis.md` con `templates/effects-analysis-template.md`.
3. Para cada patrón separa lo observado, su interpretación, la adaptación original propuesta, notas HTML/CSS y consideraciones accesibles.
4. Aprueba solo efectos sobrios y funcionales; frontend debe incluir foco visible, fallback estable y `prefers-reduced-motion`.

### Cargar y previsualizar imágenes por URL

1. Copia `templates/image-links-template.md` a `clients/<cliente>/image-links.md` para recibir URLs, alt text, permisos y notas.
2. Crea `clients/<cliente>/assets/image-map.json` desde `templates/image-map-template.json` y registra únicamente URLs públicas aprobadas que funcionen sin iniciar sesión.
3. Sigue `playbooks/10-image-preview-system.md`: preferir `.webp`, `.jpg` o `.png`, mantener proporciones y usar `loading="lazy"` fuera del hero.
4. Si falta una imagen, mostrar un placeholder premium que conserve el layout y registrar el pendiente; nunca simular un recurso real.
5. `preview.html` puede mostrar las imágenes aprobadas. Para WordPress, copiar las URLs finales al HTML/CSS, mantener alt text y documentar sustitución, permisos y fallbacks en las instrucciones de publicación.

Los efectos se implementan preferentemente con CSS encapsulado y sin JavaScript obligatorio. Una URL pública no equivale a permiso de publicación.

## Agent Performance System

El Agent Performance System convierte cada etapa en un handoff evaluable. Los agentes no solo generan contenido: revisan inputs, toman decisiones explícitas, declaran supuestos/riesgos, entregan un output fijo, asignan un score con evidencia y reciben revisión cruzada.

El flujo es: `Research → Brand → UX/CRO → Copy → SEO → Visual → Frontend → QA → Creative Director Review`. Las reglas completas están en [`playbooks/11-agent-performance-system.md`](playbooks/11-agent-performance-system.md) y los criterios en [`playbooks/12-client-readiness-scorecard.md`](playbooks/12-client-readiness-scorecard.md).

### Estados de una web
- **Internal draft:** trabajo exploratorio o incompleto; puede tener supuestos y bloqueadores marcados.
- **Client review:** suficientemente coherente para mostrar y solicitar decisiones; todavía no implica implementación/publicación segura.
- **WordPress-ready:** HTML/CSS portable, probado y documentado; puede quedar bloqueado por contenido, imágenes, comercio o legales.
- **Publish-ready:** QA y Creative Director aprueban; no quedan bloqueadores críticos ni contenido no demostrado.

### Scorecards y bloqueadores
- Cada agente usa [`templates/agent-output-template.md`](templates/agent-output-template.md) para registrar inputs, decisiones, output, supuestos, riesgos, score y bloqueadores.
- QA consolida dimensiones con [`templates/client-readiness-scorecard-template.md`](templates/client-readiness-scorecard-template.md); Creative Director completa [`templates/final-creative-review-template.md`](templates/final-creative-review-template.md).
- Escala: `0–40 weak`, `41–70 usable draft`, `71–85 client review ready`, `86–100 publish ready`.
- Los scores miden evidencia existente, no trabajo prometido. Un bloqueador crítico siempre limita el estado aunque el promedio sea alto.
- Un bloqueador debe indicar qué falta, riesgo, responsable, siguiente acción y estado máximo permitido.

### Cómo interpretar el resultado
Usa scores para priorizar mejoras, no para ocultar incertidumbre. `Client review` sirve para obtener decisiones; `WordPress-ready` describe seguridad técnica; `Publish-ready` exige además contenido, activos, datos comerciales/legales y destinos operativos aprobados.

## Principios operativos

- Evidencia antes que opinión; estrategia antes que ejecución.
- No inventar datos comerciales. Usar `[POR CONFIRMAR]` y registrar supuestos.
- Una clase raíz CSS única por cliente evita conflictos con temas y plugins.
- El resultado final debe poder copiarse a WordPress sin herramientas propietarias.
- Menos dependencias, mejor rendimiento y mantenimiento.

## Ejemplo incluido

`clients/example-luxury-jewelry/` muestra una landing ficticia para **Luméra Atelier**, una marca premium de joyería. El ejemplo demuestra la separación entre documentos de decisión, HTML copiable, CSS encapsulado, preview y reporte QA.
