
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Baby, Mail, User, Hospital, Phone, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

const UserProfile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [babies] = useState<BabyProfile[]>(mockBabies);
  const [isEditing, setIsEditing] = useState(false);
  
  // Add missing state variables
  const [healthCenter, setHealthCenter] = useState("Centro de Salud Infantil San Miguel");
  const [pediatrician, setPediatrician] = useState("Dra. Ana María Sánchez");
  const [phone, setPhone] = useState("+34 912 345 678");
  const [email, setEmail] = useState("pediatria.sanmiguel@salud.es");
  
  const formatName = (email: string) => {
    const name = email?.split('@')[0] || "";
    return name.replace('.', ' ').split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

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
            Información Personal
          </h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Editar
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Nombre completo</p>
            <p className="font-medium flex items-center gap-2">
              {formatName(user?.email || "Usuario")}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Correo electrónico</p>
            <p className="font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {user?.email || "correo@ejemplo.com"}
            </p>
          </div>
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
            Información Médica
          </h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Editar
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Centro pediátrico</p>
            <p className="font-medium">{healthCenter}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Pediatra asignado</p>
            <p className="font-medium">{pediatrician}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Teléfono de contacto</p>
            <p className="font-medium flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {phone}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Correo del centro</p>
            <p className="font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {email}
            </p>
          </div>
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
            Bebés Registrados
          </h2>
          <Badge variant="outline" className="bg-primary/10">
            {babies.length} bebés
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {babies.map((baby) => (
            <Card key={baby.id} className="bg-white/40 border-none">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="font-semibold">{baby.name}</h3>
                <Button variant="ghost" size="sm">
                  <Edit2 className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">Edad:</span>{' '}
                  {baby.birthDate ? formatAge(baby.birthDate) : 'No especificado'}
                </p>
                <p>
                  <span className="text-muted-foreground">Fecha de nacimiento:</span>{' '}
                  {formatDate(baby.birthDate)}
                </p>
                {baby.weight && (
                  <p>
                    <span className="text-muted-foreground">Peso:</span>{' '}
                    {baby.weight}
                  </p>
                )}
                {baby.height && (
                  <p>
                    <span className="text-muted-foreground">Altura:</span>{' '}
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
  const birth = new Date(birthDate);
  const today = new Date();
  const months = (today.getFullYear() - birth.getFullYear()) * 12 + today.getMonth() - birth.getMonth();
  return months < 1 ? "Recién nacido" : `${months} meses`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default UserProfile;
