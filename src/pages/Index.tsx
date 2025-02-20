
import { useState } from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import VitalCard from "../components/VitalCard";
import BluetoothStatus from "../components/BluetoothStatus";

const Index = () => {
  const [isConnected] = useState(false);
  const [vitals] = useState({
    heartRate: { value: 120, status: "normal" as const },
    temperature: { value: 37.2, status: "normal" as const },
    respiratoryRate: { value: 30, status: "normal" as const },
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <BluetoothStatus connected={isConnected} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-4xl"
      >
        <header className="mb-8 text-center relative">
          <Link 
            to="/settings"
            className="absolute right-0 top-0 rounded-full p-2 text-secondary-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <Settings className="h-6 w-6" />
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-foreground"
          >
            Baby Vital Signs Monitor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-secondary-foreground"
          >
            Real-time monitoring of your baby's vital signs
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <VitalCard
            type="heart"
            value={vitals.heartRate.value}
            unit="bpm"
            status={vitals.heartRate.status}
          />
          <VitalCard
            type="temp"
            value={vitals.temperature.value}
            unit="°C"
            status={vitals.temperature.status}
          />
          <VitalCard
            type="resp"
            value={vitals.respiratoryRate.value}
            unit="br/min"
            status={vitals.respiratoryRate.status}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-lg bg-secondary p-6 text-center"
        >
          <p className="text-secondary-foreground">
            {isConnected
              ? "Monitoring active. All vital signs are being recorded."
              : "Please connect your monitoring device to begin tracking vital signs."}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
