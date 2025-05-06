// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectDetailPage from './components/ProjectDetailPage'; 

import './App.css';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null; 
}


// Component for the main portfolio sections
function PortfolioHome() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects /> 
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <ScrollToTop /> 
      <div className="App">
        <Navbar /> 
        <main> 
          <Routes> 
            <Route path="/" element={<PortfolioHome />} /> 
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
           
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;