// src/components/Contact.js
import React from 'react';
import { contactInfo, interests } from '../data';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact & Intérêts</h2>
       <div className="contact-grid">
            <div className="contact-details">
                <h3>Entrons en contact !</h3>
                <p>N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement échanger sur nos passions communes.</p>
                <ul>
                   {contactInfo.phone && <li>{contactInfo.phone.icon} <a href={contactInfo.phone.link}>{contactInfo.phone.text}</a></li>}
                   {contactInfo.email && <li>{contactInfo.email.icon} <a href={contactInfo.email.link}>{contactInfo.email.text}</a></li>}
                   {contactInfo.linkedin && <li>{contactInfo.linkedin.icon} <a href={contactInfo.linkedin.link} target="_blank" rel="noopener noreferrer">Profil LinkedIn</a></li>}
                   {contactInfo.github && <li>{contactInfo.github.icon} <a href={contactInfo.github.link} target="_blank" rel="noopener noreferrer">Profil GitHub</a></li>}
                </ul>
            </div>
            <div className="interests">
                <h3>Centres d'Intérêt</h3>
                 <ul>
                    {interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                 </ul>
            </div>
       </div>
       <footer className="main-footer">
            <p>© {new Date().getFullYear()} Lilian Mayet. Tous droits réservés.</p>
            {/* Optional: Link to source code if public */}
       </footer>
    </section>
  );
};

export default Contact;