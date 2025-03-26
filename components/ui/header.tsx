"use client";

import { useEffect, useRef } from 'react';
import Logo from "./logo";

export default function TechHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration initiale
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particules
    const particles: Particle[] = [];
    const particleCount = 200;
    const colors = ['#3B82F6', '#EC4899', '#EF4444', '#9CA3AF']; // Bleu, rose, rouge, gris

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
      angle: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.alpha = Math.random() * 0.6 + 0.1;
        this.angle = 0;
      }

      update() {
        this.angle += 0.01;
        this.x += this.speedX + Math.cos(this.angle) * 0.5;
        this.y += this.speedY + Math.sin(this.angle) * 0.5;
        
        if (this.x > canvas.width + 20 || this.x < -20) this.x = this.x < 0 ? canvas.width : 0;
        if (this.y > canvas.height + 20 || this.y < -20) this.y = this.y < 0 ? canvas.height : 0;
      }

      draw() {
        ctx!.globalAlpha = this.alpha;
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Création des particules
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connexions entre particules
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx!.strokeStyle = `${particles[a].color}${Math.floor((1 - distance/100) * 0.3 * 255).toString(16).padStart(2, '0')}`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    // Animation
    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fond dégradé
      const gradient = ctx!.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1F2937');
      gradient.addColorStop(0.5, '#3B82F6');
      gradient.addColorStop(0.75, '#EC4899');
      gradient.addColorStop(1, '#EF4444');
      
      ctx!.globalAlpha = 0.15;
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      
      // Connexions
      connectParticles();
      
      // Particules
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Canvas animé */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 right-0 z-20 px-6 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-32 md:w-40">
            <Logo />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-indigo-300 transition-colors font-medium">Accueil</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors font-medium">Notre Solution</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors font-medium">Nos Atouts Clés</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors font-medium">Cas d'utilisation</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Contenu centré */}
      <div className="m-5 relative h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          Un futur automatisé grâce à l'IA 
          </span>
        </h1>
        
        <p className="m-5 text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
        L'IA de nouvelle génération pour votre entreprise
        </p>
        
        <button className="m-5 relative overflow-hidden group bg-gradient-to-r from-blue-900 to-pink-900 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
          <span className="relative z-10">Démarrer la demonstration maintenant</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>
    </header>
  );
}
