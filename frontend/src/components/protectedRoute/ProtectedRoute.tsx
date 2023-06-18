import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Navigate } from "react-router-dom";
import TokenService from "../../services/Token";

interface ProtectedRouteProps {
  component: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const { user } = useAppSelector((state) => state.auth.auth);

  const userToken = TokenService.getUser();
  const userValid =
    user?.email && userToken?.email && userToken?.email === user?.email;

  if (!userValid) {
    TokenService.removeUser();
    return <Navigate to="/" replace />;
  }

  return component;
};

export default ProtectedRoute;
