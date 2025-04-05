import React, { useState } from "react";
import TryImage from "../TryImage/TryImage";
import UploadImage from "../UploadImage/UploadImage";
import VideoSection from "../VideoSection/VideoSection";

const Body = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-5  pt-6 md:gap-[150px]">
      <VideoSection />
      <div className="flex w-[85%] m-auto flex-col sm:w-[448px]  items-center justify-end lg:h-[650px] ">
        <UploadImage />
        <TryImage />
      </div>
    </div>
  );
};

export default Body;
