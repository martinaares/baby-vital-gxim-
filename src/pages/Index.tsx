import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Settings, BarChart } from "lucide-react";
import VitalCard from "../components/VitalCard";
import BluetoothStatus from "../components/BluetoothStatus";
import BabySelector from "../components/BabySelector";
import SleepPatterns from "../components/SleepPatterns";
import UserDropdown from "../components/UserDropdown";
import { mockBabies, type Baby } from "../utils/mockData";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { t } = useTranslation();
  const [isConnected] = useState(false);
  const [activeBaby, setActiveBaby] = useState<Baby>(mockBabies[0]);
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const vitalSigns = [
    {
      type: "heart" as const,
      name: t("heart.rate"),
      value: 128,
      unit: "bpm",
      status: "normal" as const,
      range: "110-160"
    },
    {
      type: "temp" as const,
      name: t("temperature"),
      value: 36.7,
      unit: "°C",
      status: "normal" as const,
      range: "36.5-37.5"
    },
    {
      type: "resp" as const,
      name: t("respiratory.rate"),
      value: 30,
      unit: "rpm",
      status: "normal" as const,
      range: "20-40"
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <BluetoothStatus connected={isConnected} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-5xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Monitor
          </h1>
          <div className="flex items-center space-x-4">
            <Link
              to="/weekly-records"
              className="hidden md:flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BarChart className="h-5 w-5" />
              <span>{t('weekly.records')}</span>
            </Link>
            <Link
              to="/settings"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Settings className="h-5 w-5" />
            </Link>
            <UserDropdown />
          </div>
        </div>

        <div className="mb-6">
          <BabySelector
            babies={mockBabies}
            activeBaby={activeBaby}
            onBabyChange={setActiveBaby}
          />
        </div>
        
        <p className="text-secondary-foreground mb-6">
          {isConnected ? t("monitor.active") : t("monitor.inactive")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {vitalSigns.map((sign, index) => (
            <VitalCard
              key={index}
              type={sign.type}
              name={sign.name}
              value={sign.value}
              unit={sign.unit}
              status={sign.status}
            />
          ))}
        </div>

        <div className="mb-8">
          <SleepPatterns />
        </div>
        
        <div className="md:hidden fixed bottom-4 right-4">
          <Link
            to="/weekly-records"
            className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg flex items-center justify-center"
          >
            <BarChart className="h-6 w-6" />
          </Link>
        </div>

        <div className="mt-8 rounded-lg border bg-card/50 backdrop-blur-sm p-4">
          <div className="bg-secondary/30 rounded-md p-4 text-center text-secondary-foreground">
            <p className="text-sm">Espacio reservado para anuncios</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
