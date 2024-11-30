import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user"); // Substitua pelo estado de autenticação real
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
