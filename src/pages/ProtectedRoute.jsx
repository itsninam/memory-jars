import React from "react";
import Loading from "../components/Loading";

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth/context/AuthContext";

function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
