import type { Job } from "../models/job.js";
import { generateTasks } from "./planner.service.js";
const jobs = new Map<string, Job>();

export async function createJob(prompt: string): Promise<Job> {
  const tasks = await generateTasks(prompt);
  const job: Job = {
    id: `job_${Date.now()}`,
    prompt,
    status: "queued",
    createdAt: new Date(),
    tasks,
  };

  jobs.set(job.id, job);
  setTimeout(() => {
  const currentJob = jobs.get(job.id);

  if (!currentJob) return;

  currentJob.status = "running";
}, 2000);
setTimeout(() => {
  const currentJob = jobs.get(job.id);

  if (!currentJob) return;

  currentJob.status = "completed";
}, 5000);
  return job;
}

export function getJob(id: string): Job | undefined {
  return jobs.get(id);
}