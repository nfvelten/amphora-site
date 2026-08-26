# nicholas-velten.xyz

Site pessoal construído com [Astro](https://astro.build).

## Stack

- **Astro 6** — geração estática
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

## Acesso por agentes

O site publica uma superfície MCP read-only no mesmo domínio do Cloudflare Pages:

```text
https://www.nicholas-velten.xyz/mcp
```

A Pages Function em `functions/mcp.ts` expõe `get_resume`, `get_projects`, `get_availability` e `prepare_intro`, usando `src/data/portfolio.js` como fonte única. As superfícies estáticas ficam disponíveis em `/api/resume.json`, `/api/resume.txt`, `/AGENTS.md` e `/connect.md`.

## Deploy k3s

O site está publicado no cluster k3s pessoal via Docker + Helm:

```text
https://site.nicholas-velten.xyz
```

Deploy local automatizado:

```bash
./scripts/deploy-k3s-local.sh
```

Deploy via GHCR:

```bash
GHCR_USERNAME=nfvelten GHCR_TOKEN=<github-token-com-write-packages> ./scripts/deploy-k3s-ghcr.sh
```

O script publica a imagem em `ghcr.io/nfvelten/site:<git-sha>` e atualiza o Helm para usar essa tag. O workflow `.github/workflows/publish-image.yml` também publica `ghcr.io/nfvelten/site:latest` em pushes para `main`.

O token precisa ter permissao `write:packages`.

Fluxo equivalente:

```bash
npm run build
docker build -t nicholas-site:local .
docker save nicholas-site:local -o /tmp/nicholas-site-local.tar
scp -i /home/nfvelten/.ssh/oracle-k8s -o IdentitiesOnly=yes /tmp/nicholas-site-local.tar root@194.163.130.51:/tmp/nicholas-site-local.tar
ssh -i /home/nfvelten/.ssh/oracle-k8s -o IdentitiesOnly=yes root@194.163.130.51 'k3s ctr images import /tmp/nicholas-site-local.tar'
KUBECONFIG=/home/nfvelten/code/personal/contabo-k8s/kubeconfig helm upgrade --install nicholas-site deploy/helm/nicholas-site --namespace site --create-namespace
KUBECONFIG=/home/nfvelten/code/personal/contabo-k8s/kubeconfig kubectl rollout restart deployment/nicholas-site -n site
KUBECONFIG=/home/nfvelten/code/personal/contabo-k8s/kubeconfig kubectl rollout status deployment/nicholas-site -n site --timeout=2m
curl -I https://site.nicholas-velten.xyz
```
