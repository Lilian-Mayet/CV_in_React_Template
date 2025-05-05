// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import Router components

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectDetailPage from './components/ProjectDetailPage'; // Import the new component

import './App.css'; // Global styles

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency on pathname ensures scroll happens on change

  return null; // This component doesn't render anything
}


// Component for the main portfolio sections
function PortfolioHome() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects /> {/* This section contains links to /project/:id */}
      <Education />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <ScrollToTop /> {/* Add the scroll helper */}
      <div className="App">
        <Navbar /> {/* Navbar outside Routes to be on all pages */}
        <main> {/* Keep the main tag if needed for padding */}
          <Routes> {/* Define the routes */}
            <Route path="/" element={<PortfolioHome />} /> {/* Main page route */}
            <Route path="/project/:projectId" element={<ProjectDetailPage />} /> {/* Project detail route */}
            {/* Add a 404 route later if needed */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        {/* Footer could also be here if needed universally, or within Contact */}
      </div>
    </Router>
  );
}

export default App;