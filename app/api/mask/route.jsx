import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { imageUrl } = await req.json();

  const maskPrompt = `
Create a black and white segmentation mask.
White areas should include ONLY the visible wall surfaces.
Black areas must include windows, doors, roof, sky, ground, and vegetation.
High contrast, no gray tones.
`;

  const result = await openai.images.generate({
    model: "gpt-image-1",
    prompt: maskPrompt,
    image: imageUrl,
    size: "1024x1024",
  });

  return new Response(JSON.stringify({ maskUrl: result.data[0].url }), {
    status: 200,
  });
}
