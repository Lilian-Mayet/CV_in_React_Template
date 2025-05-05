// src/components/About.js
import React from 'react';
import { about } from '../data';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>À Propos de Moi</h2>
      <div className="about-content">
         {/* Optional: Add another small image or graphic here */}
        <p className="summary">{about.summary}</p>
        <p>{about.detailed}</p>
      </div>
    </section>
  );
};

export default About;