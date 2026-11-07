# Shader Explorer

An interactive shader playground built with React, TypeScript, and [Paper Shaders](https://shaders.paper.design/). Browse full-screen shader effects, image filters, and logo animations, and customize their colors in real time.

**Live demo:** [ryedesignstudio.github.io/shader-explorer](https://ryedesignstudio.github.io/shader-explorer/)

## Features

- Full-screen shader preview with a bottom preset gallery
- Three categories: Effects, Image Filters, and Logo Animations
- Real-time color controls with a color picker panel
- Shareable URLs that keep the selected preset and colors
- Responsive layout: on mobile, scroll down for the color controls

## Tech stack

- React 19 and TypeScript
- [@paper-design/shaders-react](https://github.com/paper-design/shaders) for the shader components
- Vite
- pnpm

## Getting started

Requires Node.js 20+ and pnpm.

```bash
git clone https://github.com/ryedesignstudio/shader-explorer.git
cd shader-explorer
pnpm install
pnpm dev
```

Then open the local URL Vite prints (by default http://localhost:5173/shader-explorer/).

## Scripts

- `pnpm dev` – start the development server
- `pnpm build` – type-check and build for production
- `pnpm preview` – preview the production build

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages using [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The Vite `base` path in [vite.config.ts](vite.config.ts) is set to `/shader-explorer/` to match the Pages URL.

## Project structure

```
shader-explorer/
├── .github/workflows/  # GitHub Pages deployment
├── public/             # Static assets (sample image, favicon)
└── src/
    ├── components/     # Preview, preset gallery, color panel
    ├── presets/        # Preset definitions mapped to Paper Shader components
    ├── services/       # Preset registry and URL state
    └── types.ts        # Shared types
```

## Earlier versions

- [shader-explorer-v1-classic](https://github.com/ryedesignstudio/shader-explorer-v1-classic) – the original Three.js version with a three-column layout
- [shader-explorer-v2-gallery](https://github.com/ryedesignstudio/shader-explorer-v2-gallery) – a gallery-grid redesign with a slide-out color drawer

## Author

**Darcy Zhang** – [GitHub](https://github.com/ryedesignstudio)

## License

MIT
