# Atlas Frontend

The Next.js frontend for [Project Atlas](../README.md) — an AI-powered platform that turns project ideas into structured execution plans.

---

## Overview

The frontend provides a workspace where users describe project ideas in a chat-style interface and view AI-generated roadmaps. It communicates exclusively with the Atlas backend API; it never calls AI providers directly.

**Planned direction:** The main chat will be driven by a **general agent** that converses with the user and invokes specialist agents (Planner, Researcher, Builder) when enough context has been gathered. Today, submitting a prompt creates a job that immediately invokes the Planner.

---

## Layout

```text
┌─────────────┬──────────────────────────────────┬─────────────┐
│   Sidebar   │           Workspace              │ Agent Panel │
│   (w-64)    │                                  │   (w-72)    │
│             │  ┌──────────┬──────────────────┐  │             │
│  Projects   │  │ Roadmap  │  Header          │  │  Planner    │
│  list       │  │ Panel    │  ChatWindow      │  │  Researcher │
│             │  │ (w-80)   │  PromptInput     │  │  Builder    │
│             │  └──────────┴──────────────────┘  │  Progress   │
└─────────────┴──────────────────────────────────┴─────────────┘
```

| Component | Role |
|-----------|------|
| `Sidebar` | Project navigation *(static placeholder)* |
| `Workspace` | Owns app state — jobs, messages, tasks, polling |
| `RoadmapPanel` | Current mission, job status, collapsible task list |
| `ChatWindow` / `ChatMessage` | Conversation history |
| `PromptInput` | User input for new ideas |
| `Header` | Branding and tagline |
| `AgentPanel` / `AgentStatus` | Agent status display *(static placeholder)* |

---

## Tech Stack

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS 4
* [Motion](https://motion.dev/) — roadmap expand/collapse animations

---

## Getting Started

### Prerequisites

* Node.js 20+
* Atlas backend running at `http://localhost:3001` (see [root README](../README.md))

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```text
frontend/
├── app/
│   ├── components/
│   │   ├── Workspace.tsx      Main state container
│   │   ├── Sidebar.tsx
│   │   ├── AgentPanel.tsx
│   │   ├── ChatWindow.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── RoadmapPanel.tsx
│   │   ├── PromptInput.tsx
│   │   ├── Header.tsx
│   │   └── AgentStatus.tsx
│   ├── types/
│   │   ├── message.ts
│   │   └── task.ts
│   ├── layout.tsx             Root layout, fonts
│   ├── page.tsx               Three-column shell
│   └── globals.css
└── package.json
```

---

## Backend Integration

On prompt submit, `Workspace` does the following:

1. Appends the user message to local chat state
2. `POST http://localhost:3001/api/jobs` with `{ prompt }`
3. Polls `GET http://localhost:3001/api/jobs/:id` every second
4. Updates job status and tasks in the roadmap panel
5. Appends an assistant message when the job completes

Types in `app/types/` mirror backend shapes. The frontend `Task` type includes `description`; the backend model also tracks `completed`.

---

## Learn More

* [Project Atlas README](../README.md) — vision, architecture, API, getting started
* [Next.js Documentation](https://nextjs.org/docs)
