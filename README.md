# FerCueAstro

Portafolio web construido con `Astro` y `Tailwind CSS`, planteado como un hub visual por secciones. El objetivo del proyecto es mostrar servicios, experiencia, tecnologías, certificados y vías de contacto de una forma clara, rápida y fácil de mantener.

## Índice

- [FerCueAstro](#fercueastro)
  - [Índice](#índice)
  - [1. Descripción general](#1-descripción-general)
  - [2. Qué incluye](#2-qué-incluye)
  - [3. Stack tecnológico](#3-stack-tecnológico)
  - [4. Requisitos previos](#4-requisitos-previos)
  - [5. Puesta en marcha](#5-puesta-en-marcha)
    - [5.1 Instalar dependencias](#51-instalar-dependencias)
    - [5.2 Levantar el entorno de desarrollo](#52-levantar-el-entorno-de-desarrollo)
    - [5.3 Generar build y previsualizar](#53-generar-build-y-previsualizar)
  - [6. Scripts disponibles](#6-scripts-disponibles)
  - [7. Estructura del proyecto](#7-estructura-del-proyecto)
  - [8. Comportamiento UX actual](#8-comportamiento-ux-actual)
  - [9. Despliegue](#9-despliegue)
  - [10. Documentación adicional](#10-documentación-adicional)
  - [11. Notas útiles](#11-notas-útiles)

## 1. Descripción general

`FerCueAstro` es un portfolio estático orientado a presentar trabajo profesional y servicios digitales con una estructura limpia y visual. Todo el contenido principal se gestiona desde una fuente de datos central para facilitar actualizaciones rápidas.

## 2. Qué incluye

- Navegación tipo hub con paneles dinámicos.
- Secciones organizadas por dominio: perfil, proyectos, servicios, tecnologías, certificados y contacto.
- Diseño responsive con prioridad mobile-first.
- Transiciones visuales con fallback para dispositivos pequeños o usuarios con `reduced motion`.
- Contenido editable desde un único archivo de datos.

## 3. Stack tecnológico

| Herramienta | Versión |
| --- | --- |
| `Astro` | `6.1.1` |
| `Tailwind CSS` | `4.2.2` |
| `TypeScript` | Integrado vía Astro |

## 4. Requisitos previos

Antes de arrancar el proyecto, necesitas tener instalado:

- `Node.js >= 22.12.0`
- `npm`

## 5. Puesta en marcha

### 5.1 Instalar dependencias

```bash
npm install
```

### 5.2 Levantar el entorno de desarrollo

```bash
npm run dev
```

La aplicación queda disponible en:

```text
http://localhost:4321
```

### 5.3 Generar build y previsualizar

```bash
npm run build
npm run preview
```

## 6. Scripts disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo |
| `npm run build` | Genera la versión estática en `dist/` |
| `npm run preview` | Sirve localmente la build generada |

## 7. Estructura del proyecto

```text
src/
  components/
    front/PortfolioHub.astro
    layout/
    sections/
      profile/
      work/
      services/
      expertise/
      credentials/
      engagement/
    ui/
  data/portfolio.ts
  layouts/MainLayout.astro
  pages/index.astro
  styles/global.css
  utils/viewTransitions.ts
```

## 8. Comportamiento UX actual

- Menú principal con acceso a paneles mediante botones.
- Botón de vuelta al menú dentro del área de contenido.
- Certificados mostrados en carrusel horizontal en móvil y en grid en pantallas mayores.
- Accesos rápidos desde la sección de perfil conectados al sistema de paneles.

## 9. Despliegue

Es un proyecto estático apto para plataformas como:

- `Netlify`
- `Vercel`
- `GitHub Pages`
- Hosting tradicional

Configuración base de despliegue:

- **Comando de build:** `npm run build`
- **Carpeta de publicación:** `dist`

## 10. Documentación adicional

- `ARCHITECTURE_GUIDE.md`
- `src/components/ARCHITECTURE.md`

## 11. Notas útiles

- Si solo necesitas cambiar textos o enlaces, normalmente basta con editar `src/data/portfolio.ts`.
- Para tocar interacciones o navegación del hub, revisa `src/utils/viewTransitions.ts` y `src/components/front/PortfolioHub.astro`.

---

**Última actualización:** 9 de abril de 2026
