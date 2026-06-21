export interface Job {
  id: string;
  prompt: string;
  status: "queued" | "running" | "completed" | "failed";
  createdAt: Date;
}