// ========================================
// PROJECT DETAIL PAGE
// ========================================

import { projects } from '../data/projects.js';

export function renderProjectDetail(params) {
  const project = projects.find(p => p.id === params.id);
  if (!project) {
    return `
      <section class="section" style="padding-top: var(--space-16); text-align: center;">
        <div class="container">
          <h1 class="section-title">Project not found</h1>
          <a href="#/projects" class="btn btn-primary" style="margin-top: var(--space-8);">Back to Projects</a>
        </div>
      </section>
    `;
  }

  // Get prev/next projects
  const currentIndex = projects.findIndex(p => p.id === params.id);
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  // Convert markdown-like description to HTML
  const descHtml = project.description
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');

  return `
    <!-- Project Hero -->
    <section class="project-hero">
      <div class="container project-hero-content">
        <a href="#/projects" class="project-hero-back reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Projects
        </a>
        <h1 class="project-hero-title reveal reveal-delay-1">${project.name}</h1>
        <p class="project-hero-tagline reveal reveal-delay-2">${project.tagline}</p>
        <div class="project-hero-actions reveal reveal-delay-3">
          <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">
            Live Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Source Code
          </a>
        </div>
      </div>
    </section>

    <!-- Live Demo Embed -->
    <section class="demo-section">
      <div class="container">
        <div class="reveal section-header">
          <p class="section-label">Live Demo</p>
          <h2 class="section-title">Try it yourself.</h2>
          <p class="section-subtitle" style="margin-bottom: var(--space-8);">The full application is embedded below — interact with it right here.</p>
        </div>
        <div class="demo-container reveal reveal-delay-1">
          <div class="demo-toolbar">
            <span class="demo-dot demo-dot-red"></span>
            <span class="demo-dot demo-dot-yellow"></span>
            <span class="demo-dot demo-dot-green"></span>
            <span class="demo-toolbar-url">${project.liveUrl.replace('https://', '')}</span>
          </div>
          <div class="demo-iframe-wrapper">
            <iframe
              class="demo-iframe"
              src="${project.liveUrl}"
              title="${project.name} Live Demo"
              loading="lazy"
              allow="clipboard-write"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
              id="demo-iframe-${project.id}"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="section">
      <div class="container">
        <div class="reveal section-header">
          <p class="section-label">Overview</p>
          <h2 class="section-title">About ${project.name}</h2>
          <div style="font-size: var(--text-lg); color: var(--text-secondary); line-height: 1.8; margin-top: var(--space-6);">
            ${descHtml}
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section" style="padding-top: var(--space-10); background: var(--bg-secondary); transition: background var(--duration-slow) var(--ease-smooth);">
      <div class="container">
        <div class="reveal section-header">
          <p class="section-label">Features</p>
          <h2 class="section-title">What makes it special.</h2>
        </div>
        <div class="features-grid" style="margin-top: var(--space-12);">
          ${project.features.map((f, i) => `
            <div class="feature-card reveal reveal-delay-${(i % 3) + 1}">
              <div class="feature-card-header">
                <div class="feature-card-icon">${f.icon}</div>
                <h3>${f.title}</h3>
              </div>
              <p>${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="section tech-stack-section" style="padding-top: var(--space-10);">
      <div class="container">
        <div class="reveal section-header">
          <p class="section-label">Tech Stack</p>
          <h2 class="section-title">Built with.</h2>
        </div>
        <div class="tech-stack-list reveal reveal-delay-1" style="margin-top: var(--space-8);">
          ${project.techStack.map(t => `<span class="badge">${t}</span>`).join('')}
        </div>
      </div>
    </section>

    <!-- Project Navigation: Coconut Shuffle Arcade -->
    <section class="section-nav-arcade">
      <div class="container">
        <div class="project-nav-arcade" id="coconut-game">
          <!-- Prev Button (Original Style) -->
          <a href="#/project/${prevProject.id}" class="project-nav-item">
            <div class="project-nav-label">← Previous</div>
            <div class="project-nav-name">${prevProject.name}</div>
          </a>

          <!-- Professional Coconut Shuffle Panel -->
          <div class="arcade-bridge-panel">
            <div class="coconut-stage">
              <div class="coconut-slots">
                <div class="coconut-slot" data-index="0">
                  <div class="game-object prize">💎</div>
                  <div class="coconut-shell"></div>
                </div>
                <div class="coconut-slot" data-index="1">
                  <div class="game-object">❌</div>
                  <div class="coconut-shell"></div>
                </div>
                <div class="coconut-slot" data-index="2">
                  <div class="game-object">❌</div>
                  <div class="coconut-shell"></div>
                </div>
              </div>
            </div>
            <div class="arcade-ui">
              <button class="arcade-play-btn" id="play-coconut">SHUFFLE & GUESS</button>
            </div>
          </div>

          <!-- Next Button (Original Style) -->
          <a href="#/project/${nextProject.id}" class="project-nav-item next">
            <div class="project-nav-label">Next →</div>
            <div class="project-nav-name">${nextProject.name}</div>
          </a>
        </div>
      </div>
    </section>
  `;
}
