// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">Lilian Mayet</a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#about" className="navbar-link">À Propos</a></li>
          <li className="navbar-item"><a href="#experience" className="navbar-link">Expérience</a></li>
          <li className="navbar-item"><a href="#skills" className="navbar-link">Compétences</a></li>
          <li className="navbar-item"><a href="#projects" className="navbar-link">Projets</a></li>
          <li className="navbar-item"><a href="#education" className="navbar-link">Éducation</a></li>
          <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;