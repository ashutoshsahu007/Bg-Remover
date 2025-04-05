import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState("");

  // 1st way to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setFile(file);
    } else {
      alert("Please upload a valid image.");
    }
  };

  // 3rd way to handle image upload
  const handleUserInput = () => {
    const input = prompt("Image URL :");
    if (input) {
      console.log(input);
    } else {
      console.log("Not a valid Url");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div className="m-auto lg:m-0 bg-white  sm:shadow-[0px_0px_50px_10px_rgba(0,0,0,0.1)] rounded-4xl  sm:w-[448px] sm:h-[346px] flex items-center justify-center flex-col gap-4 ">
      {/* Hidden Input with Label acting as a button */}
      <label className="font-medium text-2xl cursor-pointer rounded-full  text-white bg-[#007bff] text-center  w-[75vw] max-w-[448px] sm:w-fit sm:px-3 py-3">
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      {/* drop an image feature  */}
      {/* <div
  onDrop={handleDrop}
  onDragOver={preventDefaults}
  onDragEnter={preventDefaults}
>
  {file ? (
    `Uploaded: ${file.name}`
  ) : (
    <p className="text-xl font-medium text-gray-600">or drop a file,</p>
  )}
  <input
    type="file"
    accept="image/*"
    onChange={handleFileSelect}
    className="hidden"
    id="fileInput"
  />
</div> */}
      <p className="text-sm hidden sm:flex text-gray-600">
        paste image or
        <span onClick={handleUserInput} className="underline cursor-pointer ">
          URL
        </span>
      </p>
    </div>
  );
};

export default UploadImage;
