import { Router } from "express";
import { getAgentsHandler } from "../controllers/agent.controller.js";

const router = Router();

router.get("/", getAgentsHandler);

export default router;