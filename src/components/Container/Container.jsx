import React from "react";
import UploadImage from "../UploadImage/UploadImage";
import TryImage from "../TryImage/TryImage";

const Container = () => {
  return (
    <div className="flex w-[85%] m-auto lg:m-0 flex-col sm:w-[448px] lg:h-[700px]  items-start  justify-end ">
      <UploadImage />
      <TryImage />
    </div>
  );
};

export default Container;
