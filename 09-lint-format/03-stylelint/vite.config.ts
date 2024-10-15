import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** @type { import('vite').UserConfig } */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
