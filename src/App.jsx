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

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#000",
            },
          },
        }}
      />
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
