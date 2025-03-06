
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Download, Share, Moon, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SleepChart } from "./SleepChart";
import { useState } from "react";

// Tipos para el componente
type SleepPeriod = "deep" | "light" | "awake";
type SleepData = {
  time: string;
  status: SleepPeriod;
  heartRate: number;
  respiratoryRate: number;
};

// Datos de ejemplo
const sampleDailyData: SleepData[] = [
  { time: "20:00", status: "awake", heartRate: 120, respiratoryRate: 30 },
  { time: "21:00", status: "light", heartRate: 110, respiratoryRate: 28 },
  { time: "22:00", status: "deep", heartRate: 95, respiratoryRate: 24 },
  { time: "23:00", status: "deep", heartRate: 90, respiratoryRate: 22 },
  { time: "00:00", status: "deep", heartRate: 88, respiratoryRate: 22 },
  { time: "01:00", status: "light", heartRate: 100, respiratoryRate: 25 },
  { time: "02:00", status: "deep", heartRate: 90, respiratoryRate: 23 },
  { time: "03:00", status: "deep", heartRate: 92, respiratoryRate: 23 },
  { time: "04:00", status: "light", heartRate: 105, respiratoryRate: 26 },
  { time: "05:00", status: "awake", heartRate: 115, respiratoryRate: 28 },
  { time: "06:00", status: "light", heartRate: 108, respiratoryRate: 27 },
  { time: "07:00", status: "awake", heartRate: 125, respiratoryRate: 32 },
];

// Componente principal
const SleepPatterns = () => {
  const { t } = useTranslation();
  const [timeRange, setTimeRange] = useState<"daily" | "weekly" | "monthly">("daily");
  
  // Resumen estadístico de los datos de sueño
  const totalSleepTime = sampleDailyData.filter(d => d.status !== "awake").length; // Horas
  const deepSleepTime = sampleDailyData.filter(d => d.status === "deep").length; // Horas
  const lightSleepTime = sampleDailyData.filter(d => d.status === "light").length; // Horas
  
  return (
    <Card className="p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Moon className="h-5 w-5 text-indigo-400" />
          <h2 className="text-xl font-semibold">{t("sleep.patterns")}</h2>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1" 
            onClick={() => console.log("Download sleep data")}
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">{t("download")}</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => console.log("Share sleep data")}
          >
            <Share className="h-4 w-4" />
            <span className="hidden sm:inline">{t("share")}</span>
          </Button>
        </div>
      </div>
      
      {/* Selector de Período */}
      <div className="flex space-x-2 mb-6">
        {["daily", "weekly", "monthly"].map((range) => (
          <Button
            key={range}
            variant={timeRange === range ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange(range as "daily" | "weekly" | "monthly")}
          >
            {t(`sleep.${range}`)}
          </Button>
        ))}
      </div>
      
      {/* Estadísticas de sueño */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-4 rounded-lg text-center"
        >
          <p className="text-sm text-secondary-foreground">{t("sleep.total")}</p>
          <p className="text-2xl font-semibold text-blue-700">{totalSleepTime}h</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-indigo-50 p-4 rounded-lg text-center"
        >
          <p className="text-sm text-secondary-foreground">{t("sleep.deep")}</p>
          <p className="text-2xl font-semibold text-indigo-700">{deepSleepTime}h</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-purple-50 p-4 rounded-lg text-center"
        >
          <p className="text-sm text-secondary-foreground">{t("sleep.light")}</p>
          <p className="text-2xl font-semibold text-purple-700">{lightSleepTime}h</p>
        </motion.div>
      </div>
      
      {/* Gráfico de patrones de sueño */}
      <div className="h-64 mb-4">
        <SleepChart data={sampleDailyData} />
      </div>
      
      {/* Leyenda */}
      <div className="flex justify-center space-x-6 text-sm mt-4">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-indigo-700 rounded-full mr-1"></span>
          <span>{t("sleep.deep")}</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-purple-400 rounded-full mr-1"></span>
          <span>{t("sleep.light")}</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-amber-300 rounded-full mr-1"></span>
          <span>{t("sleep.awake")}</span>
        </div>
      </div>
    </Card>
  );
};

export default SleepPatterns;
