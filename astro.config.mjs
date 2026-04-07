// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nicholas-velten.xyz',
  redirects: {
    '/sobre': '/about',
    '/curriculo': '/resume',
    '/escrita': '/writing',
    '/leituras': '/readings',
    '/leituras/[id]': '/readings/[id]',
    '/sitemap.xml': '/sitemap-index.xml',
  },
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
