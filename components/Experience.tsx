"use client";

import Image from "next/image";
import db from "@/db/testimonial.json";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "@/models/testimonial";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000, 
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Experience = () => {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Fond animé - Option 1: Dégradé animé */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-red-900/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      </div> */}

      {/* Option 2: Particules animées (décommentez pour utiliser) */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-900">
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
      initial={{
        width: '0%',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0,
      }}
      animate={{
        width: ['0%', '20%', '0%'],
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ))}
</div>
      <div className="relative z-10">
        {/* Titre */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <motion.h2 
            className="text-4xl font-semibold md:text-5xl relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-red-200),var(--color-indigo-200),var(--color-red-50),var(--color-indigo-300),var(--color-red-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Confiance gagnée.. Résultats prouvés..
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          </motion.h2>
        </div>

        {/* Slider des témoignages */}
        <Slider {...settings}>
          {db.testimonial.map((tm: testimonial, i: number) => (
            <aside key={i} className="p-4">
              <motion.div
                className="p-8 rounded-lg bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 559.27 546.15"
                  className="w-10 h-10 fill-white"
                >
                  <path d="M336.63,250.54V33.44H553.71v217.1S587.7,503,364.37,512.71V392s85.76,35.63,74.55-141.49Z" />
                  <path d="M3.71,250.54V33.44H220.79v217.1S254.78,503,31.46,512.71V392S117.21,427.66,106,250.54Z" />
                </svg>
                <p className="text-base text-gray-300 text-center mt-6 mb-8">
                  {tm.message}
                </p>
                {/* <Image
                  src={`/${tm.img}`}
                  alt={tm.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 border-2 border-white/20"
                /> */}
                <h3 className="text-center text-lg text-white">
                  {tm.name}
                  <br />
                  <small className="text-indigo-300 font-medium text-sm">
                    {tm.location}
                  </small>
                </h3>
              </motion.div>
            </aside>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experience;