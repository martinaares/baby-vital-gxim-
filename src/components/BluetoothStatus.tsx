
import { motion } from "framer-motion";
import { Bluetooth, BluetoothOff } from "lucide-react";

interface BluetoothStatusProps {
  connected: boolean;
}

const BluetoothStatus = ({ connected }: BluetoothStatusProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-4 right-4 rounded-full px-4 py-2 shadow-sm flex items-center gap-2 ${
        connected ? "bg-success text-success-foreground" : "bg-alert text-alert-foreground"
      }`}
    >
      {connected ? (
        <>
          <Bluetooth className="h-4 w-4" />
          <span className="text-sm font-medium">Connected</span>
        </>
      ) : (
        <>
          <BluetoothOff className="h-4 w-4" />
          <span className="text-sm font-medium">Disconnected</span>
        </>
      )}
    </motion.div>
  );
};

export default BluetoothStatus;
