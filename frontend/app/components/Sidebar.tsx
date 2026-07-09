const projects = [
  { name: "Atlas", active: true },
  { name: "Portfolio", active: false },
  { name: "MEXT Prep", active: false },
];

export default function Sidebar() {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-atlas-border-subtle bg-atlas-bg-elevated">
      <div className="border-b border-atlas-border-subtle px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-atlas-accent-muted ring-1 ring-atlas-accent/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-atlas-accent-bright"
              aria-hidden
            >
              <path
                d="M12 3L4 9v12h16V9L12 3z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M12 3v18M4 9h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-semibold tracking-tight">Atlas</h2>
            <p className="text-xs text-atlas-text-faint">Workspace</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-wider text-atlas-text-faint">
          Projects
        </p>
        <div className="space-y-1">
          {projects.map((project) => (
            <button
              key={project.name}
              type="button"
              className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                project.active
                  ? "bg-atlas-accent-muted text-atlas-accent-bright ring-1 ring-atlas-accent/20"
                  : "text-atlas-text-muted hover:bg-atlas-surface hover:text-atlas-text"
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-atlas-border-subtle px-5 py-4">
        <p className="text-xs text-atlas-text-faint">v0.1 · Early access</p>
      </div>
    </aside>
  );
}
