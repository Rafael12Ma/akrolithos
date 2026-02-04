import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = formidable();

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) reject(err);

      const house = files.house[0];
      const stone = files.stone[0];

      const houseUpload = await cloudinary.uploader.upload(house.filepath);
      const stoneUpload = await cloudinary.uploader.upload(stone.filepath);

      resolve(
        new Response(
          JSON.stringify({
            houseUrl: houseUpload.secure_url,
            stoneUrl: stoneUpload.secure_url,
          }),
          { status: 200 }
        )
      );
    });
  });
}
