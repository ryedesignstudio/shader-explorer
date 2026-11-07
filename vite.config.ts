import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://ryedesignstudio.github.io/shader-explorer/
export default defineConfig({
  base: '/shader-explorer/',
  plugins: [react()],
})
