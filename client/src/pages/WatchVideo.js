// @ts-nocheck
import React from "react";
import AddComment from "../components/AddComment";
import { DislikeIcon, LikeIcon } from "../components/Icons";
import NoResults from "../components/NoResults";
import VideoPlayer from "../components/VideoPlayer";
import Button from "../styles/Button";
import Wrapper from "../styles/WatchVideo";

function WatchVideo() {
  const is404 = true;

  if (is404) {
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );
  }

  return (
    <Wrapper filledLike={true} filledDislike={false}>
      <div className="video-container">
        <div className="video">
          <VideoPlayer />
        </div>

        <div className="video-info">
          <h3>Title</h3>

          <div className="video-info-stats">
            <p>
              <span>Views views</span> <span>•</span>{" "}
              <span>Premiered createdAt</span>
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                <LikeIcon /> <span>Likes Count</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: "1rem" }}>
                <DislikeIcon /> <span>Dislikes Count</span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img
                className="avatar md"
                src="https://dummyimage.com/100x100"
                alt="channel avatar"
              />
              <div className="channel-info-meta">
                <h4>Username</h4>
                <span className="secondary small">
                  SubscribersCount subscribers
                </span>
              </div>
            </div>

            <Button>Subscribe</Button>
          </div>

          <p>Description</p>
        </div>

        <AddComment />
      </div>

      <div className="related-videos">
        <h3 className="up-next">Up Next</h3>
        Up Next Videos
      </div>
    </Wrapper>
  );
}

export default WatchVideo;
