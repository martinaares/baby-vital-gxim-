
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Baby, Heart } from "lucide-react";

const Welcome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario ya está autenticado
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    // Si ya está autenticado, redirige al dashboard después de la animación
    if (isAuthenticated === "true") {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      // Si no está autenticado, redirige al login después de la animación
      const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <div className="mb-8 flex justify-center">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
            className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center"
          >
            <Baby className="h-12 w-12 text-primary" />
          </motion.div>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Monitor Baby Vital
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-secondary-foreground text-lg mb-8 flex items-center justify-center gap-2"
        >
          <Heart className="h-4 w-4 text-alert" />
          La app para cuidar a tu bebé con amor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-card p-6 rounded-2xl max-w-sm mx-auto"
        >
          <p className="text-secondary-foreground text-sm">
            Accede para comenzar a cuidar de tu pequeño
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;
