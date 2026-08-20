import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  vite: () => ({
    plugins: [vue(), tailwindcss()],
  }),
});
