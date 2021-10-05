import React from "react";
import { useQuery } from "react-query";
import ErrorMessage from "../components/ErrorMessage";
import HomeSkeleton from "../skeletons/HomeSkeleton";
import Wrapper from "../styles/Home";
import VideoGrid from "../styles/VideoGrid";
import { client } from "../utils/api-client";

function Home() {
  const { data: videos, isLoading, isError, error } = useQuery("Home", () => client.get('/videos').then(res => res.data.videos));

  if (isLoading) return <HomeSkeleton />
  if (isError) return <ErrorMessage error={error}/>

  console.log(videos);

  return (
    <Wrapper>
      <VideoGrid>Recommended videos</VideoGrid>
    </Wrapper>
  );
}

export default Home;
