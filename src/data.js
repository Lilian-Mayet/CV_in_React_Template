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
   github: { text: 'lilian-m', icon: <FaGithub />, link: 'https://github.com/...' } // Add GitHub if available
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
    id: 'proj-gen-ai', // Keep this ID unique
    title: "Générateur Audio/Image IA",
    shortDescription: "Exploration de différents algorithmes d'IA générative pour créer du contenu audio et visuel original.",
    longDescription: "Ce projet personnel visait à explorer les capacités des modèles d'IA générative modernes. J'ai expérimenté avec des architectures comme les GANs et les Transformers pour la génération d'images et de courtes séquences audio, en me concentrant sur la compréhension des hyperparamètres et l'évaluation de la qualité des sorties.",
    imageUrl: "https://via.placeholder.com/350x250/007bff/ffffff?text=Generative+AI", // Thumbnail
    imageUrlLarge: "https://via.placeholder.com/800x450/007bff/ffffff?text=Generative+AI+Detail", // Larger image for detail page
    date: "Mars 2024 - Mai 2024",
    context: "Projet personnel de veille technologique et d'apprentissage autodidacte.",
    technologies: ["Python", "PyTorch", "Librosa (Audio)", "Matplotlib", "Jupyter Notebook", "Git"],
    tags: ["IA Générative", "Python", "Pytorch", "Audio", "Image", "Deep Learning"],
    strengths: [
        "Compréhension approfondie des défis de l'IA générative.",
        "Mise en œuvre de plusieurs architectures de modèles.",
        "Analyse qualitative des résultats générés."
    ],
    futureImprovements: [
        "Explorer des modèles de diffusion (Diffusion Models).",
        "Améliorer le contrôle sur les générations (guidage par texte).",
        "Créer une interface utilisateur simple pour tester les modèles."
    ],
    // githubLink: "#", // Add actual link if available
    // liveDemoLink: "#", // Add actual link if available
  },
  {
    id: 'proj-search-engine',
    title: "Moteur de Recherche Sémantique",
    shortDescription: "Développement d'un moteur de recherche basé sur les embeddings pour trouver des informations pertinentes par similarité sémantique.",
    longDescription: "Fatigué des recherches par mots-clés traditionnelles, j'ai construit un prototype de moteur de recherche utilisant des embeddings de phrases (Sentence Transformers) pour comprendre le sens des requêtes et des documents. Il permet de trouver des documents similaires même s'ils ne partagent pas exactement les mêmes mots.",
    imageUrl: "https://via.placeholder.com/350x250/28a745/ffffff?text=Semantic+Search",
    imageUrlLarge: "https://via.placeholder.com/800x450/28a745/ffffff?text=Semantic+Search+Detail",
    date: "Décembre 2023 - Février 2024",
    context: "Projet universitaire en groupe (Traitement Automatique du Langage Naturel).",
    technologies: ["Python", "Sentence Transformers", "FAISS (Vector Index)", "Flask (API)", "React (Frontend basique)", "Docker"],
    tags: ["NLP", "Embeddings", "Python", "Vector Database", "API", "Recherche"],
    strengths: [
        "Indexation et recherche vectorielle rapides.",
        "API simple pour l'intégration.",
        "Pertinence des résultats améliorée par rapport aux mots-clés seuls."
    ],
    futureImprovements: [
        "Intégrer des modèles d'embeddings plus larges et récents.",
        "Optimiser l'indexation pour des datasets plus volumineux.",
        "Ajouter des fonctionnalités de filtrage avancées."
    ],
     // githubLink: "#",
  },
  {
    id: 'proj-smart-city-viz',
    title: "Visualisation Trafic Urbain",
    shortDescription: "Création d'une interface de visualisation interactive pour analyser les données simulées de trafic issues du projet Smart City.",
    longDescription: "Dans le cadre de mon alternance chez NVIDIA, un besoin est apparu pour visualiser et analyser les données massives générées par la simulation de trafic urbain. J'ai développé une interface web interactive utilisant React et une librairie de data visualisation pour afficher les flux de trafic, les points de congestion et d'autres métriques clés sur une carte.",
    imageUrl: "https://via.placeholder.com/350x250/ffc107/000000?text=City+Viz",
     imageUrlLarge: "https://via.placeholder.com/800x450/ffc107/000000?text=City+Viz+Detail",
    date: "En cours (depuis Avril 2024)",
    context: "Projet interne lié à l'alternance chez NVIDIA (Projet Smart City).",
    technologies: ["React", "JavaScript", "Deck.gl / Mapbox GL JS", "API REST", "CSS Modules", "Node.js (pour un serveur mock)"],
    tags: ["Data Visualisation", "JavaScript", "React", "Simulation", "API", "Frontend"],
    strengths: [
        "Interface utilisateur intuitive et réactive.",
        "Capacité à gérer et afficher de grands volumes de données géospatiales.",
        "Intégration facile avec l'API de données de simulation."
    ],
    futureImprovements: [
        "Ajouter des options de comparaison temporelle.",
        "Intégrer des analyses statistiques directement dans l'interface.",
        "Optimiser les performances de rendu pour des simulations encore plus grandes."
    ],
  },
   {
    id: 'proj-article-llm',
    title: "Article Scientifique sur LLM",
    shortDescription: "Rédaction et contribution à un article scientifique détaillant les approches et résultats de l'utilisation de LLMs pour l'analyse comportementale.",
    longDescription: "Suite aux travaux menés chez Capgemini Engineering sur l'analyse du comportement conducteur via LLM, nous avons formalisé nos méthodes, expériences et résultats dans un article scientifique. J'ai participé activement à la rédaction, à la génération des graphiques et à la mise en forme selon les standards de publication.",
    imageUrl: "https://via.placeholder.com/350x250/dc3545/ffffff?text=Research+Paper",
    imageUrlLarge: "https://via.placeholder.com/800x450/dc3545/ffffff?text=Research+Paper+Detail",
    date: "Juin 2024 - Juillet 2024",
    context: "Valorisation scientifique des travaux R&D menés durant l'alternance chez Capgemini Engineering.",
    technologies: ["Latex", "Python (pour figures)", "LLMs (concepts)", "Méthodologie Scientifique", "Git"],
    tags: ["Rédaction Scientifique", "LLM", "Data Science", "Publication", "Communication"],
    strengths: [
        "Formalisation claire d'une approche technique complexe.",
        "Production de figures et tableaux de qualité.",
        "Respect des contraintes de formatage et de soumission."
    ],
    futureImprovements: [
        "Présenter les travaux lors d'une conférence.",
        "Explorer les retours des relecteurs (si soumis) pour améliorer l'article.",
    ],
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