import { Router } from "express";
import {
  createJobHandler,
  getJobHandler,
} from "../controllers/job.controller.js";

const router = Router();

router.post("/", createJobHandler);

router.get("/:id", getJobHandler);

export default router;