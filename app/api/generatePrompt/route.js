import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req) {
  const body = await req.json();
  const { mood } = body;

  if (!mood) {
    return new Response(JSON.stringify({ error: "Mood is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Provide a thoughtful self-reflection prompt for someone feeling ${mood}.`,
      max_tokens: 100,
    });

    return new Response(
      JSON.stringify({ prompt: completion.data.choices[0].text.trim() }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch GPT prompt" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
