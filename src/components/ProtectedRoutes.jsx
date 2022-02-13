import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoutes;
