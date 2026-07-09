import AgentPanel from "./components/AgentPanel";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

export default function Home() {
  return (
    <main className="flex h-full bg-atlas-bg">
      <Sidebar />
      <Workspace />
      <AgentPanel />
    </main>
  );
}
