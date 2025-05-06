// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

import { HashLink } from 'react-router-hash-link'; // <--- Import HashLink
import './Navbar.css';


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Use HashLink for the logo to always go to top of home */}
        <HashLink smooth to="/#hero" className="navbar-logo">
            Lilian Mayet
        </HashLink>
        <ul className="navbar-menu">
           {/* Replace <a> or <Link> with <HashLink> */}
           {/* Add smooth prop for smooth scrolling */}
           {/* Add the leading '/' before the hash */}
          <li className="navbar-item"><HashLink smooth to="/#about" className="navbar-link">{('About')}</HashLink></li>
          <li className="navbar-item"><HashLink smooth to="/#experience" className="navbar-link">{('Expériences')}</HashLink></li>
          <li className="navbar-item"><HashLink smooth to="/#projects" className="navbar-link">{('Mes Projets')}</HashLink></li>
          <li className="navbar-item"><HashLink smooth to="/#skills" className="navbar-link">{('Compétences')}</HashLink></li>
          
          <li className="navbar-item"><HashLink smooth to="/#education" className="navbar-link">{('Formation')}</HashLink></li>
          <li className="navbar-item"><HashLink smooth to="/#contact" className="navbar-link">{('Contact')}</HashLink></li>
        </ul>
        <div className="language-switcher">
          {/* Buttons remain the same */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;