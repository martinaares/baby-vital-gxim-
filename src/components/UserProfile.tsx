
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Baby, Mail, User, Hospital, Phone, Edit2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { mockBabies } from "@/utils/mockData";
import { useAuth } from "@/hooks/useAuth";
import { Badge } from "@/components/ui/badge";

interface BabyProfile {
  id: string;
  name: string;
  birthDate: string;
  weight?: string;
  height?: string;
  deviceId?: string;
  sharedWith?: string[];
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  healthCenter: string;
  pediatrician: string;
  phone: string;
  contactEmail: string;
}

const UserProfile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [babies, setBabies] = useState<BabyProfile[]>(mockBabies);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: user?.email || "",
    healthCenter: "",
    pediatrician: "",
    phone: "",
    contactEmail: "",
  });

  const handleUserDataChange = (field: keyof UserData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    // Aquí se implementaría la lógica para guardar en backend
  };

  const handleDeleteBaby = (id: string) => {
    setBabies(prev => prev.filter(baby => baby.id !== id));
  };

  const renderEditableField = (label: string, value: string, field: keyof UserData) => (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">{label}</p>
      {isEditing ? (
        <Input
          value={value}
          onChange={handleUserDataChange(field)}
          placeholder={t('not.specified')}
          className="max-w-md"
        />
      ) : (
        <p className="font-medium">
          {value || t('not.specified')}
        </p>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 rounded-lg bg-white/60 dark:bg-white/10"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <User className="w-5 h-5" />
            {t('personal.info')}
          </h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => isEditing ? handleSaveChanges() : setIsEditing(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            {isEditing ? t('save') : t('edit')}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderEditableField(t('name'), userData.firstName, 'firstName')}
          {renderEditableField(t('email'), userData.email, 'email')}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 rounded-lg bg-white/60 dark:bg-white/10"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Hospital className="w-5 h-5" />
            {t('medical.info')}
          </h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => isEditing ? handleSaveChanges() : setIsEditing(true)}
          >
            <Edit2 className="w-4 h-4 mr-2" />
            {isEditing ? t('save') : t('edit')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderEditableField(t('health.center'), userData.healthCenter, 'healthCenter')}
          {renderEditableField(t('pediatrician'), userData.pediatrician, 'pediatrician')}
          {renderEditableField(t('phone'), userData.phone, 'phone')}
          {renderEditableField(t('email'), userData.contactEmail, 'contactEmail')}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 rounded-lg bg-white/60 dark:bg-white/10"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Baby className="w-5 h-5" />
            {t('registered.babies')}
          </h2>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-primary/10">
              {babies.length} {t('babies')}
            </Badge>
            <Button variant="outline" size="sm" className="ml-2">
              <Plus className="w-4 h-4 mr-2" />
              {t('add.baby')}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {babies.map((baby) => (
            <Card key={baby.id} className="bg-white/40 border-none">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="font-semibold">{baby.name}</h3>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t('delete.baby.title')}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t('delete.baby.description')}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeleteBaby(baby.id)}
                        className="bg-destructive text-destructive-foreground"
                      >
                        {t('delete')}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">{t('age')}:</span>{' '}
                  {baby.birthDate ? formatAge(baby.birthDate) : t('not.specified')}
                </p>
                <p>
                  <span className="text-muted-foreground">{t('birth.date')}:</span>{' '}
                  {formatDate(baby.birthDate)}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

const formatAge = (birthDate: string) => {
  const { t } = useTranslation();
  const birth = new Date(birthDate);
  const today = new Date();
  const months = (today.getFullYear() - birth.getFullYear()) * 12 + today.getMonth() - birth.getMonth();
  return months < 1 ? t('newborn') : `${months} ${t('months')}`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default UserProfile;
