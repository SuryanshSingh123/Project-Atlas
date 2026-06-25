"use client";

import { useState } from "react";

import Header from "./Header";
import MissionCard from "./MissionCard";
import PromptInput from "./PromptInput";

export default function Workspace() {
  async function submitMission() {
    if (!prompt.trim()) return;
    
    console.log("Submitting:", prompt);

    const response = await fetch(
        "http://localhost:3001/api/jobs",
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt,
        }),

        }
  );
  
  const data = await response.json();

  console.log(data);
  setCurrentMission(prompt);
  setCurrentJobId(data.jobId);
  setJobStatus(data.status);
  setPrompt("");
}
  const [prompt, setPrompt] = useState("");
  const [currentMission, setCurrentMission] = useState("");
  
  const [currentJobId, setCurrentJobId] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  return (
    <section className="flex flex-1 flex-col p-10">
      <Header />

      <div className="text-center">
        <MissionCard 
        mission={currentMission}
        status={jobStatus}
        jobID={currentJobId} 
        />
      </div>

      <div className="mt-auto mb-1">
      <PromptInput
        value={prompt}
        onChange={setPrompt}
        onSubmit={submitMission}
      />

      </div>
    </section>
  );
  
}
