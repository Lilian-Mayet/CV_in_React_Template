// src/data.js
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaFileExcel,
  FaEnvelope,
  FaPhone,
  FaChartBar, // Added as an alternative for Power BI
  FaCode,     // Added as an alternative for C#
  FaUsers, FaComments, FaLightbulb, FaHandshake,FaBrain, FaRocket 
} from 'react-icons/fa';

import { GiFrance,GiSpain } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { IoIosGitNetwork } from "react-icons/io";
import { LuImages } from "react-icons/lu";


import {
  SiTensorflow,
  SiPytorch,
  SiGooglegemini,
  SiJupyter,
} from 'react-icons/si';


// Replace with actual path to Lilian's photo
import profilePic from './assets/profile.jpg'; // Make sure you have this image
import edutrackAiImage from './assets/edutrackAI_IMG.png'; 
import semanticWebImage from './assets/WebBrowser.jpg'; 
import neuralNetImage from './assets/neuralNet.png'; 
import emotionRecImage from './assets/emotionREC.png'; 

export const profile = {
  name: "Lilian Mayet",
  title: "Étudiant Ingénieur & Alternant Data Scientist",
  location: "Paris, France", // Example location
  image: profilePic,
};

export const contactInfo = {
  phone: { text: '06 15 29 07 33', icon: <FaPhone />, link: 'tel:+33615290733' },
  email: { text: 'Mayetlilian@gmail.com', icon: <FaEnvelope />, link: 'mailto:Mayetlilian@gmail.com' },
  linkedin: { text: 'Lilian Mayet', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/lilian-mayet/' },
  maltProfileUrl: "https://www.malt.fr/profile/lilianmayet?q=data+scientist&maxPrice=215&sourceComponent=top_nav_search_results_unlogged&searchid=682da9e484af5e4f35e530e2", // <= REMPLACEZ CECI
  quoteButtonTextKey: "contactRequestQuote"
};

export const about = {
  // Summary can be a bit longer, more engaging
  summary: "Passionné par l'intelligence artificielle et la transformation digitale, je mets mon expertise technique et mon esprit d'innovation au service de projets ambitieux. Mon objectif : concevoir des solutions IA sur mesure qui apportent une réelle valeur ajoutée à mes clients.",
  // Break down the "detailed" part into key points for better readability
  keyPoints: [
    {
      icon: <FaBrain />, // Icon for expertise/innovation
      title: "Expertise en IA & Data Science",
      text: "Solides compétences en Machine Learning, Deep Learning (LLMs, Vision, etc.) et analyse de données, acquises via des projets stimulants et une veille technologique constante."
    },
    {
      icon: <FaCode />, // Icon for development/solutions
      title: "Développement de Solutions Sur Mesure",
      text: "Capacité à traduire des besoins complexes en applications IA fonctionnelles, de la conception à l'intégration, en utilisant les technologies les plus adaptées."
    },
        {
      icon: <FaChartBar />, // Icône pour l'analyse et la décision
      title: "Valorisation de Données & Aide à la Décision",
      text: "J'analyse vos données pour en extraire des insights précieux, identifier des tendances et fournir des recommandations claires qui éclairent vos décisions stratégiques et opérationnelles."
    },
    {
      icon: <FaUsers />, // Icon for collaboration/communication
      title: "Collaboration & Communication Efficace",
      text: "Excellent relationnel, sens de l'écoute et capacité à vulgariser des concepts techniques pour une collaboration transparente et productive."
    },
    {
      icon: <FaRocket />, // Icon for results/impact
      title: "Orientation Résultats & Impact",
      text: "Focus sur la création de solutions qui non seulement fonctionnent, mais qui génèrent également des résultats tangibles et un impact positif pour votre activité."
    }
    // Add more points if relevant
  ]
};

export const experiences = [
  {
    id: 'exp-capgemini-generative-ai', 

    title: "Chercheur en IA Générative pour la Santé (Projet R&D)",
    company: "Capgemini",

    years: "Mai 2025 - En cours", 

    description: [
      "Contribution majeure à un projet de recherche visant à surmonter le manque de données pour le diagnostic des maladies rares grâce à l'IA.",
      "Développement et validation d'algorithmes d'IA générative (GANs, VAEs, Diffusion, ...) pour synthétiser des données de diagnostic médical réalistes et pertinentes.",
      "Objectif : augmenter significativement les bases de données limitées pour permettre l'entraînement de modèles de détection plus précis et robustes.",
      "Collaboration avec des équipes multidisciplinaires pour assurer la pertinence clinique et la validité des données générées."
    ],
    // Tags qui reflètent les compétences et le domaine
    tags: ["IA Santé", "Recherche & Développement", "IA Générative", "Deep Learning", "Python", "Analyse de Données", "Diffusion"],
  },
   {
    id: 2,
    title: "Data Scientist Smart City",
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
    id: 3,
    title: "Data Scientist R&D",
    company: "Capgemini",
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
    id: 4,
    title: "Président du Coder Lab",
    company: "Association Garage ISEP",
    years: "2023 - 2024",
    description: [
      "Management d'une équipe sur des projets variés (app gestion de frais, jeu vidéo, reconnaissance faciale).",
      "Organisation de workshops techniques pour renforcer les compétences des étudiants.",
    ],
    tags: ["Gestion de projet", "Management", "Animation", "Technique"],
  }
];

export const skills = {
  dataScience: {
    title: "Data Science & IA",
    items: ["Algorithmes prédictifs & génératifs", "LLMs (Large Language Models)", "Embeddings", "Traitement d'images", "Vertex AI", "Préparation de données"],
    icons: [ <SiTensorflow key="tf"/>, <SiPytorch key="pt"/>, <SiGooglegemini key="gemini" />,<IoIosGitNetwork key="neuron"/> ,<LuImages key="img"/>]
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
      <FaChartBar key="pbi" />, 
      <FaFileExcel key="Exc"/>
    ],
  },

  softSkills: { // La nouvelle section
    title: "Compétences Relationnelles", // Texte direct
    items: [
        "Communication & Vulgarisation Scientifique",
        "Sens du Contact & Relationnel",
        "Travail d'équipe & Collaboration",
        "Adaptabilité & Résolution de problèmes",
        "Capacité d'Innovation"
    ], // Textes directs
    icons: [ <FaComments key="comm"/>, <FaUsers key="team"/>, <FaLightbulb key="innov"/>, <FaHandshake key="contact" /> ]
  },

  languages: {
      title: "Langues",
      items: ["Français (Natif)", "Anglais (TOEIC 940 - C1)", "Espagnol (B1)"],
      icons: [
        <GiFrance key="french" />,
        <GiSpain key="spanish" />,
        <BiWorld key="world" />,

      ],
  }
};

