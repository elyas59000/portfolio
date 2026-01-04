'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, ChevronDown, Figma, Globe, X, Send } from 'lucide-react';

// --- TES DONNÉES ---
const portfolioData = {
  perso: {
    nom: "Elyas Rabhiu",
    titre: "Étudiant BUT Informatique",
    accroche: "Futur développeur Fullstack & Admin Sys, passionné par l'architecture logicielle et le DevOps.",
    email: "elyas.rabhiu.etu@univ-lille.fr",
    linkedin: "https://www.linkedin.com/in/elyas-rabhiu-89b72a382/",
    github: "https://github.com/TonPseudo", // Mets ton vrai pseudo GitHub ici
  },
  formation: [
    {
      annee: "2024 - 2027",
      titre: "BUT Informatique",
      lieu: "IUT A - Université de Lille",
      desc: "Spécialisation Réalisation d'Applications. Développement Web, Base de données, Gestion de projet Agile."
    },
    {
      annee: "2021-2024",
      titre: "Baccalauréat Général",
      lieu: "Lycée Montebello",
      desc: "Spécialités Mathématiques et NSI. Mention Bien."
    }
  ],
  skills: [
    { category: "Frontend", items: ["React", "Tailwind", "HTML/CSS", "JavaFX"], icon: <Code2 size={24} /> },
    { category: "Backend & SGBD", items: ["Java", "PostgreSQL", "PHP", "Node.js"], icon: <Database size={24} /> },
    { category: "Système & DevOps", items: ["Linux (Debian)", "Bash", "SSH", "Git", "Docker"], icon: <Terminal size={24} /> },
  ],
  projects: [
    {
      id: 1,
      title: "Exploration Algorithmique (SAÉ 2.02)",
      desc: "Application Java complète pour l'appariement d'étudiants européens. Utilisation de graphes bipartis valués pour calculer les meilleures compatibilités selon les contraintes.",
      tech: ["Java", "JavaFX", "Algorithmique", "Graphes", "UML"],
      repo: "https://gitlab.univ-lille.fr/sae2.01-2.02/2025/A5",
      demo: "https://www.figma.com/design/bF0yAhsahym878TCPDJnVv/maquette-du-projet-appariement?node-id=0-1&t=eDy4Y36cYSRr2FbW-1",
      // 👇 IMPORTANT : Le chemin inclut maintenant le nom de ton projet GitLab
      image: "/portfolio-43c6d4/sae-appariement.png"
    },
    {
      id: 2,
      title: "Jeu de Labyrinthe Procédural",
      desc: "Jeu complet en JavaFX avec génération procédurale de niveaux. En charge de la Qualité Logicielle : mise en place de tests unitaires (JUnit 5, Réflexion) garantissant 70% de couverture et la solvabilité des cartes (BFS).",
      tech: ["Java 17", "JavaFX", "JUnit 5", "MVC", "Git"],
      repo: "#", 
      demo: "https://labyrintheweb.netlify.app/#",
      // 👇 IMPORTANT : Le chemin inclut maintenant le nom de ton projet GitLab
      image: "/portfolio-43c6d4/labyrinthe.png" 
    },
    {
      id: 3,
      title: "Admin Serveur Matrix Synapse",
      // Description professionnelle détaillée
      desc: "Déploiement et sécurisation d'un serveur de messagerie décentralisée sous Debian. Migration de base de données (SQLite vers PostgreSQL), configuration réseau via Tunnels SSH et résolution d'incidents critiques (Logs, YAML).",
      tech: ["Debian CLI", "PostgreSQL", "Matrix Synapse", "SSH", "Systemd"],
      repo: "#", 
      demo: null,
      image: null // Pas d'image -> le texte remontera automatiquement
    },
    {
      id: 4,
      title: "Mon Portfolio",
      desc: "Ce site web, développé avec Next.js et Tailwind CSS pour présenter mon parcours et mes compétences. Déploiement automatisé via Pipeline CI/CD sur GitLab Pages.",
      tech: ["Next.js", "React", "Tailwind", "CI/CD"],
      repo: "https://gitlab.univ-lille.fr/elyas.rabhiu.etu/elyas-rabhiu",
      demo: null,
      image: null // Pas d'image -> le texte remontera automatiquement
    }
  ]
};

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Ton identifiant Formspree
    const formspreeUrl = "https://formspree.io/f/mbdlpede"; 

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: senderEmail,
          subject: subject,
          message: message
        })
      });

      if (response.ok) {
        alert("Message envoyé avec succès ! Je vous répondrai bientôt.");
        setIsModalOpen(false);
        setSubject('');
        setMessage('');
        setSenderEmail('');
      } else {
        alert("Une erreur est survenue. Merci de réessayer.");
      }
    } catch (error) {
      alert("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow-sm z-50 p-4 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center font-bold text-blue-600">
          <span className="text-xl">{portfolioData.perso.nom}</span>
          <div className="space-x-6 text-slate-600 hidden md:block font-medium">
            <a href="#accueil" className="hover:text-blue-600 transition">Accueil</a>
            <a href="#formation" className="hover:text-blue-600 transition">Formation</a>
            <a href="#projets" className="hover:text-blue-600 transition">Projets</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="accueil" className="pt-40 pb-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-slate-800">
          Bonjour, je suis <span className="text-blue-600">{portfolioData.perso.nom}</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">{portfolioData.perso.accroche}</p>
        <div className="flex justify-center gap-4">
          <a href={portfolioData.perso.github} target="_blank" className="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"><Github /></a>
          <a href={portfolioData.perso.linkedin} target="_blank" className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"><Linkedin /></a>
          <button onClick={() => setIsModalOpen(true)} className="p-3 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition cursor-pointer">
            <Mail />
          </button>
        </div>
      </section>

      {/* FORMATION */}
      <section id="formation" className="py-20 bg-white px-4 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center flex justify-center items-center gap-2">
            <span className="h-1 w-10 bg-blue-600 rounded"></span> Ma Formation
          </h2>
          <div className="space-y-8 border-l-4 border-blue-100 pl-6 ml-4">
            {portfolioData.formation.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white"></div>
                <h3 className="text-xl font-bold text-slate-800">{item.titre}</h3>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{item.annee}</span>
                <p className="text-slate-500 italic mb-1">{item.lieu}</p>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Mes Compétences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.skills.map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  {skill.icon}
                  <h3 className="font-bold text-lg text-slate-800">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Mes Projets & SAÉ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((p) => (
              <div key={p.id} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-slate-50 flex flex-col">
                {/* Affiche l'image SEULEMENT si elle existe */}
                {p.image && (
                  <div className="h-48 w-full overflow-hidden border-b border-slate-100 group relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top hover:scale-105 transition duration-500" />
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">{p.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map(t => (
                      <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-slate-200">
                    {p.repo !== "#" && (
                      <a href={p.repo} target="_blank" className="flex items-center gap-2 text-slate-700 font-semibold hover:text-blue-600 text-sm">
                        <Github size={18}/> Code Source
                      </a>
                    )}
                    {p.demo && p.demo !== "#" && (
                       <a href={p.demo} target="_blank" className="flex items-center gap-2 text-slate-700 font-semibold hover:text-purple-600 text-sm">
                         {p.demo.includes('figma') ? <Figma size={18}/> : <Globe size={18}/>}
                         {p.demo.includes('figma') ? 'Maquette / Demo' : 'Site du jeu'}
                       </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer id="contact" className="py-12 text-center text-slate-600 bg-slate-100 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Me contacter</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium shadow-lg hover:shadow-blue-500/30"
        >
          <Mail size={20} /> M'envoyer un message
        </button>
        <p className="mt-8 text-sm text-slate-400">© 2025 Elyas Rabhiu • Portfolio BUT Informatique</p>
      </footer>

      {/* MODALE DE CONTACT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">Nouveau Message</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSendEmail} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Votre Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="votre.email@exemple.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Objet</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Proposition de stage..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Votre message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Bonjour Elyas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : <><Send size={18} /> Envoyer</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}