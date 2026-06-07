# Atlas API Specification (MVP)

## Overview

The Atlas API allows the frontend to communicate with the AI orchestration backend.

The MVP consists of a single endpoint that accepts a user's project idea and returns a structured development roadmap.

---

## Base URL

```
http://localhost:3001/api
```

(Production URL will be added later.)

---

# Endpoint

## POST /generate-roadmap

Generate a complete project roadmap from a user's idea.

---

### Request Body

```json
{
  "idea": "I want to build an AI study planner."
}
```

---

### Successful Response (200)

```json
{
  "title": "AI Study Planner",

  "description": "An application that helps students organize their studies using artificial intelligence.",

  "difficulty": "Intermediate",

  "estimatedDuration": "8 weeks",

  "techStack": [
    "Next.js",
    "Supabase",
    "n8n",
    "Gemini API"
  ],

  "roadmap": [
    {
      "week": 1,
      "goal": "Learn Next.js fundamentals"
    },
    {
      "week": 2,
      "goal": "Design the frontend"
    },
    {
      "week": 3,
      "goal": "Build backend APIs"
    }
  ],

  "tasks": [
    "Create GitHub repository",
    "Initialize frontend",
    "Set up database",
    "Connect AI workflow"
  ]
}
```

---

### Error Response

```json
{
  "error": "Idea cannot be empty."
}
```

Status Code:

```
400 Bad Request
```

---

# Future Endpoints

## POST /continue-project

Continue an existing project using previous context.

Request

```json
{
  "projectId": "abc123",
  "message": "What should I build next?"
}
```

---

## GET /project/:id

Retrieve a saved project.

---

## GET /tasks/:projectId

Retrieve all generated tasks.

---

## POST /complete-task

Mark a task as completed.

---

## POST /agent/vision

Generate a refined vision from a rough idea.

---

## POST /agent/research

Research technologies and competitors.

---

## POST /agent/planner

Generate milestones and weekly roadmap.

---

# Internal AI Flow

```
Frontend

↓

POST /generate-roadmap

↓

Backend

↓

n8n Workflow

↓

Vision Agent

↓

Research Agent

↓

Planner Agent

↓

Merge Results

↓

Return JSON

↓

Frontend Dashboard
```

---

# Design Principles

* All requests and responses use JSON.
* Endpoints should be stateless.
* The frontend should never call AI providers directly.
* AI orchestration is handled entirely by the backend and n8n.
* Every response should follow a predictable schema to simplify frontend rendering.
