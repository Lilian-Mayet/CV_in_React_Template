// src/components/Education.js
import React from 'react';
import { education } from '../data';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Formation</h2>
      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.degree}</h3>
            <p className="school">{edu.school}</p>
            <p className="years">{edu.years}</p>
            {edu.description && <p className="description">{edu.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;