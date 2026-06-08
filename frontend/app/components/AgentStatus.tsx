type AgentStatusProps = {
  name: string;
  status: string;
  color: string;
};

export default function AgentStatus({
  name,
  status,
  color,
}: AgentStatusProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">

      <div className="flex items-center gap-2">

        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />

        <h3 className="font-semibold">
          {name}
        </h3>

      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {status}
      </p>

    </div>
  );
}