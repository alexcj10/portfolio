import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  name: string;
  shortSummary: string;
  highlight: string;
  icon: string;
  logoScale?: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className={`project-card reveal reveal-delay-${index + 1}`} 
      id={`project-card-${project.id}`}
    >
      <div className="project-card-header">
        <div className="project-card-logo-row">
          <div className="project-card-icon">
            <img 
              src={project.icon} 
              alt={`${project.name} logo`} 
              style={{ transform: `scale(${project.logoScale || 1})` }} 
            />
          </div>
          <div className="project-card-title-group">
            <h3 className="project-card-title">
              {project.name}
              <svg className="title-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </h3>
          </div>
          <div className="project-card-action">
            <span className="project-card-link-compact">
              Explore
            </span>
          </div>
        </div>
        <p className="project-card-desc">{project.shortSummary}</p>
      </div>
      
      <div className="project-card-body">
        <div className="project-card-highlight">
          <span className="highlight-icon">✨</span>
          <span className="highlight-text">{project.highlight}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
