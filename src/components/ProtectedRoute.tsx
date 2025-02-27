import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { username } = useAuth();

  // Redirect to login page if user is not authenticated
  return username ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
