"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion, useAnimation } from "framer-motion";

gsap.registerPlugin(MotionPathPlugin);

export default function TechOrbit() {
  const controls = useAnimation();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Configuration des 3 cercles orbitaux avec améliorations
  const orbitConfig = [
    {
      radius: 180,
      speed: 80,
      color: "border-blue-400/50",
      zIndex: 3,
      items: [
        {
          id: "core-ia",
          title: "Vision par IA", 
          icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-6 h-10' fill='currentColor'><path d='M12 15a3 3 0 100-6 3 3 0 000 6z' /><path fill-rule='evenodd' d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z' clip-rule='evenodd' /></svg>,
          color: "from-blue-600 to-white-400",
          description: "Analyse d'images en temps réel par intelligence artificielle pour détection précise de défauts.",
          specs: []
        },
        { 
          id: "core-quantum", 
          title: "Tri Intelligent de Composants", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M5 4h14v2H5zM3 6h18v2H3zM7 8h10v2H7zM5 10h14v2H5zM3 12h18v2H3zM7 14h10v2H7zM5 16h14v2H5zM3 18h18v2H3z" />
        </svg>, 
          color:  "from-blue-600 to-white-600",
          description: "Système de reconnaissance intelligente pour tri automatique des pièces.",
          specs: []
        },
        { 
          id: "core-neural",
          title: "Rapports en Temps Réel", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
          <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z" />
        </svg>,
        color: "from-blue-600 to-white-600",
          description: "Génération instantanée de rapports avec visualisation des données.",
          specs: []
        }
      ]
    },
    {
      radius: 230,
      speed: 60,
      color: "border-red-400/50",
      zIndex: 2,
      items: [
        { 
          id: "mid-holo",
          title: "Haute Vitesse de Précision", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>,
        color: "from-red-500 to-white-600",
          description: "Mouvements précis à 200mm/s avec résolution au micron.",
          specs: []
        },
        { 
          id: "mid-nano",
          title: "Système à Vide Intégré", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M15 3H9V1h6v2zm-4 16h2v1h-2v-1zm6-5v2h1v1H6v-1h1v-2H3v7h18v-7h-4z" />
          <path d="M16 7h-1V5H9v2H8c-1.66 0-3 1.34-3 3v2h2v-2c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2h2v-2c0-1.66-1.34-3-3-3z" />
        </svg>,
         color: "from-red-500 to-white-600",
          description: "Manipulation sécurisée des composants fragiles par aspiration.",
          specs: []
        },
        { 
          id: "mid-plasma",
          title: "Cage Faraday pour Tests RF", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>,
          color: "from-red-500 to-white-600",
          description: "Environnement blindé pour tests sans interférences électromagnétiques.",
          specs: []
        }
      ]
    },
    {
      radius: 280,
      speed: 40,
      color: "border-violet-400/50",
      zIndex: 1,
      items: [
        { 
          id: "outer-ai",
          title: "Contrôle et Flexibilité", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M15 12H9v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V12z" />
          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z" />
        </svg>,
        color: "from-indigo-500 to-white-600",
          description: "Contrôle à distance via interface web sécurisée.",
          specs: []
        },
        { 
          id: "outer-remote",
          title: "Structure Modulable", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M8 18h8v-2H8v2zm0-4h8v-2H8v2zm0-7v2h8V7H8z" />
          <path d="M4 21h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM4 5h16v14H4V5z" />
        </svg>, 
          color: "from-indigo-500 to-white-600",
          description: "Plateforme mobile avec hauteur ajustable pour différents besoins.",
          specs: []
        },
        { 
          id: "outer-precision",
          title: "Contrôle Thermique", 
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' className="w-8 h-8">
          <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" />
        </svg>,
         color: "from-indigo-500 to-white-600",
          description: "Simulation de conditions extrêmes.",
          specs: []
        }
      ]
    }
  ];

  // Génération aléatoire des étoiles améliorée
  const generateStars = () => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: `star-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.1,
      delay: Math.random() * 15,
      duration: 5 + Math.random() * 15,
      twinkle: Math.random() > 0.7
    }));
  };

  const [stars] = useState(generateStars());

  useEffect(() => {
    // Animation des orbites avec effet de profondeur
    orbitRefs.current.forEach((orbit, index) => {
      if (!orbit) return;
      
      gsap.to(orbit, {
        rotation: index % 2 ? 360 : -360,
        duration: orbitConfig[index].speed,
        repeat: -1,
        ease: "none",
        transformOrigin: "center"
      });

      // Compensation de rotation pour chaque élément
      const startIdx = index * 3;
      itemRefs.current.slice(startIdx, startIdx + 3).forEach(item => {
        if (!item) return;
        gsap.to(item, {
          rotation: index % 2 ? -360 : 360,
          duration: orbitConfig[index].speed,
          repeat: -1,
          ease: "none",
          transformOrigin: "center"
        });
      });
    });

    // Interaction souris améliorée
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      controls.start({
        x: (clientX - window.innerWidth / 2) / 30,
        y: (clientY - window.innerHeight / 2) / 30,
        transition: { 
          type: "spring", 
          damping: 20, 
          stiffness: 150,
          mass: 0.5
        }
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id='tech' className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Fond étoilé amélioré */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute rounded-full bg-white ${star.twinkle ? "animate-pulse" : ""}`}
            initial={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity
            }}
            animate={{
              opacity: star.twinkle 
                ? [star.opacity * 0.3, star.opacity, star.opacity * 0.3]
                : star.opacity,
              transition: {
                duration: star.duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay: star.delay
              }
            }}
          />
        ))}
      </div>

      {/* Centre énergétique avec effet de profondeur */}
      <motion.div
        animate={controls}
        className="relative w-42 h-42 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl flex items-center justify-center"
      >
        {/* Noyau lumineux amélioré */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="absolute w-full h-full rounded-full bg-blue-100/10 blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.15, 0.1],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <div className="relative z-10 text-5xl text-cyan-300">⚡</div>
        </div>

        {/* Cercles orbitaux - ordre inversé pour z-index */}
        {orbitConfig.map((orbit, orbitIndex) => (
          <div
            key={`orbit-${orbitIndex}`}
            ref={(el:any) => orbitRefs.current[orbitIndex] = el}
            className={`absolute rounded-full border ${orbit.color}`}
            style={{
              width: `${orbit.radius * 2}px`,
              height: `${orbit.radius * 2}px`,
              zIndex: orbit.zIndex
            }}
          >
            {orbit.items.map((tech, techIndex) => {
              const angle = (Math.PI * 2 / orbit.items.length) * techIndex;
              const x = Math.cos(angle) * orbit.radius;
              const y = Math.sin(angle) * orbit.radius;
              const itemIndex = orbitIndex * 3 + techIndex;

              return (
                <div
                  key={tech.id}
                  ref={(el:any) => itemRefs.current[itemIndex] = el}
                  className="absolute w-16 h-16 transition-all duration-300"
                  style={{
                    left: `${orbit.radius + x - 32}px`,
                    top: `${orbit.radius + y - 32}px`,
                  }}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {/* Icône avec effet de profondeur */}
                  <motion.div
                    className={`w-full h-full rounded-full flex items-center justify-center text-2xl bg-gradient-to-br ${tech.color} shadow-lg cursor-pointer hover:shadow-xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: hoveredTech === tech.id ? 
                        [1, 1.2, 1.1] : 
                        [1, 1.05, 1],
                      opacity: 1,
                      boxShadow: hoveredTech === tech.id ?
                        "0 0 20px rgba(59, 130, 246, 0.5)" :
                        "0 0 10px rgba(59, 130, 246, 0.2)",
                      transition: { 
                        delay: orbitIndex * 0.15 + techIndex * 0.1,
                        duration: 0.5
                      }
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Bulle d'information améliorée */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 p-4 bg-gray-900/95 rounded-xl border border-indigo-400/30 backdrop-blur-sm shadow-2xl z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredTech === tech.id ? 1 : 0,
                      y: hoveredTech === tech.id ? 0 : 20,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400,
                      damping: 25
                    }}
                    
                  >
                    <h3 className="font-bold text-lg text-indigo-100">{tech.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{tech.description}</p>
                    <ul className="mt-3 space-y-2">
                      {tech.specs.map((spec, i) => (
                        <li 
                          key={i} 
                          className="text-xs text-cyan-300 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 mt-1 flex-shrink-0"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>

      {/* Titre optionnel (décommenter si besoin) */}
        <motion.h2 
        className="absolute top-0 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400 pointer-events-none "
        initial={{ y: -50, opacity: 0 }}
       
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-red-200),var(--color-indigo-200),var(--color-red-50),var(--color-indigo-300),var(--color-red-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
      
        Au cœur de l’innovation.. RoboDot  
       </span>
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent "></span>
   
        </motion.h2>
     
    </section>
  );
}