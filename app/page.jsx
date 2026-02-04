"use client";

import { useState } from "react";
import axios from "axios";
import MaskEditor from "@/components/mask/MaskEditor";

export default function Home() {
  const [houseImage, setHouseImage] = useState(null);
  const [stoneImage, setStoneImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [houseImageUrl, setHouseImageUrl] = useState(null);
  const [maskDataUrl, setMaskDataUrl] = useState(null);

  const handleSubmit = async () => {
    if (!houseImage || !stoneImage) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("house", houseImage);
    formData.append("stone", stoneImage);

    // Upload images
    const uploadRes = await axios.post("/api/upload", formData);
    const { houseUrl, stoneUrl } = uploadRes.data;

    // ✅ Set houseImageUrl for MaskEditor
    setHouseImageUrl(houseUrl);

    // Generate preview (optional at this point)
    const generateRes = await axios.post("/api/generate", {
      houseImageUrl: houseUrl,
      stoneImageUrl: stoneUrl,
    });

    setResultImage(generateRes.data.image);
    setLoading(false);
  };

  return (
    <main style={{ padding: 40 }}>
      <div>
        {!maskDataUrl && houseImageUrl && (
          <MaskEditor
            imageUrl={houseImageUrl}
            onConfirm={(mask) => uploadMask(mask)}
          />
        )}

        {maskDataUrl && <img src={maskDataUrl} alt="Final Mask" />}
      </div>

      <h1>Stone Wall Visualizer</h1>

      <input
        type="file"
        accept="image/*"
        className="border-red-100 border-2"
        onChange={(e) => setHouseImage(e.target.files[0])}
      />
      <br />
      <br />

      <input
        type="file"
        accept="image/*"
        className="border-red-100 border-2"
        onChange={(e) => setStoneImage(e.target.files[0])}
      />
      <br />
      <br />

      <button
        className="border-red-100 bg-white text-black p-1 rounded-2xl cursor-pointer"
        onClick={handleSubmit}
      >
        {loading ? "Generating..." : "Generate Preview"}
      </button>

      <br />
      <br />

      {resultImage && (
        <img src={resultImage} alt="Result" style={{ maxWidth: "100%" }} />
      )}
    </main>
  );
}
