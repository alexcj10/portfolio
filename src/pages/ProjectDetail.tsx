import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!project) {
    return (
      <section className="section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-16))', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">Project not found</h1>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: 'var(--space-8)' }}>Back to Projects</Link>
        </div>
      </section>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="project-detail-page">
      <section className="project-hero">
        <div className="container project-hero-content">
          <Link to="/projects" className="project-hero-back reveal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Projects
          </Link>
          <h1 className="project-hero-title reveal reveal-delay-1">{project.name}</h1>
          <p className="project-hero-tagline reveal reveal-delay-2">{project.tagline}</p>
          <div className="project-hero-actions reveal reveal-delay-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Source Code
            </a>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <div className="container">
          <div className="reveal">
            <p className="section-label">Live Demo</p>
            <h2 className="section-title">Try it yourself.</h2>
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-8)' }}>The full application is embedded below — interact with it right here.</p>
          </div>
          <div className="demo-container reveal reveal-delay-1">
            <div className="demo-toolbar">
              <span className="demo-dot demo-dot-red"></span>
              <span className="demo-dot demo-dot-yellow"></span>
              <span className="demo-dot demo-dot-green"></span>
              <span className="demo-toolbar-url">{project.liveUrl.replace('https://', '')}</span>
            </div>
            <div className="demo-iframe-wrapper">
              <iframe
                className="demo-iframe"
                src={project.liveUrl}
                title={`${project.name} Live Demo`}
                loading="lazy"
                allow="clipboard-write"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
                id={`demo-iframe-${project.id}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 720 }}>
            <p className="section-label">Overview</p>
            <h2 className="section-title">About {project.name}</h2>
            <div 
              style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 'var(--space-6)' }}
              dangerouslySetInnerHTML={{ 
                __html: project.description
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .split('\n\n').map(p => `<p>${p}</p>`).join('')
              }}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)', transition: 'background var(--duration-slow) var(--ease-smooth)' }}>
        <div className="container">
          <div className="reveal">
            <p className="section-label">Features</p>
            <h2 className="section-title">What makes it special.</h2>
          </div>
          <div className="features-grid" style={{ marginTop: 'var(--space-12)' }}>
            {project.features.map((f, i) => (
              <div key={f.title} className={`feature-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="feature-card-header">
                  <div className="feature-card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                </div>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-section section">
        <div className="container">
          <div className="reveal">
            <p className="section-label">Tech Stack</p>
            <h2 className="section-title">Built with.</h2>
          </div>
          <div className="tech-stack-list reveal reveal-delay-1" style={{ marginTop: 'var(--space-8)' }}>
            {project.techStack.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="project-nav">
            <Link to={`/project/${prevProject.id}`} className="project-nav-item">
              <div className="project-nav-label">← Previous</div>
              <div className="project-nav-name">{prevProject.name}</div>
            </Link>
            <Link to={`/project/${nextProject.id}`} className="project-nav-item next">
              <div className="project-nav-label">Next →</div>
              <div className="project-nav-name">{nextProject.name}</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
