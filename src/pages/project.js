// ========================================
// PROJECTS LISTING PAGE
// ========================================

import { projects } from '../data/projects.js';

export function renderProjects() {
  return `
    <section class="section" style="padding-top: calc(var(--nav-height) + var(--space-16));">
      <div class="container">
        <!-- Header -->
        <div class="reveal">
          <p class="section-label">Projects</p>
          <h1 class="section-title" style="font-size: var(--text-5xl);">
            Things I've <span class="text-gradient">built</span>.
          </h1>
          <p class="section-subtitle">
            Full-stack AI products — from concept to production. Each one is live and ready to use.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid" style="margin-top: var(--space-12);">
          ${projects.map((p, i) => `
            <a href="#/project/${p.id}" class="project-card reveal reveal-delay-${i + 1}" id="projects-card-${p.id}">
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
  `;
}
