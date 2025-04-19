
import { useTranslation } from "react-i18next";
import { Crown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const PremiumSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleSubscribe = () => {
    // This is a placeholder for the actual subscription logic
    // You'll need to implement Stripe integration here
    toast({
      title: t("premium.success"),
      description: t("premium.success.detail"),
      duration: 5000,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-6 rounded-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <Crown className="w-6 h-6 text-yellow-400" />
        <h2 className="text-xl font-semibold">{t("premium.title")}</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4 bg-white/40 p-4 rounded-lg">
          <Heart className="w-5 h-5 text-pink-400 mt-1" />
          <div>
            <p className="font-medium">{t("premium.description")}</p>
            <ul className="mt-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                ✨ {t("premium.benefits")}
              </li>
            </ul>
          </div>
        </div>
        
        <Button 
          onClick={handleSubscribe}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500"
        >
          {t("premium.price")}
        </Button>
      </div>
    </motion.section>
  );
};

export default PremiumSection;
