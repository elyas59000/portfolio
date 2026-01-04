'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, ChevronDown } from 'lucide-react';

// --- TES DONNÉES (MODIFIE ICI) ---
const portfolioData = {
  perso: {
    nom: "Ton Prénom",
    titre: "Étudiant BUT Informatique",
    accroche: "Futur développeur Fullstack, passionné par le web et les nouvelles technos.",
    email: "ton.email@gmail.com",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  skills: [
    { category: "Frontend", items: ["React", "Tailwind", "HTML/CSS"], icon: <Code2 size={24} /> },
    { category: "Backend", items: ["PHP", "SQL", "Java", "Node.js"], icon: <Database size={24} /> },
    { category: "Outils", items: ["Git", "Linux", "VS Code"], icon: <Terminal size={24} /> },
  ],
  projects: [
    {
      id: 1,
      title: "Projet SAÉ 1",
      desc: "Description courte de ton projet scolaire.",
      tech: ["Java", "SQL"],
      repo: "#"
    },
    {
      id: 2,
      title: "Site Portfolio",
      desc: "Ce site web, fait avec Next.js.",
      tech: ["Next.js", "React"],
      repo: "#"
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow-sm z-50 p-4">
        <div className="max-w-5xl mx-auto flex justify-between font-bold text-blue-600">
          <span>{portfolioData.perso.nom}</span>
          <div className="space-x-4 text-slate-600 hidden md:block">
            <a href="#projets" className="hover:text-blue-600">Projets</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-slate-800">
          Bonjour, je suis <span className="text-blue-600">{portfolioData.perso.nom}</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8">{portfolioData.perso.accroche}</p>
        <div className="flex justify-center gap-4">
          <a href={portfolioData.perso.github} className="p-2 bg-slate-800 text-white rounded"><Github /></a>
          <a href={portfolioData.perso.linkedin} className="p-2 bg-blue-700 text-white rounded"><Linkedin /></a>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((p) => (
              <div key={p.id} className="border p-6 rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-slate-600 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => <span key={t} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">{t}</span>)}
                </div>
                <a href={p.repo} className="text-blue-600 font-semibold flex items-center gap-2"><Github size={16}/> Voir le code</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-10 text-center text-slate-500 bg-slate-100">
        <p>Me contacter : {portfolioData.perso.email}</p>
      </footer>
    </div>
  );
}