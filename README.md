# Shader Explorer 🎨

An interactive WebGL shader playground built with React, TypeScript, and Three.js. Explore and customize stunning visual effects in real-time with an intuitive color control interface.

🔗 **Live Demo**: [https://shader-explorer.vercel.app/](https://shader-explorer.vercel.app/)

## Features

- 🎨 **Interactive Shader Presets** - Explore a curated collection of beautiful GLSL shaders
- 🎛️ **Real-time Color Controls** - Customize shader colors with an intuitive color picker
- 🖼️ **Live Preview** - See your changes instantly with WebGL rendering
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔗 **Shareable URLs** - Share your custom shader configurations via URL
- 💾 **Export Options** - Export shader code and configurations
- ⌨️ **Keyboard Shortcuts** - Fullscreen mode (Cmd/Ctrl+F) for immersive viewing

## Tech Stack

- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Three.js** - WebGL rendering engine
- **Vite** - Lightning-fast build tool
- **GLSL** - Fragment shaders for visual effects

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/darcyrui/shader-explorer.git

# Navigate to project directory
cd shader-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app running locally.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
shader-explorer/
├── src/
│   ├── components/     # React components
│   ├── services/       # Core services (ShaderEngine, PresetRegistry)
│   ├── presets/        # Shader preset definitions
│   └── types.ts        # TypeScript type definitions
├── public/             # Static assets
└── dist/               # Production build
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT License - feel free to use this project for learning or your own projects.

## Author

**Darcy Zhang** - [GitHub](https://github.com/darcyrui)

## Keywords

WebGL, GLSL, Shaders, Three.js, React, TypeScript, Graphics Programming, Creative Coding, Visual Effects, Interactive Art, Fragment Shaders, Shader Playground
