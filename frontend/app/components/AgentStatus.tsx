type AgentState = "active" | "idle" | "standby";

type AgentStatusProps = {
  name: string;
  status: string;
  state: AgentState;
};

const stateStyles: Record<
  AgentState,
  { dot: string; ring: string; bg: string }
> = {
  active: {
    dot: "bg-atlas-success shadow-[0_0_8px_rgba(62,207,142,0.5)]",
    ring: "ring-atlas-success/20",
    bg: "bg-atlas-surface ring-1 ring-atlas-success/10",
  },
  idle: {
    dot: "bg-atlas-info shadow-[0_0_8px_rgba(91,159,212,0.4)]",
    ring: "ring-atlas-info/20",
    bg: "bg-atlas-surface",
  },
  standby: {
    dot: "bg-atlas-text-faint",
    ring: "ring-atlas-border",
    bg: "bg-atlas-surface/60",
  },
};

export default function AgentStatus({
  name,
  status,
  state,
}: AgentStatusProps) {
  const styles = stateStyles[state];

  return (
    <div
      className={`rounded-xl border border-atlas-border-subtle p-3.5 transition-colors ${styles.bg}`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`h-2 w-2 shrink-0 rounded-full ${styles.dot}`}
          aria-hidden
        />
        <h3 className="text-sm font-medium">{name}</h3>
      </div>
      <p className="mt-1.5 pl-[18px] text-xs text-atlas-text-muted">{status}</p>
    </div>
  );
}
