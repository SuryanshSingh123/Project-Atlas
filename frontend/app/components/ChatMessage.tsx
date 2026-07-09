import type { Message } from "../types/message";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold ${
          isUser
            ? "bg-atlas-accent-muted text-atlas-accent-bright"
            : "bg-atlas-surface-active text-atlas-text-muted"
        }`}
      >
        {isUser ? "You" : "A"}
      </div>

      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "rounded-tr-md bg-atlas-user-bubble text-atlas-text ring-1 ring-atlas-info/20"
            : "rounded-tl-md border border-atlas-border-subtle bg-atlas-assistant-bubble text-atlas-text"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
