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