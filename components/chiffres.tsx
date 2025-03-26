"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

type AnimatedCounterProps ={
  value: number;
  label: string;
}
const AnimatedCounter = ({ value, label } : AnimatedCounterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Permet de retrigger l'animation à chaque fois que l'élément est visible
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="p-6 bg-gray-800 rounded-xl shadow-lg">
      <p className="text-4xl font-bold text-indigo-400">
        {inView ? <CountUp start={0} end={value} duration={3} /> : 0}+
      </p>
      <p className="text-lg text-gray-300 mt-2">{label}</p>
    </div>
  );
};

export default function Chiffres() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Chiffres Clés
            </h2>
          </div>
          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Utilisateurs", value: 500 },
              { label: "Projets Complétés", value: 120 },
              { label: "Taux de Satisfaction", value: 98 },
            ].map((stat, index) => (
              <AnimatedCounter key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
