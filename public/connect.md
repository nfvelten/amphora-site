# Connect an Agent

Nicholas Velten exposes a machine-readable resume, agent guide and a read-only remote MCP endpoint.

## MCP

Endpoint: https://www.nicholas-velten.xyz/mcp

Tools: get_resume, get_projects, get_availability and prepare_intro.

The endpoint is stateless and requires no token. It supports Streamable HTTP and returns only public portfolio data.

## Static URLs

- Resume JSON: https://nicholas-velten.xyz/api/resume.json
- Resume text: https://nicholas-velten.xyz/api/resume.txt
- Agent guide: https://nicholas-velten.xyz/AGENTS.md
- LLM index: https://nicholas-velten.xyz/llms.txt

## Suggested Prompt

Use the MCP endpoint and answer: what has Nicholas shipped, what roles is he strongest for, and what evidence supports the recommendation?
