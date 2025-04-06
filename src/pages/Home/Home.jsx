import React, { useState } from "react";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import UploadImageContainer from "../../components/UploadImageContainer/UploadImageContainer";

const Home = () => {
  return (
    <div className="flex flex-col lg:pt-5 lg:flex-row lg:gap-0 lg:items-start items-center justify-center gap-10   mb-5  pt-6  md:gap-[150px]">
      <VideoContainer />
      <UploadImageContainer />
    </div>
  );
};

export default Home;
