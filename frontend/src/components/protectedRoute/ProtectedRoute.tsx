import React from "react";
import { Navigate } from "react-router-dom";
import TokenService from "../../services/Token";

interface ProtectedRouteProps {
  component: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const userToken = TokenService.getUser();

  if (!userToken) {
    return <Navigate to="/" replace />;
  }

  return component;
};

export default ProtectedRoute;
