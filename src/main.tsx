import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';
import { App } from './app';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);