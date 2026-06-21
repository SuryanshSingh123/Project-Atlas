import type { Job } from "../models/job.js";

const jobs = new Map<string, Job>();

export function createJob(prompt: string): Job {
  const job: Job = {
    id: `job_${Date.now()}`,
    prompt,
    status: "queued",
    createdAt: new Date(),
  };

  jobs.set(job.id, job);

  return job;
}

export function getJob(id: string): Job | undefined {
  return jobs.get(id);
}