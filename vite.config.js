import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/site-personal",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/site-personal/assets/index-bdcb863d.js'],
      
    },
  },
})
