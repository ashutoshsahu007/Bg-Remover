import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [bgColor, setBgColor] = useState("#f0f0f0");

  const [text, setText] = useState(false);

  const handleImageChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      setFileName(file.name);
      setBgColor("#f0f0f0");
    } else {
      alert("Please upload a valid image.");
      setBgColor("#f0f0f0");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    handleImageChange(file);
    setText(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setText(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {text && (
        <div className="fixed h-screen inset-0 bg-yellow-100 opacity-90 flex justify-center items-center">
          <h2 className="text-6xl font-semibold mb-4">DROP IMAGE ANYWHERE</h2>
        </div>
      )}
      <h1>Drag and Drop an Image Anywhere</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e.target.files[0])}
        style={{ display: "none" }}
        id="fileInput"
      />
    </div>
  );
}

export default ImageUpload;
