import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/static';

/**
 * Astro config — Produtividade Sincera Landing Page.
 *
 * IMPORTANTE: O adapter @astrojs/vercel/static gera um output
 * compatível com Vercel automaticamente (zero-config deploy).
 *
 * Sem o adapter, o output vai para `dist/` e a Vercel não consegue
 * servir como roteamento padrão (causa erro 404 NOT_FOUND).
 */
export default defineConfig({
  site: 'https://mariliacordeiro.com',
  trailingSlash: 'never',

  // Adapter Vercel — gera .vercel/output/ com config correta
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true },
  }),

  // Performance: prefetch on hover/visible para navegação rápida
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  // Compressão de HTML
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