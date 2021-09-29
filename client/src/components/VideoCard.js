import React from "react";
import Avatar from "../styles/Avatar";
import Wrapper from "../styles/VideoCard";
import DeleteVideoDropdown from "./DeleteVideoDropdown";

function VideoCard() {
  return (
    <Wrapper>
      <span>
        <img
          className="thumb"
          src="https://dummyimage.com/1280x720"
          alt="thumbnail"
        />
      </span>
      <div className="video-info-container">
        <div className="channel-avatar">
          <Avatar
            style={{ marginRight: "0.8rem" }}
            src="https://dummyimage.com/100x100"
            alt="channel avatar"
          />
        </div>
        <div className="video-info">
          <span>
            <h4 className="truncate">Title</h4>
          </span>
          <span>
            <span className="secondary">Username</span>
          </span>
          <p className="secondary leading-4">
            <span>Views views</span> <span>•</span> <span>CreatedAt</span>
          </p>
        </div>
        <DeleteVideoDropdown />
      </div>
    </Wrapper>
  );
}

export default VideoCard;
