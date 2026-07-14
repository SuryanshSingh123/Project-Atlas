import { ATLAS_SYSTEM_PROMPT } from "../prompts/atlas.prompt.js";
import { createChatCompletion } from "./ai.service.js";
import type { ChatMessage } from "../models/chat.js";

export interface AtlasDecision {
    reply: string;
    action: "none" | "plan";
    mission?: string;
    activity: string;
}

export async function chatWithAtlas(
  messages: ChatMessage[]
): Promise<AtlasDecision> {

  const rawResponse = await createChatCompletion(
    ATLAS_SYSTEM_PROMPT,
    messages,
    process.env.ATLAS_MODEL
  );
  const decision = JSON.parse(rawResponse) as AtlasDecision;

  if (!decision.reply || !decision.action) {
    throw new Error("Invalid Atlas response.");
  }

  return decision;

}