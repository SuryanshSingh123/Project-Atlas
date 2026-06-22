interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function PromptInput({
  value,
  onChange,
  onSubmit,
}: PromptInputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSubmit();
        }
      }}
      className="mt-auto mb-2 w-full max-w-8xl rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-white text-center"
      placeholder="What are we working on today?"
    />
  );
}