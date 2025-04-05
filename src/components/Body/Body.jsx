import React, { useState } from "react";
import TryImage from "../TryImage/TryImage";
import UploadImage from "../UploadImage/UploadImage";
import VideoSection from "../VideoSection/VideoSection";

const Body = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-5  pt-6">
      <VideoSection />
      <div className="flex w-[90%] m-auto  flex-col items-center justify-end lg:h-[650px]  hfit">
        <UploadImage />
        <TryImage />
      </div>
    </div>
  );
};

export default Body;
