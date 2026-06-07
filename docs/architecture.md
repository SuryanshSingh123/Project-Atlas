# Atlas Architecture

## High-Level Flow

```
User

↓

Frontend (Next.js)

↓

Backend API

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

Database

↓

Backend API

↓

Frontend

↓

User
```

---

## Components

### Frontend

Responsible for:

* Displaying the interface
* Collecting user input
* Sending requests to the backend
* Displaying AI-generated results

The frontend never talks directly to AI models.

---

### Backend

Responsible for:

* Receiving requests
* Validating data
* Calling n8n workflows
* Saving information
* Returning structured responses

The backend acts as the central coordinator.

---

### n8n

Responsible for:

* Orchestrating AI agents
* Executing workflows
* Combining outputs
* Returning structured JSON

n8n contains the application's intelligence pipeline.

---

### AI Agents

Vision Agent

Defines the project goal and scope.

Research Agent

Suggests technologies, frameworks, and resources.

Planner Agent

Creates milestones and actionable tasks.

Each agent has one responsibility.

---

### Database

Stores:

* Projects
* Tasks
* Roadmaps
* Conversations
* Agent outputs

The database gives Atlas long-term memory.

---

## Design Philosophy

Every component should have a single responsibility.

Frontend displays.

Backend coordinates.

n8n thinks.

Database remembers.
