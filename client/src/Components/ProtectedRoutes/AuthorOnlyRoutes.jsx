import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../utils/context/AuthContext";

export const AuthorOnlyRoutes = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (user.role !== "Author")
    return <Navigate to="/user" state={{ from: location }} replace />;

  return <>{children}</>;
};
