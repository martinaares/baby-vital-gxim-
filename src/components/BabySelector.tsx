
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Baby {
  id: string;
  name: string;
  birthDate: string;
}

interface BabySelectorProps {
  babies: Baby[];
  activeBaby: Baby | null;
  onBabyChange: (baby: Baby) => void;
}

const BabySelector = ({ babies, activeBaby, onBabyChange }: BabySelectorProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  if (!activeBaby) {
    return (
      <div className="text-secondary-foreground text-sm">
        {t('no.babies')}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 text-foreground hover:bg-secondary transition-colors"
      >
        <span className="font-medium">{activeBaby.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && babies.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 mt-2 w-full min-w-[200px] rounded-lg border bg-card shadow-lg z-50"
        >
          {babies
            .filter((baby) => baby.id !== activeBaby.id)
            .map((baby) => (
              <button
                key={baby.id}
                onClick={() => {
                  onBabyChange(baby);
                  setIsOpen(false);
                }}
                className="flex w-full items-center px-4 py-2 text-left hover:bg-secondary transition-colors"
              >
                {baby.name}
              </button>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default BabySelector;
