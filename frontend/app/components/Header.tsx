interface HeaderProps {
  hasMessages: boolean;
}

export default function Header({ hasMessages }: HeaderProps) {
  if (hasMessages) {
    return (
      <header className="shrink-0 border-b border-atlas-border-subtle px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-atlas-text">Atlas</span>
          <span className="text-atlas-text-faint">·</span>
          <span className="text-sm text-atlas-text-muted">
            From idea to execution
          </span>
        </div>
      </header>
    );
  }

  return (
    <header className="shrink-0 px-6 pt-10 pb-6 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-atlas-accent-muted ring-1 ring-atlas-accent/25">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7 text-atlas-accent-bright"
          aria-hidden
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight">Atlas</h1>
      <p className="mt-2 text-sm text-atlas-text-muted">
        From idea to execution.
      </p>
    </header>
  );
}
