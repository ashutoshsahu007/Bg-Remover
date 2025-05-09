import React from "react";
import UploadImage from "../UploadImage/UploadImage";
import TryImage from "../TryImage/TryImage";

const UploadImageContainer = () => {
  return (
    <div className="flex w-[85%] m-auto lg:m-0 flex-col sm:w-[448px] lg:h-[650px]  items-start  justify-end ">
      <UploadImage />
      <TryImage />
    </div>
  );
};

export default UploadImageContainer;
