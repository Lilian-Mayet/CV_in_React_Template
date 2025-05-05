// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ProjectCard.css';

const ProjectCard = ({ project }) => {

  return (
    <div className="project-card">
      {/* Wrap image in Link as well (optional) */}
      <Link to={`/project/${project.id}`}>
        <img src={project.imageUrl || 'https://via.placeholder.com/300x200/cccccc/ffffff?text=Projet'} alt={project.title} className="project-image" />
      </Link>
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
         {/* Use Link component styled as a button */}
         <Link
            to={`/project/${project.id}`} // Navigate to the specific project route
            className="project-button"
            aria-label={`Voir plus sur le projet ${project.title}`}
        >
            Voir plus
         </Link>
      </div>
    </div>
  );
};

export default ProjectCard;