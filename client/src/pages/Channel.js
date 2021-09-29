// @ts-nocheck
import React from "react";
import { VidIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import Wrapper from "../styles/Channel";

const activeTabStyle = {
  borderBottom: "2px solid white",
  color: "white",
};

function Channel() {
  const [tab, setTab] = React.useState("VIDEOS");
  const isAuth = false;

  if (!isAuth) {
    return (
      <SignUpCard
        icon={<VidIcon />}
        title="Manage your videos"
        description="Sign in to upload and manage your videos, pre-recorded or live"
      />
    );
  }

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
