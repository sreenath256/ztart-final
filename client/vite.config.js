import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps:{
    exclude: ["@rollup/browser"],
  },
  plugins: [react()],
  server:{
    port:3003
  },
})
