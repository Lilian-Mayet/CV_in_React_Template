// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {

  // Placeholder function for "Voir plus"
  const handleSeeMore = (projectId, projectTitle) => {
    alert(`Redirection vers la page du projet : ${projectTitle} (ID: ${projectId})\n(Implémentation future avec React Router)`);
    // In a real app, you would use navigation here:
    // navigate(`/projects/${projectId}`);
  };

  return (
    <div className="project-card">
      <img src={project.imageUrl || 'https://via.placeholder.com/300x200/cccccc/ffffff?text=Projet'} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        {project.tags && (
          <div className="tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
         <button
            onClick={() => handleSeeMore(project.id, project.title)}
            className="project-button"
            aria-label={`Voir plus sur le projet ${project.title}`}
        >
            Voir plus
         </button>
      </div>
    </div>
  );
};

export default ProjectCard;