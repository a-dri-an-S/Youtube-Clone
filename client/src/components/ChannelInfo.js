// @ts-nocheck
import React from "react";
import Button from "../styles/Button";
import Wrapper from "../styles/ChannelInfo";

function ChannelInfo() {
  return (
    <Wrapper>
      <span className="avatar-channel">
        <img src="https://dummyimage.com/100x100" alt="avatar" />

        <div className="channel-info-meta">
          <h3>Username</h3>

          <p className="secondary">
            <span>Subscribers Count subscribers</span>{" "}
            <span className="to-hide">•</span>{" "}
            <span className="to-hide">Videos Count videos</span>
          </p>

          <p className="description secondary">Channel Description</p>
        </div>
      </span>

      <Button>Subscribe</Button>
    </Wrapper>
  );
}

export default ChannelInfo;
