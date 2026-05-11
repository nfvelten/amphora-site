import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    title_pt: z.string().optional(),
    date: z.coerce.date(),
    description: z.string().optional(),
    description_pt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const leituras = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/leituras' }),
  schema: z.object({
    title: z.string(),
    autor: z.string(),
    date: z.coerce.date(),
    status: z.enum(['lendo', 'lido', 'quero-ler']),
    description: z.string().optional(),
    genero: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts, leituras };
