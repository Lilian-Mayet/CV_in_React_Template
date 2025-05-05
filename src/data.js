// src/data.js
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaChartBar, // Added as an alternative for Power BI
  FaCode,     // Added as an alternative for C#
} from 'react-icons/fa';

import {
  SiTensorflow,
  SiPytorch,
  SiGooglegemini,
  SiJupyter,
} from 'react-icons/si';

import { MdAnalytics } from 'react-icons/md'; // Optional alternative for Power BI
// Replace with actual path to Lilian's photo
import profilePic from './assets/profile.jpg'; // Make sure you have this image

export const profile = {
  name: "Lilian Mayet",
  title: "Étudiant Ingénieur & Alternant Data Scientist",
  location: "Paris, France", // Example location
  image: profilePic,
};

export const contactInfo = {
  phone: { text: '06 15 29 07 33', icon: <FaPhone />, link: 'tel:+33615290733' },
  email: { text: 'Mayetlilian@gmail.com', icon: <FaEnvelope />, link: 'mailto:Mayetlilian@gmail.com' },
  linkedin: { text: 'Lilian Mayet', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/lilian-mayet/' }, // Replace with actual LinkedIn URL
  // github: { text: 'lilian-m', icon: <FaGithub />, link: 'https://github.com/...' } // Add GitHub if available
};

export const about = {
  summary: "Passionné par la Data Science et spécialisé en R&D, ma force réside dans ma compréhension approfondie du fonctionnement intrinsèque des algorithmes d'IA. Cette expertise me permet d'adapter et d'intégrer efficacement ces technologies à vos projets. Fort de mes expériences concrètes avec NVIDIA et Capgemini sur des simulations virtuelles réalistes et des systèmes intelligents d'aide à la conduite, je suis constamment à la recherche de solutions créatives et innovantes",
  detailed: "Rigoureux, créatif et communicant, je suis à votre disposition pour transformer vos défis techniques en réalisations concrètes.Contactez-moi pour concrétiser ensemble vos projets."
};

export const experiences = [
   {
    id: 1,
    title: "Data Scientist Smart City (Alternant)",
    company: "NVIDIA",
    years: "2024 - 2025",
    description: [
      "Recherche et développement sur une simulation urbaine avancée pilotée par LLM.",
      "Création d'algorithmes ML pour modéliser trafic et interactions urbaines réalistes.",
      "Validation et intégration optimisée des modèles dans un environnement virtuel."
    ],
    tags: ["Machine Learning", "Simulation", "LLM", "Python", "Cloud"],
  },
  {
    id: 2,
    title: "Data Scientist R&D (Alternant)",
    company: "Capgemini Engineering",
    years: "2023 - 2024",
    description: [
      "Analyse et classification temps réel du comportement conducteur via LLM.",
      "Développement et validation rigoureuse de modèles prédictifs.",
      "Accompagnement de l'équipe de développement pour l'intégration.",
      "Rédaction et publication scientifique.",
    ],
    tags: ["Data Science", "LLM", "Python", "Traitement de données", "R&D"],
  },
  {
    id: 3,
    title: "Président du Coder Lab",
    company: "Association Garage ISEP",
    years: "2023 - 2024",
    description: [
      "Management d'une équipe sur des projets variés (app gestion de frais, jeu vidéo, reconnaissance faciale).",
      "Organisation de workshops techniques pour renforcer les compétences des étudiants.",
    ],
    tags: ["Gestion de projet", "Management", "Animation", "Technique"],
  },
  {
    id: 4,
    title: "Trésorier BDE",
    company: "BDE ISEP",
    years: "2022 - 2024",
    description: [
      "Gestion budgétaire minutieuse des événements annuels et des associations.",
      "Participation active à la direction pour améliorer la vie associative.",
    ],
    tags: ["Gestion financière", "Organisation", "Associatif"],
  },
];

export const skills = {
  dataScience: {
    title: "Data Science & IA",
    items: ["Algorithmes prédictifs & génératifs", "LLMs (Large Language Models)", "Embeddings", "Traitement d'images", "Vertex AI", "Préparation de données"],
    icons: [ <SiTensorflow key="tf"/>, <SiPytorch key="pt"/>, <SiGooglegemini key="gemini" /> ] // Example icons
  },
  programming: {
    title: "Programmation",
    items: ["Python", "Java", "JavaScript", "C", "C#", "SQL", "PHP", "HTML", "CSS"],
    icons: [
      <FaPython key="py" />,
      <FaJava key="java" />,
      <FaJsSquare key="js" />,
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaCode key="csharp" />, // Updated icon for C#
    ],
  },
  tools: {
    title: "Outils & Logiciels",
    items: ["PyTorch", "TensorFlow", "Jupyter Notebook", "PowerBI", "Git", "Docker", "Excel", "PowerPoint/Canvas"],
    icons: [
      <SiPytorch key="pt2" />,
      <SiTensorflow key="tf2" />,
      <SiJupyter key="jupyter" />,
      <FaChartBar key="pbi" />, // Updated icon for Power BI
    ],
  },
  languages: {
      title: "Langues",
      items: ["Français (Natif)", "Anglais (TOEIC 940 - C1)", "Espagnol (B1)"],
  }
};

export const projects = [
  {
    id: 'proj-gen-ai',
    title: "Générateur Audio/Image IA",
    shortDescription: "Exploration de différents algorithmes d'IA générative pour créer du contenu audio et visuel original.",
    tags: ["IA Générative", "Python", "Pytorch", "Audio", "Image"],
    imageUrl: "https://via.placeholder.com/300x200/007bff/ffffff?text=Generative+AI", // Placeholder
  },
  {
    id: 'proj-search-engine',
    title: "Moteur de Recherche Sémantique",
    shortDescription: "Développement d'un moteur de recherche basé sur les embeddings pour trouver des informations pertinentes par similarité sémantique.",
    tags: ["NLP", "Embeddings", "Python", "Vector Database", "API"],
     imageUrl: "https://via.placeholder.com/300x200/28a745/ffffff?text=Semantic+Search", // Placeholder
  },
  {
    id: 'proj-smart-city-viz',
    title: "Visualisation Trafic Urbain",
    shortDescription: "Création d'une interface de visualisation interactive pour analyser les données simulées de trafic issues du projet Smart City.",
    tags: ["Data Visualisation", "JavaScript", "React", "Simulation", "API"],
     imageUrl: "https://via.placeholder.com/300x200/ffc107/000000?text=City+Viz", // Placeholder
  },
   {
    id: 'proj-article-llm',
    title: "Article Scientifique sur LLM",
    shortDescription: "Rédaction et contribution à un article scientifique détaillant les approches et résultats de l'utilisation de LLMs pour l'analyse comportementale.",
    tags: ["Rédaction Scientifique", "LLM", "Data Science", "Publication"],
     imageUrl: "https://via.placeholder.com/300x200/dc3545/ffffff?text=Research+Paper", 
  },
];

export const education = [
  {
    id: 1,
    degree: "Diplôme d'Ingénieur, Spécialité Data Science",
    school: "ISEP - École d'ingénieurs du numérique",
    years: "2020 - 2025",
    description: "Formation approfondie en informatique, mathématiques appliquées, et spécialisation en science des données, machine learning et intelligence artificielle."
  },
  {
    id: 2,
    degree: "Baccalauréat Scientifique",
    school: "Lycée Jeanne d'Albret",
    years: "2017 - 2020",
    description: "Option Sciences de l'Ingénieur, Mention Très Bien."
  },
];

export const interests = [
    "Design & Création Artistique",
    "Sports (Course à pied, Escalade)", 
    "Hackathons & Compétitions de code",
    "Engagement Associatif (Garage ISEP, BDE)",
    "Veille Technologique (IA, Cloud)"
];