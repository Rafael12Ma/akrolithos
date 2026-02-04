"use client";

import { useState } from "react";
import MaskEditor from "@/components/mask/MaskEditor";

export default function Page() {
  const exportMask = () => {
    const uri = stageRef.current.toDataURL({
      pixelRatio: 1,
      mimeType: "image/png",
    });
    onConfirm(uri); // 👈 sends mask to parent (page.jsx)
  };
  const [houseImageUrl, setHouseImageUrl] = useState(
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
  ); // example image
  const [maskUrl, setMaskUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  // 👇 THIS IS STEP 3 (UPLOAD MASK)
  const uploadMask = async (maskDataUrl) => {
    const res = await fetch("/api/upload-mask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ maskDataUrl }),
    });
    const data = await res.json();
    setMaskDataUrl(data.maskUrl); // now the mask shows
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Wall Mask Editor</h1>

      {/* 1️⃣ Show mask editor */}
      {!maskUrl && (
        <MaskEditor
          imageUrl={houseImageUrl}
          onConfirm={(maskDataUrl) => uploadMask(maskDataUrl)}
        />
      )}

      {/* 2️⃣ Show uploaded mask */}
      {uploading && <p>Uploading mask...</p>}

      {maskUrl && (
        <>
          <h3>Uploaded Mask</h3>
          <img src={maskUrl} alt="Mask" />
        </>
      )}
      <button onClick={exportMask} style={{ marginTop: 10 }}>
        Confirm Mask
      </button>
    </div>
  );
}
