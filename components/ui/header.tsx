"use client";

import { useEffect, useRef, useState } from 'react';
import Logo from "./logo";
import Link from 'next/link';
import dynamic from 'next/dynamic';


// Dynamically import canvas component with SSR disabled
const ClientParticleCanvas = dynamic(
  () => import('../ParticleCanvas'),
  { ssr: false }
);
export default function TechHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const [slideDirection, setSlideDirection] = useState<'up'|'down'>('up');

  const slides = [
    {
      text: "Un futur automatisé grâce à l'IA",
      colorGradient: "from-blue-400 via-white to-purple-600",
      bgGradient: "from-blue-900/30 via-gray-800/30 to-purple-900/20",
      btnGradient: "from-blue-900/30 via-gray-800/30 to-purple-900/20",
      btnHover: "from-blue-500 to-purple-500"
    },
    {
      text: "L'innovation au service de votre entreprise",
      colorGradient: "from-gray-300 via-white to-red-500",
      bgGradient: "from-gray-900/30 via-white/10 to-red-900/20",
      btnGradient: "from-gray-600/30 via-white/10 to-red-900/20",
      btnHover: "from-gray-500 to-red-500"
    },
    {
      text: "La Révolution du Test Automatisé Mobile",
      colorGradient: "from-blue-500 via-gray-200 to-pink-600",
      bgGradient: "from-blue-800/40 via-white-700/30 to-pink-800/30",
      btnGradient: "from-blue-800/40 via-white-700/30 to-pink-800/30",
      btnHover: "from-blue-400 to-pink-500"
    }
  ];

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDisplayText(false);
      setSlideDirection('up');
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setDisplayText(true);
      }, 200); // Durée de l'animation de sortie
      
    }, 2000);

    return () => clearInterval(animationInterval);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#3B82F6', '#FFFFFF', '#9CA3AF', '#EC4899', '#EF4444', '#8B5CF6'];
    const particles: Particle[] = [];
    const particleCount = 180;

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
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.alpha = Math.random() * 0.6 + 0.1;
        this.angle = 0;
      }

      update() {
        this.angle += 0.01;
        this.x += this.speedX + Math.cos(this.angle) * 0.3;
        this.y += this.speedY + Math.sin(this.angle) * 0.3;
        
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

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      ctx.globalAlpha = 0.08;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `${particles[a].color}${Math.floor((1 - distance/100) * 0.2 * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fond adapté
      const currentSlide = slides[currentIndex];
      let gradient;
      
      if (currentSlide.bgGradient.includes('blue')) {
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1E40AF');
        gradient.addColorStop(0.5, '#4B5563');
        gradient.addColorStop(1, '#9D174D');
      } else if (currentSlide.bgGradient.includes('gray')) {
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#374151');
        gradient.addColorStop(0.5, '#F3F4F6');
        gradient.addColorStop(1, '#B91C1C');
      } else {
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1D4ED8');
        gradient.addColorStop(0.5, '#6B7280');
        gradient.addColorStop(1, '#BE185D');
      }
      
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      connectParticles();
      
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
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[nextIndex];

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  return (
    <header id='header' className="relative h-screen w-full overflow-hidden">
      {isMounted && (
        <ClientParticleCanvas
          currentIndex={currentIndex}
          slides={slides}
        />
      )}
      
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.bgGradient} transition-all duration-1000 opacity-70`}></div>
      
      <nav className="fixed top-0 left-0 right-0 z-20 px-6 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-32 md:w-40">
            <Logo />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#header" className="text-white hover:text-blue-300 transition-colors font-medium">Accueil</Link>
            <Link href="#features" className="text-white hover:text-blue-300 transition-colors font-medium">Notre Solution</Link>
            <Link href="#workflows" className="text-white hover:text-blue-300 transition-colors font-medium">Nos Atouts Clés</Link>
            <Link href="#video" className="text-white hover:text-blue-300 transition-colors font-medium">Cas d'utilisation</Link>
            <Link href="#cta" className="text-white hover:text-blue-300 transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </nav>
      
      <div className="m-5 relative h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        <div className="relative h-32 md:h-40 w-full overflow-hidden">
          {/* Texte principal avec animation */}
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-5 absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
            displayText ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentSlide.colorGradient}`}>
              {currentSlide.text}
            </span>
          </h1>
          
          {/* Texte suivant préchargé mais invisible */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 absolute inset-0 flex items-center justify-center opacity-0">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${nextSlide.colorGradient}`}>
              {nextSlide.text}
            </span>
          </h1>
        </div>
        
        <p className="m-5 text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
          L'IA de nouvelle génération pour votre entreprise
        </p>
        
        <Link href="#video" className={`m-5 relative overflow-hidden group text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-1000 bg-gradient-to-r ${currentSlide.btnGradient} hover:${currentSlide.btnHover}`}>
          <span className="relative z-10">Démarrer la demonstration maintenant</span>
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </header>
  );
}
