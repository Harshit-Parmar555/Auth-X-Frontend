import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Land from "./pages/Land/Land";
import Register from "./pages/Register/Register";
import Verify from "./pages/Verify/Verify";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
