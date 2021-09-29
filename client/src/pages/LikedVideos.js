import React from "react";
import { ChannelIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import Wrapper from "../styles/Trending";

function LikedVideos() {
  const isAuth = false;

  if (!isAuth) {
    return (
      <SignUpCard
        icon={<ChannelIcon />}
        title="Save everything you like"
        description="Videos that you have liked will show up here"
      />
    );
  }

  return (
    <Wrapper>
      <h2>Liked Videos</h2>
      <p className="secondary">Videos that you have liked will show up here</p>
      Liked Videos
    </Wrapper>
  );
}

export default LikedVideos;
