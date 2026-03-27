// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://nicholas-velten.xyz',

  redirects: {
    '/sobre': '/about',
    '/curriculo': '/resume',
    '/agora': '/now',
    '/escrita': '/writing',
    '/leituras': '/readings',
    '/leituras/[id]': '/readings/[id]',
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/now'),
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },

  adapter: cloudflare()
});