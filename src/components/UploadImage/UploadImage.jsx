import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const UploadImage = () => {
  const navigate = useNavigate();
  const { file, setFile } = useContext(MyContext);

  // 1st way
  // upload image functionality which only takes image

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image/")) {
      setFile(file);
      navigate("/upload");
    } else {
      alert("Please upload a valid image.");
    }
  };

  // 2nd way
  // drag and drop functionality which only takes image

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFile(file);
      navigate("/upload");
    } else {
      alert("Please upload a valid image.");
    }
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // 3rd way
  // function to check if given url is of image or not

  // Upload image by using url

  const handleUserInput = () => {
    const input = prompt("Image URL :");
    isImageURL(input);
  };

  async function isImageURL(url) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      const contentType = response.headers.get("content-type");
      console.log(contentType);

      if (contentType.startsWith("image")) {
        navigate("/upload");
      }
      // return contentType && contentType.startsWith("image/");
    } catch (error) {
      console.log(false);
      // return false;
    }
  }

  return (
    <div className="m-auto lg:m-0 bg-white  sm:shadow-[0px_0px_50px_10px_rgba(0,0,0,0.1)] rounded-4xl  sm:w-[448px] sm:h-[346px] flex items-center justify-center flex-col gap-4">
      {/* Upload Label acting as Button  */}
      <label className="font-medium text-2xl cursor-pointer rounded-full  text-white bg-[#007bff] text-center  w-[75vw] max-w-[448px] sm:w-fit sm:px-5 py-3">
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>

      {/* Drag and Drop div */}
      <div
        onDrop={handleDrop}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
      >
        <p className="text-xl font-medium text-gray-600">or drop a file,</p>
        <input type="file" accept="image/*" className="hidden" />
      </div>

      <p className="text-sm hidden sm:flex text-gray-600">
        paste image or &nbsp;
        <span onClick={handleUserInput} className="underline cursor-pointer ">
          URL
        </span>
      </p>
    </div>
  );
};

export default UploadImage;
