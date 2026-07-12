import type { ChatMessage } from "../models/chat.js";

export async function createChatCompletion(
  systemPrompt: string,
  messages: ChatMessage[],
  model?:string
): Promise<string> {
const apiKey = process.env.OPENROUTER_API_KEY;
const requestedModel =
  model ??
  process.env.ATLAS_MODEL ??
  "nvidia/nemotron-3-super-120b-a12b:free";
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is missing.");
  }
  const response = await fetch(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: requestedModel,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...messages,
      ],
    }),
  }
);
    
    const data = await response.json();

    console.log(data.choices[0].message.content);
    
    if (!response.ok) {
    console.error(data);
    throw new Error(
    data.error?.message ?? "OpenRouter request failed."
    );
}
    return data.choices[0].message.content;
}