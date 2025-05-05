import React from 'react';
import './CVPage.css';
// Import an icon library if you want icons (e.g., react-icons)
// import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'; // Example using react-icons

// Placeholder image - replace with the actual path if available
import profileImage from './Lilian.jpg'; // Make sure you have an image file here

const CVPage = () => {

  // --- Data extracted from the CV ---
  const contactInfo = {
    phone: '06 15 29 07 33',
    email: 'Mayetlilian@gmail.com',
    linkedin: 'Lilian Mayet', // Assuming the link text is the name, add URL if known
    linkedinUrl: 'https://www.linkedin.com/in/lilian-mayet/', // Example URL, replace if different
  };

  const summary = "Étudiant dynamique passionné d'intelligence artificielle avec un très bon sens du contact, de multiples expériences en programmation et projets en équipe. De solides bases en machine learning et algorithmes prédictifs consolidées au travers de projets professionnels, et un anglais solide.";

  const education = [
    {
      degree: "Spécialité Data Science",
      school: "ISEP",
      years: "2020 - 2025",
    },
    {
      degree: "Bac option Scientifique",
      school: "Lycée Jeanne d'albret",
      years: "2017 - 2020",
    },
  ];

  const languages = [
    { name: "Anglais", level: "TOEIC 940 (2023)" },
    { name: "Espagnol", level: "Niveau B1" },
  ];

  const skills = {
    dataScience: "Algorithmes prédicitifs et génératifs, LLM, embeddings, traitement d'images, Pytorch et Tensorflow. Maitrise de Vertex AI, préparation de données",
    programming: "Python, Java, Javascript, C, C#, JavaFX, SQL, PHP, CSS, HTML",
    software: "Excel, PowerPoint/Canvas, Jupyter NoteBook, PowerBI",
  };

  const experiencesPro = [
     {
      title: "DATA SCIENTIST SMART CITY",
      company: "NIVIDIA",
      years: "2024 - 2025",
      description: [
        "Participation à un projet de recherche pour NVIDIA sur une simulation virtuelle avancée de ville, pilotable en langage naturel via un LLM développé specialement.",
        "Développement d'algorithmes de machine learning pour simuler de façon réaliste le trafic, les déplacements et les interactions.",
        "Validation rigoureuse des modèles et intégration optimisée dans l'environnement virtuel en collaboration avec les équipes."
      ],
      keywords: ["Machine Learning", "Simulation", "Optimisation", "LLM"],
    },
    {
      title: "ALTERNANT DATA-SCIENTIST R&D",
      company: "CAPGEMINI ENGINEERING",
      years: "2023 - 2024",
      description: [
        "Analyse et classification de comportement de conducteur en temps réel, avec génération de commentaires adaptés via LLM.",
        "Développement et validation des modèles predictifs, incluant la mise en place de protocoles de tests rigoureux.",
        "Accompagnement l'équipe de développement dans l'intégration des modèles au sein de l'application.",
        "Rédaction et publication d'un article scientifique basé sur les résultats du projet."
      ],
      keywords: ["Algorithmes prédictifs", "Communication", "Vulgarisation", "Travail en équipe"],
    },
    {
      title: "TRÉSORIER BDE",
      company: "BDE ISEP",
      years: "2022 - 2024",
      description: [
        "Organisation des événements annuels du BDE de l'ISEP, avec une gestion budgétaire minutieuse.",
        "Gestion de la trésorerie des associations de l'école, assurant leur viabilité financière.",
        "Participation aux CODIR pour maintenir et améliorer le fonctionnement de la vie associative."
      ],
      keywords: ["Gestion de budget", "Organisation", "Gestion de projet"],
    },
     {
      title: "PRÉSIDENT DU CODER LAB",
      company: "ASSOCIATION GARAGE ISEP",
      years: "2023 - 2024",
      description: [
        "Président du Coder Lab, branche de Garage ISEP, 1er Innovation Hub étudiant de France.",
        "Direction une équipe d'une dizaine de membres sur des projets variés : gestionnaire de notes de frais, jeu vidéo, reconnaissance faciale.",
        "Organisation workshops techniques pour renforcer les compétences pratiques des étudiants."
      ],
      keywords: ["Gestion de projet", "Gestion d'équipe", "Compétences techniques variées"],
    },
  ];

    const personalProjects = [
        "Projet de générations (audio et image) via différents algorithmes",
        "Ecriture d'articles scientifique",
        "Moteur de recherche basé sur les embeddings"
    ];

    const interests = [
        "Design et art",
        "Sport",
        "Hackathons",
        "Engagement associatif"
    ];


  // --- Helper to render keywords ---
  const renderKeywords = (keywords) => {
    if (!keywords || keywords.length === 0) return null;
    return (
      <div className="keywords">
        {keywords.map((keyword, index) => (
          <span key={index} className="keyword-tag">{keyword}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="cv-container">
      {/* --- Header Section --- */}
      <header className="cv-header">
        <div className="header-main">
           <img src={profileImage} alt="Lilian Mayet" className="profile-pic" />
           <div className="header-text">
                <h1>MAYET LILIAN</h1>
                <h2>Étudiant ingénieur à l'ISEP</h2>
                <h3>Alternant data-scientist</h3>
           </div>
        </div>
         <div className="header-contact">
             <p>
               {/* If using react-icons: <FaPhone /> */}
               📞 {contactInfo.phone}
             </p>
             <p>
               {/* If using react-icons: <FaEnvelope /> */}
               ✉️ <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
             </p>
             <p>
               {/* If using react-icons: <FaLinkedin /> */}
               🔗 <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ({contactInfo.linkedin})</a>
             </p>
          </div>
           <p className="summary">{summary}</p>
      </header>

      {/* --- Main Content Area --- */}
      <main className="cv-main">

        {/* --- Professional Experiences --- */}
        <section className="cv-section">
          <h2>Expériences Professionnelles</h2>
          {experiencesPro.map((exp, index) => (
            <article key={index} className="cv-item experience-item">
              <h3>{exp.title} - <span>{exp.company}</span></h3>
              <p className="dates">{exp.years}</p>
              <ul>
                {exp.description.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
              {renderKeywords(exp.keywords)}
            </article>
          ))}
        </section>

        <div className="cv-columns"> {/* Layout columns for skills/education etc */}
            <div className="cv-column">
                {/* --- Technical Skills --- */}
                <section className="cv-section">
                  <h2>Compétences Techniques</h2>
                  <article className="cv-item skills-item">
                    <h4>Data Science</h4>
                    <p>{skills.dataScience}</p>
                  </article>
                   <article className="cv-item skills-item">
                    <h4>Langages de Programmation</h4>
                    <p>{skills.programming}</p>
                  </article>
                  <article className="cv-item skills-item">
                    <h4>Logiciels</h4>
                    <p>{skills.software}</p>
                  </article>
                </section>

                 {/* --- Personal Experiences --- */}
                <section className="cv-section">
                    <h2>Expériences Personnelles</h2>
                     <article className="cv-item">
                        <h4>Projets</h4>
                        <ul>
                            {personalProjects.map((proj, index) => (
                                <li key={index}>{proj}</li>
                            ))}
                        </ul>
                    </article>
                     <article className="cv-item">
                        <h4>Centres d'intérêts</h4>
                        <ul>
                            {interests.map((interest, index) => (
                                <li key={index}>{interest}</li>
                            ))}
                        </ul>
                    </article>
                </section>
            </div>

            <div className="cv-column">
                 {/* --- Education --- */}
                <section className="cv-section">
                  <h2>Éducation</h2>
                  {education.map((edu, index) => (
                    <article key={index} className="cv-item education-item">
                      <h4>{edu.degree}</h4>
                      <p>{edu.school}</p>
                      <p className="dates">{edu.years}</p>
                    </article>
                  ))}
                </section>

                {/* --- Languages --- */}
                <section className="cv-section">
                  <h2>Langues</h2>
                  {languages.map((lang, index) => (
                    <article key={index} className="cv-item language-item">
                      <p><strong>{lang.name}:</strong> {lang.level}</p>
                    </article>
                  ))}
                </section>
            </div>
        </div>


      </main>

      <footer className="cv-footer">
        {/* Optional footer content */}
        <p>CV Généré avec React</p>
      </footer>
    </div>
  );
};

export default CVPage;