import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Navegación
      "back.to.monitor": "Volver al monitor",
      "settings": "Ajustes",
      
      // Panel principal
      "app.title": "Monitor Baby Vital",
      "app.welcome": "Bienvenido a Monitor Baby Vital",
      "app.subtitle": "Accede a tu cuenta para empezar a cuidar de tu bebé con amor",
      "monitor.active": "Monitoreo activo. Todos los signos vitales están siendo registrados.",
      "monitor.inactive": "Por favor conecta tu dispositivo de monitoreo para comenzar a registrar signos vitales.",
      
      // Signos Vitales
      "heart.rate": "Ritmo Cardíaco",
      "temperature": "Temperatura",
      "respiratory.rate": "Frecuencia Respiratoria",
      "baby.state": "Estado del bebé",
      "baby.temperature": "Temperatura",
      "baby.breathing": "Frecuencia Respiratoria",
      
      // Ajustes
      "language": "Idioma",
      "registered.babies": "Bebés Registrados",
      "add.baby": "Añadir Bebé",
      "bluetooth.devices": "Dispositivos Bluetooth",
      "scan": "Escanear",
      "no.devices": "No hay dispositivos disponibles.",
      
      // Estado de Conexión
      "connected": "Conectado",
      "disconnected": "Desconectado",
      
      // Weekly Records
      "weekly.records": "Registros Semanales",
      "current.week": "Semana Actual",
      "no.records": "No hay registros disponibles para esta semana",
      "download": "Descargar",
      "share": "Compartir",
      
      // Baby Management
      "no.babies.registered": "No hay bebés registrados aún",
      "select.baby": "Seleccionar Bebé",
      
      // Autenticación
      "login.title": "¡Bienvenido de nuevo!",
      "login.subtitle": "Accede al panel de control de tu bebé",
      "login.email": "Correo electrónico",
      "login.password": "Contraseña",
      "login.forgot": "¿Olvidaste tu contraseña?",
      "login.action": "Iniciar sesión",
      "login.loading": "Iniciando sesión...",
      "login.no.account": "¿No tienes una cuenta?",
      "login.register": "Crear cuenta",
      "login.success": "¡Bienvenido de nuevo!",
      "login.welcome": "Has iniciado sesión correctamente",
      "login.error": "Error de inicio de sesión",
      "login.invalid": "Correo o contraseña inválidos",
      
      "register.title": "Crear Cuenta",
      "register.subtitle": "Comienza a monitorear los signos vitales de tu bebé",
      "register.firstName": "Nombre",
      "register.firstName.placeholder": "Juan",
      "register.lastName": "Apellidos",
      "register.lastName.placeholder": "Pérez",
      "register.email": "Correo electrónico",
      "register.password": "Contraseña",
      "register.password.requirements": "Al menos 8 caracteres con letras y números",
      "register.action": "Crear cuenta",
      "register.loading": "Creando cuenta...",
      "register.have.account": "¿Ya tienes una cuenta?",
      "register.login": "Iniciar sesión",
      "register.success": "¡Cuenta creada!",
      "register.verification": "Por favor revisa tu correo para verificar tu cuenta",
      "register.error": "Error al registrarse",
      
      "verify.title": "Verifica tu Correo",
      "verify.description": "Hemos enviado un enlace de verificación a tu correo electrónico. Por favor revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta.",
      "verify.login": "Volver a iniciar sesión",
      "verify.no.email": "¿No recibiste el correo?",
      "verify.resend": "Reenviar verificación",
      
      "reset.title": "Restablecer Contraseña",
      "reset.description": "Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.",
      "reset.email": "Correo electrónico",
      "reset.action": "Enviar enlace",
      "reset.loading": "Enviando...",
      "reset.back": "Volver a iniciar sesión",
      "reset.error": "Error al enviar el enlace",
      "reset.sent.title": "Revisa tu Correo",
      "reset.sent.description": "Si existe una cuenta con este correo, hemos enviado un enlace para restablecer la contraseña.",
      "reset.back.login": "Volver a iniciar sesión",
      
      "logout": "Cerrar sesión",
      "logout.success": "Sesión cerrada",
      "logout.message": "Has cerrado sesión correctamente",
      
      // Patrones de Sueño
      "sleep.patterns": "Patrones de Sueño",
      "sleep.daily": "Diario",
      "sleep.weekly": "Semanal",
      "sleep.monthly": "Mensual",
      "sleep.total": "Sueño Total",
      "sleep.deep": "Sueño Profundo",
      "sleep.light": "Sueño Ligero",
      "sleep.awake": "Despierto",
      "sleep.analysis": "Análisis de Sueño",
      
      // User Profile
      "personal.info": "Información Personal",
      "name": "Nombre completo",
      "email": "Correo electrónico",
      "member.since": "Miembro desde",
      "health.center": "Centro de salud",
      "account.type": "Tipo de cuenta",
      "edit.profile": "Editar perfil",
      "not.specified": "Sin completar",
      "newborn": "Recién nacido",
      "months": "meses",
      "age": "Edad",
      "birth.date": "Fecha de nacimiento",
      "weight": "Peso",
      "height": "Altura",
      "device": "Dispositivo",
      "medical.info": "Información Médica",
      "health.center.placeholder": "Ingrese el nombre del centro de salud",
      "pediatrician": "Pediatra",
      "pediatrician.placeholder": "Ingrese el nombre del pediatra",
      "allow.access": "Permitir acceso de solo lectura al pediatra",
      "phone": "Teléfono",

      // Premium Features
      "premium.title": "Versión Premium",
      "premium.description": "Disfruta de Monitor Baby Vital sin anuncios",
      "premium.price": "Suscribirme por 2,99 €/mes",
      "premium.button": "Suscribirme",
      "premium.success": "¡Gracias por hacerte Premium!",
      "premium.success.detail": "Ahora disfrutas de una experiencia sin anuncios",
      "premium.benefits": "Eliminar toda la publicidad",
      
      "edit": "Editar",
      "save": "Guardar",
      "delete": "Eliminar",
      "cancel": "Cancelar",
      "delete.baby.title": "¿Eliminar bebé?",
      "delete.baby.description": "Esta acción no se puede deshacer. ¿Estás seguro de que quieres eliminar este bebé?",
      "babies": "bebés",
      
      // Pediatric Tips
      "tips.title": "Consejos Pediátricos",
      "tips.sleep.title": "Sueño del bebé",
      "tips.sleep.tip1": "Mantén un horario regular para dormir",
      "tips.sleep.tip2": "Crea una rutina relajante antes de dormir",
      "tips.nutrition.title": "Alimentación",
      "tips.nutrition.tip1": "Ofrece alimentos variados y nutritivos",
      "tips.nutrition.tip2": "Establece horarios regulares de comida",
      "tips.hygiene.title": "Higiene",
      "tips.hygiene.tip1": "Baña al bebé con agua tibia",
      "tips.hygiene.tip2": "Limpia suavemente el área del pañal",
      "tips.alerts.title": "Signos de alerta",
      "tips.alerts.tip1": "Fiebre superior a 38°C",
      "tips.alerts.tip2": "Cambios en el apetito o sueño",
      "tips.development.title": "Desarrollo",
      "tips.development.tip1": "Estimula el desarrollo con juegos",
      "tips.development.tip2": "Observa los hitos del desarrollo",

      // Medical Appointments
      "appointments.title": "Citas Médicas",
      "appointments.add": "Añadir cita médica",
      "appointments.new": "Nueva cita médica",
      "appointments.date": "Fecha",
      "appointments.time": "Hora",
      "appointments.reason": "Motivo",
      "appointments.location": "Centro médico",
      "appointments.doctor": "Pediatra",
      "appointments.empty": "No hay citas médicas registradas",
      "appointments.notify": "Recordatorio",
      "appointments.notification": "Activar notificación",
    }
  },
  en: {
    translation: {
      // Navigation
      "back.to.monitor": "Back to monitor",
      "settings": "Settings",
      
      // Dashboard
      "app.title": "Monitor Baby Vital",
      "app.welcome": "Welcome to Monitor Baby Vital",
      "app.subtitle": "Sign in to your account to start taking care of your baby with love",
      "monitor.active": "Monitoring active. All vital signs are being recorded.",
      "monitor.inactive": "Please connect your monitoring device to begin tracking vital signs.",
      
      // Vital Signs
      "heart.rate": "Heart Rate",
      "temperature": "Temperature",
      "respiratory.rate": "Respiratory Rate",
      "baby.state": "Baby State",
      "baby.temperature": "Temperature",
      "baby.breathing": "Breathing Rate",
      
      // Settings
      "language": "Language",
      "registered.babies": "Registered Babies",
      "add.baby": "Add Baby",
      "bluetooth.devices": "Bluetooth Devices",
      "scan": "Scan",
      "no.devices": "No devices available.",
      
      // Connection Status
      "connected": "Connected",
      "disconnected": "Disconnected",
      
      // Weekly Records
      "weekly.records": "Weekly Records",
      "current.week": "Current Week",
      "no.records": "No records available for this week",
      "download": "Download",
      "share": "Share",
      
      // Baby Management
      "no.babies.registered": "No babies registered yet",
      "select.baby": "Select Baby",
      
      // Authentication
      "login.title": "Welcome back!",
      "login.subtitle": "Access your baby monitoring dashboard",
      "login.email": "Email",
      "login.password": "Password",
      "login.forgot": "Forgot password?",
      "login.action": "Sign in",
      "login.loading": "Signing in...",
      "login.no.account": "Don't have an account?",
      "login.register": "Create account",
      "login.success": "Welcome back!",
      "login.welcome": "You have successfully logged in",
      "login.error": "Login failed",
      "login.invalid": "Invalid email or password",
      
      "register.title": "Create Account",
      "register.subtitle": "Start monitoring your baby's vital signs",
      "register.firstName": "First Name",
      "register.firstName.placeholder": "John",
      "register.lastName": "Last Name",
      "register.lastName.placeholder": "Doe",
      "register.email": "Email",
      "register.password": "Password",
      "register.password.requirements": "At least 8 characters with letters and numbers",
      "register.action": "Create account",
      "register.loading": "Creating account...",
      "register.have.account": "Already have an account?",
      "register.login": "Sign in",
      "register.success": "Account created!",
      "register.verification": "Please check your email to verify your account",
      "register.error": "Registration failed",
      
      "verify.title": "Verify Your Email",
      "verify.description": "We've sent a verification link to your email address. Please check your inbox and click the link to activate your account.",
      "verify.login": "Back to sign in",
      "verify.no.email": "Didn't receive an email?",
      "verify.resend": "Resend verification",
      
      "reset.title": "Reset Password",
      "reset.description": "Enter your email address and we'll send you a link to reset your password.",
      "reset.email": "Email",
      "reset.action": "Send reset link",
      "reset.loading": "Sending...",
      "reset.back": "Back to sign in",
      "reset.error": "Failed to send reset link",
      "reset.sent.title": "Check Your Email",
      "reset.sent.description": "If an account exists with this email, we've sent a password reset link.",
      "reset.back.login": "Back to sign in",
      
      "logout": "Sign out",
      "logout.success": "Signed out",
      "logout.message": "You have been successfully signed out",
      
      // Sleep Patterns
      "sleep.patterns": "Sleep Patterns",
      "sleep.daily": "Daily",
      "sleep.weekly": "Weekly",
      "sleep.monthly": "Monthly",
      "sleep.total": "Total Sleep",
      "sleep.deep": "Deep Sleep",
      "sleep.light": "Light Sleep",
      "sleep.awake": "Awake",
      "sleep.analysis": "Sleep Analysis",
      
      // User Profile
      "personal.info": "Personal Information",
      "name": "Full name",
      "email": "Email",
      "member.since": "Member since",
      "health.center": "Health center",
      "account.type": "Account type",
      "edit.profile": "Edit profile",
      "not.specified": "Not specified",
      "newborn": "Newborn",
      "months": "months",
      "age": "Age",
      "birth.date": "Birth date",
      "weight": "Weight",
      "height": "Height",
      "device": "Device",
      "medical.info": "Medical Information",
      "health.center.placeholder": "Enter health center name",
      "pediatrician": "Pediatrician",
      "pediatrician.placeholder": "Enter pediatrician's name",
      "allow.access": "Allow read-only access to pediatrician",
      "phone": "Phone",

      // Premium Features
      "premium.title": "Premium Version",
      "premium.description": "Enjoy Monitor Baby Vital without ads",
      "premium.price": "Subscribe for $2.99/month",
      "premium.button": "Subscribe now",
      "premium.success": "Thanks for going Premium!",
      "premium.success.detail": "You now enjoy an ad-free experience",
      "premium.benefits": "Remove all ads",
      
      "edit": "Edit",
      "save": "Save",
      "delete": "Delete",
      "cancel": "Cancel",
      "delete.baby.title": "Delete baby?",
      "delete.baby.description": "This action cannot be undone. Are you sure you want to delete this baby?",
      "babies": "babies",
      
      // Pediatric Tips
      "tips.title": "Pediatric Tips",
      "tips.sleep.title": "Baby Sleep",
      "tips.sleep.tip1": "Maintain a regular sleep schedule",
      "tips.sleep.tip2": "Create a relaxing bedtime routine",
      "tips.nutrition.title": "Nutrition",
      "tips.nutrition.tip1": "Offer varied and nutritious foods",
      "tips.nutrition.tip2": "Establish regular meal times",
      "tips.hygiene.title": "Hygiene",
      "tips.hygiene.tip1": "Bathe baby in warm water",
      "tips.hygiene.tip2": "Gently clean diaper area",
      "tips.alerts.title": "Warning Signs",
      "tips.alerts.tip1": "Fever above 38°C",
      "tips.alerts.tip2": "Changes in appetite or sleep",
      "tips.development.title": "Development",
      "tips.development.tip1": "Stimulate development through play",
      "tips.development.tip2": "Observe developmental milestones",

      // Medical Appointments
      "appointments.title": "Medical Appointments",
      "appointments.add": "Add appointment",
      "appointments.new": "New appointment",
      "appointments.date": "Date",
      "appointments.time": "Time",
      "appointments.reason": "Reason",
      "appointments.location": "Medical center",
      "appointments.doctor": "Pediatrician",
      "appointments.empty": "No medical appointments registered",
      "appointments.notify": "Reminder",
      "appointments.notification": "Enable notification",
    }
  },
  fr: {
    translation: {
      // French translations
      "edit": "Modifier",
      "save": "Enregistrer",
      "delete": "Supprimer",
      "cancel": "Annuler",
      "not.specified": "Non spécifié",
      "delete.baby.title": "Supprimer le bébé?",
      "delete.baby.description": "Cette action ne peut pas être annulée. Êtes-vous sûr de vouloir supprimer ce bébé?",
      "babies": "bébés",
      "add.baby": "Ajouter un bébé"
    }
  },
  de: {
    translation: {
      // German translations
      "edit": "Bearbeiten",
      "save": "Speichern",
      "delete": "Löschen",
      "cancel": "Abbrechen",
      "not.specified": "Nicht angegeben",
      "delete.baby.title": "Beben löschen?",
      "delete.baby.description": "Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie diesen Baby löschen möchten?",
      "babies": "Beben",
      "add.baby": "Beben hinzufügen"
    }
  },
  // Add more languages as needed (it, pt, nl, pl, sv, ro, cs, el)
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
