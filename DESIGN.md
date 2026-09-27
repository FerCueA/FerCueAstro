# Design System

Sistema visual de **FerCueAstro**. Es la referencia oficial para cualquier cambio de UI, humano o generado por IA. Si algo no está aquí, reutiliza lo existente antes de inventar.

## Stack

- **Framework:** [Astro](https://astro.build) 6 (salida estática, `output: static`).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com) 4 vía `@tailwindcss/vite`.
- **Lenguaje:** TypeScript en modo `strict`.
- **Fuente de tokens:** `src/styles/global.css` (bloque `@theme`).
- **Componentes base:** `src/components/ui/`.
- **Datos/contenido:** `src/data/portfolio.ts` (fuente única).

---

## Design Principles

1. **Consistencia antes que novedad.** Reutiliza tokens y componentes existentes. No introduzcas colores, radios, sombras o patrones nuevos sin una razón clara.
2. **Mobile-first.** Todo se construye primero para móvil y se amplía con `sm:`, `lg:`…
3. **Contenido centralizado.** Los textos y datos viven en `src/data/portfolio.ts`, no en los componentes.
4. **Componentes pequeños y reutilizables.** Cada patrón repetido debe convertirse en un componente en `ui/`.
5. **Accesibilidad por defecto.** Estados de foco visibles, semántica correcta, `prefers-reduced-motion` respetado.
6. **Identidad cálida y editorial.** Fondo papel con degradado suave, acentos dorado/violeta, tipografía serif para títulos y sans para cuerpo.
7. **Sin estilos inline salvo animaciones escalonadas.** El resto se resuelve con clases/tokens.

---

## Colors

Definidos como variables del tema en `global.css` (`@theme`) y usados como clases de Tailwind (`bg-…`, `text-…`, `border-…`) con opacidad (`/10`, `/70`…).

| Rol              | Token                              | Valor                                                                           | Uso                                   |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------- |
| Primary / accent | `--color-gold-main`                | `#c99b45`                                                                       | CTAs, cifras, acentos, foco           |
| Primary soft     | `--color-gold-soft`                | `#ecd9aa`                                                                       | Fondos suaves, hover de CTA           |
| Secondary        | `--color-violet-deep`              | `#5f4b78`                                                                       | Texto de apoyo, etiquetas             |
| Secondary mid    | `--color-violet-main`              | `#8c6f9d`                                                                       | Acentos, líneas                       |
| Secondary soft   | `--color-violet-soft`              | `#dccfe4`                                                                       | Fondos de chips/cards                 |
| Background       | `--color-paper`                    | `#f7f3eb`                                                                       | Fondo base (con degradado en `:root`) |
| Surface          | `--color-surface`                  | `#fffaf2`                                                                       | Paneles y tarjetas                    |
| Text             | `--color-ink`                      | `#1f2433`                                                                       | Texto principal                       |
| Muted text       | `--color-ink` + opacidad           | `text-ink/60` – `text-ink/72`                                                   | Texto secundario                      |
| Borders          | `--color-ink` / acentos + opacidad | `border-ink/8`, `border-ink/10`, `border-gold-main/20`, `border-violet-main/16` | Bordes por defecto                    |
| Success          | `--color-success`                  | `#3f8f5f`                                                                       | Reservado (sin uso actual)            |
| Warning          | `--color-warning`                  | `#c98a2b`                                                                       | Reservado (sin uso actual)            |
| Error            | `--color-error`                    | `#c2493f`                                                                       | Reservado (sin uso actual)            |
| Info             | `--color-info`                     | `#4b6fb0`                                                                       | Reservado (sin uso actual)            |

> Los colores de estado están definidos como tokens para futuros formularios/alertas, pero **hoy no se usan**. Si necesitas un estado, usa estos tokens en lugar de crear un color nuevo.

---

## Typography

- **Sans (cuerpo, UI):** `--font-sans` → `'Space Grotesk'`.
- **Serif (títulos):** `--font-serif` → `'Fraunces'`.

| Elemento       | Clases de referencia                                             | Tamaño        | Peso    | Line-height |
| -------------- | ---------------------------------------------------------------- | ------------- | ------- | ----------- |
| H1 (hub)       | `font-serif text-[clamp(1.9rem,6.2vw,5.1rem)] leading-none`      | fluido        | normal  | `none`      |
| H1 (Conóceme)  | `font-serif text-[clamp(2rem,7.5vw,4rem)] leading-[1.02]`        | fluido        | normal  | `1.02`      |
| H2 (sección)   | `font-serif text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight` | 1.875→2.6rem  | normal  | `tight`     |
| H3 (card)      | `text-lg sm:text-xl font-semibold`                               | 1.125→1.25rem | 600     | heredado    |
| Body           | `text-sm sm:text-base leading-6 sm:leading-7 text-ink/70`        | 0.875→1rem    | 400     | 1.5–1.75    |
| Lead           | `text-base sm:text-lg leading-7 sm:leading-8 text-ink/75`        | 1→1.125rem    | 400     | 1.75–2      |
| Small          | `text-xs leading-5 text-ink/65`                                  | 0.75rem       | 400     | 1.25        |
| Label / kicker | `uppercase tracking-[0.14em..0.24em] text-violet-deep`           | 0.62–0.72rem  | 500–600 | —           |
| Button         | `text-sm font-semibold` (via `Button.astro`)                     | 0.875rem      | 600     | —           |

---

## Spacing

Se usa la escala por defecto de Tailwind (base `--spacing: 0.25rem`). Reglas:

- **Ritmo vertical de sección:** `py-10 sm:py-12 lg:py-16`.
- **Padding de panel:** `p-5 sm:p-8`.
- **Padding de tarjeta:** `p-4 sm:p-5` (cards de contenido) / `p-4 sm:p-6` (cards de grid).
- **Gaps habituales:** `gap-3`, `gap-4`, `gap-5`, `gap-6`, `gap-8`.
- **Separación dentro de tarjeta:** `mt-2.5` / `mt-3` / `mt-4` / `mt-5`.

Evita valores fuera de la escala (p. ej. `p-[13px]`) salvo clamp/medidas de layout justificadas.

---

## Layout

- **Layout raíz:** `MainLayout.astro` → `<body class="text-ink">` con `BackgroundGlow` y `<main>`.
- **Hub:** `PortfolioHub.astro` centra el contenido en `max-w-300` (1200px) y `min-h-[calc(100vh-2rem)]`.
- **Panel de sección:** `SectionShell.astro` (cabecera + cuerpo).
- **Grids:**
  - Tarjetas: `sm:grid-cols-2 lg:grid-cols-3` (o `xl:grid-cols-4` en stats).
  - Bloque mixto (servicios): `lg:grid-cols-12` con `col-span` por índice.
- **Contenedores de texto:** `max-w-3xl` (intro), `max-w-2xl` (párrafos).

---

## Breakpoints

Breakpoints por defecto de Tailwind (verificados en el build):

| Nombre | Min-width |
| ------ | --------- |
| `sm`   | 640px     |
| `md`   | 768px     |
| `lg`   | 1024px    |
| `xl`   | 1280px    |
| `2xl`  | 1536px    |

Además hay una media query explícita a `max-width: 640px` en `global.css` para el fondo degradado en móvil.

---

## Borders and Radius

- **Grosor de borde:** `1px` por defecto (`border`). No se usan bordes gruesos.
- **Colores de borde:** `border-ink/8` y `border-ink/10` (neutros), `border-gold-main/20` y `border-violet-main/16` (acento).

| Token            | Valor    | Clase           | Uso                          |
| ---------------- | -------- | --------------- | ---------------------------- |
| `--radius-inner` | `1rem`   | `rounded-inner` | Sub-tarjetas, iconos, inputs |
| `--radius-card`  | `1.5rem` | `rounded-card`  | Tarjetas de contenido        |
| `--radius-panel` | `2rem`   | `rounded-panel` | Paneles de sección, hero     |
| —                | `9999px` | `rounded-full`  | Pills, badges, tags, botones |

No introduzcas radios arbitrarios (`rounded-[1.4rem]`). Usa los tokens anteriores.

---

## Shadows

Definidas en `@theme`:

| Token           | Clase         | Uso                                                    |
| --------------- | ------------- | ------------------------------------------------------ |
| `--shadow-soft` | `shadow-soft` | Reposo por defecto (paneles, tarjetas, botón primario) |
| `--shadow-card` | `shadow-card` | Elevación destacada en reposo (hero del hub)           |
| `--shadow-lift` | `shadow-lift` | Hover/elevación (cards en `hover`, tarjeta destacada)  |

Regla: en reposo usa `shadow-soft`; en hover usa `hover:shadow-lift`. No uses `shadow-sm/lg/xl` de Tailwind ni sombras negras arbitrarias.

---

## Components

### Buttons (`src/components/ui/Button.astro`)

- Renderiza `<a>` si recibe `href` (abre en `_blank` por defecto) o `<button>` si no.
- **Variantes:** `primary` (dorado, CTA principal), `secondary` (borde neutro), `ghost` (borde/acento dorado).
- **Tamaños:** `sm` (`px-4 py-2 text-sm`), `md` (`px-5 py-3 sm:px-6`), `lg` (ancho completo).
- Estados: hover (`hover:-translate-y-0.5` + cambio de fondo), `focus-visible` (heredado del navegador + Tailwind), `disabled` (pendiente, ver deuda).

### Inputs and Forms

**No hay formularios todavía.** Cuando se añadan:

- Usa `rounded-inner`, `border-ink/10`, `bg-surface`, foco con `ring-gold-main/40`.
- `label` siempre visible y asociado; mensajes de error con `--color-error`.

### Cards

- Radio `rounded-card`, fondo `bg-paper/80`–`bg-surface/90`, borde `border-ink/8`, sombra `shadow-soft`.
- Hover: `hover:-translate-y-0.5 hover:shadow-lift` (+ acento en el borde).
- Padding `p-4 sm:p-5`/`p-4 sm:p-6`.

### Tables

**No implementadas.** Si se necesitan: cabecera `text-xs uppercase tracking-wide text-ink/55`, filas con `border-b border-ink/8`, alineación numérica a la derecha, comportamiento responsive (scroll horizontal o cards en móvil).

### Navigation

- **Hub (`PortfolioHub.astro`):** botones de sección + paneles (`view-panel`); la lógica vive en `src/utils/viewTransitions.ts`.
- Estado activo con `aria-pressed` y subrayado (`menu-option-line`).
- Barra fija con la sección activa (`#active-section-label`).
- Volver a pulsar la sección activa cierra el panel.
- No hay sidebar ni breadcrumbs.

### Modals and Dialogs

**No implementados.** Si se añaden: overlay `bg-ink/40 backdrop-blur-sm`, panel `rounded-panel shadow-lift`, foco atrapado y cierre con `Esc`.

### Alerts and Notifications

**No implementadas.** Reserva los tokens `--color-success/warning/error/info`. Patrón sugerido: fondo `bg-<token>/10`, borde `border-<token>/30`, texto `text-ink`.

---

## States

| Estado   | Regla                                                                |
| -------- | -------------------------------------------------------------------- |
| Default  | `shadow-soft`, borde neutro                                          |
| Hover    | `-translate-y-0.5` + `hover:shadow-lift` + acento de borde           |
| Active   | Botones del hub: `aria-pressed="true"` + subrayado                   |
| Focus    | `focus-visible` (anillo/outline del navegador + utilidades Tailwind) |
| Disabled | Pendiente de estandarizar (ver deuda)                                |
| Loading  | No hay UI asíncrona                                                  |
| Empty    | Certificados muestra un panel informativo si no hay PDFs             |
| Error    | Tokens reservados; sin patrón implementado                           |

---

## Responsive Design

- **Móvil (< 640px):** una columna; certificados en carrusel horizontal (`snap-x`); el fondo usa un degradado más tenue.
- **Tablet (≥ 640/768px):** grids a 2 columnas.
- **Escritorio (≥ 1024px):** grids a 3 columnas; cabeceras de sección con intro a la izquierda y badges a la derecha; hero del hub a dos columnas.

---

## Accessibility

- Contraste alto sobre fondos claros (texto `ink` sobre `paper`/`surface`). Evita combinar `gold-soft` como texto sobre blanco.
- **Focus visible** obligatorio en elementos interactivos.
- `aria-pressed` en los botones de sección; `aria-live="polite"` en el stage; `aria-hidden` en el stage cerrado y en decoración.
- Navegación completa por teclado (son `<button>`/`<a>` reales).
- Tamaños de interacción: botones con `py-2`–`py-3`; evita objetivos menores a ~40px.
- `prefers-reduced-motion`: se anulan animaciones y `scroll-behavior`.

---

## Icons

- **Librería:** ninguna externa. Set propio centralizado en `src/components/ui/Icon.astro`.
- **Stroke:** `viewBox="0 0 24 24"`, `stroke-width` por defecto `1.7`, `stroke-linecap/linejoin="round"`.
- **Fill (marcas/social):** `viewBox="0 0 20 20"`, `fill="currentColor"`.
- **Tamaños habituales:** `h-4 w-4`, `h-5 w-5` (por defecto), `h-6 w-6`, `h-7 w-7`.
- **Regla:** nunca añadas SVG inline en una sección; amplía `Icon.astro`.

---

## Animations

- **Transiciones permitidas:** `transition` con duración `150–500ms` (uso común `duration-200` / `duration-300`).
- **Easing:** por defecto `ease`/linear; la entrada usa `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Animaciones definidas:**
  - `fadeIn` — entrada de panel (`280ms`).
  - `riseIn` — aparición al hacer scroll (`0.6s`, vía `[data-reveal].is-visible`).
  - `floatSlow` y `marquee` — decorativas; `pulseDot` — marcador "actual".
- **Escalonado:** se aplica `animation-delay` inline en listas (único uso aceptado de estilos inline).
- **Evitar:** animaciones largas, giros/zooms agresivos, movimiento que ignore `prefers-reduced-motion`.

---

## Component Reuse

Antes de crear algo nuevo, reutiliza:

| Necesidad                   | Componente              |
| --------------------------- | ----------------------- |
| Panel de sección + cabecera | `ui/SectionShell.astro` |
| Encabezado de sección       | `ui/SectionIntro.astro` |
| Pills de meta/estado        | `ui/Badge.astro`        |
| Chips (tecnologías, stack)  | `ui/Tag.astro`          |
| Botones y enlaces de acción | `ui/Button.astro`       |
| Iconos                      | `ui/Icon.astro`         |

---

## Do

- ✅ Usa tokens (`rounded-panel`, `shadow-soft`, colores del tema).
- ✅ Reutiliza `SectionShell` para nuevas secciones con el patrón panel + cabecera.
- ✅ Centraliza nuevos iconos en `Icon.astro`.
- ✅ Mantén mobile-first y `prefers-reduced-motion`.
- ✅ Apoya los textos en `aria-*` cuando aporten contexto.

## Don't

- ❌ Introducir colores/radios/sombras nuevos sin motivo.
- ❌ Duplicar el patrón `<section><div class="rounded-panel …">` a mano (usa `SectionShell`).
- ❌ Pegar SVG inline en secciones.
- ❌ Usar `shadow-sm/lg/xl` o sombras negras arbitrarias.
- ❌ Escribir contenido en los componentes en lugar de `portfolio.ts`.
- ❌ Añadir estilos inline salvo `animation-delay`.

---

## Existing Design Debt

Inconsistencias pendientes (documentadas, no corregidas ahora):

1. **Tamaños de texto arbitrarios** en etiquetas pequeñas (`text-[0.62rem]`, `text-[0.66rem]`, `text-[0.72rem]`). Convendría crear tokens de tamaño (`--text-2xs`…) o usar `text-xs`.
2. **Barra de contacto** (`ContactSection`): las tarjetas de canal son `<a>` con estilos propios en lugar de un componente (`CardLink`); los iconos de marca usan colores hex puntuales para LinkedIn/WhatsApp/GitHub.
3. **Botones de servicio** se estiran al ancho de la tarjeta por el `align-items: stretch` del contenedor flex (comportamiento actual intencionado pero a revisar).
4. **Sin estados `disabled`/`loading`** estandarizados en `Button`.
5. **Forms, tablas, modales y alerts** no existen todavía; se han reservado tokens y pautas, pero no hay componentes.
6. **Hub hero** conserva medidas/animaciones propias (tamaño del nombre, `min-h-[…]`) que no siguen del todo la escala tipográfica.
7. **`BackgroundGlow`** usa posiciones/tamaños arbitrarios decorativos (asumible).
