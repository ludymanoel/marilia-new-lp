import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mariliacordeiro.com',
  trailingSlash: 'never',

  // Performance: prefetch on hover/visible para navegação rápida
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  // Compressão e cache
  compressHTML: true,

  // Sitemap automático
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Vite + Tailwind v4
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 2048,
    },
  },

  // Imagens responsivas
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});