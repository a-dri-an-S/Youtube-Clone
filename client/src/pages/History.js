// @ts-nocheck
import React from "react";
import { HistoryIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import Wrapper from "../styles/Trending";

function History() {
  const isAuth = false;

  if (!isAuth) {
    return (
      <SignUpCard
        icon={<HistoryIcon />}
        title="Keep track of what you watch"
        description="Watch history isn't viewable when signed out"
      />
    );
  }

  return (
    <Wrapper noPad>
      <h2>History</h2>
      Watched Videos
    </Wrapper>
  );
}

export default History;
