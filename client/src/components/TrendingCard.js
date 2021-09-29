import React from "react";
import Wrapper from "../styles/TrendingCard";

function TrendingCard() {
  return (
    <Wrapper>
      <span>
        <img
          className="thumb"
          src="https://dummyimage.com/1280x720"
          alt="video title"
        />
      </span>
      <div className="video-info-container">
        <span>
          <h3>Title</h3>
        </span>
        <p className="secondary">
          <span>Username</span>
          <span>•</span>
          <span>Views views</span>
          <span>•</span> <span>Created At</span>
        </p>
        <p className="secondary">Description</p>
      </div>
    </Wrapper>
  );
}

export default TrendingCard;
