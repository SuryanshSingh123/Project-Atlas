interface MissionCardProps {
  mission: string;
  status: string;
  jobID: string;
}

export default function MissionCard({
  mission,status,jobID
}: MissionCardProps) {
  return (
    <div className="mt-4 w-full max-w-8xl rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <h2 className="text-xl font-semibold">
        Current Mission: {mission || "No mission selected"}
      </h2>
      <h2 className="text-x1 font-semibold">
        Job Status: {status || "No status"}
      </h2>
    </div>
  );
}