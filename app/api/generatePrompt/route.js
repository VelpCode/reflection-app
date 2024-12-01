import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
console.log("API Key:", process.env.OPENAI_API_KEY);
console.log("Environment Variables:", process.env);


export async function POST(req) {
    try {
      const body = await req.json();
      console.log("Request Body:", body); // Log request body
      const { mood } = body;
  
      if (!mood) {
        console.log("Error: Mood is missing");
        return new Response(
          JSON.stringify({ error: "Mood is required" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
  
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Provide a thoughtful self-reflection prompt for someone feeling ${mood}.`,
        max_tokens: 100,
      });
  
      console.log("GPT Response:", completion.data.choices[0].text);
  
      return new Response(
        JSON.stringify({ prompt: completion.data.choices[0].text.trim() }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error in API:", error); // Log the error
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }


  