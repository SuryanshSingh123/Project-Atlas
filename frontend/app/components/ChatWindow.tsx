import ChatMessage from "./ChatMessage";
import type { Message } from "../types/message";

interface ChatWindowProps {
  messages: Message[];
}

const suggestions = [
  "Build an AI study planner for university students",
  "Create a portfolio website with a blog",
  "Plan a mobile app for habit tracking",
];

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
      {messages.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center pb-8">
          <p className="mb-6 max-w-md text-center text-sm text-atlas-text-muted">
            Describe a project idea and Atlas will break it into a structured
            roadmap with actionable tasks.
          </p>
          <div className="flex w-full max-w-lg flex-col gap-2">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion}
                className="rounded-xl border border-atlas-border-subtle bg-atlas-surface/50 px-4 py-3 text-sm text-atlas-text-muted"
              >
                &ldquo;{suggestion}&rdquo;
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-2xl space-y-5">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      )}
    </div>
  );
}
