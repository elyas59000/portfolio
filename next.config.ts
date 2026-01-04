import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Génère un site statique (HTML) pour GitLab
  images: {
    unoptimized: true,   // Obligatoire pour les images sur GitLab Pages
  },
};

export default nextConfig;