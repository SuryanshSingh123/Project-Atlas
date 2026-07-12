import { ATLAS_SYSTEM_PROMPT } from "../prompts/atlas.prompt.js";
import { createChatCompletion } from "./ai.service.js";
import type { ChatMessage } from "../models/chat.js";

export async function chatWithAtlas(messages: ChatMessage[]) {
  return await createChatCompletion(
    ATLAS_SYSTEM_PROMPT,
    messages,
    process.env.ATLAS_MODEL
  );
}