// ========================================
// HOME PAGE
// ========================================

import { projects, skills, profile } from '../data/projects.js';

export function renderHome() {
  const featuredProjects = projects.slice(0, 4);
  const skillsDouble = [...skills, ...skills]; // double for marquee

  return `
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-bg">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>
      <div class="hero-content">
        <p class="hero-greeting">Hi, I'm Alexchandar Joshva</p>
        <h1 class="hero-name">
          I build <span class="text-gradient">intelligent</span> systems.
        </h1>
        <p class="hero-tagline">
          Aspiring ML & AI Engineer — a recent graduate focused on building intelligent systems. I specialize in training and evaluating complex ML models, leveraging AI to bring my supporting frontends and applications to life.
        </p>
        <div class="hero-cta">
          <a href="#/projects" class="btn btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#/contact" class="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section" id="featured-projects">
      <div class="container">
        <div class="reveal">
          <p class="section-label">Featured Work</p>
          <h2 class="section-title">Projects I've built.</h2>
          <p class="section-subtitle">Each one solves a real problem with AI-first thinking and beautiful interfaces.</p>
        </div>
        <div class="projects-grid" style="margin-top: var(--space-12);">
          ${featuredProjects.map((p, i) => `
            <a href="#/project/${p.id}" class="project-card reveal reveal-delay-${i + 1}" id="project-card-${p.id}">
              <div class="project-card-header">
                <div class="project-card-logo-row">
                  <div class="project-card-icon">
                    <img src="${p.icon}" alt="${p.name} logo" style="transform: scale(${p.logoScale || 1});">
                  </div>
                  <h3 class="project-card-title">${p.name}</h3>
                </div>
                <p class="project-card-desc">${p.shortSummary || p.tagline}</p>
              </div>
              <div class="project-card-body">
                <div class="project-card-highlight">
                  <span class="highlight-icon">✨</span>
                  <span class="highlight-text">${p.highlight}</span>
                </div>
                <span class="project-card-link">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Skills Marquee -->
    <section class="skills-marquee" id="skills-marquee">
      <div class="skills-track">
        ${skillsDouble.map(s => `
          <div class="skill-item">${s}</div>
        `).join('')}
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" id="cta-section">
      <div class="container" style="text-align: center;">
        <div class="reveal">
          <p class="section-label">Let's Connect</p>
          <h2 class="section-title">Interested in working together?</h2>
          <p class="section-subtitle" style="margin: 0 auto var(--space-8);">
            I'm always open to interesting conversations about ML, AI products, and building things that matter.
          </p>
          <a href="#/contact" class="btn btn-primary">
            Say Hello
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
