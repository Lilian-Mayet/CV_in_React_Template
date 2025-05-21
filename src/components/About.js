// src/components/About.js
import React from 'react';
import { about } from '../data';
import './About.css';
// Optional: Import your main profile picture if you want to display it smaller here
// import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container"> {/* Added a container for better control */}
        <h2>À Propos de Moi</h2>

        {/* Optional: Display a smaller version of your profile picture or a relevant graphic */}
        {/* <img src={profilePic} alt="Lilian Mayet" className="about-profile-pic" /> */}

        <p className="about-summary">{about.summary}</p>

        <div className="about-keypoints-grid">
          {about.keyPoints.map((point, index) => (
            <div key={index} className="keypoint-card">
              <div className="keypoint-icon-container">
                {point.icon}
              </div>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
        {/* You can add a Call to Action button here if desired */}
        {/*
        <a href="#contact" className="cta-button about-cta">
          Discutons de votre projet
        </a>
        */}
      </div>
    </section>
  );
};

export default About;