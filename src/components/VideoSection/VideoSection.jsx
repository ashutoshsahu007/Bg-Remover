import React from "react";

const VideoSection = () => {
  return (
    <div className="lg:h-[550px] lg:w-[512px]  lg:items-start w-[90%] m-auto lg:m-0  flex flex-col md:flex-row md:items-end gap-5 items-center justify-center lg:justify-start lg:flex-col">
      <video
        autoPlay
        muted
        className="w-[80vw] max-w-[320px]  lg:w-[420px] lg:max-w-[420px]  rounded-3xl md:pb-3"
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col md:items-start   items-center justify-center md:w-[350px] lg:w-fit gap-6 md:gap-5">
        <h1 className="text-[32px]   text-center md:text-start font-bold md:text-5xl lg:text-6xl leading-[2.6rem] md:leading-[4rem]  text-gray-700">
          Remove Image Background
        </h1>
        <p className="font-semibold text-[20px] text-center text-gray-800">
          <span className="inline-block ">100% Automatically and</span>
          <span className="bg-yellow-400 p-1 px-3 rounded-full ml-2 ">
            Free
          </span>
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
