import { defineConfig } from 'vite';
import path from 'path';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.config.js';

export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  plugins: [crx({ manifest })],
});
