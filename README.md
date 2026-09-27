# 👋 FerCueAstro

**Portafolio personal de Aleixo Fernández Cuevas** — desarrollador full stack y de automatización.

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)

Portafolio web construido con **Astro** y **Tailwind CSS**, planteado como un hub visual por secciones. Muestra experiencia, proyectos, servicios, tecnologías, certificados y vías de contacto de una forma clara, rápida y fácil de mantener.

🌍 **Web:** [aleixofdezcuevas.es](https://aleixofdezcuevas.es/) · 💻 **Código:** [github.com/FerCueA/FerCueAstro](https://github.com/FerCueA/FerCueAstro)

---

## ✨ Qué incluye

- 🧭 **Navegación tipo hub** con paneles dinámicos y transiciones suaves.
- 🗂️ **Secciones por dominio:** conóceme, experiencia, proyectos, servicios, tecnologías, certificados y contacto.
- 👤 **Bloque "Conóceme"** con presentación personal e intereses (tecnología, estar a la última, trail, running y senderismo).
- 💼 **Experiencia** en formato timeline, con el puesto actual destacado.
- 🚀 **Proyectos** con maqueta de navegador y enlaces a web y repositorio.
- 🎓 **Certificados** filtrables por categoría, más la carta de recomendación.
- 🪄 **Animaciones** de aparición al hacer scroll, respetando `prefers-reduced-motion`.
- ♿ **Responsive** mobile-first y accesible.
- 🧩 **Contenido centralizado** en un único archivo de datos.

---

## 🛠️ Tecnologías

**🎨 Frontend**<br/>
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat-square&logo=astro&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

**🧰 Calidad y tooling**<br/>
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

---

## 🚀 Puesta en marcha

### Requisitos

- 🟢 `Node.js >= 22.12.0`
- 📦 `npm`

### Comandos

```bash
npm install       # instalar dependencias
npm run dev       # entorno de desarrollo → http://localhost:4321
npm run build     # generar la versión estática en dist/
npm run preview   # servir localmente la build generada
```

---

## 🧾 Scripts

| Script                 | Descripción                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Inicia el entorno de desarrollo             |
| `npm run build`        | Genera la versión estática en `dist/`       |
| `npm run preview`      | Sirve localmente la build generada          |
| `npm run check`        | Valida tipos y plantillas con `astro check` |
| `npm run lint`         | Analiza el código con ESLint                |
| `npm run format`       | Formatea el código con Prettier             |
| `npm run format:check` | Comprueba el formato sin modificar archivos |

---

## 📁 Estructura

```text
src/
  components/
    front/PortfolioHub.astro
    sections/
      profile/        # Conóceme
      experience/     # Experiencia (timeline)
      work/           # Proyectos
      services/       # Servicios
      expertise/      # Tecnologías
      credentials/    # Certificados
      engagement/     # Contacto
    ui/                # Componentes base reutilizables
      Badge.astro
      Button.astro
      Icon.astro
      SectionIntro.astro
      SectionShell.astro
      Tag.astro
  data/portfolio.ts   # Fuente única de contenido
  layouts/MainLayout.astro
  pages/index.astro
  styles/global.css   # Tokens del design system
  utils/viewTransitions.ts
```

> 💡 Para cambiar textos o enlaces, normalmente basta con editar `src/data/portfolio.ts`.
> Para tocar la navegación del hub, revisa `src/utils/viewTransitions.ts` y `src/components/front/PortfolioHub.astro`.

---

## 🚀 Despliegue

Proyecto estático apto para **Netlify**, **Vercel**, **GitHub Pages** o hosting tradicional.

- **Comando de build:** `npm run build`
- **Carpeta de publicación:** `dist`

---

## 📫 Contacto

<p align="center">
  <a href="https://aleixofdezcuevas.es/"><img src="https://img.shields.io/badge/Portafolio-aleixofdezcuevas.es-5f4b78?style=for-the-badge&logo=astro&logoColor=white" alt="Portafolio" /></a>
  <a href="mailto:fercuea90@protonmail.com"><img src="https://img.shields.io/badge/Email-fercuea90@protonmail.com-c99b45?style=for-the-badge&logo=protonmail&logoColor=white" alt="Email" /></a>
  <a href="https://www.linkedin.com/in/aleixo-fernandez-cuevas-395a52367/"><img src="https://img.shields.io/badge/LinkedIn-Aleixo_Fernandez-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://github.com/FerCueA"><img src="https://img.shields.io/badge/GitHub-FerCueA-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

---

## 📚 Documentación adicional

- [`DESIGN.md`](./DESIGN.md) — sistema de diseño (referencia para UI).
- [`AGENTS.md`](./AGENTS.md) — reglas para agentes de IA.
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — arquitectura de componentes.
