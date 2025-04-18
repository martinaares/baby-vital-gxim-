import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Hospital } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BluetoothStatus from "../components/BluetoothStatus";
import UserProfile from "../components/UserProfile";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [healthCenter, setHealthCenter] = useState("");
  const [pediatrician, setPediatrician] = useState("");
  const [allowAccess, setAllowAccess] = useState(false);

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
          <UserProfile />

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-lg"
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

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-lg"
          >
            <div className="mb-4 flex items-center">
              <Hospital className="mr-2 h-5 w-5" />
              <h2 className="text-xl font-semibold">Información Médica</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Centro de Salud</label>
                <input
                  type="text"
                  value={healthCenter}
                  onChange={(e) => setHealthCenter(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Nombre del centro de salud"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pediatra</label>
                <input
                  type="text"
                  value={pediatrician}
                  onChange={(e) => setPediatrician(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Nombre del pediatra"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="allowAccess"
                  checked={allowAccess}
                  onChange={(e) => setAllowAccess(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <label htmlFor="allowAccess" className="text-sm">
                  Permitir acceso de solo lectura al pediatra
                </label>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
