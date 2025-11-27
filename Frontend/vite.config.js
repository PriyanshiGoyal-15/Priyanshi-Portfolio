import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {

    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  optimizeDeps: {
    include: [
      "bootstrap/dist/css/bootstrap.min.css",
      "bootstrap/dist/js/bootstrap.bundle.min.js",
      "bootstrap-icons/font/bootstrap-icons.css"
    ]
  }
});