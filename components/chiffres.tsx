"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

type AnimatedCounterProps ={
  value: number;
  label: string;
}
const AnimatedCounter = ({ value, label } : AnimatedCounterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="p-8 bg-gray-900/80 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Effet néon bleu/gris au hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-400/10 rounded-xl" />
        <div className="absolute -inset-1 blur-md bg-blue-500/20 rounded-xl" />
      </div>

      <p className="text-5xl font-bold text-white-400 relative z-10 neon-text-blue">
        {inView ? <CountUp start={0} end={value} duration={3} /> : 0}+
      </p>
      <p className="text-lg text-gray-300 group-hover:text-blue-200 mt-3 relative z-10 transition-colors duration-300">
        {label}
      </p>
      
      {/* Reflets subtils bleutés */}
      <div className="absolute top-0 right-0 w-20 h-20 -mr-5 -mt-5 bg-blue-400/10 rounded-full filter blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default function Chiffres() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image 
          className="max-w-none opacity-60" 
          src={BlurredShapeGray} 
          width={760} 
          height={668} 
          alt="Blurred shape" 
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-70" aria-hidden="true">
        <Image 
          className="max-w-none" 
          src={BlurredShape} 
          width={760} 
          height={668} 
          alt="Blurred shape" 
        />
      </div>

      {/* Effet de particules bleues/grises */}
      <div className="absolute inset-0 -z-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-blue-500/15' : 'bg-red-400/10'}`}
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              filter: 'blur(1px)',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          {/* Section header avec effet néon bleu */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <motion.h2 
              className="text-4xl font-semibold md:text-5xl relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* <span className=" bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 neon-text-blue-title"> */}
              <span  className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-red-200),var(--color-indigo-200),var(--color-red-50),var(--color-indigo-300),var(--color-red-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Chiffres Clés
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
            </motion.h2>
          </div>

          {/* Grille améliorée */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              { label: "Utilisateurs", value: 500 },
              { label: "Projets Complétés", value: 120 },
              { label: "Taux de Satisfaction", value: 98 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <AnimatedCounter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Styles globaux */}
      <style jsx global>{`
        .neon-text-blue {
          text-shadow: 0 0 5px , 
                       0 0 10px rgba(96, 165, 250, 0.2);
        }
        .neon-text-blue-title {
          text-shadow: 0 0 8px rgba(96, 165, 250, 0.5), 
                       0 0 16px rgba(218, 19, 26, 0.3);
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
}