import type { Request, Response } from "express";
import { chatWithAtlas } from "../services/atlas.service.js";

export async function chatHandler(
  req: Request,
  res: Response
) {
  try {
    const { messages } = req.body;

    const reply = await chatWithAtlas(messages);

        res.json({
        reply,
        action: "none",
        });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to chat with Atlas."
    });
  }
}