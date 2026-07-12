import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";
import jobsRouter from "./routes/jobs.js";

const app = express();
console.log(
  process.env.OPENROUTER_API_KEY
    ? "✅ OpenRouter API key loaded"
    : "❌ OpenRouter API key missing"
);
app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRoutes);
app.use("/api/jobs", jobsRouter);
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "atlas-backend",
  });
});

export default app;