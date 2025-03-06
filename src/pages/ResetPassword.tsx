
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // En una implementación real, aquí se conectaría con Supabase
      // const { error } = await supabase.auth.resetPasswordForEmail(email);
      
      // Simulación de envío exitoso
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      toast({
        title: t("reset.error"),
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
        </div>

        <div className="bg-card rounded-lg shadow-lg p-6 border">
          {!isSubmitted ? (
            <>
              <h2 className="text-xl font-semibold mb-4 text-center">{t("reset.title")}</h2>
              <p className="text-center text-secondary-foreground mb-6">
                {t("reset.description")}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t("reset.email")}</label>
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
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t("reset.loading") : t("reset.action")}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <Link to="/login" className="text-primary hover:underline">
                    &larr; {t("reset.back")}
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <div className="text-center p-2">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4">{t("reset.sent.title")}</h2>
              <p className="text-secondary-foreground mb-6">
                {t("reset.sent.description")}
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">{t("reset.back.login")}</Link>
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
