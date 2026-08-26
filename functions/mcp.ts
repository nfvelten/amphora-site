import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { CfWorkerJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/cfworker';
import { z } from 'zod';
import { portfolio } from '../src/data/portfolio.js';

type PagesFunction = (context: { request: Request }) => Response | Promise<Response>;

const allowedOrigin = 'https://www.nicholas-velten.xyz';

function corsHeaders(request: Request) {
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin': origin === allowedOrigin ? origin : allowedOrigin,
    'Access-Control-Allow-Headers': 'Content-Type, mcp-session-id, mcp-protocol-version, Last-Event-ID',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Expose-Headers': 'mcp-session-id, mcp-protocol-version',
    Vary: 'Origin',
  };
}

function withCors(response: Response, request: Request) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(corsHeaders(request))) headers.set(key, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function createServer() {
  const server = new McpServer(
    { name: 'nicholas-velten-portfolio', version: portfolio.meta.version },
    { jsonSchemaValidator: new CfWorkerJsonSchemaValidator() },
  );

  server.registerTool('get_resume', {
    title: 'Get Resume',
    description: 'Return Nicholas Velten\'s complete public resume, experience, skills, projects and writing.',
    annotations: { readOnlyHint: true, openWorldHint: true },
  }, async () => ({
    content: [{ type: 'text', text: JSON.stringify(portfolio, null, 2) }],
  }));

  server.registerTool('get_projects', {
    title: 'Get Projects',
    description: 'Return Nicholas Velten\'s public open-source projects and AI systems.',
    annotations: { readOnlyHint: true, openWorldHint: true },
  }, async () => ({
    content: [{ type: 'text', text: JSON.stringify({ projects: portfolio.projects, aiSystems: portfolio.aiSystems }, null, 2) }],
  }));

  server.registerTool('get_availability', {
    title: 'Get Availability',
    description: 'Return current role preferences and the kinds of work Nicholas is open to.',
    annotations: { readOnlyHint: true, openWorldHint: true },
  }, async () => ({
    content: [{ type: 'text', text: JSON.stringify({
      title: portfolio.person.title,
      alternateTitle: portfolio.person.alternateTitle,
      headline: portfolio.positioning.headline,
      availability: portfolio.positioning.availability,
      contact: portfolio.person.links,
    }, null, 2) }],
  }));

  server.registerTool('prepare_intro', {
    title: 'Prepare Intro',
    description: 'Prepare a concise evidence-based introduction for a recruiter or hiring manager.',
    inputSchema: {
      role: z.string().optional().describe('Target role or company, if known'),
      language: z.enum(['en', 'pt']).default('en').describe('Response language'),
    },
    annotations: { readOnlyHint: true, openWorldHint: true },
  }, async ({ role, language }) => {
    const target = role?.trim() || (language === 'pt' ? 'uma vaga de engenharia de software' : 'a software engineering role');
    const text = language === 'pt'
      ? `Nicholas Velten e um engenheiro de software com cinco anos construindo e operando sistemas de producao para ISPs brasileiros. Ele trabalha de ponta a ponta, do backend e workflows distribuidos a interfaces operacionais, automacao de producao e infraestrutura de agentes de IA. Na Alloha Fibra, entregou reprovisionamento de cerca de 1,7 milhao de ONUs, recuperacao automatica de provisionamento, migracoes em mais de oito microsservicos e remediacao de uma exposicao de PII para 554 mil registros. Fora do trabalho, constroi Arbitus, um proxy Rust de seguranca para agentes de IA e servidores MCP. Para ${target}, o melhor enquadramento e Software Engineer com experiencia pratica em sistemas distribuidos, full-stack e automacao.`
      : `Nicholas Velten is a software engineer with five years building and operating production systems for Brazilian ISPs. He works end to end, from backend services and distributed workflows to operational interfaces, production automation and AI agent infrastructure. At Alloha Fiber, he delivered reprovisioning for roughly 1.7 million ONUs, automatic provisioning recovery, migrations across eight-plus microservices and remediation of a PII exposure affecting 554k records. Outside work he builds Arbitus, a Rust security proxy for AI agents and MCP servers. For ${target}, the strongest framing is Software Engineer with practical experience in distributed systems, full-stack delivery and automation.`;
    return { content: [{ type: 'text', text }] };
  });

  return server;
}

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(request) });

  const url = new URL(request.url);
  if (url.pathname !== '/mcp') return new Response('Not found', { status: 404, headers: corsHeaders(request) });

  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
    allowedOrigins: [allowedOrigin],
    enableDnsRebindingProtection: true,
  });
  const server = createServer();
  await server.connect(transport);
  return withCors(await transport.handleRequest(request), request);
};
