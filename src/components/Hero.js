// src/components/Hero.js
import React from 'react';
import { profile, contactInfo } from '../data';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="location">{profile.location}</p>
           <div className="hero-contact-icons">
             {contactInfo.email && <a href={contactInfo.email.link} target="_blank" rel="noopener noreferrer" aria-label="Email">{contactInfo.email.icon}</a>}
             {contactInfo.linkedin && <a href={contactInfo.linkedin.link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{contactInfo.linkedin.icon}</a>}
             {contactInfo.github && <a href={contactInfo.github.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub">{contactInfo.github.icon}</a>}
             {contactInfo.phone && <a href={contactInfo.phone.link} aria-label="Phone">{contactInfo.phone.icon}</a>}
          </div>
          <a href="#contact" className="cta-button">Contactez-moi</a>
        </div>
        <div className="hero-image-container">
          <img src={profile.image} alt={profile.name} className="hero-image" />
        </div>
      </div>
       <div className="scroll-indicator">
         <a href="#about"><span></span>Découvrir</a>
       </div>
    </section>
  );
};

export default Hero;