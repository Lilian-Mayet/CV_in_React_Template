// src/components/Skills.js
import React from 'react';
import { skills } from '../data';
import './Skills.css';

const SkillCategory = ({ title, items, icons }) => (
  <div className="skill-category">
    <h3>{title}</h3>
     {icons && <div className="skill-icons">{icons}</div>}
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Compétences Techniques & Linguistiques</h2>
      <div className="skills-grid">
        <SkillCategory title={skills.dataScience.title} items={skills.dataScience.items} icons={skills.dataScience.icons} />
        <SkillCategory title={skills.programming.title} items={skills.programming.items} icons={skills.programming.icons} />
        <SkillCategory title={skills.tools.title} items={skills.tools.items} icons={skills.tools.icons} />
         <SkillCategory title={skills.languages.title} items={skills.languages.items} icons={skills.languages.icons} />
      </div>
    </section>
  );
};

export default Skills;