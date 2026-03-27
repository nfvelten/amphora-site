---
title: Claude Code como assistente pessoal — vault, ambiente e site
date: 2026-03-09
description: Uma análise de como tenho usado o Claude Code para montar um sistema de conhecimento pessoal, configurar o ambiente de desenvolvimento e construir este site.
tags: [notas, tecnologia]
---

Passei um fim de semana de férias configurando um sistema que ficava postergando há meses,
usando o Claude Code como colaborador principal. Saí do outro lado com algo que realmente
uso — e com algumas conclusões sobre o que esse tipo de ferramenta faz bem.

---

## O vault como base

O Claude Code funciona bem com um vault Obsidian porque tem acesso direto ao sistema de
arquivos. Ele lê, escreve e edita Markdown respeitando os links wiki, o frontmatter YAML
e as convenções do Obsidian — o que significa que as notas que ele cria se comportam
exatamente como as que você criaria manualmente.

A partir daí, o que se ganha é a capacidade de delegar o trabalho mecânico do sistema.
Criar uma nota de estudo sobre Java, por exemplo, não envolve só criar o arquivo — envolve
identificar notas relacionadas já existentes no vault, linkar de volta a partir delas,
registrar na daily note do dia com contexto. Individualmente, cada passo é simples. Em
conjunto, é o tipo de atrito que faz você não criar a nota.

O Claude faz isso como parte do fluxo. Você menciona o tópico, ele cria a nota no lugar
certo, linka onde faz sentido e registra o que foi feito. O vault cresce de forma
consistente sem precisar gerenciar a estrutura manualmente.

Além disso, criei um conjunto de comandos especializados para diferentes tipos de captura
— daily notes com briefing matinal, revisão semanal, registro de sessões de trabalho,
captura rápida de aprendizados. Cada um sabe onde escrever e como integrar com o que já
existe. Não é automação por automação — é reduzir o atrito entre ter algo na cabeça e ter
isso registrado de forma útil.

---

## Neovim e o ambiente de desenvolvimento

Uso Neovim como editor principal, então queria que a interação com o vault funcionasse
de dentro do nvim. A configuração envolveu integrar o `obsidian.nvim`, criar keybindings
específicos para o vault — navegar notas, captura rápida, backlinks, autocomplete de
wikilinks — e conectar com ferramentas de navegação de arquivos.

O resultado mais útil foi um atalho de teclado que abre a daily note como scratchpad
diretamente do sistema de janelas. Um keypress, a nota do dia aparece. Outro, some. Parece
trivial, mas é o tipo de coisa que muda a frequência com que você usa algo.

O processo de configurar isso com o Claude Code foi diferente do que eu esperava. Não foi
"gera o config pra mim". Foi ler o que já existia, entender o que precisava mudar, propor
algo cirúrgico. Em vários momentos o Claude sugeriu algo mais complexo do que o necessário
e precisei simplificar. A qualidade do resultado depende de você saber o que quer.

---

## Temas unificados

Uma das coisas que mais me incomodava era a inconsistência visual entre os ambientes —
terminal, editor, barra do sistema. Cada um com uma paleta diferente, nada conversando
entre si.

Criei dois temas — Yerba Mate (escuro, paleta oliva-industrial) e Tererê (claro, tons de
manteiga de papel) — e o Claude Code ajudou a aplicar a mesma paleta em todos os
ambientes ao mesmo tempo: Neovim, configuração do sistema (Omarchy/Hyprland), Obsidian e
este site.

O que tornaria isso trabalhoso manualmente é a quantidade de lugares onde as cores
precisam ser definidas — cada ferramenta tem seu formato, sua estrutura, seus nomes de
variáveis. Com o Claude lendo cada config e adaptando a paleta para o formato correto, o
que seria alguns dias virou algumas horas.

---

## O site

Este site foi construído do zero durante esse período, também com o Claude Code.

O que funcionou melhor foi gerar conteúdo a partir de fontes existentes. A página de
currículo foi gerada a partir do meu PDF do LinkedIn — passei o arquivo, o Claude leu e
montou a página estruturada com as experiências e competências. As páginas Sobre e Agora
foram escritas a partir das notas do vault. Não precisei redigir nada do zero.

O processo de ajuste de layout e estilo também foi fluido — sidebar, tipografia, sistema
de temas por horário. O Claude propõe, você avalia, ajusta o que não ficou certo.

---

## O que fica

O que o Claude Code faz bem não é gerar código ou texto por si só — é reduzir o atrito
entre a intenção e o resultado. Para sistemas pessoais, onde você é o único usuário e o
único mantenedor, isso tem um efeito desproporcional.

A ressalva é que a qualidade do resultado depende diretamente de você entender o que está
sendo feito. O Claude não substitui o julgamento — ele executa com mais velocidade o que
você já sabe que quer. Quando você não sabe, ele tende a propor algo que parece razoável
mas não é o que você precisava.

Usado bem, é uma ferramenta que muda a viabilidade de projetos pessoais — não porque você
não conseguiria fazer sem, mas porque sem ela você simplesmente não faria.
