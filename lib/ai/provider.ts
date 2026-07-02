export type AICompletionRequest = {
  system: string;
  prompt: string;
};

export type AIProviderConfig = {
  apiKey: string;
  baseUrl: string;
  model: string;
};

export async function generateCompletion(config: AIProviderConfig, request: AICompletionRequest) {
  const response = await fetch(`${config.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + config.apiKey,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        { role: "system", content: request.system },
        { role: "user", content: request.prompt },
      ],
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error(`AI provider request failed: ${response.status}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  return data.choices?.[0]?.message?.content ?? "";
}
