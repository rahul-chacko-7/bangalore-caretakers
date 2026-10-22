import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BUSINESS_SCHEMA } from './data/site';

if (!document.getElementById('business-schema')) {
  const schema = document.createElement('script'); schema.id = 'business-schema'; schema.type = 'application/ld+json'; schema.textContent = JSON.stringify(BUSINESS_SCHEMA); document.head.appendChild(schema);
}

// Register Service Worker for Low-Network / Offline Speed Optimization
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('⚡ [PWA] ServiceWorker registered for 2G/low-network caching:', registration.scope);
      })
      .catch((err) => {
        console.warn('⚠️ [PWA] ServiceWorker registration failed:', err);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
