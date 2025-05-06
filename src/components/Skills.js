// src/components/Skills.js
import React from 'react';
// Plus besoin de useTranslation
import { skills } from '../data'; // Importer les données directement
import './Skills.css';

// Ce composant reçoit directement les textes
const SkillCategory = ({ title, items, icons }) => (
  <div className="skill-category">
    <h3>{title}</h3> {/* Affiche le titre reçu */}
     {icons && <div className="skill-icons">{icons}</div>}
    <ul>
      {/* Affiche les items reçus */}
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  // Pas besoin de 't'
  return (
    <section id="skills" className="skills-section">
      {/* Texte brut pour le titre principal ou mettez-le dans data.js aussi */}
      <h2>Compétences Techniques & Linguistiques</h2>
      <div className="skills-grid">
        {/* Passer les données directement depuis l'objet skills */}
        <SkillCategory
            title={skills.dataScience.title}
            items={skills.dataScience.items}
            icons={skills.dataScience.icons} />
        <SkillCategory
            title={skills.programming.title}
            items={skills.programming.items}
            icons={skills.programming.icons} />
        <SkillCategory
            title={skills.tools.title}
            items={skills.tools.items}
            icons={skills.tools.icons} />
        {/* Ajouter la nouvelle catégorie Soft Skills */}
        <SkillCategory
            title={skills.softSkills.title}
            items={skills.softSkills.items}
            icons={skills.softSkills.icons} />
        <SkillCategory
            title={skills.languages.title}
            items={skills.languages.items}
            icons={skills.languages.icons} />
      </div>
    </section>
  );
};

export default Skills;