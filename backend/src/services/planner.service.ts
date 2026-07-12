import { PLANNER_SYSTEM_PROMPT } from "../prompts/planner.prompt.js";
import type { Task } from "../models/job.js";
import { createChatCompletion } from "./ai.service.js";
export async function generateTasks(prompt: string): Promise<Task[]> {
const userPrompt = `
Project Idea:

${prompt}
`

const response = await createChatCompletion(
  PLANNER_SYSTEM_PROMPT,
  [
    {
      role:"user",
      content: userPrompt
    }
  ],
  process.env.PLANNER_MODEL
);

let plan;

try {
    plan = JSON.parse(response);
} catch (err) {
    throw new Error("Planner returned invalid JSON.");
}
if (
    !plan.project ||
    !plan.description ||
    !Array.isArray(plan.tasks)
) {
    throw new Error("Invalid planner response.");
}
return plan.tasks.map((task: any, index: number) => ({
  id: `task_${index + 1}`,
  title: task.title,
  description: task.description,
  completed: false,
}));
  
}
