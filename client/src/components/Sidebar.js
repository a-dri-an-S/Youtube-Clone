// @ts-nocheck
import React from "react";
import Wrapper from "../styles/Sidebar";
import {
  HistoryIcon,
  HomeIcon,
  LibIcon,
  LikeIcon,
  SubIcon,
  TrendingIcon,
  VidIcon,
} from "./Icons";
import SidebarAuth from "./SidebarAuth";

function Sidebar() {
  return (
    <Wrapper>
      <div className="icon">
        <HomeIcon />
        <span>Home</span>
      </div>

      <div className="icon">
        <TrendingIcon />
        <span>Trending</span>
      </div>

      <div className="icon">
        <SubIcon />
        <span>Subscriptions</span>
      </div>

      <div className="divider"></div>

      <div className="icon">
        <LibIcon />
        <span>Library</span>
      </div>

      <div className="icon">
        <HistoryIcon />
        <span>History</span>
      </div>

      <div className="icon">
        <VidIcon />
        <span>Your videos</span>
      </div>

      <div className="icon">
        <LikeIcon />
        <span>Liked videos</span>
      </div>

      <div className="divider"></div>

      <SidebarAuth />
    </Wrapper>
  );
}

export default Sidebar;
