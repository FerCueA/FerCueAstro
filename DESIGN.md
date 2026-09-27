# Design System

Sistema visual de **FerCueAstro**. Referencia obligatoria para cualquier cambio de UI, humano o generado por IA. Si algo no está aquí, reutiliza lo existente antes de inventar.

## Stack

- **Framework:** Astro 6 (salida estática).
- **Estilos:** Tailwind CSS 4 vía `@tailwindcss/vite`.
- **Lenguaje:** TypeScript `strict`.
- **Tokens:** `src/styles/global.css` (bloque `@theme`).
- **Componentes base:** `src/components/ui/`.
- **Contenido:** `src/data/portfolio.ts`.
- **Dirección:** editorial, cálida y neutra. Jerarquía por tipografía y espacio, no por cajas.

---

## Design Principles

1. **Jerarquía > decoración.** Tamaño, peso y contraste definen la importancia; no los recuadros.
2. **Espacio > cajas.** Separa con whitespace y hairlines antes de crear un contenedor.
3. **Tipografía > bordes.** Usa la escala tipográfica y el color de texto; evita bordes decorativos.
4. **Estructura > cards.** Listas, filas y columnas antes que grids de tarjetas.
5. **Consistencia > variedad.** Reutiliza tokens y componentes.
6. **Mobile-first** y accesible por defecto (`prefers-reduced-motion`, foco visible, semántica).
7. **El color se usa con intención.** Neutros como base; el dorado solo para acciones/énfasis.

---

## Colors

Definidos en `@theme` (`global.css`). Se usan como clases (`bg-*`, `text-*`, `border-*`).

| Rol              | Token                   | Valor                | Uso                                                      |
| ---------------- | ----------------------- | -------------------- | -------------------------------------------------------- |
| Background       | `--color-paper`         | `#f7f3eb`            | Fondo de página (con un radial muy tenue arriba-derecha) |
| Surface          | `--color-surface`       | `#fffdf9`            | Superficie elevada real (tarjetas de proyecto, mockup)   |
| Surface muted    | `--color-surface-muted` | `#efe9df`            | Superficie secundaria sutil (mockups, chips)             |
| Text primary     | `--color-ink`           | `#1f2433`            | Títulos y texto principal                                |
| Text secondary   | `--color-ink-soft`      | `#454b5c`            | Cuerpo de texto                                          |
| Text muted       | `--color-ink-muted`     | `#737a8a`            | Metadata, labels, notas                                  |
| Border / line    | `--color-line`          | `rgba(31,36,51,.12)` | Hairlines y bordes                                       |
| Primary accent   | `--color-gold-main`     | `#c08a2e`            | CTA primario, cifras, enlaces activos                    |
| Primary hover    | `--color-gold-soft`     | `#e6d3a8`            | Hover del CTA primario                                   |
| Secondary accent | `--color-violet-deep`   | `#56446a`            | Texto de apoyo, enlaces ghost                            |
| Secondary mid    | `--color-violet-main`   | `#8c6f9d`            | Detalles (líneas de mockup)                              |
| Secondary soft   | `--color-violet-soft`   | `#e5dced`            | Fondos de acento suaves                                  |
| Success          | `--color-success`       | `#3f8f5f`            | Reservado                                                |
| Warning          | `--color-warning`       | `#c98a2b`            | Reservado                                                |
| Error            | `--color-error`         | `#bf4a3f`            | Reservado                                                |
| Info             | `--color-info`          | `#4b6fb0`            | Reservado                                                |

Regla: **un solo acento por pantalla**. No uses dorado para decorar; resérvalo para acciones y cifras.

---

## Typography

- **Sans (cuerpo/UI):** `Space Grotesk`.
- **Serif (display/títulos):** `Fraunces`.

| Nivel           | Clases                                                           | Tamaño        | Peso | Line-height |
| --------------- | ---------------------------------------------------------------- | ------------- | ---- | ----------- |
| Display (hub)   | `font-serif text-[clamp(1.9rem,6.2vw,5.1rem)] leading-[0.98]`    | fluido        | 400  | 0.98        |
| H1 (Conóceme)   | `font-serif text-[clamp(2.1rem,6vw,3.4rem)] leading-[1.05]`      | fluido        | 400  | 1.05        |
| H2 (sección)    | `font-serif text-3xl sm:text-4xl leading-[1.1]`                  | 1.875–2.25rem | 400  | 1.1         |
| H3 (lista/card) | `font-serif text-xl sm:text-2xl leading-snug`                    | 1.25–1.5rem   | 400  | snug        |
| Body            | `text-sm sm:text-base leading-6 sm:leading-7 text-ink-soft`      | 0.875–1rem    | 400  | 1.5–1.75    |
| Small           | `text-sm leading-6 text-ink-soft`                                | 0.875rem      | 400  | 1.5         |
| Metadata        | `text-xs text-ink-muted`                                         | 0.75rem       | 400  | 1.5         |
| Label/eyebrow   | `text-xs font-medium uppercase tracking-[0.18em] text-ink-muted` | 0.75rem       | 500  | —           |
| Botón           | `text-sm font-medium` (sm) / `text-sm sm:text-base` (md)         | 0.875–1rem    | 500  | —           |

