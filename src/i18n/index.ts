
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "back.to.monitor": "Back to monitor",
      "settings": "Settings",
      
      // Dashboard
      "app.title": "Baby Vital Signs Monitor",
      "app.subtitle": "Real-time monitoring of your baby's vital signs",
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
      "no.babies": "No babies registered yet.",
      "bluetooth.devices": "Bluetooth Devices",
      "scan": "Scan",
      "no.devices": "No devices available.",
      
      // Connection Status
      "connected": "Connected",
      "disconnected": "Disconnected",
    }
  },
  es: {
    translation: {
      // Navegación
      "back.to.monitor": "Volver al monitor",
      "settings": "Ajustes",
      
      // Panel principal
      "app.title": "Monitor de Signos Vitales del Bebé",
      "app.subtitle": "Monitoreo en tiempo real de los signos vitales de tu bebé",
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
      "no.babies": "No hay bebés registrados aún.",
      "bluetooth.devices": "Dispositivos Bluetooth",
      "scan": "Escanear",
      "no.devices": "No hay dispositivos disponibles.",
      
      // Estado de Conexión
      "connected": "Conectado",
      "disconnected": "Desconectado",
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
