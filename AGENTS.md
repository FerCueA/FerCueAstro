# AGENTS.md

Guía para agentes de IA (y personas) que trabajen en este repositorio.

## Project

Portafolio estático en **Astro 6 + Tailwind CSS 4 + TypeScript (strict)**.

Comandos:

- `npm run dev` — desarrollo
- `npm run build` — build estático en `dist/`
- `npm run preview` — servir la build
- `npm run check` — type-check / diagnóstico de Astro
- `npm run lint` — ESLint
- `npm run format` / `npm run format:check` — Prettier

Antes de terminar un cambio, ejecuta `npm run check`, `npm run lint` y `npm run build`.

## Design

Before creating or modifying frontend or UI code, read `DESIGN.md`.

All new UI should follow the design system documented in `DESIGN.md`.

Prefer existing components and design tokens over creating new ones.

Do not introduce new colors, spacing values, border radii, typography styles or UI patterns unless there is a clear reason.

If an existing component already solves the problem, reuse or extend it instead of duplicating it.

## Project structure

Before creating a new file, inspect the existing project structure and place it in the most appropriate location.

Avoid creating duplicate utilities, components, hooks or styles.

Prefer small reusable components over large duplicated implementations.

Do not reorganize unrelated parts of the repository without a clear maintainability benefit.

### Mapa rápido

- `src/data/portfolio.ts` — fuente única de contenido (textos, proyectos, experiencia, servicios, tecnologías, certificados, contacto).
- `src/components/ui/` — componentes base reutilizables (`Button`, `Badge`, `Tag`, `Icon`, `SectionIntro`, `SectionShell`).
- `src/components/sections/<dominio>/` — secciones por dominio (`profile`, `experience`, `work`, `services`, `expertise`, `credentials`, `engagement`).
- `src/components/front/PortfolioHub.astro` — hub y navegación entre paneles.
- `src/components/layout/` — elementos de layout global (`BackgroundGlow`).
- `src/layouts/MainLayout.astro` — layout raíz.
- `src/pages/index.astro` — única página.
- `src/styles/global.css` — tokens del design system (`@theme`) y utilidades globales.
- `src/utils/viewTransitions.ts` — lógica del hub.
- `docs/ARCHITECTURE.md` — arquitectura de componentes.

### Reglas

- El contenido va en `portfolio.ts`, no dentro de los componentes.
- Una sección nueva usa `SectionShell.astro` y, si aporta valor, se registra en `navigationLinks`/`hubSections` y en `PortfolioHub.astro`.
- Los iconos se añaden a `Icon.astro`; nunca SVG inline en las secciones.
- No modifiques APIs, contratos de datos ni rutas públicas sin necesidad.
