
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // En una implementación real, aquí se conectaría con Supabase
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });
      
      // Simulación de login
      setTimeout(() => {
        // Simular validación
        if (email === "admin@example.com" && password === "password") {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userRole", "admin");
          localStorage.setItem("userEmail", email);
          toast({
            title: t("login.success"),
            description: t("login.welcome"),
          });
          navigate("/");
        } else if (email && password) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userRole", "user");
          localStorage.setItem("userEmail", email);
          toast({
            title: t("login.success"),
            description: t("login.welcome"),
          });
          navigate("/");
        } else {
          toast({
            title: t("login.error"),
            description: t("login.invalid"),
            variant: "destructive",
          });
        }
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      toast({
        title: t("login.error"),
        description: String(error),
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t("app.title")}</h1>
          <p className="text-secondary-foreground">{t("login.subtitle")}</p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-6 border">
          <h2 className="text-xl font-semibold mb-6 text-center">{t("login.title")}</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">{t("login.email")}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium">{t("login.password")}</label>
                <Link to="/reset-password" className="text-sm text-primary hover:underline">
                  {t("login.forgot")}
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? t("login.loading") : t("login.action")}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {t("login.no.account")}{" "}
              <Link to="/register" className="text-primary hover:underline">
                {t("login.register")}
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
