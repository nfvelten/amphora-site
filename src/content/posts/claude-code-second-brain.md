---
title: Claude Code as a personal assistant — vault, environment and site
date: 2026-03-09
description: An analysis of how I've been using Claude Code to build a personal knowledge system, configure a development environment, and build this site.
tags: [notes, technology]
---

I spent a vacation weekend setting up a system I'd been putting off for months, using Claude Code as the main collaborator. I came out the other side with something I actually use — and a few conclusions about what this kind of tool does well.

---

## The vault as foundation

Claude Code works well with an Obsidian vault because it has direct access to the filesystem. It reads, writes, and edits Markdown while respecting wiki links, YAML frontmatter, and Obsidian's conventions — which means the notes it creates behave exactly like ones you'd create manually.

From there, what you gain is the ability to delegate the mechanical work of the system. Creating a study note about Java, for example, doesn't just mean creating a file — it means identifying already-existing related notes in the vault, linking back from them, logging the activity in the day's daily note with context. Each step individually is simple. Together, it's the kind of friction that makes you not create the note.

Claude handles that as part of the flow. You mention the topic, it creates the note in the right place, links where it makes sense, and logs what was done. The vault grows consistently without having to manage the structure manually.

Beyond that, I built a set of specialized commands for different types of capture — daily notes with a morning briefing, weekly review, work session logging, quick learning capture. Each one knows where to write and how to integrate with what already exists. It's not automation for its own sake — it's reducing the friction between having something in mind and having it recorded in a useful way.

---

## Neovim and the development environment

I use Neovim as my main editor, so I wanted the interaction with the vault to work from within nvim. The configuration involved integrating `obsidian.nvim`, creating vault-specific keybindings — navigate notes, quick capture, backlinks, wikilink autocomplete — and connecting with file navigation tools.

The most useful result was a keyboard shortcut that opens the daily note as a scratchpad directly from the window manager. One keypress, the day's note appears. Another, it's gone. It sounds trivial, but it's the kind of thing that changes how often you use something.

The process of setting this up with Claude Code was different from what I expected. It wasn't "generate the config for me." It was reading what already existed, understanding what needed to change, proposing something surgical. In several moments Claude suggested something more complex than necessary and I had to simplify. The quality of the result depends on you knowing what you want.

---

## Unified themes

One of the things that bothered me most was the visual inconsistency across environments — terminal, editor, system bar. Each one with a different palette, nothing talking to each other.

I created two themes — Yerba Mate (dark, olive-industrial palette) and Tererê (light, paper-butter tones) — and Claude Code helped apply the same palette across all environments at once: Neovim, the system configuration (Omarchy/Hyprland), Obsidian, and this site.

What would make this tedious manually is the number of places where colors need to be defined — each tool has its own format, its own structure, its own variable names. With Claude reading each config and adapting the palette to the correct format, what would have taken a few days took a few hours.

---

## The site

This site was built from scratch during that period, also with Claude Code.

What worked best was generating content from existing sources. The resume page was generated from my LinkedIn PDF — I passed the file, Claude read it and assembled the structured page with experience and skills. The About and Now pages were written from vault notes. I didn't have to draft anything from scratch.

The layout and style adjustment process was also smooth — sidebar, typography, time-based theme system. Claude proposes, you evaluate, you fix what didn't turn out right.

---

## What remains

What Claude Code does well isn't generate code or text on its own — it's reducing the friction between intention and result. For personal systems, where you're the only user and the only maintainer, that has a disproportionate effect.

The caveat is that the quality of the result depends directly on you understanding what's being done. Claude doesn't replace judgment — it executes faster what you already know you want. When you don't know, it tends to propose something that seems reasonable but isn't what you needed.

Used well, it's a tool that changes the viability of personal projects — not because you couldn't do it without it, but because without it you simply wouldn't.
