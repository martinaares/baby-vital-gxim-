
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type PrivateRouteProps = {
  adminOnly?: boolean;
};

const PrivateRoute = ({ adminOnly = false }: PrivateRouteProps) => {
  // En una implementación provisional, usamos localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("userRole");
  
  // Verificar si el usuario está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Verificar si la ruta es solo para administradores
  if (adminOnly && userRole !== "admin") {
    return <Navigate to="/" replace />;
  }
  
  return <Outlet />;
};

export default PrivateRoute;
