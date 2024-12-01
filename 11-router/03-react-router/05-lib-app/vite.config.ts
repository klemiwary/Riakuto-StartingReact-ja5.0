import path from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [react(), tsconfigPaths()],
});
