import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

// store import
import { useAuthStore } from "./store/useAuthStore.js";

// protected route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

//  authenticated route
const RedirectAuthenticatedUser = ({ children }) => {
  const { user, isAuthenticated } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

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
        <Route
          path="/"
          element={
            <RedirectAuthenticatedUser>
              <Land />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectAuthenticatedUser>
              <Register />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/verify"
          element={
            <RedirectAuthenticatedUser>
              <Verify />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forgetpassword"
          element={
            <RedirectAuthenticatedUser>
              <Forgot />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/resetpassword/:token"
          element={
            <RedirectAuthenticatedUser>
              <Reset />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/terms"
          element={
            <RedirectAuthenticatedUser>
              <Terms />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/privacy"
          element={
            <RedirectAuthenticatedUser>
              <Privacy />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