Reglas:

- Los títulos usan **serif**; el resto **sans**. No mezcles.
- Solo hay **dos pesos** reales: 400/500. Usa `font-semibold` con moderación (títulos de item), nunca para todo.
- Los párrafos largos se limitan con `max-w-xl` / `max-w-2xl` / `max-w-md`.
- Eyebrows (uppercase + tracking) se usan **poco**: índice, kicker de sección y algún label.

---

## Spacing

Escala por defecto de Tailwind (`--spacing: 0.25rem`):

- **Ritmo de sección:** `py-12 sm:py-16 lg:py-20`.
- **Separación cabecera→contenido:** `pt-9 sm:pt-12`.
- **Filas de lista:** `py-5` (contacto), `py-9` (servicios), `py-4` (certificados).
- **Gaps:** `gap-6`, `gap-x-12`, `gap-y-10`.
- **Dentro de bloque:** `mt-1`…`mt-6`.

Evita valores fuera de escala salvo `clamp()` tipográfico o medidas de layout justificadas.

---

## Layout

- **Raíz:** `MainLayout.astro` (fondo `paper`, sin capas decorativas).
- **Hub:** `max-w-[1100px]`, hero a pantalla completa con hairline inferior.
- **Secciones:** `SectionShell` → `border-t` superior + grid de cabecera `[minmax(0,1fr)_minmax(0,20rem)]`.
- **Grids de datos:** 2 columnas para listas largas (certificados), 3 para tarjetas (proyectos/tecnologías).
- **Columnas editoriales:** `lg:grid-cols-[0.9fr_1.1fr]` (Conóceme), `sm:grid-cols-[11rem_1fr]` (timeline).
- **Medida de texto:** `max-w-md` / `max-w-xl` / `max-w-2xl`.

No centres todo: por defecto, alineación a la izquierda.

---

## Breakpoints

Tailwind por defecto: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.

---

## Borders and Radius

- **Bordes:** solo `border-line` (hairlines) o `border border-line` en superficies/interactivos. Nunca cajas alrededor de contenido informativo.
- **Grosor:** 1px. Regla de acento puntual: `border-l-2 border-gold-main` (recomendación).

| Token            | Valor     | Clase           | Uso                                        |
| ---------------- | --------- | --------------- | ------------------------------------------ |
| `--radius-inner` | `0.5rem`  | `rounded-inner` | Controles, mockups, chips                  |
| `--radius-card`  | `0.75rem` | `rounded-card`  | Tarjetas (proyectos)                       |
| `--radius-panel` | `1rem`    | `rounded-panel` | Superficies grandes / overlays (reservado) |
| —                | `9999px`  | `rounded-full`  | Solo pills de estado reales y puntos       |

No conviertas botones, tags o filtros en cápsulas.

---

## Shadows

| Token           | Clase         | Uso                                                 |
| --------------- | ------------- | --------------------------------------------------- |
| `--shadow-soft` | `shadow-soft` | Mockup del navegador y superficies elevadas mínimas |
| `--shadow-card` | `shadow-card` | Reservado                                           |
| `--shadow-lift` | `shadow-lift` | **Solo hover** de tarjetas de proyecto              |

Regla: las secciones y listas **no** llevan sombra. La separación se hace con espacio y hairlines.

---

## Components

### Buttons (`ui/Button.astro`)

- `<a>` con `href`; `<button>` sin él.
- **primary:** `rounded-md bg-gold-main text-ink hover:bg-gold-soft` (una sola acción primaria por área).
- **secondary:** `rounded-md border border-line hover:bg-surface-muted`.
- **ghost:** enlace de texto (`text-violet-deep hover:text-gold-main`), para acciones secundarias ("Ver código", "Ver carta…").
- Tamaños `sm` / `md`. Sin `rounded-full`, sin sombra, sin `translate` en hover.

### Inputs and Forms

No hay formularios. Cuando se añadan: `rounded-inner`, `border-line`, `bg-surface`, foco `ring-gold-main/40`, errores con `--color-error`, labels asociados.

### Cards

**Solo para entidades independientes e interactivas** (proyectos). `rounded-card`, `border-line`, `bg-surface`, sin sombra en reposo, `hover:shadow-lift` + `-translate-y-1`. El contenido interno **no** se envuelve en más cajas.

### Tables

No implementadas. Para datos: listas/‌filas con `border-line`, cabecera en `text-xs uppercase text-ink-muted`, números alineados a la derecha, scroll horizontal o cards solo en móvil.

### Navigation

