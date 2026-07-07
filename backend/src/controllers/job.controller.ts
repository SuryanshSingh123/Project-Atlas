import type { Request, Response } from "express";
import { createJob, getJob } from "../services/jobs.service.js";

export async function createJobHandler(
  req: Request,
  res: Response
) {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required",
    });
  }

  const job = await createJob(prompt);

  res.status(201).json({
    jobId: job.id,
    status: job.status,
  });
}

export function getJobHandler(
  req: Request,
  res: Response
) {
  const job = getJob(req.params.id as string);

  if (!job) {
    return res.status(404).json({
      error: "Job not found",
    });
  }

  res.json(job);
}