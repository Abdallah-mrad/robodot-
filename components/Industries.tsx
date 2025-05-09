// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

// gsap.registerPlugin(ScrollTrigger);

// export default function Industries() {
//   const industriesRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const mm = gsap.matchMedia();
    
//     mm.add("(min-width: 768px)", () => {
//       industriesRef.current.forEach((item, i) => {
//         if (!item) return;
        
//         gsap.fromTo(item, 
//           { y: 50, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.6,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//               trigger: item,
//               start: "top 80%",
//               end: "top 60%",
//               scrub: 1,
//             }
//           }
//         );
//       });
//     });

//     return () => mm.revert();
//   }, []);

//   const addToIndustriesRef = (el: HTMLDivElement | null, index: number) => {
//     industriesRef.current[index] = el;
//   };

//   return (
//     <section id="industries" className="relative py-12 md:py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
//       {/* Background shape */}
//       <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
//         {/* <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" /> */}
//       </div>

//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         {/* Section header */}
//         <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
//           <motion.h2 
//             className="text-4xl font-semibold md:text-5xl relative inline-block"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: false }}
//           >
//             <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-red-200),var(--color-indigo-200),var(--color-red-50),var(--color-indigo-300),var(--color-red-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
//               Conçu pour votre secteur
//             </span>
//             <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
//           </motion.h2>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               title: "Semi-conducteurs",
//               description: "Tests haute précision des puces électroniques avec contrôle thermique et RF intégré.",
//               highlight: "Réduction de 40% du temps de test"
//             },
//             {
//               title: "Pharmaceutique",
//               description: "Tri automatisé des blister packs et détection d'anomalies par IA vision.",
//               highlight: "99.7% de détection des défauts"
//             },
//             {
//               title: "Aérospatial",
//               description: "Validation des composants en conditions extrêmes (-60°C à +200°C).",
//               highlight: "Certification accélérée"
//             },
//             {
//               title: "Automobile",
//               description: "Tests de modules électroniques (ECU) avec rapport de conformité instantané.",
//               highlight: "Audit traçable en temps réel"
//             },
//             {
//               title: "Télécoms",
//               description: "Tests 5G/6G en environnement blindé (cage Faraday).",
//               highlight: "Zéro interférence"
//             },
//             {
//               title: "Recherche",
//               description: "Plateforme modulable pour prototypage et R&D.",
//               highlight: "Protocoles personnalisables"
//             }
//           ].map((industry, index) => (
//             <motion.div
//               key={index}
//               ref={el => addToIndustriesRef(el, index)}
//               className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 border border-gray-700 hover:border-indigo-400/50 transition-all"
//               whileHover={{ y: -5 }}
//             >
//               <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-red-500/10" />
//               <h3 className="relative z-10 mb-3 text-2xl font-semibold text-gray-100">
//                 {industry.title}
//               </h3>
//               <p className="relative z-10 mb-4 text-indigo-50/65">
//                 {industry.description}
//               </p>
//               <div className="relative z-10 inline-block rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
//                 {industry.highlight}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion} from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

export default function IndustrialMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);

  useEffect(() => {
    // Animation du tableau entier
    gsap.from(tableRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: tableRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Animation des lignes en cascade
    rowRefs.current.forEach((row, i) => {
      if (!row) return;
      
      gsap.from(row, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    // Animation du header
    const headers = tableRef.current?.querySelectorAll("th");
    headers?.forEach((header, i) => {
      gsap.from(header, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        delay: 0.3 + i * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 85%"
        }
      });
    });
  }, []);

  const applications = [
    {
      domaine: "Semi-conducteurs",
      exemples: "Tests de précision sur circuits imprimés, détection de micro-défauts",
      icon: "🔬"
    },
    {
      domaine: "Pharmaceutique",
      exemples: "Inspection visuelle des lignes de production, contrôle d'hygiène sans contact",
      icon: "💊"
    },
    {
      domaine: "Aérospatial",
      exemples: "Tests dans des environnements extrêmes, analyse de composants critiques",
      icon: "🚀"
    },
    {
      domaine: "Agroalimentaire",
      exemples: "Surveillance de chaînes de production, détection de contaminants visuels",
      icon: "🍏"
    },
    {
      domaine: "Automobile",
      exemples: "Contrôle qualité automatisé en fin de ligne, vérification d'assemblage",
      icon: "🚗"
    },
    {
      domaine: "Électronique grand public",
      exemples: "Tests de fonctionnement d'appareils, reconnaissance d'erreurs d'affichage",
      icon: "📱"
    },
    {
      domaine: "Laboratoires de recherche",
      exemples: "Automatisation de protocoles de tests répétés, collecte de données expérimentales",
      icon: "🧪"
    }
  ];

  return (
    <section id='industries' ref={containerRef} className="relative py-28 px-4 sm:px-6 overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      </div>

      <div className="mx-auto max-w-3xl pb-12 text-center">
          <motion.h2 
            className="text-4xl font-semibold md:text-5xl relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-red-200),var(--color-indigo-200),var(--color-red-50),var(--color-indigo-300),var(--color-red-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Un robot.. Des usages multiples..
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          </motion.h2>
        </div>


      <div className="max-w-6xl mx-auto">
        <table
          ref={tableRef}
          className="w-full text-left border-separate border-spacing-y-3"
        >
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
              <th className="px-8 py-6 text-xl font-semibold rounded-l-xl">Domaine</th>
              <th className="px-8 py-6 text-xl font-semibold rounded-r-xl">Exemples d'utilisation</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr 
                key={i}
                ref={(el:any) => rowRefs.current[i] = el}
                className="group hover:scale-[1.02] transition-transform duration-300"
              >
                <td className="px-8 py-6 bg-gray-800/80 backdrop-blur-sm rounded-l-xl border-l-4 border-indigo-400 group-hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{app.icon}</span>
                    <span className="text-lg font-semibold bg-gradient-to-r from-indigo-200 to-blue-200 bg-clip-text text-transparent">
                      {app.domaine}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 bg-gray-800/60 backdrop-blur-sm rounded-r-xl text-indigo-100/90 group-hover:text-white transition-colors">
                  {app.exemples}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Légende animée */}
      <motion.div 
        className="text-center mt-16 text-indigo-300/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Plusieurs domaines couverts par notre solution RoboDot</p>
        <motion.div 
          className="mx-auto mt-4 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
}