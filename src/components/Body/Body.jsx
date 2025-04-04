import React, { useState } from "react";
import VideoSection from "../VideoSection/VideoSection";
import Container from "../Container/Container";

const Body = () => {
  return (
    <div className="flex flex-col lg:pt-5 lg:flex-row lg:gap-0 lg:items-start items-center justify-center gap-10   mb-5  pt-6  md:gap-[150px]">
      <VideoSection />
      <Container />
    </div>
  );
};

export default Body;
