export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-6">

      <h2 className="text-2xl font-bold">
        Atlas
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Projects
      </p>

      <div className="mt-8 space-y-2">

        <button className="w-full rounded-lg bg-zinc-900 p-3 text-left hover:bg-zinc-800">
          Atlas
        </button>

        <button className="w-full rounded-lg bg-zinc-900 p-3 text-left hover:bg-zinc-800">
          Portfolio
        </button>

        <button className="w-full rounded-lg bg-zinc-900 p-3 text-left hover:bg-zinc-800">
          MEXT Prep
        </button>

      </div>

    </aside>
  );
}