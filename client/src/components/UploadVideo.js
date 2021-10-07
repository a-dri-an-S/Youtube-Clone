import React from "react";
import { uploadMedia } from "../utils/upload-media";
import { UploadIcon } from "./Icons";

function UploadVideo() {

  async function handleUploadVideo(event) {
    const file = event.target.files[0];

    if (file) {
      const url = await uploadMedia({
        type: "video",
        file,
        preset: "vqawuu0a"
      });
      console.log(url);
    }
  }

  return (
    <div>
      <label htmlFor="video-upload">
        <UploadIcon />
      </label>
      <input
        style={{ display: "none" }}
        id="video-upload"
        type="file"
        accept="video/*"
        onChange={handleUploadVideo}
      />
    </div>
  );
}

export default UploadVideo;
