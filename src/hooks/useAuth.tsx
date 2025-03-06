
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Definir el tipo para el usuario
type User = {
  email: string;
  role: string;
} | null;

// Definir el tipo para el contexto de autenticación
type AuthContextType = {
  user: User;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
};

// Crear el contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Verificar el estado de autenticación al cargar el componente
  useEffect(() => {
    const checkAuth = () => {
      const isAuth = localStorage.getItem("isAuthenticated") === "true";
      if (isAuth) {
        const email = localStorage.getItem("userEmail");
        const role = localStorage.getItem("userRole") || "user";
        setUser({ email: email || "", role });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };
    
    // Verificar la autenticación y establecer un temporizador para la sesión
    checkAuth();
    
    // Establecer un tiempo de expiración de la sesión (30 minutos)
    const sessionTimeout = setTimeout(() => {
      if (localStorage.getItem("isAuthenticated") === "true") {
        logout();
      }
    }, 30 * 60 * 1000); // 30 minutos
    
    // Limpiar el temporizador al desmontar
    return () => clearTimeout(sessionTimeout);
  }, [navigate]);

  const login = async (email: string, password: string) => {
    // En una implementación real, esto se conectaría con Supabase
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // });
    
    // Simulación de inicio de sesión
    setIsLoading(true);
    
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        try {
          // Validación simple (esta es solo una simulación)
          if (email === "admin@example.com" && password === "password") {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("userRole", "admin");
            localStorage.setItem("userEmail", email);
            setUser({ email, role: "admin" });
          } else if (email && password) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("userRole", "user");
            localStorage.setItem("userEmail", email);
            setUser({ email, role: "user" });
          } else {
            throw new Error("Invalid credentials");
          }
          
          setIsLoading(false);
          resolve();
        } catch (error) {
          setIsLoading(false);
          reject(error);
        }
      }, 1000);
    });
  };

  const logout = () => {
    // En una implementación real, esto se conectaría con Supabase
    // await supabase.auth.signOut();
    
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    setUser(null);
    navigate("/login");
  };

  const isAdmin = () => {
    return user?.role === "admin";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
