export async function createChatCompletion(
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is missing.");
  }
    const model = process.env.OPENROUTER_MODEL ?? "openrouter/free";
  const response = await fetch(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
    }),
  }
);
    
    const data = await response.json();

    console.log(data);
    
    if (!response.ok) {
    console.error(data);
    throw new Error(
    data.error?.message ?? "OpenRouter request failed."
    );
}
    return data.choices[0].message.content;
}