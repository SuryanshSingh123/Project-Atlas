interface MissionCardProps {
  mission: string;
}

export default function MissionCard({
  mission,
}: MissionCardProps) {
  return (
    <div className="mt-4 w-full max-w-8xl rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <h2 className="text-xl font-semibold">
        Current Mission
      </h2>

      <p className="mt-2 text-zinc-300">
        {mission || "No mission selected."}
      </p>
    </div>
  );
}