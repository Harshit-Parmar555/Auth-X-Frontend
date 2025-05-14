import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Land from "./pages/Land/Land";
import Register from "./pages/Register/Register";
import Verify from "./pages/Verify/Verify";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
