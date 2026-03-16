import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
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

  return (
    <div className="projects-listing-page">
      <section className="projects-hero">
        <div className="container">
          <div className="reveal">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">All Projects.</h2>
            <p className="section-subtitle">
              A collection of intelligent systems, from computer vision to advanced RAG pipelines.
            </p>
          </div>

          <div className="projects-grid" style={{ marginTop: 'var(--space-12)' }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