- **Hub:** botones de texto; estado activo vía `aria-pressed` + subrayado dorado (CSS en `global.css`). Pulsar de nuevo la sección activa la cierra.
- Barra fija discreta con la sección activa.
- Sin navbar/sidebar/breadcrumbs.

### Modals and Dialogs

No implementados. Reservado: overlay `bg-ink/40 backdrop-blur-sm`, panel `rounded-panel shadow-lift`, foco atrapado, cierre con `Esc`.

### Alerts and Notifications

No implementadas. Reserva `--color-success/warning/error/info`.

---

## States

| Estado   | Regla                                                 |
| -------- | ----------------------------------------------------- |
| Default  | Plano: sin sombra, borde `line` si es interactivo     |
| Hover    | Cambio de color o `hover:shadow-lift` (solo tarjetas) |
| Active   | `aria-pressed` (hub) / subrayado dorado               |
| Focus    | `focus-visible:ring-2 ring-gold-main/40`              |
| Disabled | Pendiente (ver deuda)                                 |
| Loading  | Sin UI asíncrona                                      |
| Empty    | Mensaje textual simple                                |
| Error    | Tokens reservados                                     |

---

## Responsive Design

- **Móvil (<640):** una columna; listas a ancho completo; sin scroll horizontal; padding compacto.
- **Tablet (≥640):** listas a 2 columnas; timeline a 2 columnas (periodo | contenido).
- **Escritorio (≥1024):** cabecera de sección a 2 columnas (título | descripción + meta); grids a 3 columnas.

---

## Accessibility

- Contraste: `ink`/`ink-soft` sobre `paper`; no usar dorado claro como texto pequeño.
- `focus-visible` obligatorio en interactivos.
- Navegación por teclado (elementos nativos).
- `prefers-reduced-motion` desactiva animaciones.
- Objetivos táctiles ≥ ~40px (`py-2`+).
- `aria-pressed` en el hub, `aria-live`/`aria-hidden` en el stage.

---

## Icons

- Set propio en `ui/Icon.astro`. Sin librerías externas ni SVG inline.
- **Stroke:** `viewBox 0 0 24 24`, `stroke-width 1.7`, extremes redondeados.
- **Fill:** marcas/social, `viewBox 0 0 20 20`.
- Tamaños: `h-4 w-4` (acciones), `h-5 w-5` (filas), `h-6 w-6` (raro).
- Un icono debe **aportar significado o acción**; nunca dentro de un cuadrado de color decorativo.

---

## Animations

- Transiciones de `0.15s` (color) a `0.3s` (elevación). Rápidas y discretas.
- `fadeIn` (paneles, 280ms), `riseIn` (reveal al scroll, 0.5s), `pulseDot` (marcador "Actual").
- Escalonado con `animation-delay` inline (único estilo inline permitido).
- Evitar animaciones largas, `float`, `marquee`, gradientes animados y cualquier cosa que ignore `prefers-reduced-motion`.

---

## Reuse first

| Necesidad                           | Componente              |
| ----------------------------------- | ----------------------- |
| Sección (cabecera + cuerpo + ritmo) | `ui/SectionShell.astro` |
| Cabecera de sección                 | `ui/SectionIntro.astro` |
| Acción                              | `ui/Button.astro`       |
| Estado (pill)                       | `ui/Badge.astro`        |
| Chip de tecnología/stack            | `ui/Tag.astro`          |
| Icono                               | `ui/Icon.astro`         |

---

# Avoiding generic AI UI

Patrones que agentes (y humanos) **deben evitar** en este proyecto:

- **Do not wrap every section in a card.** Las secciones son abiertas (`SectionShell`).
- **Do not create cards inside cards.** El contenido interno va sin caja.
- **Do not use large rounded rectangles as the default layout primitive.**
- **Do not add decorative gradients** (ni grid patterns, ni blobs, ni marquees) sin propósito.
- **Do not use badges/pills for ordinary text.** Un pill implica estado real.
- **Do not add icons to every heading**, ni iconos dentro de cuadrados de color decorativos.
- **Do not use shadows to separate normal page sections.** Usa espacio y hairlines.
- **Prefer whitespace, typography and alignment over containers.**
- **Prefer structured lists and rows** (servicios, certificados, contacto) sobre grids de cards.
- **Use accent colors sparingly.** Neutro por defecto; un acento por pantalla.
- **Preserve strong information hierarchy.** Metadata ≠ título ≠ cuerpo.
- **Do not make every button the same weight**, ni cápsulas para todo.
- **Do not center everything.** Alineación izquierda por defecto.

---

## Existing Design Debt

1. **Sin estados `disabled`/`loading`** en `Button`.
2. **Forms, tablas, modales y alerts** no existen (tokens reservados).
3. **`--radius-panel`** queda reservado (overlays futuros), hoy sin uso.
4. El **mockup de proyecto** es CSS decorativo; podría sustituirse por capturas reales.
5. **Hub hero** conserva `min-h-[calc(100vh-2rem)]` y `clamp()` propios del nombre.
