"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Task } from "../types/task";

interface RoadmapPanelProps {
  mission: string;
  status: string;
  tasks: Task[];
}

function statusConfig(status: string) {
  switch (status) {
    case "completed":
      return {
        label: "Completed",
        className: "text-atlas-success bg-atlas-success/10 ring-atlas-success/20",
        dot: "bg-atlas-success",
      };
    case "running":
      return {
        label: "Running",
        className: "text-atlas-info bg-atlas-info/10 ring-atlas-info/20",
        dot: "bg-atlas-info animate-pulse",
      };
    case "failed":
      return {
        label: "Failed",
        className: "text-red-400 bg-red-400/10 ring-red-400/20",
        dot: "bg-red-400",
      };
    default:
      return {
        label: status || "Idle",
        className: "text-atlas-warning bg-atlas-warning/10 ring-atlas-warning/20",
        dot: "bg-atlas-warning",
      };
  }
}

export default function RoadmapPanel({
  mission,
  status,
  tasks,
}: RoadmapPanelProps) {
  const [open, setOpen] = useState(true);
  const config = statusConfig(status);

  return (
    <div className="rounded-xl border border-atlas-border bg-atlas-surface p-4">
      <p className="text-[11px] font-medium uppercase tracking-wider text-atlas-text-faint">
        Current Mission
      </p>

      <h2 className="mt-2 line-clamp-3 text-sm font-medium leading-snug">
        {mission || "No active mission"}
      </h2>

      {status && (
        <span
          className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ring-1 ${config.className}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
          {config.label}
        </span>
      )}

      <div className="my-4 border-t border-atlas-border-subtle" />

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-xs font-medium text-atlas-text-muted transition-colors hover:text-atlas-text"
      >
        <span>Roadmap</span>
        <span className="flex items-center gap-2">
          <span className="rounded-md bg-atlas-bg px-1.5 py-0.5 text-[11px] text-atlas-text-faint">
            {tasks.length}
          </span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2">
              {tasks.length === 0 ? (
                <p className="rounded-lg border border-dashed border-atlas-border-subtle px-3 py-4 text-center text-xs text-atlas-text-faint">
                  Tasks will appear here once planning begins
                </p>
              ) : (
                tasks.map((task, index) => (
                  <div
                    key={task.id}
                    className="rounded-lg border border-atlas-border-subtle bg-atlas-bg-elevated p-3"
                  >
                    <div className="flex gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-atlas-accent-muted text-[10px] font-semibold text-atlas-accent-bright">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug">
                          {task.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-atlas-text-muted">
                          {task.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
