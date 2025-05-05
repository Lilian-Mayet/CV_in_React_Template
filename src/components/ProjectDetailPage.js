// src/components/ProjectDetailPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import { projects, contactInfo } from '../data'; // Assuming contact info might be useful too
import './ProjectDetailPage.css';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaTools, FaLightbulb, FaChartLine, FaCalendarAlt,FaDumbbell } from 'react-icons/fa'; // Example icons

const ProjectDetailPage = () => {
  const { projectId } = useParams(); // Get the project ID from the URL
  const project = projects.find((p) => p.id === projectId);

  // Handle project not found
  if (!project) {
    return (
      <div className="project-detail-page not-found">
        <h2>Projet non trouvé</h2>
        <p>Le projet que vous recherchez n'existe pas ou l'URL est incorrecte.</p>
        <Link to="/#projects" className="back-button">
          <FaArrowLeft /> Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <section className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/#projects" className="back-button">
          <FaArrowLeft /> Retour aux projets
        </Link>

        <h1>{project.title}</h1>

        <div className="project-detail-main-content">
          <div className="project-detail-image-container">
            <img src={project.imageUrlLarge || project.imageUrl} alt={project.title} />
          </div>

          <div className="project-detail-info">
             <div className="info-item">
                <h3><FaCalendarAlt /> Date</h3>
                <p>{project.date}</p>
             </div>
             <div className="info-item">
                 <h3><FaLightbulb /> Contexte</h3>
                 <p>{project.context}</p>
             </div>

             {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button github">
                   <FaGithub /> Voir sur GitHub
                </a>
             )}
              {project.liveDemoLink && (
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link-button live">
                   <FaExternalLinkAlt /> Voir le site
                </a>
             )}
          </div>
        </div>

        <div className="project-detail-description">
          <h2>Description détaillée</h2>
          <p>{project.longDescription}</p>
        </div>

        <div className="project-detail-columns">
          <div className="detail-column">
            <h3><FaTools /> Technologies Utilisées</h3>
            <ul>
              {project.technologies?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="detail-column">
             <h3><FaDumbbell/> Points Forts</h3>
                <ul>
                {project.strengths?.map((strength, index) => (
                    <li key={index}>{strength}</li>
                ))}
                </ul>
            </div>
           <div className="detail-column">
             <h3><FaChartLine/> Améliorations Futures</h3>
                <ul>
                {project.futureImprovements?.map((imp, index) => (
                    <li key={index}>{imp}</li>
                ))}
                </ul>
            </div>
        </div>

         {/* Optional: Contact CTA */}
         <div className="project-contact-cta">
             <h3>Intéressé par ce projet ?</h3>
             <p>Discutons-en !</p>
              <a href={contactInfo.email.link} className="cta-button">Contactez-moi</a>
         </div>

      </div>
    </section>
  );
};

export default ProjectDetailPage;