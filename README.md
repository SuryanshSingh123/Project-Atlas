# 🏔️ Project Atlas

> **From idea to execution.**

Atlas is an AI-powered automation platform that helps students, developers, founders, and builders transform ideas into structured execution plans.

Instead of acting like a traditional chatbot, Atlas coordinates specialized AI agents that research, plan, organize, and guide users from an initial idea to a finished project.

---

## ✨ Vision

Most people don't fail because they lack ideas.

They fail because they don't know **what to do next**.

Atlas bridges the gap between inspiration and execution by acting as an AI co-founder that plans, organizes, and tracks your journey from concept to completion.

---

## 🚀 Core Features

* 💬 Conversational workspace for project ideas
* 📋 Automatic project roadmap generation
* 🎯 Goal and milestone planning *(planned)*
* 📚 Personalized learning path *(planned)*
* 📝 Persistent project memory *(planned)*
* 📈 Progress tracking *(in progress)*
* 🔗 GitHub integration *(planned)*
* ⚙️ Multi-agent orchestration engine *(in progress)*

---

## 🏗️ Architecture

### Current flow

```text
User
  │
Frontend (Next.js)          ← chat UI, roadmap panel, agent status
  │
Backend API (Express)       ← job lifecycle, validation
  │
Planner Service             ← single specialized agent (today)
  │
AI Service (OpenRouter)
  │
LLM
  │
Structured tasks → Job → Frontend polling → Roadmap display
```

The frontend never talks directly to AI providers. All AI calls go through the backend.

### Planned agent orchestration

Atlas is moving toward a **general agent + specialist agents** model:

```text
User
  │
Frontend (chat workspace)
  │
Backend API
  │
General Agent               ← primary conversation in the main chat
  │
  ├─ clarifies intent, asks follow-up questions, gathers context
  │
  └─ wakes specialist agents when ready
       ├─ Planner      → structured roadmap and tasks
       ├─ Researcher  → tech stack, resources, comparisons *(planned)*
       └─ Builder     → implementation guidance *(planned)*
  │
Merged results → Frontend
```

**Example:** A user says they want to build a project. The general agent holds the conversation in the main chatspace, asks clarifying questions (scope, stack preferences, timeline, constraints), and only invokes the **Planner** once it has enough context to generate a useful roadmap.

Specialist agents stay idle until the general agent decides they are needed. The user interacts with one conversational surface; orchestration happens behind the scenes.

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS 4
* Motion (roadmap animations)

### Backend

* Node.js
* Express 5
* TypeScript
* In-memory job store *(database TBD)*

### AI

* OpenRouter (current provider)
* Provider abstraction for Ollama, Gemini, etc. *(planned)*

---

## 📂 Repository Structure

```text
Project Atlas/
├── frontend/          Next.js app — workspace UI
├── backend/           Express API — jobs, AI services
├── docs/              Architecture notes, MVP scope, API drafts
└── README.md
```

---

## 🖥️ Frontend Layout

The workspace uses a three-column layout:

| Column | Purpose |
|--------|---------|
| **Sidebar** | Project navigation *(static placeholder today)* |
| **Workspace** | Main chat, roadmap panel, prompt input |
| **Agent panel** | Agent status and progress *(placeholder today)* |

Within the workspace, the left sub-column shows the current mission and generated roadmap tasks. The center column is the primary chat surface where users describe ideas and receive responses.

---

## 🔌 API (current)

Base URL: `http://localhost:3001/api`

### `POST /jobs`

Create a job from a user prompt.

**Request**

```json
{
  "prompt": "I want to build an AI study planner."
}
```

**Response**

```json
{
  "jobId": "job_1234567890",
  "status": "queued"
}
```

### `GET /jobs/:id`

Poll job status and retrieve generated tasks.

**Response**

```json
{
  "id": "job_1234567890",
  "prompt": "I want to build an AI study planner.",
  "status": "completed",
  "createdAt": "2026-07-09T08:00:00.000Z",
  "tasks": [
    {
      "id": "task_1",
      "title": "Set up Next.js project",
      "description": "Initialize the frontend with TypeScript and Tailwind.",
      "completed": false
    }
  ]
}
```

Job statuses: `queued` → `running` → `completed` | `failed`

The frontend polls `GET /jobs/:id` until the job completes, then displays tasks in the roadmap panel.

> **Note:** `docs/api.md` describes an earlier synchronous `/generate-roadmap` design. The live API uses the async job model above.

---

## 🏁 Getting Started

### Prerequisites

* Node.js 20+
* An [OpenRouter](https://openrouter.ai/) API key

### Backend

```bash
cd backend
npm install

# Create backend/.env
echo 'OPENROUTER_API_KEY=your_key_here' > .env
# Optional: PLANNER_MODEL=/openrouter/free

npm run dev
```

Backend runs at `http://localhost:3001`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`.

---

## 📍 Current Status

Atlas is under active development.

### Completed

* Project vision and documentation
* Frontend workspace (three-column layout, chat UI, roadmap panel)
* Backend job API (`POST /jobs`, `GET /jobs/:id`)
* Frontend ↔ backend integration with polling
* OpenRouter integration via AI service
* Planner agent — structured JSON task generation from a prompt
* Dynamic roadmap display in the frontend

### In Progress

* Frontend and UI refinement
* Improved roadmap visualization
* Job progress tracking
* AI response validation and error handling

### Planned

* **General agent** — primary conversational interface in the main chat
* **Agent orchestration** — general agent decides when to invoke Planner, Researcher, Builder, etc.
* Specialist agents (Research, Builder, Reviewer)
* Persistent project memory and database
* GitHub integration
* Provider abstraction (OpenRouter, Ollama, Gemini)
* User authentication
* Deployment

---

## 🎯 Philosophy

Atlas is built around a simple principle:

> **Great ideas deserve great execution.**

The goal is not to replace builders, but to help them organize their thinking, make better decisions, and maintain momentum throughout the development process.

---

## 🤝 Contributing

Project Atlas is currently an experimental personal project.

Suggestions, ideas, and discussions are always welcome.

---

## 📜 License

This project is licensed under the MIT License.
