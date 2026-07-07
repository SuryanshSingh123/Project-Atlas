interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface MissionCardProps {
  mission: string;
  status: string;
  tasks: Task[];
}

export default function MissionCard({
  mission,status, tasks,
}: MissionCardProps) {
  return (
    <div className="mt-4 w-full max-w-8xl rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <h2 className="text-xl font-semibold">
        Current Mission: {mission || "No mission selected"}
      </h2>
      <h2 className="text-xl font-semibold">
        Status: {status || "No status"}
      </h2>
      <h3 className="mt-4 text-lg font-semibold">
        Roadmap
      </h3>
      <div className="mt-2 space-y-3">
        {tasks.map((task) => (
        <div key={task.id}>
        <h4 className="font-medium">
        {task.title}
        </h4>
        <p className="text-sm text-zinc-400">
          {task.description}
        </p>
    </div>
  ))}
</div>
    </div>
  );
}