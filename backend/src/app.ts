import express from "express";
import cors from "cors";
import jobsRouter from "./routes/jobs.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobsRouter);
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "atlas-backend",
  });
});

export default app;