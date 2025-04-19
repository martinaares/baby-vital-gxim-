import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
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
    }
  },
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
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
