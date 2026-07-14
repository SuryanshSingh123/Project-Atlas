import type { Job } from "../models/job.js";
import { generateTasks } from "./planner.service.js";

const jobs = new Map<string, Job>();

export async function createJob(prompt: string): Promise<Job> {
  const job: Job = {
    id: `job_${Date.now()}`,
    prompt,
    status: "queued",
    createdAt: new Date(),
    tasks: [],
  };

  jobs.set(job.id, job);

  (async () => {
    try {
      job.status = "running";

      job.tasks = await generateTasks(job.prompt);

      job.status = "completed";
    } catch (error) {
      console.error(error);

      job.status = "failed";
    }
  })();

  return job;
}

export function getJob(id: string): Job | undefined {
  return jobs.get(id);
}