# CLAUDE.md — site pessoal

Site pessoal de Nicholas Velten. URL: https://nicholas-velten.xyz

## Tech Stack

- **Framework:** Astro 5 + TypeScript
- **Markdown:** MDX (posts e páginas de projeto)
- **Fonte:** EB Garamond (variable + static)
- **CSS:** Customizado (sem Tailwind)
- **Syntax highlight:** Shiki (github-light / github-dark)
- **Extras:** @astrojs/rss, @astrojs/sitemap

## Comandos

```bash
npm run dev      # Dev server em localhost:4321
npm run build    # Build produção → dist/
npm run preview  # Preview do build
```

## Estrutura

```
src/
├── pages/
│   ├── index.astro          # Home
│   ├── about.astro          # Sobre
│   ├── projects.astro       # Projetos
│   ├── writing.astro        # Escrita
│   ├── resume.astro         # Currículo
│   ├── amphora.astro        # Página do Amphora
│   ├── arbitus.astro        # Página do Arbitus
│   ├── matecreations.astro  # Página da mateCreations
│   ├── paperboy.astro       # Página do Paperboy
│   ├── blog/                # Listagem de blog
│   ├── posts/               # Posts individuais
│   └── readings/            # Lista de leituras
├── content/
│   └── posts/               # Posts em MDX
├── components/              # Componentes Astro
├── layouts/                 # Layouts base
├── styles/                  # CSS global
└── assets/                  # Assets estáticos
```

## Estilo e convenções

- **Tom:** analítico e reflexivo — foca no *porquê*, não no *o quê*
- **Linguagem:** inglês (site público)
- **UI:** links inline no texto — sem botões estilizados, sem componentes UI elaborados
- Antes de criar elemento UI novo, ler `arbitus.astro` ou `amphora.astro` para entender o padrão
- Cada seção deve ter conclusão, não só descrição
- Não mencionar informações pessoais (viagens, pessoas, trabalho específico)

## Content collections

Posts em `src/content/posts/` com frontmatter:
```yaml
---
title: "Título"
date: 2026-01-01
description: "Descrição curta"
---
```
