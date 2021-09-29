import React from "react";
import Button from "../styles/Button";
import Wrapper from "../styles/UploadVideoModal";
import { CloseIcon } from "./Icons";
import VideoPlayer from "./VideoPlayer";

function UploadVideoModal() {
  const [tab, setTab] = React.useState("PREVIEW");

  return (
    <Wrapper>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-header-left">
            <CloseIcon />
            <h3>Video Uploaded!</h3>
          </div>
          <div style={{ display: "block" }}>
            <Button>{tab === "PREVIEW" ? "Next" : "Upload"}</Button>
          </div>
        </div>

        {tab === "PREVIEW" && (
          <div className="tab video-preview">
            <VideoPlayer />
          </div>
        )}

        {tab === "FORM" && (
          <div className="tab video-form">
            <h2>Video Details</h2>
            <input type="text" placeholder="Enter your video title" />
            <textarea placeholder="Tell viewers about your video" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default UploadVideoModal;
