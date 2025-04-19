
import { motion } from "framer-motion";
import { Heart, Thermometer, Wind } from "lucide-react";

interface VitalCardProps {
  type: "heart" | "temp" | "resp";
  value: number;
  unit: string;
  status: "normal" | "warning" | "alert";
  name: string; // Added name property to the interface
}

const VitalCard = ({ type, value, unit, status, name }: VitalCardProps) => {
  const icons = {
    heart: Heart,
    temp: Thermometer,
    resp: Wind,
  };

  const Icon = icons[type];

  const statusColors = {
    normal: "bg-secondary text-secondary-foreground",
    warning: "bg-warning text-warning-foreground",
    alert: "bg-alert text-alert-foreground",
  };

  const containerVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`rounded-lg p-6 shadow-sm ${statusColors[status]} transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <Icon className="h-6 w-6" />
        <span className="text-sm font-medium">Real-time</span>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline">
          <span className="text-4xl font-semibold">{value}</span>
          <span className="ml-1 text-sm">{unit}</span>
        </div>
        <p className="mt-2 text-sm opacity-90">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default VitalCard;
