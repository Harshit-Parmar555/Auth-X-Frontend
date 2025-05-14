import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Land from "./pages/Land/Land";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
