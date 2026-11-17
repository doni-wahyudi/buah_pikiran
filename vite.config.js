import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/buah_pikiran/', // Required for GitHub Pages deployment under https://doni-wahyudi.github.io/buah_pikiran/
  server: {
    port: 3000,
    open: true
  }
});
