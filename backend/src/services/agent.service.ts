export interface Agent {
  name: string;
  state: "active" | "running" | "idle" | "standby";
  activity: string;
}

const agents = new Map<string, Agent>([
  [
    "Atlas",
    {
      name: "Atlas",
      state: "idle",
      activity: "Waiting for user input",
    },
  ],
  [
    "Planner",
    {
      name: "Planner",
      state: "idle",
      activity: "Waiting for tasks",
    },
  ],
  [
    "Researcher",
    {
      name: "Researcher",
      state: "standby",
      activity: "Inactive",
    },
  ],
  [
    "Builder",
    {
      name: "Builder",
      state: "standby",
      activity: "Inactive",
    },
  ],
]);

export function getAgents() {
  return Array.from(agents.values());
}

export function updateAgent(
  name: string,
  state: Agent["state"],
  activity: string
) {
  const agent = agents.get(name);

  if (!agent) return;

  agent.state = state;
  agent.activity = activity;
}