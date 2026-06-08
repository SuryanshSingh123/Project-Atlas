import AgentStatus from "./AgentStatus";

export default function AgentPanel() {
  return (
    <aside className="w-72 border-l border-zinc-800 bg-zinc-950 p-6 flex flex-col gap-4">

      <h2 className="text-xl font-semibold">
        AI Agents
      </h2>

      <AgentStatus
        name="Planner"
        status="Idle"
        color="#22c55e"
      />

      <AgentStatus
        name="Researcher"
        status="Waiting"
        color="#71717a"
      />

      <AgentStatus
        name="Builder"
        status="Waiting"
        color="#71717a"
      />

      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-4">

        <h3 className="font-semibold">
          Progress
        </h3>

        <div className="mt-3 h-2 rounded-full bg-zinc-800">

          <div
            className="h-2 rounded-full bg-white"
            style={{ width: "25%" }}
          />

        </div>

        <p className="mt-3 text-sm text-zinc-400">
          Planning
        </p>

      </div>

    </aside>
  );
}