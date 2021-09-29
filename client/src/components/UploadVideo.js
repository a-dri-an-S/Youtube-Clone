import React from "react";
import { UploadIcon } from "./Icons";

function UploadVideo() {
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
      />
    </div>
  );
}

export default UploadVideo;
