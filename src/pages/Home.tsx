import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  useEffect(() => {
    // Simple reveal animation trigger for React
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
  }, []);

  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="container">
          <div className="hero-content reveal">
            <h1 className="hero-title">Alexcj</h1>
            <p className="hero-tagline">
              Building intelligent systems that think, analyze, and adapt.
            </p>
            <div className="hero-cta">
              <a href="#/projects" className="btn btn-primary">View Projects</a>
              <a href="#/about" className="btn btn-secondary">About Me</a>
            </div>
          </div>
        </div>
      </header>

      <section className="featured-projects">
        <div className="container">
          <div className="reveal">
            <p className="section-label">Featured Work</p>
            <h2 className="section-title">Projects I've built.</h2>
            <p className="section-subtitle">Each one solves a real problem with AI-first thinking and beautiful interfaces.</p>
          </div>
          <div className="projects-grid" style={{ marginTop: 'var(--space-12)' }}>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
