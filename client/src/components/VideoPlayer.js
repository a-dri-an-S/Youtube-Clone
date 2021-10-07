import React, { useRef, useEffect } from "react";
import videojs from 'video.js';
import "video.js/dist/video-js.css";

function VideoPlayer({ previewUrl, video }) {
  const videoRef = useRef();

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current);

    if (previewUrl) {
      vjsPlayer.src({ type: "video/mp4", src: previewUrl })
    }

    return () => {
      if (vjsPlayer) {
        vjsPlayer.dispose();
      }
    }
    
  }, [previewUrl])

  return (
    <div data-vjs-player>
      <video
        controls
        ref={videoRef}
        className="video-js vjs-fluid vjs-big-play-centered"
      ></video>
    </div>
  );
}

export default VideoPlayer;
