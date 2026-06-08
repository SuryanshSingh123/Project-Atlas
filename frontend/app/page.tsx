import Header from "./components/Header";
import MissionCard from "./components/MissionCard";
import PromptInput from "./components/PromptInput";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6">

      <Header />

      <MissionCard />

      <PromptInput />

    </main>
  );
}