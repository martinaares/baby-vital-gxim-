
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hospital } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BluetoothStatus from "../components/BluetoothStatus";
import UserProfile from "../components/UserProfile";
import PremiumSection from "../components/PremiumSection";
import LanguageSelector from "../components/LanguageSelector";

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background p-6">
      <BluetoothStatus connected={false} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-2xl"
      >
        <header className="mb-8">
          <Link 
            to="/" 
            className="mb-4 inline-flex items-center text-secondary-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back.to.monitor')}
          </Link>
          <h1 className="text-3xl font-semibold text-foreground">{t('settings')}</h1>
        </header>

        <div className="space-y-6">
          <UserProfile />
          <PremiumSection />

          {/* Language Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-lg"
          >
            <LanguageSelector />
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
