# nicholas-velten.xyz

Site pessoal construído com [Astro](https://astro.build).

## Stack

- **Astro 5** — geração estática
- **MDX** — posts com componentes
- **RSS feed** — via `@astrojs/rss`
- **Sitemap** — gerado automaticamente (exclui `/agora` e `/sobre`)
- **Giscus** — comentários via GitHub Discussions
- **Shiki** — syntax highlighting (tema `github-light`)

## Estrutura

```
src/
├── components/       # Giscus, Sidebar
├── content/
│   ├── posts/        # Posts em MD/MDX
│   └── leituras/     # Resenhas de livros
├── layouts/          # BaseLayout, PostLayout
├── pages/
│   ├── index.astro
│   ├── escrita.astro
│   ├── leituras/
│   ├── agora.astro
│   ├── curriculo.astro
│   └── rss.xml.ts
└── styles/
    └── global.css
```

## Comandos

| Comando           | Ação                                   |
| :---------------- | :------------------------------------- |
| `npm install`     | Instala dependências                   |
| `npm run dev`     | Dev server em `localhost:4321`         |
| `npm run build`   | Build para `./dist/`                   |
| `npm run preview` | Preview do build antes de fazer deploy |
