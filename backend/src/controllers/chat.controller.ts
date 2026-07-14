import { updateAgent } from "../services/agent.service.js";
import type { Request, Response } from "express";
import { chatWithAtlas } from "../services/atlas.service.js";
import { createJob } from "../services/jobs.service.js"

export async function chatHandler(
  req: Request,
  res: Response
) {
  
  try {
    const { messages } = req.body;
    updateAgent(
        "Atlas",
        "active",
        "Thinking..."
    );
    const decision = await chatWithAtlas(messages);
    updateAgent(
      "Atlas",
      "active",
      decision.activity
    );
    if (
      decision.action === "plan" &&
      decision.mission
    ) {
      const job = await createJob(decision.mission);

      return res.json({
        ...decision,
        jobId: job.id,
        status: job.status,
      });
    }

    return res.json(decision);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to chat with Atlas."
    });
  }
}