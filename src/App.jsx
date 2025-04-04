import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Upload from "./components/upload/Upload";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload2 from "./components/Upload2";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-display">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload2" element={<Upload2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
