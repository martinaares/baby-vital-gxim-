
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type PrivateRouteProps = {
  adminOnly?: boolean;
};

const PrivateRoute = ({ adminOnly = false }: PrivateRouteProps) => {
  const { isAuthenticated, isAdmin } = useAuth();
  
  // Verificar si el usuario está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Verificar si la ruta es solo para administradores
  if (adminOnly && !isAdmin()) {
    return <Navigate to="/" replace />;
  }
  
  return <Outlet />;
};

export default PrivateRoute;
