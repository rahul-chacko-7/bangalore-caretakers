import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
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

const container = document.getElementById('root');
const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered pages ship full HTML: hydrate it instead of replacing it,
// so visitors and crawlers see the same content with no loading flash.
if (container.hasChildNodes()) ReactDOM.hydrateRoot(container, tree);
else ReactDOM.createRoot(container).render(tree);
