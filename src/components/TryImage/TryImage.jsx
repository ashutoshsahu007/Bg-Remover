import React from "react";

const TryImage = () => {
  return (
    <div className="">
      <div className="h-[120px]  flex flex-col items-center justify-center gap-3 sm:flex-row  sm:gap-5 ">
        <div className="flex flex-row  sm:flex-col items-start gap-1 text-gray-800 text-[16px]  font-semibold">
          <span>No image?</span>
          <span>Try one of these:</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="1photo.jpg"
            alt=""
            className="rounded-lg w-[47.59px] h-[47.59px] sm:w-[63px] sm:h-[63px]"
          />
          <img
            src="2photo.jpg"
            alt=""
            className="rounded-lg w-[47.59px] h-[47.59px] sm:w-[63px] sm:h-[63px]"
          />
          <img
            src="3photo.jpg"
            alt=""
            className="rounded-lg w-[47.59px] h-[47.59px] sm:w-[63px] sm:h-[63px]"
          />
          <img
            src="4photo.jpg"
            alt=""
            className="rounded-lg w-[47.59px] h-[47.59px] sm:w-[63px] sm:h-[63px]"
          />
        </div>
      </div>
      <div>
        <p className="text-[10px] text-center">
          By uploading an image or URL you agree to our
          <a className="underline"> Terms of Service.</a>To learn more about how
          remove.bg handles your personal data.check our
          <a className="underline"> Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default TryImage;
