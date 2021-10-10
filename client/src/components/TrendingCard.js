import React from "react";
import Wrapper from "../styles/TrendingCard";
import { formatCreatedAt } from "../utils/date";

function TrendingCard({ video }) {
  return (
    <Wrapper>
      <span>
        <img
          className="thumb"
          src={video.thumbnail}
          alt={video.title}
        />
      </span>
      <div className="video-info-container">
        <span>
          <h3>{video.title}</h3>
        </span>
        <p className="secondary">
          <span>{video.user.username}</span>
          <span>•</span>
          <span>{video.views} views</span>
          <span>•</span> <span>{formatCreatedAt(video.createdAt)}</span>
        </p>
        <p className="secondary">{video.description}</p>
      </div>
    </Wrapper>
  );
}

export default TrendingCard;
