import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

function base64ToBuffer(base64) {
    const matches = base64.match(/^data:(.+);base64,(.+)$/);
    return Buffer.from(matches[2], "base64");
}

export async function POST(req) {
    try {
        const { maskDataUrl } = await req.json();

        if (!maskDataUrl) {
            return new Response(
                JSON.stringify({ error: "No mask data provided" }),
                { status: 400 }
            );
        }

        const buffer = base64ToBuffer(maskDataUrl);

        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream(
                    {
                        folder: "wall-masks",
                        format: "png",
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                )
                .end(buffer);
        });

        return new Response(
            JSON.stringify({ maskUrl: uploadResult.secure_url }),
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return new Response(
            JSON.stringify({ error: "Mask upload failed" }),
            { status: 500 }
        );
    }
}
