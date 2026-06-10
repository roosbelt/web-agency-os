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
└── wordpress-instructions.md   # pasos de publicación y mantenimiento
```

## Principios operativos

- Evidencia antes que opinión; estrategia antes que ejecución.
- No inventar datos comerciales. Usar `[POR CONFIRMAR]` y registrar supuestos.
- Una clase raíz CSS única por cliente evita conflictos con temas y plugins.
- El resultado final debe poder copiarse a WordPress sin herramientas propietarias.
- Menos dependencias, mejor rendimiento y mantenimiento.

## Ejemplo incluido

`clients/example-luxury-jewelry/` muestra una landing ficticia para **Luméra Atelier**, una marca premium de joyería. El ejemplo demuestra la separación entre documentos de decisión, HTML copiable, CSS encapsulado, preview y reporte QA.
