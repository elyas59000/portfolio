import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  
  basePath: '/elyas-rabhiu',    
  images: {
    unoptimized: true,  
  },
};

export default nextConfig;