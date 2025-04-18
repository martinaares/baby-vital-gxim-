
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Baby, Mail, User, Hospital, Calendar, Plus, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockBabies } from "@/utils/mockData";

interface BabyProfile {
  id: string;
  name: string;
  birthDate: string;
  weight?: string;
  height?: string;
  deviceId?: string;
  sharedWith?: string[];
}

const UserProfile = () => {
  const { t } = useTranslation();
  const [babies, setBabies] = useState<BabyProfile[]>(mockBabies);
  
  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    const months = (today.getFullYear() - birth.getFullYear()) * 12 + today.getMonth() - birth.getMonth();
    return months < 1 ? t('newborn') : `${months} ${t('months')}`;
  };

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          {t('personal.info')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{t('name')}</p>
            <p className="font-medium">Juan Pérez</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{t('email')}</p>
            <p className="font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              juan@ejemplo.com
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{t('registered.babies')}</p>
            <p className="font-medium flex items-center gap-2">
              <Baby className="w-4 h-4" />
              {babies.length}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{t('member.since')}</p>
            <p className="font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 rounded-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Baby className="w-5 h-5" />
            {t('registered.babies')}
          </h2>
          <Button size="sm" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            {t('add.baby')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {babies.map((baby) => (
            <div key={baby.id} className="bg-white/40 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{baby.name}</h3>
                <Button variant="ghost" size="sm">
                  <Edit2 className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">{t('age')}:</span>{' '}
                  {calculateAge(baby.birthDate)}
                </p>
                <p>
                  <span className="text-muted-foreground">{t('birth.date')}:</span>{' '}
                  {new Date(baby.birthDate).toLocaleDateString()}
                </p>
                {baby.weight && (
                  <p>
                    <span className="text-muted-foreground">{t('weight')}:</span>{' '}
                    {baby.weight}
                  </p>
                )}
                {baby.height && (
                  <p>
                    <span className="text-muted-foreground">{t('height')}:</span>{' '}
                    {baby.height}
                  </p>
                )}
                {baby.deviceId && (
                  <p>
                    <span className="text-muted-foreground">{t('device')}:</span>{' '}
                    {baby.deviceId}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <div className="glass-card p-4 rounded-lg">
        <div className="bg-secondary/30 rounded-md p-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/placeholder.svg" 
              alt="Ejemplo de publicidad" 
              className="w-24 h-24 object-cover rounded"
            />
            <div className="text-left">
              <p className="font-medium text-secondary-foreground">Publicidad Infantil (ejemplo)</p>
              <p className="text-sm text-muted-foreground">Productos y servicios para bebés</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
