// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { VidIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import { useAuth } from "../context/auth-context";
import Wrapper from "../styles/Channel";
import { client } from "../utils/api-client";
import Skeleton from '../skeletons/ChannelSkeleton';
import ErrorMessage from "../components/ErrorMessage";

const activeTabStyle = {
  borderBottom: "2px solid white",
  color: "white",
};

function Channel() {
  const user = useAuth();
  const { channelId } = useParams();
  const [tab, setTab] = React.useState("VIDEOS");

  const loggedInUserId = user ? user.id : undefined;
  const userId = channelId || loggedInUserId;

  const { data: channel, isLoading, isError, error } = useQuery(["Channel", userId], () => client.get(`/users/${userId}`).then(res => res.data.user), {
    enabled: userId
  });

  if (!user) {
    return (
      <SignUpCard
        icon={<VidIcon />}
        title="Manage your videos"
        description="Sign in to upload and manage your videos, pre-recorded or live"
      />
    );
  }

  if (isLoading) return <Skeleton />
  if (isError) return <ErrorMessage error={error} />

  console.log({ channel })

  return (
    <Wrapper editProfile={false}>
      <div className="cover">
        <img src="https://dummyimage.com/600x200" alt="channel-cover" />
      </div>

      <div className="header-tabs">
        <div className="header">
          <div className="flex-row">
            <img
              className="avatar lg"
              src="https://dummyimage.com/100x100"
              alt="channel avatar"
            />
            <div>
              <h3>username</h3>
              <span className="secondary">subscribersCount subscribers</span>
            </div>
          </div>
        </div>

        <div className="tabs">
          <ul className="secondary">
            <li
              style={tab === "VIDEOS" ? activeTabStyle : {}}
              onClick={() => setTab("VIDEOS")}
            >
              Videos
            </li>
            <li
              style={tab === "CHANNELS" ? activeTabStyle : {}}
              onClick={() => setTab("CHANNELS")}
            >
              Channels
            </li>
            <li
              style={tab === "ABOUT" ? activeTabStyle : {}}
              onClick={() => setTab("ABOUT")}
            >
              About
            </li>
          </ul>
        </div>
      </div>

      <div className="tab"></div>
    </Wrapper>
  );
}

export default Channel;
