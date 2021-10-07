// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import AddComment from "../components/AddComment";
import { DislikeIcon, LikeIcon } from "../components/Icons";
import NoResults from "../components/NoResults";
import VideoPlayer from "../components/VideoPlayer";
import Button from "../styles/Button";
import Skeleton from '../skeletons/WatchVideoSkeleton';
import Wrapper from "../styles/WatchVideo";
import { client } from "../utils/api-client";
import { formatCreatedAt } from "../utils/date";

function WatchVideo() {
  const { videoId } = useParams();
  const { data: video, isLoading } = useQuery(["WatchVideo", videoId], () => client.get(`/videos/${videoId}`).then(res => res.data.video));

  console.log(video);

  if (isLoading) {
    return <Skeleton />
  }

  if (!isLoading && !video) {
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );
  }

  console.log(video.user)

  return (
    <Wrapper filledLike={video && video.isLiked} filledDislike={video && video.isDisliked}>
      <div className="video-container">
        <div className="video">
          {!isLoading && <VideoPlayer video={video}/>}
        </div>

        <div className="video-info">
          <h3>{video.title}</h3>

          <div className="video-info-stats">
            <p>
              <span>{video.views}</span> <span>•</span>{" "}
              <span>Premiered {formatCreatedAt(video.createdAt)}</span>
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                <LikeIcon /> <span>{video.likesCount}</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: "1rem" }}>
                <DislikeIcon /> <span>{video.dislikesCount}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img
                className="avatar md"
                src={video.user.avatar}
                alt={`${video.user.username} channel avatar`}
              />
              <div className="channel-info-meta">
                <h4>{video.user.username}</h4>
                <span className="secondary small">
                  {video.subscribersCount} subscribers
                </span>
              </div>
            </div>

            {!video.isVideoMine && !video.isSubscribed && (
              <Button>Subscribe</Button>
            )}
            {!video.isVideoMine && video.isSubscribed && (
              <Button>Subscribed</Button>
            )}
          </div>

          <p>{video.description}</p>
        </div>

        <AddComment video={video} />
      </div>

      <div className="related-videos">
        <h3 className="up-next">Up Next</h3>
        Up Next Videos
      </div>
    </Wrapper>
  );
}

export default WatchVideo;
