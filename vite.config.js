import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ // This ensures relative paths for assets
  plugins: [react()],
  base: './',
})
