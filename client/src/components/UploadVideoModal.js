import React, { useState } from "react";
import Button from "../styles/Button";
import Wrapper from "../styles/UploadVideoModal";
import { CloseIcon } from "./Icons";
import VideoPlayer from "./VideoPlayer";

function UploadVideoModal({ previewVideo, thumbnail, url, defaultTitle, closeModal }) {
  const [tab, setTab] = useState("PREVIEW");
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState("");

  function handleTab() {
    
  }

  return (
    <Wrapper>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-header-left">
            <CloseIcon onClick={closeModal}/>
            <h3>{url ? "Video Uploaded" : "Uploading..."}</h3>
          </div>
          <div style={{ display: url ? "block" : "none" }}>
            <Button onClick={handleTab}>{tab === "PREVIEW" ? "Next" : "Upload"}</Button>
          </div>
        </div>

        {tab === "PREVIEW" && (
          <div className="tab video-preview">
            <VideoPlayer previewUrl={previewVideo} video={url}/>
          </div>
        )}

        {tab === "FORM" && (
          <div className="tab video-form">
            <h2>Video Details</h2>
            <input type="text" placeholder="Enter your video title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea placeholder="Tell viewers about your video" value={description} onChange={(e) => setDescription(e.target.value) }/>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default UploadVideoModal;
