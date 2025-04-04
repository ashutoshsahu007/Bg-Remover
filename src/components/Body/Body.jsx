import React, { useState } from "react";
import TryImage from "../TryImage/TryImage";
import UploadImage from "../UploadImage/UploadImage";

const Body = () => {
  return (
    <div className="hidden flex-col lg:flex-row justify-center items-center gap-10 mb-5 border-2">
      <div className="h-fit lg:h-[650px] col1 flex flex-row lg:flex-col  justify-center items-end lg:items-start  gap-2 w-[490px] border-2">
        <video autoPlay muted className="rounded-lg w-[420px] h-[280px]">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-5xl xl:text-6xl  font-bold text-gray-700">
            Remove Image Background
          </h1>
          <p className="font-semibold text-xl text-center text-gray-800">
            100% Automatically and
            <span className="bg-yellow-400 p-1 px-4 rounded-full ml-2">
              Free
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end lg:h-[650px] w-[432px] hfit">
        <UploadImage />
        <TryImage />
      </div>
    </div>
  );
};

export default Body;
