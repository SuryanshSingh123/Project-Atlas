import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.routes.js";
import jobsRouter from "./routes/jobs.js";
import agentRouter from "./routes/agent.js";

const app = express();
console.log(
  process.env.OPENROUTER_API_KEY
    ? "✅ OpenRouter API key loaded"
    : "❌ OpenRouter API key missing"
);
app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/agents", agentRouter);
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "atlas-backend",
  });
});

export default app;