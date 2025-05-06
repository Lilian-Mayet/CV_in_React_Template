// src/components/Experience.js
import React from 'react';
import { experiences } from '../data';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Expériences Professionnelles & Associatives</h2>
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
              <span className="years">{exp.years}</span>
              <ul>
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {exp.tags && (
                <div className="tags">
                  {exp.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;