export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface Job {
  id: string;
  prompt: string;
  status: "queued" | "running" | "completed" | "failed";
  createdAt: Date;

  tasks: Task[];
}