"use client";

import { useEffect, useState } from "react";

import ChatWindow from "./ChatWindow";
import Header from "./Header";
import PromptInput from "./PromptInput";
import RoadmapPanel from "./RoadmapPanel";
import type { Message } from "../types/message";
import { Task } from "../types/task";

export default function Workspace() {
  const [prompt, setPrompt] = useState("");
  const [currentMission, setCurrentMission] = useState("");
  const [currentJobId, setCurrentJobId] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitMission() {
    if (!prompt.trim() || isSubmitting) return;

    const userPrompt = prompt.trim();
    setIsSubmitting(true);

    setMessages((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: userPrompt,
        createdAt: new Date(),
      },
    ]);

    try {
      const response = await fetch("http://localhost:3001/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await response.json();
      setCurrentMission(userPrompt);
      setCurrentJobId(data.jobId);
      setJobStatus(data.status);
      setPrompt("");
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (!currentJobId) return;

    let interval: ReturnType<typeof setInterval>;

    async function pollJob() {
      const response = await fetch(
        `http://localhost:3001/api/jobs/${currentJobId}`,
      );
      const job = await response.json();

      setJobStatus(job.status);
      setTasks(job.tasks ?? []);

      if (job.status === "completed") {
        clearInterval(interval);
        setMessages((previous) => [
          ...previous,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: `I've generated a roadmap with ${job.tasks.length} implementation tasks. Expand the panel on the left to review them.`,
            createdAt: new Date(),
          },
        ]);
      }
    }

    pollJob();
    interval = setInterval(pollJob, 1000);

    return () => clearInterval(interval);
  }, [currentJobId]);

  const isProcessing =
    jobStatus === "queued" || jobStatus === "running" || isSubmitting;

  return (
    <section className="flex min-w-0 flex-1">
      <div className="flex w-72 shrink-0 flex-col border-r border-atlas-border-subtle bg-atlas-bg">
        <div className="border-b border-atlas-border-subtle px-4 py-4">
          <h2 className="text-sm font-semibold">Roadmap</h2>
          <p className="mt-0.5 text-xs text-atlas-text-faint">
            Mission & tasks
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <RoadmapPanel
            mission={currentMission}
            status={jobStatus}
            tasks={tasks}
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col bg-atlas-bg">
        <Header hasMessages={messages.length > 0} />
        <ChatWindow messages={messages} />
        <PromptInput
          value={prompt}
          onChange={setPrompt}
          onSubmit={submitMission}
          disabled={isProcessing}
        />
      </div>
    </section>
  );
}
