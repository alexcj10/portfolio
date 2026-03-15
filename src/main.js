// ========================================
// MAIN ENTRY POINT
// ========================================

import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/components.css';

import { Router } from './router.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderProjects } from './pages/projects.js';
import { renderProjectDetail } from './pages/project-detail.js';
import { renderContact } from './pages/contact.js';

// ---- Theme Initialization ----
function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
}

initTheme();

// ---- Router Setup ----
const router = new Router([
  {
    path: '/',
    render: () => renderHome(),
  },
  {
    path: '/about',
    render: () => renderAbout(),
  },
  {
    path: '/projects',
    render: () => renderProjects(),
  },
  {
    path: '/project/:id',
    render: (params) => renderProjectDetail(params),
  },
  {
    path: '/contact',
    render: () => renderContact(),
  },
]);
