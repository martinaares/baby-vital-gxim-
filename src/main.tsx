
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Función para establecer sesión inicial durante el desarrollo (SOLO PARA DEMOSTRACIÓN)
const setupDemoSession = () => {
  if (import.meta.env.DEV) {
    // Solo configurar usuario demo en entorno de desarrollo
    if (!localStorage.getItem("isAuthenticated")) {
      // Simulación de usuario para desarrollo
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", "user");
      localStorage.setItem("userEmail", "demo@example.com");
    }
  }
};

// Comentar esta línea cuando desee activar la autenticación completa
// setupDemoSession();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
