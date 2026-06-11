# Web Agency OS

Web Agency OS es un sistema de trabajo basado en archivos para investigar, planificar, redactar, diseñar y construir páginas web competitivas listas para WordPress con agentes especializados. No requiere API keys, backend, base de datos ni frameworks pesados.

## Cómo funciona

Cada proyecto avanza en orden por ocho disciplinas:

1. investigación de mercado;
2. estrategia de marca;
3. UX y conversión;
4. copywriting;
5. SEO;
6. dirección visual;
7. HTML/CSS para WordPress;
8. revisión de calidad.

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

## Principios operativos

- Evidencia antes que opinión; estrategia antes que ejecución.
- No inventar datos comerciales. Usar `[POR CONFIRMAR]` y registrar supuestos.
- Una clase raíz CSS única por cliente evita conflictos con temas y plugins.
- El resultado final debe poder copiarse a WordPress sin herramientas propietarias.
- Menos dependencias, mejor rendimiento y mantenimiento.

## Ejemplo incluido

`clients/example-luxury-jewelry/` muestra una landing ficticia para **Luméra Atelier**, una marca premium de joyería. El ejemplo demuestra la separación entre documentos de decisión, HTML copiable, CSS encapsulado, preview y reporte QA.
