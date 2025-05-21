// src/components/Contact.js
import React from 'react';
import { contactInfo } from '../data'; // 'interests' n'est plus nécessaire ici
import { FaCalculator, FaEnvelopeOpenText } from 'react-icons/fa'; // Pour le bouton Devis
import './Contact.css';

const Contact = () => {
  // Remplacez 'VOTRE_LIEN_PROFIL_MALT_ICI' par le lien réel,
  // soit directement, soit via contactInfo.maltProfileUrl
  const maltLink = contactInfo.maltProfileUrl || "https://www.malt.fr/profile/VOTREPROFIL"; // Fallback

  return (
    <section id="contact" className="contact-section">
      {/* Nouveau titre de section */}
      <h2>Contact & Devis</h2>
       <div className="contact-layout"> {/* Changé de contact-grid à contact-layout pour plus de flexibilité */}
            <div className="contact-details-column">
                <h3>Prêt à Démarrer Votre Projet ?</h3>
                <p>
                    Discutons de vos besoins et voyons comment mes compétences en IA et Data Science
                    peuvent apporter une réelle valeur ajoutée à votre entreprise.
                    Contactez-moi directement ou demandez un devis personnalisé via Malt.
                </p>
                <ul className="contact-methods">
                   {contactInfo.phone && (
                     <li>
                        {contactInfo.phone.icon}
                        <a href={contactInfo.phone.link}>{contactInfo.phone.text}</a>
                     </li>
                   )}
                   {contactInfo.email && (
                     <li>
                        {contactInfo.email.icon}
                        <a href={contactInfo.email.link}>{contactInfo.email.text}</a>
                     </li>
                   )}
                   {contactInfo.linkedin && (
                     <li>
                        {contactInfo.linkedin.icon}
                        <a href={contactInfo.linkedin.link} target="_blank" rel="noopener noreferrer">
                            Profil LinkedIn
                        </a>
                     </li>
                   )}
                   {/* Optionnel: Ajouter GitHub si pertinent pour le contact client */}
                   {/* {contactInfo.github && (
                     <li>
                        {contactInfo.github.icon}
                        <a href={contactInfo.github.link} target="_blank" rel="noopener noreferrer">
                            Profil GitHub
                        </a>
                     </li>
                   )} */}
                </ul>
            </div>

            <div className="quote-section-column">
                <h3>Demandez Votre Devis Gratuit</h3>
                <p>
                    Obtenez une estimation personnalisée pour votre projet.
                    Cliquez ci-dessous pour accéder à mon profil Malt et initier une demande de devis.
                    C'est simple, rapide et sans engagement.
                </p>
                <a
                    href={maltLink} // Utilisez la variable ici
                    className="quote-button cta-button" // Réutiliser la classe cta-button et ajouter une spécifique
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaCalculator /> {/* Ou FaEnvelopeOpenText */}
                    Demander un Devis sur Malt
                    {/* Si vous utilisez une clé de traduction : {t(contactInfo.quoteButtonTextKey)} */}
                </a>
                <p className="quote-info">
                    Vous serez redirigé vers la plateforme sécurisée Malt pour une gestion transparente de notre collaboration.
                </p>
            </div>
       </div>
       <footer className="main-footer">
            <p>© {new Date().getFullYear()} Lilian Mayet. Tous droits réservés.</p>
       </footer>
    </section>
  );
};

export default Contact;