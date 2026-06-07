export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-7xl font-bold">
        Atlas
      </h1>

      <p className="mt-4 text-zinc-400 text-xl">
        From idea to execution.
      </p>

      <div className="mt-16 w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="text-xl font-semibold">
          Current Mission
        </h2>

        <p className="mt-4 text-zinc-300">
          Build Project Atlas.
        </p>

      </div>

      <input
        className="mt-10 w-full max-w-2xl rounded-xl bg-zinc-900 border border-zinc-800 p-4 outline-none focus:border-white"
        placeholder="What are we working on today?"
      />

    </main>
  );
}