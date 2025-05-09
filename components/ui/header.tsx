"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Logo from "./logo";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function TechHeader() {
  const threeRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // const slides = [
  //   {
  //     text: "Un futur automatisé grâce à l'IA",
  //     colorGradient: "from-blue-400 via-white to-purple-600",
  //     btnGradient: "from-blue-900/30 via-gray-800/30 to-purple-900/20",
  //     btnHover: "from-blue-500 to-purple-500",
  //     lineColor: "#3b82f6"
  //   },
  //   {
  //     text: "L'innovation au service de votre entreprise",
  //     colorGradient: "from-gray-300 via-white to-red-500",
  //     btnGradient: "from-gray-600/30 via-white/10 to-red-900/20",
  //     btnHover: "from-gray-500 to-red-500",
  //     lineColor: "#ef4444"
  //   },
  //   {
  //     text: "La Révolution du Test Automatisé Mobile",
  //     colorGradient: "from-blue-500 via-gray-200 to-pink-600",
  //     btnGradient: "from-blue-800/40 via-white-700/30 to-pink-800/30",
  //     btnHover: "from-blue-400 to-pink-500",
  //     lineColor: "#ec4899"
  //   }
  // ];

  // Handle scroll for sticky nav
  
  const slides = [
    {
      text: "Un futur automatisé grâce à l'IA",
      subText: "Optimisez vos processus métier avec des solutions intelligentes et prédictives.",
      colorGradient: "from-blue-400 via-white to-purple-600",
      btnGradient: "from-blue-900/30 via-gray-800/30 to-purple-900/20",
      btnHover: "from-blue-500 to-purple-500",
      lineColor: "#3b82f6"
    },
    {
      text: "L'innovation au service de votre entreprise",
      subText: "Libérez votre potentiel avec des outils technologiques conçus pour la performance.",
      colorGradient: "from-gray-300 via-white to-red-500",
      btnGradient: "from-gray-600/30 via-white/10 to-red-900/20",
      btnHover: "from-gray-500 to-red-500",
      lineColor: "#ef4444"
    },
    {
      text: "La Révolution du Test Automatisé Mobile",
      subText: "Accélérez vos cycles de test avec une solution fiable, rapide et sans effort.",
      colorGradient: "from-blue-500 via-gray-200 to-pink-600",
      btnGradient: "from-blue-800/40 via-white-700/30 to-pink-800/30",
      btnHover: "from-blue-400 to-pink-500",
      lineColor: "#ec4899"
    }
  ];
   
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // PCB/Wave lines animation
  useEffect(() => {
    if (!linesRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    linesRef.current.appendChild(canvas);
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.7';
    canvas.width = linesRef.current.offsetWidth;
    canvas.height = linesRef.current.offsetHeight;

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = linesRef.current!.offsetWidth;
      canvas.height = linesRef.current!.offsetHeight;
    });
    resizeObserver.observe(linesRef.current);

    // PCB line parameters
    const gridSize = 40;
    const lineCount = Math.ceil(canvas.width / gridSize) * 2;
    const points = Array.from({ length: lineCount }, (_, i) => ({
      x: i * gridSize,
      y: canvas.height / 2 + Math.random() * 100 - 50,
      speed: 0.2 + Math.random() * 0.8,
      amplitude: 20 + Math.random() * 80,
      frequency: 0.01 + Math.random() * 0.02
    }));

    let animationId: number;
    let time = 0;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Current slide line color
      const currentColor = slides[currentIndex].lineColor;
      
      // Draw PCB-like circuit lines
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = currentColor;
      ctx.beginPath();
      
      points.forEach((point, i) => {
        const y = canvas.height / 2 + 
                 Math.sin(time * point.speed + i * 0.2) * point.amplitude;
        
        if (i === 0) {
          ctx.moveTo(point.x, y);
        } else {
          // PCB-style right angles
          const prevY = canvas.height / 2 + 
                       Math.sin(time * points[i-1].speed + (i-1) * 0.2) * points[i-1].amplitude;
          
          ctx.lineTo(point.x - gridSize/2, prevY);
          ctx.lineTo(point.x - gridSize/2, y);
          ctx.lineTo(point.x, y);
        }
      });
      ctx.stroke();

      // Add connection dots
      ctx.fillStyle = currentColor;
      points.forEach((point, i) => {
        if (i % 4 === 0) { // Only some points get dots
          const y = canvas.height / 2 + 
                   Math.sin(time * point.speed + i * 0.2) * point.amplitude;
          ctx.beginPath();
          ctx.arc(point.x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      time += 0.02;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      linesRef.current?.removeChild(canvas);
    };
  }, [currentIndex]);

  // Three.js particles (simplified for performance)
  useEffect(() => {
    if (!threeRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeRef.current.appendChild(renderer.domElement);

    // Data points (simulating GPU data flow)
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Particules en argent métallique non changeable
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03, // Taille plus petite
      color: new THREE.Color(0xc0c0c0), // Couleur argent métallique
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 15;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      threeRef.current?.removeChild(renderer.domElement);
    };
  }, []); // Retiré la dépendance à theme pour que la couleur ne change pas

  const currentSlide = slides[currentIndex];

  return (
    <header id='header' className="relative h-screen w-full overflow-hidden bg-gray-950">
      {/* Three.js background */}
      <div ref={threeRef} className="absolute inset-0 w-full h-full opacity-30" />
      
      {/* PCB Wave Lines Animation */}
      <div ref={linesRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      
      {/* Navigation - Tech Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
          scrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <Logo />
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

<div className="hidden md:flex items-center space-x-4"> {/* Augmentation de space-x-1 à space-x-4 */}
  {['Accueil', 'Vision', 'Avantages', 'DEMO', "Ce Qu'on Propose", "Pour Qui ?"].map((item, index) => (
    <motion.div
      key={item}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.8 }}
      className="relative"
    >
      <Link
   href={`#${index === 0 ? 'header' : index === 1 ? 'Features' : index === 2 ? 'workflows' : index === 3 ? 'video' : index === 4 ? 'tech' : index === 5 ? 'industries' : 'cta'}`}     
      className="relative px-4 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors" 
      >
        <span className="relative z-10 flex items-center">
          {item}
        </span>
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-4/5 -translate-x-1/2" />
      </Link>
    </motion.div>
  ))}
  
  <div className="w-px h-6 mx-4 bg-gray-700" />
  <a href="#cta">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-2 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg" 
  >
    Contactez nous
  </motion.button>
  </a>
</div>
        </div>
      </motion.nav>
      
      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-16 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentSlide.colorGradient}`}>
                {currentSlide.text}
              </span>
            </h1>
            <span className={`text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto ${currentSlide.colorGradient}`}>
                {currentSlide.subText}
              </span>
         
          </motion.div>
        </AnimatePresence>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r ${currentSlide.btnGradient} hover:bg-gradient-to-r ${currentSlide.btnHover} transition-all shadow-lg hover:shadow-xl flex items-center`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Démonstration
          </motion.button>
          
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r ${currentSlide.btnGradient} hover:bg-gradient-to-r ${currentSlide.btnHover} transition-all shadow-lg hover:shadow-xl flex items-center`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Fonctionnalités
          </motion.button>
        </div>
        
        {/* Tech specs floating indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8 opacity-80">
          {['Reconnaissance IA', 'Ultra-mobile', 'Interopérabilité totale', 'Support Réactif'].map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ y: -5 }}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800 text-sm text-gray-300 flex items-center"
            >
              {/* <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" /> */}
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}
