import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Land from "./pages/Land/Land";
import Register from "./pages/Register/Register";
import Verify from "./pages/Verify/Verify";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import Forgot from "./pages/Forget/Forget";
import Reset from "./pages/Reset/Reset";
import NotFound from "./pages/404/NotFound";
import Terms from "./pages/T&P/Terms";
import Privacy from "./pages/T&P/Privacy";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/forgetpassword" element={<Forgot />} />
        <Route path="/resetpassword/:token" element={<Reset />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
