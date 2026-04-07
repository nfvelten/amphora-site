import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
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
  type: 'content',
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
