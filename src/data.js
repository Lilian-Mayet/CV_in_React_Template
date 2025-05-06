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
  FaUsers, FaComments, FaLightbulb, FaHandshake
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
  linkedin: { text: 'Lilian Mayet', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/lilian-mayet-88b407219' }, 
   github: { text: 'lilian-m', icon: <FaGithub />, link: 'https://github.com/Lilian-Mayet' } 
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
  }
};

export const projects = [
  {
    id: 'proj-eduTrackAi', // Keep this ID unique
    title: "Detection automatic de présence et d'intrusion",
    shortDescription: "Solution innovante de reconnaissance faciale capable d’identifier automatiquement les élèves présents, absents ou inattendus à partir d’une simple photo",
    longDescription: "Dans le cadre d’un concours étudiant de trois mois à la Presidency University de Bangalore (Inde), nous avons conçu une application de reconnaissance faciale destinée à automatiser le suivi de présence en milieu scolaire. Le système s’appuie sur la technologie de face encoding pour mémoriser les visages enregistrés et identifier en temps réel les élèves présents, absents ou non autorisés via une image ou un flux vidéo. Le back-end, développé en Python avec les bibliothèques face_recognition et OpenCV, est relié à un front-end en React optimisé pour l'affichage dynamique des résultats. Pensée pour être intégrée à une caméra de sécurité, cette solution améliore à la fois la gestion administrative et la sécurité des établissements. Ce projet nous a permis de remporter la première place du concours universitaire",
    imageUrl: edutrackAiImage,
    imageUrlLarge: edutrackAiImage, 
    date: "Fevrier 2025 - Avril 2025",
    context: "Concours de projet libre étudiant à la Presidency University à Bengalore ",
    technologies: ["Python", "Flask", "Face-Encoding","React","PostGresSQL","Espace d'embedding"],
    tags: ["Traitement d'image", "Python", "Audio", "Image", "Reconnaissance Faciale"],
    strengths: [
        "Encodings et Embeddings en dimension élevé.",
        "Gestion de base de données complexe.",
        "Optimisation pour de l'utilisation en temps réel.",
        "Interface utilisateur complète."
    ],
    futureImprovements: [
        "Intégrer un GPU pour un temps de calcul plus rapide",
        "Sécuriser les données sensibles de la base de donnée.",
        "Intégration directement dans le système de sécurité de l'école."
    ],
     githubLink: "https://github.com/Lilian-Mayet/AI-Based-Attendance-System",
    // liveDemoLink: "#", // Add actual link if available
  },
  {
    id: 'proj-semantic-web',
    title: "Moteur de Recherche Sémantique Web",
    shortDescription: "Un moteur de recherche contextuel combinant ontologie, RDF et word embeddings pour améliorer la pertinence des résultats.",
    longDescription: "Dans le cadre d’un projet universitaire à la Presidency University (Inde), j’ai développé un moteur de recherche sémantique combinant le Web sémantique (ontologie, RDF, SPARQL) avec des modèles de word embeddings (Word2Vec, GloVe, BERT). L’objectif était de dépasser les recherches classiques par mots-clés en offrant des résultats plus pertinents, compréhensibles et adaptés au contexte de la requête utilisateur. Le moteur s’appuie sur une ontologie construite avec Protégé, une base de données RDF hébergée dans Apache Jena, et une interface intuitive en React, avec des résultats enrichis via SPARQL et embeddings.",
    imageUrl: semanticWebImage,
    imageUrlLarge: semanticWebImage,
    date: "Novembre 2024 - Janvier 2025",
    context: "Projet universitaire en groupe (Web Sémantique et Traitement du Langage Naturel).",
    technologies: ["Python", "SPARQL", "Apache Jena", "React", "Protégé", "Word2Vec", "GloVe", "BERT", "RDF", "Turtle", "SPARQL", "Triplestore"],
    tags: ["Web Sémantique", "NLP", "RDF", "SPARQL", "Ontologie", "Recherche", "Embeddings", "Knowledge Graph"],
    strengths: [
        "Compréhension sémantique des requêtes grâce aux embeddings.",
        "Modèle d'ontologie robuste pour structurer les concepts et relations.",
        "Résultats enrichis et contextualisés grâce à l'utilisation de SPARQL."
    ],
    futureImprovements: [
        "Étendre l'ontologie à d'autres domaines spécialisés (santé, éducation…).",
        "Améliorer l’interface utilisateur avec des visualisations de graphe sémantique.",
        "Ajouter un module d’apprentissage automatique pour personnaliser les résultats selon l’utilisateur."
    ]
     // githubLink: "#",
  },
  {
    id: 'proj-esnn-enn',
    title: "Nouvelle Architecture de Réseaux Neuronaux (ESNN / ENN)",
    shortDescription: "Conception d'un nouveau type d’IA basé sur des connexions inter-réseaux et inter-couches pour améliorer la performance des réseaux neuronaux.",
    longDescription: "Ce projet de recherche vise à proposer deux nouvelles architectures de réseaux neuronaux : les ESNN (Enriched Sub Neural Networks) et les ENN (Enriched Neural Networks). Les ESNN introduisent plusieurs sous-réseaux spécialisés connectés entre eux via des connexions inter-réseaux dynamiques, favorisant la spécialisation et le transfert riche de caractéristiques. Les ENN enrichissent les réseaux classiques (fully-connected ou CNN) en y ajoutant des connexions à longue portée entre couches éloignées, pour améliorer la propagation d’information et capturer des dépendances globales. Un algorithme d’optimisation adaptative est en cours de développement pour apprendre dynamiquement où placer ces connexions. L’objectif final est de publier un article scientifique décrivant cette architecture et ses performances.",
    imageUrl: neuralNetImage,
    imageUrlLarge: neuralNetImage,
    date: "Avril 2025 - En cours",
    context: "Projet de recherche personnel en intelligence artificielle, avec objectif de rédaction d’un article scientifique.",
    technologies: ["Python", "PyTorch", "Optimisation évolutionnaire", "Réseaux neuronaux", "Recherche scientifique"],
    tags: ["IA", "Réseaux Neuronaux", "Architecture", "Recherche", "Deep Learning", "Innovation", "Optimisation"],
    strengths: [
        "Approche innovante pour enrichir les architectures classiques.",
        "Capacité à capturer des dépendances complexes et à longue portée.",
        "Fondée sur une analyse comparative rigoureuse des architectures existantes."
    ],
    futureImprovements: [
        "Implémentation complète de l’algorithme d’optimisation des connexions dynamiques.",
        "Évaluation expérimentale sur benchmarks standards (CIFAR-10, IMDB…).",
        "Soumission d’un article de recherche à une conférence IA (NeurIPS, ICLR…)."
    ],
    githubLink: "https://github.com/Lilian-Mayet/Enriched-Neural-Network-Research",
},

{
  id: 'proj-emotion-recognition',
  title: "Analyse Émotionnelle en Entretien Vidéo",
  shortDescription: "Reconnaissance en temps réel des émotions d’un candidat via l’analyse faciale, vocale et sémantique durant un entretien d’embauche.",
  longDescription: "Ce projet, nommé REC, vise à analyser le comportement d’une personne lors d’un entretien d’embauche à travers trois axes : les expressions faciales, le ton de la voix et le contenu de ses propos. Les émotions sont détectées en temps réel grâce à deux modèles de réseaux neuronaux développés from scratch : un pour les expressions faciales (entraîné sur plus de 28 000 images) et un autre pour les émotions vocales (utilisant MFCC, Chroma et contraste spectral). Une troisième analyse sémantique permet d’évaluer la positivité ou la négativité des phrases prononcées. À la fin de l’entretien, un rapport comportemental détaillé est généré, incluant l’évolution émotionnelle du candidat.",
  imageUrl: emotionRecImage,
  imageUrlLarge: emotionRecImage,
  date: "Mars 2025",
  context: "Projet universitaire réalisé en groupe dans le cadre d’un module d’intelligence artificielle appliquée.",
  technologies: ["Python", "Réseaux Neuronaux", "TensorFlow", "Numpy", "OpenCV", "Librosa", "Grad-CAM", "MFCC", "Traitement du langage naturel", "React"],
  tags: ["IA", "Reconnaissance d’émotions", "Deep Learning", "NLP", "Computer Vision", "Audio Analysis", "Psychologie comportementale"],
  strengths: [
      "Analyse multimodale combinant image, audio et texte.",
      "Modèles de détection d’émotions créés from scratch avec explications visuelles via Grad-CAM.",
      "Rapport automatique complet à la fin de l'entretien."
  ],
  futureImprovements: [
      "Augmenter la précision via un ensemble de modèles plus vastes et des datasets plus diversifiés.",
      "Adapter le système à des contextes différents : RH, psychologie, e-learning, etc.",
      "Ajouter une analyse du langage corporel et de la posture via des détecteurs de squelette."
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