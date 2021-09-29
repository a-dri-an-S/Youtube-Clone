import React from "react";
import "video.js/dist/video-js.css";

function VideoPlayer() {
  return (
    <div data-vjs-player>
      <video
        controls
        className="video-js vjs-fluid vjs-big-play-centered"
      ></video>
    </div>
  );
}

export default VideoPlayer;
