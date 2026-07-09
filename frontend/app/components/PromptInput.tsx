interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export default function PromptInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
}: PromptInputProps) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  }

  return (
    <div className="shrink-0 border-t border-atlas-border-subtle bg-atlas-bg-elevated/80 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-end gap-3 rounded-2xl border border-atlas-border bg-atlas-surface p-2 ring-atlas-accent/0 transition-shadow focus-within:border-atlas-accent/40 focus-within:ring-2 focus-within:ring-atlas-accent/10">
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={1}
          placeholder="Describe your project idea..."
          className="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2.5 text-sm text-atlas-text outline-none placeholder:text-atlas-text-faint disabled:opacity-50"
        />
        <button
          type="button"
          onClick={onSubmit}
          disabled={disabled || !value.trim()}
          className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-atlas-accent text-atlas-bg transition-all hover:bg-atlas-accent-bright disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Send message"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            aria-hidden
          >
            <path
              d="M12 19V5M5 12l7-7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className="mx-auto mt-2 max-w-2xl text-center text-[11px] text-atlas-text-faint">
        Press Enter to send · Shift+Enter for new line
      </p>
    </div>
  );
}
