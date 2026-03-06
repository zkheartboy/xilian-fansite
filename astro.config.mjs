import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xilian-fans.github.io',
  base: '/xilian-fansite',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'file'
  }
});
