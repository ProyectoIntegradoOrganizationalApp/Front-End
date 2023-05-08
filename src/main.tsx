// Aplicación a montar
import { App } from './app';

// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './assets/css/index.css';

// Montaje de la app en el HTML
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);