"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorflowImg01 from "@/public/images/Intelligence Autonome.png";
import WorflowImg02 from "@/public/images/Contrôle Précis.png";
import WorflowImg03 from "@/public/images/Efficacité Maximale.png";
import { motion } from "framer-motion";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import Spotlight from "@/components/spotlight";

gsap.registerPlugin(ScrollTrigger);

export default function Workflows() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const setupAnimation = () => {
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        // Animation for cards
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          
          gsap.fromTo(card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              }
            }
          );
        });

        // Animation for section content
        gsap.fromTo(".section-content",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            }
          }
        );
      });

      return () => mm.revert();
    };

    const ctx = gsap.context(setupAnimation, sectionRef);
    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el: HTMLAnchorElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <section id='workflows' ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="section-content mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
              <motion.h2 
                className="text-4xl font-semibold md:text-5xl relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-red-200),var(--color-indigo-200),var(--color-red-50),var(--color-indigo-300),var(--color-red-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Une révolution pour l'industrie de demain
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
              </motion.h2>
            </div>
            <motion.p 
              className="text-lg text-indigo-200/65"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: false }}
            >
              Un robot mobile, alliant IA et reconnaissance d'image, pour un contrôle précis, une efficacité maximale et une performance sans compromis. Révolutionnez vos processus industriels.
            </motion.p>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
            <Image
              className="max-w-none"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <motion.a
              ref={el => addToCardsRef(el, 0)}
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-red-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-red-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="block mx-auto" 
                  src={WorflowImg01}
                  width={200}
                  height={200}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-8 flex justify-center">
                    <span className="relative inline-flex items-center justify-center rounded-full bg-gray-800/40 px-8 py-4 text-l font-bold tracking-wide before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-indigo-500/20">
                      <span className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-200 bg-clip-text text-transparent">
                        INTELLIGENCE AUTONOME
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-100">
                    Conçu pour les industries des semi-conducteurs et pharmaceutiques, ce robot mobile révolutionne les processus grâce à son intelligence artificielle avancée et sa technologie de reconnaissance d'image.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Card 2 */}
            <motion.a
              ref={el => addToCardsRef(el, 1)}
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-red-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-red-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="block mx-auto" 
                  src={WorflowImg02}
                  width={200}
                  height={200}
                  alt="Workflow 02"
                />
                <div className="p-6">
                  <div className="mb-8 flex justify-center">
                    <span className="relative inline-flex items-center justify-center rounded-full bg-gray-800/40 px-8 py-4 text-l font-bold tracking-wide before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-indigo-500/20">
                      <span className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-200 bg-clip-text text-transparent">
                        CONTRÔLE HAUTE PRÉCISION
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-100">
                    Il détecte et classe automatiquement les composants, garantissant un suivi rigoureux et une gestion optimisée des packages. En cas d'anomalie, il envoie instantanément une alerte, assurant une réactivité maximale.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Card 3 */}
            <motion.a
              ref={el => addToCardsRef(el, 2)}
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-red-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-red-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="block mx-auto" 
                  src={WorflowImg03}
                  width={140}
                  height={140}
                  alt="Workflow 03"
                />
                <div className="p-6">
                  <div className="mb-8 flex justify-center">
                    <span className="relative inline-flex items-center justify-center rounded-full bg-gray-800/40 px-8 py-4 text-l font-bold tracking-wide before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-indigo-500/20">
                      <span className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-200 bg-clip-text text-transparent">
                        EFFICACITÉ MAXIMALE 
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-100">
                    En automatisant les tâches de contrôle, il réduit les interventions humaines, limite les erreurs et améliore la productivité, tout en garantissant une conformité stricte aux normes de qualité et de sécurité.
                  </p>
                </div>
              </div>
            </motion.a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
