import AgentStatus from "./AgentStatus";

const agents = [
  { name: "General", status: "Active", state: "active" as const },
  { name: "Planner", status: "Idle", state: "idle" as const },
  { name: "Researcher", status: "Standby", state: "standby" as const },
  { name: "Builder", status: "Standby", state: "standby" as const },
];

export default function AgentPanel() {
  return (
    <aside className="flex w-72 shrink-0 flex-col border-l border-atlas-border-subtle bg-atlas-bg-elevated">
      <div className="border-b border-atlas-border-subtle px-5 py-5">
        <h2 className="text-sm font-semibold">Agent Network</h2>
        <p className="mt-0.5 text-xs text-atlas-text-faint">
          Orchestration status
        </p>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto px-4 py-4">
        {agents.map((agent) => (
          <AgentStatus
            key={agent.name}
            name={agent.name}
            status={agent.status}
            state={agent.state}
          />
        ))}
      </div>

      <div className="border-t border-atlas-border-subtle p-4">
        <div className="rounded-xl border border-atlas-border bg-atlas-surface p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Pipeline</h3>
            <span className="rounded-full bg-atlas-accent-muted px-2 py-0.5 text-[11px] font-medium text-atlas-accent-bright">
              Ready
            </span>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-atlas-bg">
            <div
              className="h-full rounded-full bg-gradient-to-r from-atlas-accent to-atlas-accent-bright"
              style={{ width: "0%" }}
            />
          </div>

          <p className="mt-2.5 text-xs text-atlas-text-faint">
            Awaiting your next idea
          </p>
        </div>
      </div>
    </aside>
  );
}
