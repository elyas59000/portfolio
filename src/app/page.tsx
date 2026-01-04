'use client';

import React, { useState } from 'react';
// 👇 J'ai ajouté 'Dumbbell' pour le sport et retiré 'MonitorPlay'
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, ChevronDown, Figma, Globe, X, Send, FileText, Cpu, Gamepad2, Dumbbell } from 'lucide-react';

// --- TES DONNÉES ---
const portfolioData = {
  perso: {
    nom: "Elyas Rabhiu",
    titre: "Étudiant BUT Informatique",
    accroche: "Futur développeur Fullstack & Admin Sys, passionné par l'architecture logicielle et le DevOps.",
    email: "elyas.rabhiu.etu@univ-lille.fr",
    linkedin: "https://www.linkedin.com/in/elyas-rabhiu-89b72a382/",
    github: "https://github.com/elyas59000", 
    cv: "/portfolio-43c6d4/cv.pdf"
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
  // SECTION HOBBIES MISE À JOUR
  hobbies: [
    { nom: "Veille Tech", desc: "Toujours à l'affût des nouveaux frameworks.", icon: <Cpu size={20} /> },
    { nom: "Gaming", desc: "Stratégie et esprit d'équipe sur LoL/Valorant.", icon: <Gamepad2 size={20} /> },
    // 👇 Modification ici : Sport (Muscu & Boxe)
    { nom: "Sport", desc: "Discipline et dépassement de soi (Musculation & Boxe).", icon: <Dumbbell size={20} /> },
  ],
  projects: [
    {
      id: 1,
      title: "Exploration Algorithmique (SAÉ 2.02)",
      desc: "Application Java complète pour l'appariement d'étudiants européens. Utilisation de graphes bipartis valués pour calculer les meilleures compatibilités selon les contraintes.",
      tech: ["Java", "JavaFX", "Algorithmique", "Graphes", "UML"],
      repo: "https://gitlab.univ-lille.fr/sae2.01-2.02/2025/A5",
      demo: "https://www.figma.com/design/bF0yAhsahym878TCPDJnVv/maquette-du-projet-appariement?node-id=0-1&t=eDy4Y36cYSRr2FbW-1",
      image: "/portfolio-43c6d4/sae-appariement.png"
    },
    {
      id: 2,
      title: "Jeu de Labyrinthe Procédural",
      desc: "Jeu complet en JavaFX avec génération procédurale de niveaux. En charge de la Qualité Logicielle : mise en place de tests unitaires (JUnit 5, Réflexion) garantissant 70% de couverture et la solvabilité des cartes (BFS).",
      tech: ["Java 17", "JavaFX", "JUnit 5", "MVC", "Git"],
      repo: "#", 
      demo: "https://labyrintheweb.netlify.app/#",
      image: "/portfolio-43c6d4/labyrinthe.png" 
    },
    {
      id: 3,
      title: "Admin Serveur Matrix Synapse",
      desc: "Déploiement et sécurisation d'un serveur de messagerie décentralisée sous Debian. Migration de base de données (SQLite vers PostgreSQL), configuration réseau via Tunnels SSH et résolution d'incidents critiques (Logs, YAML).",
      tech: ["Debian CLI", "PostgreSQL", "Matrix Synapse", "SSH", "Systemd"],
      repo: "#", 
      demo: null,
      image: null 
    },
    {
      id: 4,
      title: "Mon Portfolio",
      desc: "Ce site web, développé avec Next.js et Tailwind CSS pour présenter mon parcours et mes compétences. Déploiement automatisé via Pipeline CI/CD sur GitLab Pages.",
      tech: ["Next.js", "React", "Tailwind", "CI/CD"],
      repo: "https://gitlab.univ-lille.fr/elyas.rabhiu.etu/elyas-rabhiu",
      demo: null,
      image: null
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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative overflow-hidden">
      
      {/* FOND DYNAMIQUE (Gradient Blobs) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 p-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center font-bold text-emerald-600">
          <span className="text-xl tracking-tight">{portfolioData.perso.nom}</span>
          
          <div className="flex items-center gap-6">
            <div className="space-x-6 text-gray-600 hidden md:block font-medium text-sm uppercase tracking-wider">
              <a href="#accueil" className="hover:text-emerald-600 transition">Accueil</a>
              <a href="#formation" className="hover:text-emerald-600 transition">Formation</a>
              <a href="#projets" className="hover:text-emerald-600 transition">Projets</a>
              <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
            </div>

            <a 
              href={portfolioData.perso.cv} 
              target="_blank" 
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition text-sm shadow-md font-medium"
            >
              <FileText size={18} /> 
              <span className="hidden sm:inline">Mon CV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO AVEC BADGE */}
      <section id="accueil" className="pt-40 pb-20 px-4 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6 border border-emerald-200 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          En recherche de stage / Alternance
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 tracking-tight">
          Bonjour, je suis <span className="text-emerald-600 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">{portfolioData.perso.nom}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{portfolioData.perso.accroche}</p>
        
        <div className="flex justify-center gap-4">
          <a href={portfolioData.perso.github} target="_blank" className="p-3 bg-gray-800 text-white rounded-xl hover:scale-110 transition shadow-lg"><Github /></a>
          <a href={portfolioData.perso.linkedin} target="_blank" className="p-3 bg-[#0077b5] text-white rounded-xl hover:scale-110 transition shadow-lg"><Linkedin /></a>
          <button onClick={() => setIsModalOpen(true)} className="p-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:scale-110 transition shadow-lg cursor-pointer">
            <Mail />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-emerald-600/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* FORMATION */}
      <section id="formation" className="py-20 bg-white/50 backdrop-blur-sm px-4 border-t border-gray-100 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex justify-center items-center gap-3">
            <span className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></span> 
            Ma Formation
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
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes Compétences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.skills.map((skill, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-400 hover:shadow-emerald-100/50 hover:-translate-y-1 transition duration-300">
                <div className="flex items-center gap-3 mb-4 text-emerald-600">
                  <div className="p-3 bg-emerald-50 rounded-lg">{skill.icon}</div>
                  <h3 className="font-bold text-lg text-gray-800">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">
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
      <section id="projets" className="py-20 bg-white/50 backdrop-blur-sm px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes Projets & SAÉ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((p) => (
              <div key={p.id} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-100 transition duration-300 bg-white flex flex-col">
                {p.image && (
                  <div className="h-56 w-full overflow-hidden border-b border-gray-100 relative">
                      <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition z-10"></div>
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-emerald-700 transition">{p.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map(t => (
                      <span key={t} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 text-xs font-bold rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-gray-100 mt-auto">
                    {p.repo !== "#" && (
                      <a href={p.repo} target="_blank" className="flex items-center gap-2 text-gray-700 font-semibold hover:text-emerald-600 text-sm">
                        <Github size={18}/> Code
                      </a>
                    )}
                    {p.demo && p.demo !== "#" && (
                       <a href={p.demo} target="_blank" className="flex items-center gap-2 text-gray-700 font-semibold hover:text-purple-600 text-sm">
                         {p.demo.includes('figma') ? <Figma size={18}/> : <Globe size={18}/>}
                         {p.demo.includes('figma') ? 'Maquette' : 'Demo'}
                       </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION HOBBIES (CE QUE J'AIME) */}
      <section className="py-20 px-4 relative z-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-800">Un peu plus sur moi...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.hobbies.map((hobby, idx) => (
              <div key={idx} className="p-6 bg-white/60 rounded-xl border border-gray-200 flex flex-col items-center gap-3 hover:-translate-y-1 transition duration-300">
                <div className="text-emerald-600 bg-emerald-50 p-3 rounded-full">{hobby.icon}</div>
                <h3 className="font-bold text-gray-800">{hobby.nom}</h3>
                <p className="text-sm text-gray-500">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer id="contact" className="py-16 text-center text-gray-600 bg-gray-50 border-t border-gray-200 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Prêt à collaborer ?</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-bold text-lg shadow-xl shadow-emerald-200 hover:-translate-y-1"
        >
          <Mail size={22} /> Me contacter
        </button>
        <div className="mt-12 flex justify-center gap-6 text-gray-400">
           <a href={portfolioData.perso.github} className="hover:text-emerald-600 transition"><Github size={20}/></a>
           <a href={portfolioData.perso.linkedin} className="hover:text-blue-600 transition"><Linkedin size={20}/></a>
        </div>
        <p className="mt-6 text-sm text-gray-400">© 2025 Elyas Rabhiu • Conçu avec Next.js & Tailwind</p>
      </footer>

      {/* MODALE DE CONTACT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">Envoyer un message</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSendEmail} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-gray-50 focus:bg-white"
                  placeholder="votre.email@exemple.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Objet</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-gray-50 focus:bg-white"
                  placeholder="Proposition de stage..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none transition bg-gray-50 focus:bg-white"
                  placeholder="Bonjour Elyas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? "Envoi..." : <><Send size={18} /> Envoyer</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}