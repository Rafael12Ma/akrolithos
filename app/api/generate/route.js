import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
    const { houseImageUrl, stoneImageUrl } = await req.json();

    // 1. Ask ChatGPT to generate an image-editing prompt
    const chatRes = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: "You generate realistic architectural image editing prompts.",
            },
            {
                role: "user",
                content:
                    "Apply the stone texture to the visible house walls only. Keep lighting, perspective, and realism.",
            },
        ],
    });

    const imagePrompt = chatRes.choices[0].message.content;

    // 2. Generate edited image
    const imageRes = await openai.images.generate({
        model: "gpt-image-1",
        prompt: imagePrompt,
        image: houseImageUrl,
        mask: maskImageUrl, // 👈 THIS IS THE KEY
        reference_images: [stoneImageUrl],
    });


    return new Response(
        JSON.stringify({ image: imageRes.data[0].url }),
        { status: 200 }
    );
}
