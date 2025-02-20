
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BluetoothStatus from "../components/BluetoothStatus";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

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
          {/* Sección de Idioma */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border bg-card p-6"
          >
            <div className="mb-4 flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              <h2 className="text-xl font-semibold">{t('language')}</h2>
            </div>
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </motion.section>

          {/* Sección de Bebés */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-lg border bg-card p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Baby className="mr-2 h-5 w-5" />
                <h2 className="text-xl font-semibold">{t('registered.babies')}</h2>
              </div>
              <Link
                to="/babies/new"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {t('add.baby')}
              </Link>
            </div>
            <div className="text-secondary-foreground">
              {t('no.babies')}
            </div>
          </motion.section>

          {/* Conexión Bluetooth */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg border bg-card p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{t('bluetooth.devices')}</h2>
              <button
                className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
                onClick={() => console.log("Escanear dispositivos")}
              >
                {t('scan')}
              </button>
            </div>
            <div className="text-secondary-foreground">
              {t('no.devices')}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
