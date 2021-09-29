import React from "react";
import { LibIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";

function Library() {
  const isAuth = false;

  if (!isAuth) {
    return (
      <SignUpCard
        icon={<LibIcon />}
        title="Enjoy your favorite videos"
        description="Sign in to access videos that you’ve liked or saved"
      />
    );
  }

  return <>library</>;
}

export default Library;
