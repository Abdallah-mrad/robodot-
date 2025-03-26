import Image from "next/image";
import WorflowImg01 from "@/public/images/Intelligence Autonome.png";
import WorflowImg02 from "@/public/images/Contrôle Précis.png";
import WorflowImg03 from "@/public/images/Efficacité Maximale.png";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
           
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Une révolution pour l'industrie de demain
            </h2>
            <p className="text-lg text-indigo-200/65">
            Un robot mobile, alliant IA et reconnaissance d'image, pour un contrôle précis, une efficacité maximale et une performance sans compromis. Révolutionnez vos processus industriels.
            </p>
          </div>
          <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
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
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-red-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-red-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                {/* <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div> */}
                {/* Image */}
                <Image
                    className="block mx-auto" 

                  src={WorflowImg01}
                  width={200}
                  height={200}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                <div className="mb-8 flex justify-center">
  <span className="relative inline-flex items-center justify-center rounded-full bg-gray-800/40 px-8 py-4 text-l font-bold tracking-wide before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-indigo-500/20">
    <span className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-200 bg-clip-text text-transparent">
      INTELLIGENCE AUTONOME
    </span>
  </span>
</div>                <p className="text-indigo-100">
                  Conçu pour les industries des semi-conducteurs et pharmaceutiques, ce robot mobile révolutionne les processus grâce à son intelligence artificielle avancée et sa technologie de reconnaissance d’image.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-red-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-red-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                {/* <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div> */}
                {/* Image */}
                <Image
                    className="block mx-auto" 

                  src={WorflowImg02}
                  width={200}
                  height={200}
                  alt="Workflow 02"
                />
                {/* Content */}
                <div className="p-6">

<div className="mb-8 flex justify-center">
  <span className="relative inline-flex items-center justify-center rounded-full bg-gray-800/40 px-8 py-4 text-l font-bold tracking-wide before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-indigo-500/20">
    <span className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-200 bg-clip-text text-transparent">
    CONTRÔLE HAUTE PRÉCISION
    </span>
  </span>
</div>                          <p className="text-indigo-100">
                  Il détecte et classe automatiquement les composants, garantissant un suivi rigoureux et une gestion optimisée des packages. En cas d’anomalie, il envoie instantanément une alerte, assurant une réactivité maximale.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-red-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-red-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                {/* <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div> */}
                {/* Image */}
                <Image
                    className="block mx-auto" 

                  src={WorflowImg03}
                  width={140}
                  height={140}
                  alt="Workflow 03"
                />
                {/* Content */}
                <div className="p-6"> 
<div className="mb-8 flex justify-center">
  <span className="relative inline-flex items-center justify-center rounded-full bg-gray-800/40 px-8 py-4 text-l font-bold tracking-wide before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-indigo-500/20">
    <span className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-200 bg-clip-text text-transparent">
     EFFICACITé MAXIMALE 
    </span>
  </span>
</div>           
        <p className="text-indigo-100">
                  En automatisant les tâches de contrôle, il réduit les interventions humaines, limite les erreurs et améliore la productivité, tout en garantissant une conformité stricte aux normes de qualité et de sécurité.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
