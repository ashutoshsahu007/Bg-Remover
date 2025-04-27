import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./components/Upload/Upload";

export const MyContext = createContext();

const App = () => {
  const [file, setFile] = useState(null);

  // just for testing purpose

  return (
    <MyContext.Provider value={{ file, setFile }}>
      <BrowserRouter>
        <div className="font-display">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
