import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/components.css';

// ---- Theme Initialization ----
const initTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
};

initTheme();

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
