import type { Request, Response } from "express";
import { getAgents } from "../services/agent.service.js";

export function getAgentsHandler(
  req: Request,
  res: Response
) {
  res.json(getAgents());
}