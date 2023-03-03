import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthenticatedRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return <div>loading</div>;
  } else {
    if (user) return <> {children} </>;
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};
