"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "GAFSI",
      firstName: "Habib",
      role: "CEO Fondateur",
      image: "/images/Hbib.png",
      socials: [
        { name: "LinkedIn", url: "#", icon: <FaLinkedin className="text-lg" /> },
      ],
    },
    {
      id: 2,
      name: "BACCOUCHE",
      firstName: "Ghazi",
      role: "CEO Fondateur",
      image: "/images/Ghazi.png",
      socials: [
        { name: "LinkedIn", url: "#", icon: <FaLinkedin className="text-lg" /> },
      ],
    },
    {
      id: 3,
      name: "NEFOUSSI",
      firstName: "Housaien",
      role: "Responsable",
      image: "/images/Houssain.png",
      socials: [
        { name: "LinkedIn", url: "#", icon: <FaLinkedin className="text-lg" /> },
      ],
    },
  ];

  return (
    <section id='cta'
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #831843 100%)',
      }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`,
          opacity: 0.1
        }}
      ></div>
      
      {/* Blue glow effect */}
      <div 
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      ></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
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
              Notre Équipe Exceptionnelle
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
            </motion.h2>
          </div>
          <p className="text-xl" style={{ color: 'rgba(219, 234, 254, 0.8)' }}>
            Des experts dévoués qui repoussent les limites de l'innovation
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group relative flex flex-col items-center text-center rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.3)',
              }}
            >
              {/* Blue glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                  zIndex: -1
                }}
              ></div>
              
              {/* Image circle with blue border effect */}
              <div className="relative mb-6">
                <div 
                  className="absolute -inset-1 rounded-full blur-sm group-hover:blur transition-all duration-500"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #93c5fd)',
                    opacity: 0.6
                  }}
                ></div>
                <div 
                  className="relative w-36 h-36 rounded-full overflow-hidden"
                  style={{
                    border: '2px solid rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <Image
                    src={member.image}
                    alt={`${member.firstName} ${member.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Name and role */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {member.firstName} <span style={{ color: '#93c5fd' }}>{member.name}</span>
              </h3>
              <p className="mb-5" style={{ color: 'rgba(191, 219, 254, 0.8)' }}>{member.role}</p>

              {/* Social icons with blue hover */}
              <div className="flex space-x-4">
                {member.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2 rounded-full transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-300"
                    style={{
                      color: '#bfdbfe',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
