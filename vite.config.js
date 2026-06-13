import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (CNAME = www.thepland.in) is served from the site root,
// so base stays '/'. If deploying to a project subpath, change base accordingly.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
