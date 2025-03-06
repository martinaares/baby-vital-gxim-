
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const VerifyEmail = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <div className="bg-card rounded-lg shadow-lg p-8 border">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold mb-3">{t("verify.title")}</h1>
          <p className="text-secondary-foreground mb-6">
            {t("verify.description")}
          </p>
          
          <div className="space-y-4">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/login">{t("verify.login")}</Link>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              {t("verify.no.email")}{" "}
              <button className="text-primary hover:underline">
                {t("verify.resend")}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
