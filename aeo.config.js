import { defineConfig } from 'aeo.js';

export default defineConfig({
  title: 'Nicholas Velten',
  description: 'Site pessoal de Nicholas Velten — engenheiro de software full-stack com 4 anos de experiência em Java, TypeScript, Vue.js e Node.js.',
  url: 'https://nicholas-velten.xyz',

  generators: {
    robotsTxt: true,
    llmsTxt: true,
    sitemap: true,
  },

  schema: {
    organization: {
      name: 'Nicholas Velten',
      logo: 'https://nicholas-velten.xyz/favicon.svg',
    },
    person: {
      name: 'Nicholas Velten',
      jobTitle: 'Engenheiro de Software Full-Stack',
    },
  },

  pages: [
    {
      title: 'Nicholas Velten — Engenheiro de Software Full-Stack',
      content: `Nicholas Velten é engenheiro de software full-stack com 4 anos de experiência profissional
em construção de sistemas escaláveis e bem estruturados. Trabalha atualmente na Alloha Fibra,
onde desenvolve aplicações e serviços em Java, TypeScript, Vue.js e Node.js. Passou por
4 empresas: GetHash (fintech), Kinebot (startup), LIGUE e Alloha Fibra (telecomunicações).

Stack principal:
- Back-end: Java, Spring Boot, Node.js, TypeScript, Nest.js
- Front-end: Vue.js, Nuxt.js, React.js, Next.js, Tailwind CSS
- Infraestrutura: Docker, Kubernetes, Linux, AWS, GCP, OCI
- Banco de dados: SQL (PostgreSQL, MySQL)
- Práticas: Clean Architecture, SOLID, TDD, DDD, SCRUM

Formação em Análise e Desenvolvimento de Sistemas (2018-2021). Inglês fluente.
Mora em Maringá, Paraná, Brasil. Contato: nikvelten@gmail.com`,
    },
    {
      title: 'Escrita — Nicholas Velten',
      content: `Textos de Nicholas Velten sobre tecnologia, ferramentas de desenvolvimento e aprendizados
do dia a dia como engenheiro de software. Reflexões sobre arquitetura, ferramentas de linha
de comando, editores, sistemas pessoais de conhecimento e desenvolvimento profissional.
Sem pauta fixa — só o que vale registrar e reler depois.`,
    },
    {
      title: 'Leituras — Nicholas Velten',
      content: `Registro de leituras de Nicholas Velten — livros lidos, em andamento e na lista de espera.
Cobre ficção científica, histórias em quadrinhos (HQs), livros técnicos e não-ficção.
Cada entrada inclui data, status de leitura e resenha quando disponível.
Frequenta sebos regularmente em busca de novos títulos.`,
    },
    {
      title: 'Currículo — Nicholas Velten',
      content: `Trajetória profissional de Nicholas Velten, engenheiro de software full-stack.

Experiência (4 anos, 4 empresas):
- Alloha Fibra (jul. 2023 – presente): Full-stack engineer, Java, TypeScript, Vue.js
- LIGUE, adquirida pela Alloha (mai. 2022 – jul. 2023): Node.js, React, SQL
- Kinebot (fev. 2022 – mai. 2022): Node.js, React, AWS Lambda, S3, RDS
- GetHash (out. 2021 – fev. 2022): Node.js, TypeScript, Docker, Kubernetes

Formação: Tecnólogo em Análise e Desenvolvimento de Sistemas, Centro Universitário Integrado (2018-2021).
Idiomas: Português (nativo), Inglês (fluente).
Certificações: DDD, TestJS Summit 2023, Observabilidade.`,
    },
    {
      title: 'amphora — Nicholas Velten',
      content: `amphora é um sistema pessoal de gestão de conhecimento (PKMS) criado por Nicholas Velten,
construído sobre Obsidian e Neovim com automações via scripts shell e integração com IA.

O repositório amphora-setup publica a CLI amphora (Rust) e os scripts — instalável em qualquer
sistema Linux com Obsidian. Configurável via variáveis de ambiente.

Scripts incluídos:
- daily-note: abre a daily note como scratchpad flutuante no Hyprland
- meeting-record: grava, transcreve com Whisper e resume reuniões com Claude
- video-note: baixa legendas do YouTube e resume com Claude
- newsboat-save: salva e resume artigos do Newsboat
- vault-log-updates: loga atualizações de pacotes pacman no vault

Integrações:
- Obsidian: templates para daily note, weekly review, nota técnica e demanda de trabalho
- Neovim: plugin com task picker, quick capture e navegação entre notas
- Git hook: loga commits automaticamente na daily note
- Claude Code: scratchpad flutuante com contexto do vault`,
    },
    {
      title: 'mateCreations — Nicholas Velten',
      content: `mateCreations é uma família de temas de cores criada por Nicholas Velten, inspirada no
mate e no tererê. Disponível em múltiplas plataformas:
- yerba-mate.nvim: colorscheme para Neovim com suporte a Treesitter, LSP e plugins
- obsidian-yerba-mate: tema para Obsidian com variante dark (Yerba Mate) e light (Tererê)
- vscode-yerba-mate: extensão para Visual Studio Code
- omarchy-yerba-mate e omarchy-terere: temas de sistema para Omarchy (desktop Linux)
- Yerba Mate e Tererê para Zen Browser

O tema dark usa fundo verde-oliva escuro (#1c1e13). O tema light usa papel manteiga (#fbf1c7).`,
    },
    {
      title: 'Arbitus — Nicholas Velten',
      content: `Arbitus é um proxy de segurança open-source criado por Nicholas Velten que fica entre agentes de IA
e servidores MCP. Aplica políticas por agente — autenticação, rate limiting, filtragem de payload,
Human-in-the-Loop (HITL) e auditoria — antes que qualquer chamada de ferramenta chegue ao servidor upstream.

Funcionalidades:
- Auth: allowlist/denylist por agente com glob wildcards; API key, JWT/OIDC ou mTLS
- Rate Limiting: janela deslizante por agente, por ferramenta e por IP
- HITL: suspende tool calls até aprovação via REST API
- Payload & Response Filtering: bloqueia/redige padrões sensíveis; ciente de Base64, percent-encoding, Unicode
- OPA/Rego: avalia cada tools/call contra uma política Rego
- Audit Log: SQLite, webhook, stdout, OpenLineage; CloudEvents 1.0
- Observabilidade: Prometheus, OpenTelemetry, circuit breaker, dashboard /dashboard
- Deploy: Docker multi-arch, Helm chart, TLS/mTLS, stdio e HTTP+SSE

Disponível no crates.io e GitHub. Documentação em arbitus-gateway.xyz.`,
    },
  ],
});
