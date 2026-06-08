import Workspace from "./components/Workspace";
import Sidebar from "./components/Sidebar";
import AgentPanel from "./components/AgentPanel";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />
      <Workspace />
      <AgentPanel />
    </main>
  );
}