export const projects = [
  {
    id: 'proj-eduTrackAi',
    
    title: "Solution IA de Sécurité et Suivi par Reconnaissance Faciale",
    
    shortDescription: "Automatisez la sécurité et le suivi de présence avec une IA qui identifie instantanément les personnes autorisées ou inattendues via caméra.",
    
    longDescription: "Imaginez une gestion des accès ou un suivi de présence entièrement automatisé et sécurisé. Ce projet primé (1ère place d'un concours universitaire en Inde) démontre ma capacité à développer des systèmes de reconnaissance faciale fiables. En analysant visages et flux vidéo en temps réel, la solution identifie les individus enregistrés, signale les absences ou détecte les présences non autorisées. Intégrable à des systèmes de sécurité existants, cette technologie peut renforcer la sécurité de vos locaux, automatiser des tâches administratives fastidieuses (pointage, listes de présence) ou contrôler des accès, vous faisant gagner du temps et en sérénité. C'est un exemple de solution sur mesure que je peux développer pour vos besoins spécifiques en matière d'identification et de sécurité.",
    imageUrl: edutrackAiImage,
    imageUrlLarge: edutrackAiImage,
    date: "Février 2025 - Avril 2025", // Adjusted date based on context
    context: "Lauréat d'un concours de projet étudiant (Inde)", 
    technologies: ["Python", "Flask", "Reconnaissance Faciale", "React", "PostgreSQL", "Computer Vision"], 
    tags: ["Sécurité", "Automatisation", "Reconnaissance Faciale", "IA", "Computer Vision", "Contrôle d'accès"], 
    strengths: [
        "Identification fiable en temps réel.",
        "Gestion sécurisée des données d'identification.",
        "Interface intuitive pour la visualisation des accès/présences.",
        "Adaptabilité à divers environnements (écoles, entreprises...)."
    ],
    futureImprovements: [ 
        "Optimisation pour une performance accrue sur de grands volumes.",
        "Intégration avec d'autres systèmes de sécurité (alarmes, badges).",
        "Fonctionnalités d'analyse comportementale avancées."
    ],
     githubLink: "https://github.com/Lilian-Mayet/AI-Based-Attendance-System",
  },
  {
    id: 'proj-semantic-web',
   
    title: "Moteur de Recherche Intelligent (Web Sémantique & IA)",
    
    shortDescription: "Offrez à vos utilisateurs une recherche qui comprend le sens, pas juste les mots-clés, pour des résultats ultra-pertinents.",
    
    longDescription: "Fatigué des moteurs de recherche qui passent à côté de l'essentiel ? Ce projet universitaire démontre ma capacité à créer des systèmes de recherche 'intelligents'. En combinant la structuration de connaissances (Web Sémantique) avec la compréhension du langage par l'IA (Word Embeddings), ce moteur va au-delà des mots-clés pour saisir le contexte et l'intention de l'utilisateur. Le résultat : des informations plus pertinentes, mieux organisées et plus faciles à exploiter. Imaginez cette technologie appliquée à votre catalogue produits, votre base de connaissances interne ou votre site web pour améliorer drastiquement la découverte d'information et la satisfaction utilisateur. Je peux concevoir des solutions de recherche et de gestion de connaissances sur mesure pour valoriser vos données.",
    imageUrl: semanticWebImage,
    imageUrlLarge: semanticWebImage,
    date: "Novembre 2024 - Janvier 2025", 
    context: "Projet universitaire (Web Sémantique et NLP)", 
    technologies: ["Python", "SPARQL", "React", "NLP", "RDF", "Ontologie", "Embeddings"], 
    tags: ["Recherche Intelligente", "NLP", "IA", "Gestion des connaissances", "Web Sémantique", "Expérience Utilisateur"], 
    strengths: [
        "Compréhension fine du contexte des requêtes.",
        "Structuration efficace de l'information (Knowledge Graph).",
        "Amélioration significative de la pertinence des résultats.",
        "Capacité à intégrer diverses sources de données."
    ],
    futureImprovements: [ 
        "Application à des domaines métiers spécifiques (santé, e-commerce...).",
        "Interface utilisateur avec visualisation interactive des relations.",
        "Personnalisation des résultats basée sur le profil utilisateur."
    ]
  },
  {
    id: 'proj-esnn-enn',
     
    title: "Innovation en Architectures IA (ESNN / ENN)",
     
    shortDescription: "Conception d'architectures IA sur mesure pour résoudre des problèmes complexes là où les modèles standards atteignent leurs limites.",
    
    longDescription: "Certains défis nécessitent des solutions IA qui sortent des sentiers battus. Ce projet de recherche personnel illustre ma capacité à innover en concevant de nouvelles architectures de réseaux neuronaux (ESNN/ENN). L'objectif est de créer des modèles plus performants et capables de mieux comprendre des relations complexes dans les données, grâce à des connexions 'intelligentes' entre différentes parties du réseau. Si vous faites face à un problème particulièrement ardu (prévisions complexes, analyse de données non structurées, automatisation fine...) où les approches IA classiques ne suffisent pas, je peux mettre mon expertise en conception d'architectures neuronales avancées au service de votre projet pour développer une solution véritablement adaptée et performante. Mon objectif : transformer cette recherche en résultats concrets et publiables.",
    imageUrl: neuralNetImage,
    imageUrlLarge: neuralNetImage,
    date: "Avril 2025 - En cours", 
    context: "Projet de recherche personnel (avec objectif de publication)", 
    technologies: ["Python", "PyTorch", "Deep Learning", "Optimisation", "Recherche & Développement"], 
    tags: ["Innovation IA", "Deep Learning", "Modèles IA sur mesure", "R&D", "Performance", "Problèmes Complexes"], 
    strengths: [
        "Capacité à concevoir des solutions IA non conventionnelles.",
        "Expertise en optimisation de la performance des modèles.",
        "Approche rigoureuse basée sur la recherche scientifique.",
        "Vision pour résoudre des problèmes complexes."
    ],
    futureImprovements: [ 
        "Validation expérimentale sur des cas d'usage concrets.",
        "Développement d'outils pour faciliter l'application de ces architectures.",
        "Publication des résultats pour validation par la communauté scientifique."
    ],
    githubLink: "https://github.com/Lilian-Mayet/Enriched-Neural-Network-Research",
},
{
  id: 'proj-emotion-recognition',
  
  title: "Analyse Comportementale par IA Multi-Modale",
  
  shortDescription: "Comprenez mieux les interactions humaines (clients, candidats...) grâce à une IA analysant expressions faciales, voix et langage.",
  
  longDescription: "Comment vos clients ou candidats réagissent-ils réellement ? Ce projet démontre ma compétence dans l'analyse multi-modale (visage, voix, texte) pour extraire des insights comportementaux riches à partir d'interactions vidéo ou audio. Le système REC, développé pour analyser des entretiens, détecte les émotions en temps réel en combinant plusieurs modèles d'IA spécialisés (vision par ordinateur, traitement audio, NLP). Il génère ensuite un rapport détaillé sur l'évolution émotionnelle. Imaginez les applications : améliorer l'expérience client en comprenant leurs réactions, optimiser les processus RH, tester l'accueil de nouveaux produits, analyser des sessions de formation... Je peux développer des solutions IA pour vous aider à décrypter les signaux faibles et prendre des décisions plus éclairées basées sur une compréhension approfondie des comportements.",
  imageUrl: emotionRecImage,
  imageUrlLarge: emotionRecImage,
  date: "Mars 2024", 
  context: "Projet universitaire en IA appliquée", 
  technologies: ["Python", "Deep Learning", "TensorFlow", "Computer Vision", "Analyse Audio", "NLP", "React"], 
  tags: ["Analyse Comportementale", "IA", "Reconnaissance d'émotions", "Expérience Client", "HR Tech", "Analyse Multimodale"], 
  strengths: [
      "Analyse combinée de multiples sources (vidéo, audio, texte).",
      "Développement de modèles IA spécifiques pour la détection d'émotions.",
      "Capacité à générer des rapports synthétiques et exploitables.",
      "Visualisation des 'raisons' derrière les prédictions (explicabilité IA)."
  ],
  futureImprovements: [ 
      "Adaptation à des contextes variés (marketing, e-learning, santé...).",
      "Amélioration continue de la précision des modèles.",
      "Intégration d'analyses supplémentaires (langage corporel...)."
  ],
  githubLink : "https://github.com/Lilian-Mayet/Emotion_Recognition_For_Interview",
}
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
    degree: "Trimestre à l'étranger En Inde",
    school: "Presidency University à Bengalore",
    years: "2025 deuxième trimestre",
    description: "Trois mois de cours de robotique, informatique, et managment dans une université prestigieuse Indienne"
  },
  {
    id: 3,
    degree: "Semestre à l'étranger à Prague",
    school: "Université technique de Prague (CVUT)",
    years: "2022 deuxième semestre",
    description: "Semestre de cours sur les réseaux et la programmation orienté objet dans une unviversité tchèque"
  },
  {
    id: 4,
    degree: "BAFA",
    school: "UCPA",
    years: "2020",
    description: "BAFA spécialisation jeux en groupes, une vingtaine de colonie à mon actif"
  },
  {
    id: 5,
    degree: "Baccalauréat Scientifique",
    school: "Lycée Jeanne d'Albret",
    years: "2017 - 2020",
    description: "Option Sciences de l'Ingénieur, Mention Très Bien."
  },
];

export const interests = [
    "Design & Création Artistique",
    "Sports (Volley, Judo)", 
    "Hackathons & Compétitions de code",
    "Engagement Associatif (Garage ISEP, BDE)",
    "Veille Technologique (IA, Cloud)"
];
