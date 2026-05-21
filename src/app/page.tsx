'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, ChevronDown, ChevronUp, Figma, Globe, X, Send, FileText, Cpu, Gamepad2, Dumbbell, Users, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

// --- DONNÉES PROFESSIONNELLES ---
const portfolioData = {
  perso: {
    nom: "Elyas Rabhiu",
    titre: "Développeur Fullstack & Administrateur Système",
    accroche: "Étudiant en BUT Informatique, passionné par l'architecture logicielle, la conception de backends robustes et l'optimisation DevOps.",
    orientation: "Actuellement à la recherche d'une opportunité en alternance ou d'un stage technique. Mon objectif est de mettre à profit mes compétences en frameworks modernes (Laravel, React) et en gestion d'infrastructures pour répondre à des problématiques métiers concrètes.",
    email: "elyas.rabhiu.etu@univ-lille.fr",
    linkedin: "https://www.linkedin.com/in/portfolio-43c6d4-89b72a382/",
    github: "https://github.com/elyas59000", 
    cv: "/portfolio-43c6d4/cv.pdf"
  },
  formation: [
    {
      annee: "2024 - 2027",
      titre: "BUT Informatique (Spécialisation Réalisation d'Applications)",
      lieu: "IUT A - Université de Lille",
      desc: "Approfondissement en architecture logicielle, gestion de bases de données relationnelles et automatisation de déploiements."
    },
    {
      annee: "2021 - 2024",
      titre: "Baccalauréat Général",
      lieu: "Lycée Montebello",
      desc: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques). Mention Bien."
    }
  ],
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaFX"], icon: <Code2 size={24} /> },
    { category: "Backend & SGBD", items: ["Laravel", "PHP (Eloquent)", "Java", "Node.js (Express)", "PostgreSQL"], icon: <Database size={24} /> },
    { category: "Système & DevOps", items: ["Linux (Debian/ZorinOS)", "Bash", "Configuration SSH", "Git / GitLab CI", "Docker"], icon: <Terminal size={24} /> },
  ],
  hobbies: [
    { nom: "Veille Technologique", desc: "Suivi actif des écosystèmes web (Next.js, Laravel 11).", icon: <Cpu size={20} /> },
    { nom: "Gaming", desc: "Esprit d'équipe et vision stratégique sur jeux compétitifs.", icon: <Gamepad2 size={20} /> },
    { nom: "Sport", desc: "Discipline, régularité et résilience (Musculation & Boxe).", icon: <Dumbbell size={20} /> },
  ],
  projects: [
    {
      id: 1,
      title: "Backend de Gestion 'Supermoto-garage'",
      desc: "Conception et réalisation complète d'un système de gestion de garage structuré autour d'une base de données relationnelle de 9 tables.",
      tech: ["Laravel", "PHP", "Eloquent ORM", "MySQL", "Architecture MVC"],
      repo: "#",
      demo: null,
      image: "/portfolio-43c6d4/supermoto.png",
      contexte: "Développement d'une application métier centralisée répondant à des contraintes strictes d'intégrité des données.",
      equipe: "Projet mené en totale autonomie.",
      role: "Modélisation de la base de données (9 tables), création des migrations, sécurisation des routes et implémentation des contrôleurs CRUD pour l'ensemble des entités.",
      resultats: "Un backend performant et modulaire permettant une traçabilité complète des interventions, des stocks de pièces et des fiches clients.",
      hardSkills: ["Maîtrise du pattern MVC avec le framework Laravel.", "Conception de requêtes complexes et relations via Eloquent ORM.", "Gestion avancée des contraintes d'intégrité référentielle."],
      softSkills: ["Autonomie : Capacité à mener un projet technique de bout en bout.", "Rigueur : Structuration propre et maintenable du code."],
      analyseReflexive: {
        appris: "L'utilisation d'un framework moderne accélère considérablement le développement sécurisé de structures de données complexes.",
        difficultes: "Assurer la cohérence du CRUD sur des tables fortement interdépendantes. J'ai surmonté ce défi en implémentant des transactions de base de données, évitant ainsi les écritures partielles en cas d'erreur.",
        differemment: "Pour une future itération, j'envisagerais de concevoir une API REST découplée afin de faciliter l'intégration avec n'importe quel client frontend moderne."
      }
    },
    {
      id: 2,
      title: "Tales of Danmaku - Moteur de Jeu Web",
      desc: "Développement d'un jeu de type Shoot'em up (Bullet Hell) coopératif en temps réel, avec moteur de rendu 2D et synchronisation réseau.",
      tech: ["TypeScript", "Canvas HTML5", "Node.js", "Socket.IO", "Docker"],
      repo: "https://gitlab.univ-lille.fr/jsae/2025-2026/projets/groupe-h/equipe-1/tales-of-danmaku",
      demo: null,
      image: "/portfolio-43c6d4/maintitle.png",
      contexte: "Création from scratch d'un moteur de jeu 2D multijoueur exigeant de hautes performances d'affichage (des milliers de projectiles) et une faible latence.",
      equipe: "Équipe de 3 développeurs.",
      role: "Développement des interfaces interactives (HUD in-game, menus dynamiques, gestion des inputs) et intégration complète des assets visuels et audios.",
      resultats: "Un jeu fluide, modulable grâce à un moteur de patterns paramétrique, et doté d'un mode coopératif stable reposant sur une architecture client-serveur optimisée.",
      hardSkills: [
        "Programmation orientée objet avancée et typage strict (TypeScript).",
        "Développement de boucle de rendu (Game Loop) sur Canvas HTML5.",
        "Synchronisation d'états multijoueur et gestion de la latence via WebSockets."
      ],
      softSkills: [
        "Proactivité : Préparation et conception des assets visuels en amont de la phase de code.",
        "Communication : Négociation et obtention des droits d'utilisation musicaux auprès d'un artiste indépendant (ZahranW).",
        "Répartition des tâches : Collaboration efficace entre la logique serveur, le gameplay et l'interface."
      ],
      analyseReflexive: {
        appris: "J'ai compris l'importance de l'optimisation réseau dans le jeu vidéo : utiliser le serveur comme simple relais et simuler la logique localement permet d'économiser drastiquement la bande passante.",
        difficultes: "Implémenter des tests unitaires sur des classes (ennemis, projectiles) fortement couplées au rendu graphique. Nous avons résolu cela en isolant et en testant uniquement la logique mathématique pure (déplacements, calculs de score).",
        differemment: "Pour la suite, j'automatiserais davantage la génération des vagues d'ennemis via des fichiers de configuration (JSON/YAML) pour éviter le scripting manuel et accélérer l'ajout de contenu."
      }
    },
    {
      id: 3,
      title: "API RESTful Backend 'EcoDrop'",
      desc: "Développement d'une API backend sécurisée et multi-format (JSON/XML) pour la gestion et la gamification d'un réseau de recyclage.",
      tech: ["Java EE", "Architecture REST", "SQL Avancé", "Sécurité RBAC", "Bruno"],
      repo: "#", 
      demo: null,
      image: "portfolio-43c6d4/ecodrop.png", 
      contexte: "Création du cœur de service d'une plateforme B2B/B2C permettant le suivi des points de collecte et l'établissement d'un classement des recycleurs.",
      equipe: "Projet mené en totale autonomie.",
      role: "Modélisation de la base de données (5 tables), implémentation du pattern DAO, développement des endpoints, et sécurisation via tokens avec gestion des rôles (Admin/User).",
      resultats: "Une API Stateless performante, respectant strictement les standards HTTP (201, 204, 401, 403, 409) et couverte par une suite de tests automatisés.",
      hardSkills: [
        "Conception d'architecture REST (Négociation de contenu, verbes sémantiques).",
        "Développement de requêtes SQL complexes (Jointures, COALESCE, sous-requêtes d'insertion).",
        "Sécurisation des routes et contrôle d'accès basé sur les rôles (RBAC)."
      ],
      softSkills: [
        "Anticipation : Prévention des failles de concurrence logicielle au niveau de la base de données.",
        "Rigueur de test : Vérification systématique des cas d'erreurs (4xx) via l'outil de test Bruno."
      ],
      analyseReflexive: {
        appris: "J'ai compris l'importance de respecter la sémantique stricte des codes de retour HTTP pour garantir une communication claire avec les applications clientes.",
        difficultes: "Garantir qu'une borne de collecte ne puisse pas déborder lors de requêtes simultanées. J'ai résolu ce problème de concurrence en déportant la logique métier (calcul de la capacité maximale) directement dans la condition de la requête SQL d'insertion, interdisant l'écriture en cas de dépassement.",
        differemment: "Pour faire évoluer ce service vers un standard de production, je remplacerais l'authentification basique par l'implémentation de JSON Web Tokens (JWT) et je générerais une documentation interactive via Swagger/OpenAPI."
      }
    },
    {
      id: 4,
      title: "Déploiement Serveur Matrix Synapse",
      desc: "Installation, sécurisation et maintenance opérationnelle d'un serveur de messagerie instantanée décentralisé sous environnement Linux.",
      tech: ["Debian CLI", "PostgreSQL", "Matrix Synapse", "Nginx", "Tunnels SSH"],
      repo: "#",
      demo: null,
      image: "portfolio-43c6d4/matrix.jpg",
      contexte: "Mise en production d'une infrastructure réseau pour héberger un service de communication critique.",
      equipe: "Travail en binome avec revues techniques.",
      role: "Responsable de l'installation sous Debian, de la migration d'une base de données SQLite vers PostgreSQL, et de la configuration du reverse proxy Nginx.",
      resultats: "Un serveur de communication parfaitement fonctionnel, sécurisé et accessible depuis l'extérieur.",
      hardSkills: ["Administration système Linux avancée en ligne de commande.", "Configuration réseau, proxying et gestion des certificats SSL.", "Migration de bases de données en environnement de production."],
      softSkills: ["Résolution de problèmes : Diagnostic méthodique via l'analyse des logs système.", "Adaptabilité : Prise en main rapide de documentations techniques denses."],
      analyseReflexive: {
        appris: "L'importance cruciale de la sécurité périphérique et de la précision dans la configuration des règles de routage.",
        difficultes: "Lors des tests, les connexions externes via les tunnels SSH échouaient. L'analyse des configurations m'a permis d'identifier qu'il manquait l'adresse '0.0.0.0' dans les paramètres de transfert local SSH (.ssh/config), étape indispensable pour autoriser le trafic entrant.",
        differemment: "Je privilégierais aujourd'hui une approche par conteneurisation (Docker Compose) pour automatiser et isoler les différents services (Synapse, Postgres, Nginx)."
      }
    },
    {
      id: 5,
      title: "Jeu de Labyrinthe Procédural",
      desc: "Développement d'une application desktop intégrant des algorithmes de génération de cartes et une validation stricte de la qualité du code.",
      tech: ["Java 17", "JavaFX", "JUnit 5", "Algorithme BFS", "Git"],
      repo: "#",
      demo: "https://labyrintheweb.netlify.app/#",
      image: "/portfolio-43c6d4/labyrinthe.png",
      contexte: "Création d'un moteur de jeu nécessitant une couverture de tests exhaustive et des algorithmes de parcours fiables.",
      equipe: "Équipe de 3 développeurs sous méthodologie Agile.",
      role: "En charge de la Qualité Logicielle. Implémentation du moteur de tests unitaires et de l'algorithme BFS pour certifier la solvabilité des niveaux.",
      resultats: "Couverture de tests supérieure à 70% et un générateur de labyrinthe garantissant l'absence d'impasses bloquantes.",
      hardSkills: ["Implémentation d'algorithmes de parcours de graphes (BFS).", "Mise en place de tests unitaires avancés (utilisation de la réflexion Java).", "Conception MVC en environnement JavaFX."],
      softSkills: ["Travail en équipe : Synchronisation du code via Git.", "Communication technique : Explication des choix algorithmiques à l'équipe."],
      analyseReflexive: {
        appris: "Adopter une approche orientée tests (TDD) dès le début du projet permet d'identifier les régressions instantanément et facilite le refactoring.",
        difficultes: "Empêcher l'algorithme procédural de créer des boucles infinies. Nous avons modélisé un cycle de vie strict pour la génération avec des conditions d'arrêt précises.",
        differemment: "L'intégration d'un pipeline CI/CD (GitLab CI) aurait permis d'automatiser l'exécution des tests à chaque commit."
      }
    },
    {
      id: 6,
      title: "Moteur d'Appariement par Graphes",
      desc: "Application d'optimisation permettant d'associer automatiquement des étudiants à des universités européennes selon de multiples contraintes.",
      tech: ["Java", "JavaFX", "Algorithmique des Graphes", "UML", "Figma"],
      repo: "https://gitlab.univ-lille.fr/sae2.01-2.02/2025/A5",
      demo: "https://www.figma.com/design/bF0yAhsahym878TCPDJnVv/maquette-du-projet-appariement?node-id=0-1&t=eDy4Y36cYSRr2FbW-1",
      image: "/portfolio-43c6d4/sae-appariement.png",
      contexte: "Développement d'un outil d'aide à la décision basé sur des structures de graphes bipartis valués.",
      equipe: "Groupe de 4 développeurs.",
      role: "Conception de l'expérience utilisateur (UX/UI) via Figma, développement des vues JavaFX et intégration avec le moteur algorithmique backend.",
      resultats: "Une interface fluide permettant de traiter et d'afficher instantanément les associations optimales pour des centaines de profils.",
      hardSkills: ["Maquettage UI/UX professionnel.", "Modélisation métier via diagrammes UML.", "Manipulation de structures de données complexes."],
      softSkills: ["Gestion du temps : Respect d'un planning de livraisons itératives.", "Négociation technique : Alignement des besoins IHM avec les contraintes de performance du backend."],
      analyseReflexive: {
        appris: "La traduction de besoins algorithmiques abstraits en une interface utilisateur claire et intuitive.",
        difficultes: "Éviter que les calculs complexes ne gèlent l'interface graphique. Problème résolu par le traitement asynchrone des tâches (découplage des threads).",
        differemment: "Allouer plus de temps à la phase de conception architecturale (UML) en amont pour éviter les redéfinitions de classes en cours de développement."
      }
    }
  ]
};

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});

  const toggleProject = (id: number) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formspreeUrl = "https://formspree.io/f/mbdlpede"; 

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: senderEmail, subject, message })
      });

      if (response.ok) {
        alert("Message envoyé avec succès !");
        setIsModalOpen(false);
        setSubject(''); setMessage(''); setSenderEmail('');
      } else {
        alert("Une erreur est survenue.");
      }
    } catch (error) {
      alert("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative overflow-hidden">
      
      {/* ARRIÈRE-PLAN DYNAMIQUE */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 p-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center font-bold text-emerald-600">
          <span className="text-xl tracking-tight">{portfolioData.perso.nom}</span>
          <div className="flex items-center gap-6">
            <div className="space-x-6 text-gray-600 hidden md:block font-medium text-sm uppercase tracking-wider">
              <a href="#accueil" className="hover:text-emerald-600 transition">Accueil</a>
              <a href="#profil" className="hover:text-emerald-600 transition">Profil</a>
              <a href="#formation" className="hover:text-emerald-600 transition">Formation</a>
              <a href="#projets" className="hover:text-emerald-600 transition">Projets</a>
            </div>
            <a href={portfolioData.perso.cv} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition text-sm font-medium shadow-md">
              <FileText size={18} /> <span className="hidden sm:inline">Mon CV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="accueil" className="pt-40 pb-16 px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6 border border-emerald-200 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          À l'écoute d'opportunités (Alternance / Stage)
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 tracking-tight">
          Bonjour, je suis <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">{portfolioData.perso.nom}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{portfolioData.perso.accroche}</p>
        <div className="flex justify-center gap-4">
          <a href={portfolioData.perso.github} target="_blank" className="p-3 bg-gray-800 text-white rounded-xl hover:scale-110 transition shadow-lg"><Github /></a>
          <a href={portfolioData.perso.linkedin} target="_blank" className="p-3 bg-[#0077b5] text-white rounded-xl hover:scale-110 transition shadow-lg"><Linkedin /></a>
          <button onClick={() => setIsModalOpen(true)} className="p-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:scale-110 transition shadow-lg cursor-pointer"><Mail /></button>
        </div>
      </section>

      {/* SECTION PROFIL & OBJECTIF PRO */}
      <section id="profil" className="py-16 bg-white border-t border-b border-gray-100 relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Objectif Professionnel</h2>
          <p className="text-gray-600 leading-relaxed text-lg bg-gray-50 p-6 rounded-2xl border border-gray-100 italic">
            "{portfolioData.perso.orientation}"
          </p>
        </div>
      </section>

      {/* FORMATION */}
      <section id="formation" className="py-20 bg-gray-50/50 backdrop-blur-sm px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex justify-center items-center gap-3">
            <span className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></span> 
            Parcours Académique
            <span className="h-1 w-10 bg-gradient-to-l from-emerald-500 to-teal-400 rounded-full"></span>
          </h2>
          <div className="space-y-12 border-l-2 border-emerald-100 pl-8 ml-4 md:ml-0">
            {portfolioData.formation.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-white border-4 border-emerald-500"></div>
                <h3 className="text-2xl font-bold text-gray-800">{item.titre}</h3>
                <span className="inline-block mt-1 mb-2 px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded uppercase tracking-wider">{item.annee}</span>
                <p className="text-emerald-600 font-medium mb-2 flex items-center gap-2"><Globe size={16}/> {item.lieu}</p>
                <p className="text-gray-600 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="py-20 bg-white px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Expertise Technique</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.skills.map((skill, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-400 hover:shadow-lg transition duration-300">
                <div className="flex items-center gap-3 mb-4 text-emerald-600">
                  <div className="p-3 bg-emerald-50 rounded-lg">{skill.icon}</div>
                  <h3 className="font-bold text-lg text-gray-800">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="bg-white text-gray-600 px-3 py-1 rounded-md text-sm font-medium border border-gray-200 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS & RETOURS D'EXPÉRIENCE */}
      <section id="projets" className="py-20 bg-gray-50/50 backdrop-blur-sm px-4 relative z-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">Réalisations & Retours d'Expérience</h2>
            <p className="text-gray-500 mt-2">Démonstration de mon savoir-faire technique et de mon approche méthodologique.</p>
          </div>
          
          {/* CORRECTION ICI : Suppression de "items-start" pour que les cartes aient la même hauteur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((p) => {
              const isExpanded = !!expandedProjects[p.id];
              return (
                <div key={p.id} className="group bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500 flex flex-col">
                  
                  {/* IMAGE EN BANNIÈRE HAUTE */}
                  {p.image && (
                    <div className="w-full aspect-video overflow-hidden border-b border-gray-100 relative bg-gray-100 shrink-0">
                        <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition z-10"></div>
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700" 
                        />
                    </div>
                  )}

                  {/* Contenu principal de la carte */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map(t => (
                        <span key={t} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 text-xs font-bold rounded-full">{t}</span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.desc}</p>
                    
                    {/* mt-auto pousse cette barre de boutons tout en bas de la carte, garantissant un alignement parfait */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex gap-4">
                        {p.repo !== "#" && (
                          <a href={p.repo} target="_blank" className="flex items-center gap-1.5 text-gray-700 font-semibold hover:text-emerald-600 text-sm transition">
                            <Github size={17}/> Code
                          </a>
                        )}
                        {p.demo && (
                          <a href={p.demo} target="_blank" className="flex items-center gap-1.5 text-gray-700 font-semibold hover:text-purple-600 text-sm transition">
                            {p.demo.includes('figma') ? <Figma size={17}/> : <Globe size={17}/>}
                            {p.demo.includes('figma') ? 'Maquette' : 'Démo'}
                          </a>
                        )}
                      </div>

                      <button 
                        onClick={() => toggleProject(p.id)}
                        className="flex items-center gap-1.5 px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition text-xs font-bold shadow-sm"
                      >
                        {isExpanded ? <><ChevronUp size={14}/> Fermer</> : <><ChevronDown size={14}/> REX Technique</>}
                      </button>
                    </div>
                  </div>

                  {/* PANNEAU DÉROULANT : MÉTHODE STAR / REX */}
                  {isExpanded && (
                    <div className="bg-gray-50 border-t border-gray-200 p-8 space-y-6 animate-in slide-in-from-top duration-300">
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="flex items-center gap-2 font-bold text-gray-800 mb-2.5 text-base">
                            <Users size={16} className="text-emerald-600" /> Cadre & Impact
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed"><strong className="text-gray-700">Contexte :</strong> {p.contexte}</p>
                          <p className="text-xs text-gray-600 leading-relaxed mt-1"><strong className="text-gray-700">Organisation :</strong> {p.equipe}</p>
                          <p className="text-xs text-gray-600 leading-relaxed mt-1"><strong className="text-gray-700">Responsabilités :</strong> {p.role}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                          <h4 className="font-bold text-emerald-800 mb-2 text-xs uppercase tracking-wider">🛠️ Hard Skills</h4>
                          <ul className="list-disc list-inside space-y-1 text-xs text-emerald-900">
                            {p.hardSkills.map((hs, i) => <li key={i}>{hs}</li>)}
                          </ul>
                        </div>
                        <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                          <h4 className="font-bold text-teal-800 mb-2 text-xs uppercase tracking-wider">🤝 Soft Skills</h4>
                          <ul className="list-disc list-inside space-y-1 text-xs text-teal-900">
                            {p.softSkills.map((ss, i) => <li key={i}>{ss}</li>)}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-3 shadow-sm">
                        <h4 className="font-bold text-gray-800 flex items-center gap-2 text-base pb-1.5 border-b border-gray-100">
                          <Lightbulb size={18} className="text-amber-500" /> Retour d'Expérience (REX)
                        </h4>
                        <div className="space-y-2.5">
                          <p className="text-xs text-gray-600 leading-relaxed">
                            <strong className="text-gray-700">💡 Apprentissages :</strong> {p.analyseReflexive.appris}
                          </p>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            <strong className="text-amber-700">⚠️ Résolution de problèmes :</strong> {p.analyseReflexive.difficultes}
                          </p>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            <strong className="text-gray-700">🔄 Vision future :</strong> {p.analyseReflexive.differemment}
                          </p>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="py-20 px-4 relative z-10 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-800">Profil & Centres d'Intérêt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.hobbies.map((hobby, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-200 flex flex-col items-center gap-3 hover:-translate-y-1 transition duration-300">
                <div className="text-emerald-600 bg-emerald-50 p-3 rounded-full">{hobby.icon}</div>
                <h3 className="font-bold text-gray-800">{hobby.nom}</h3>
                <p className="text-sm text-gray-500">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-16 text-center text-gray-600 bg-gray-50 border-t border-gray-200 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Prêt à collaborer ?</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-bold text-lg shadow-xl shadow-emerald-200 hover:-translate-y-1"
        >
          <Mail size={22} /> Me contacter par e-mail
        </button>
        <p className="mt-12 text-sm text-gray-400">© 2026 {portfolioData.perso.nom} • Développé avec Next.js & Tailwind CSS</p>
      </footer>

      {/* MODALE DE CONTACT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">Formulaire de contact</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSendEmail} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="votre.email@exemple.com" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Objet</label>
                <input type="text" name="subject" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="Sujet..." value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none transition bg-gray-50 focus:bg-white" placeholder="Bonjour..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition disabled:opacity-50 shadow-lg">
                  {isSubmitting ? "Envoi..." : <><Send size={18} /> Envoyer le message</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}