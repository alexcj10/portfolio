// ========================================
// HASH-BASED SPA ROUTER
// ========================================

export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPage = null;

    window.addEventListener('hashchange', () => this.navigate());
    window.addEventListener('load', () => this.navigate());
  }

  navigate() {
    const hash = window.location.hash || '#/';
    const path = hash.slice(1); // remove #

    // Find matching route
    let route = null;
    let params = {};

    for (const r of this.routes) {
      const match = this.matchRoute(r.path, path);
      if (match) {
        route = r;
        params = match;
        break;
      }
    }

    if (!route) {
      // fallback to home
      window.location.hash = '#/';
      return;
    }

    this.renderPage(route, params);
  }

  matchRoute(pattern, path) {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);

    if (patternParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        params[patternParts[i].slice(1)] = pathParts[i];
      } else if (patternParts[i] !== pathParts[i]) {
        return null;
      }
    }
    return params;
  }

  renderPage(route, params) {
    const app = document.getElementById('app');
    if (!app) return;

    // Page transition out
    const pageContent = app.querySelector('.page-content');
    if (pageContent) {
      pageContent.classList.remove('page-active');
      pageContent.classList.add('page-enter');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    setTimeout(() => {
      app.innerHTML = '';

      // Render navbar
      if (route.showNav !== false) {
        app.insertAdjacentHTML('beforeend', this.getNavbar(route.path));
      }

      // Create page wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'page-content page-enter';
      wrapper.innerHTML = route.render(params);
      app.appendChild(wrapper);

      // Render footer (use insertAdjacentHTML to avoid detaching wrapper)
      if (route.showFooter !== false) {
        app.insertAdjacentHTML('beforeend', this.getFooter());
      }

      // Trigger page transition in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapper.classList.remove('page-enter');
          wrapper.classList.add('page-active');
        });
      });

      // Initialize scroll reveals
      this.initRevealObserver();

      // Update nav active state
      this.updateNavActive(route.path);

      // Re-attach event listeners
      this.initNavListeners();
      this.initThemeToggle();

      // Call page-specific init
      if (route.afterRender) {
        route.afterRender(params);
      }
    }, pageContent ? 200 : 0);
  }

  getNavbar(currentPath) {
    const links = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/projects', label: 'Projects' },
      { path: '/contact', label: 'Contact' },
    ];

    return `
      <nav class="navbar" id="navbar">
        <div class="navbar-inner">
          <a class="navbar-logo" href="#/">Alexcj<span class="text-gradient">.</span></a>
          <div class="navbar-links">
            ${links.map(l => `
              <a class="navbar-link ${currentPath === l.path ? 'active' : ''}" href="#${l.path}">${l.label}</a>
            `).join('')}
          </div>
          <div class="navbar-actions">
            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
              <span id="theme-icon">🌙</span>
            </button>
            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div class="mobile-menu" id="mobile-menu">
        ${links.map(l => `
          <a class="navbar-link" href="#${l.path}">${l.label}</a>
        `).join('')}
      </div>
    `;
  }

  getFooter() {
    return `
      <footer class="footer">
        <div class="container footer-inner">
          <div class="footer-left">
            <div class="footer-name">Alexcj<span class="text-gradient">.</span></div>
            <p>Building intelligent systems that think, analyze, and adapt.</p>
          </div>
          <div class="footer-links">
            <a href="https://github.com/alexcj10" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/alexcj10" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:alexcj10@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    `;
  }

  updateNavActive(path) {
    document.querySelectorAll('.navbar-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${path}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  initNavListeners() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        menu.classList.toggle('open');
      });

      // Close menu on link click
      menu.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', () => {
          btn.classList.remove('active');
          menu.classList.remove('open');
        });
      });
    }

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          navbar.style.borderBottomColor = 'var(--nav-border)';
        }
      });
    }
  }

  initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    if (toggle && icon) {
      const theme = document.documentElement.getAttribute('data-theme');
      icon.textContent = theme === 'dark' ? '🌙' : '☀️';

      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        icon.textContent = next === 'dark' ? '🌙' : '☀️';
      });
    }
  }

  initRevealObserver() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '100px 0px 100px 0px' });

    elements.forEach(el => observer.observe(el));

    // Safety fallback: force-reveal after 1.5s in case observer fails
    setTimeout(() => {
      elements.forEach(el => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    }, 1500);
  }
}
