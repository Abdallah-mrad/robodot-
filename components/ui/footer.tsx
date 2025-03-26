import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-12 relative">
      {/* Illustration en premier */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
  {/* Grille avec espacements asymétriques */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.5fr_1fr] gap-x-4 gap-y-8">
    
    {/* Colonne 1 - 1 unité */}
    <div className="pr-4"> {/* Marge droite seulement */}
      <div className="mb-4">
        <Logo />
      </div>
      <p className="text-sm text-gray-400">
      Robodot révolutionne l'automatisation avec des solutions intelligentes basées sur l'IA et la reconnaissance d'images, pour optimiser les processus industriels.    
      </p>
    </div>

    {/* Colonne 2 - 1 unité */}
    <div className="px-2"> {/* Marges latérales réduites */}
      <h3 className="text-lg font-semibold text-white mb-4">Contactez-nous</h3>
      <ul className="space-y-3 text-sm text-gray-400 mb-6">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span> Bureau 9-1A, Bâtiment Golden Tower, <br />Centre Urbain Nord, EL MENZAH, Tunisie</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+216 12 345 678</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@robodot.tn</span>
              </li>
            </ul>
              <h4 className="text-md font-medium text-white mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
    {/* Colonne 3 - 1/2 unité */}
    <div className="pl-2"> {/* Marge gauche seulement */}
      <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
      <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Notre Solution</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Nos Atouts Clés</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Cas d'utilisation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
    </div>

    {/* Colonne 4 - 1 unité (image) */}
    <div className="pl-4"> {/* Marge gauche accentuée */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-700">
        <Image
          src="/images/team.png"
          alt="Solution RoboDot"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
    </div>

  </div>

  {/* Footer */}
  <div className="border-t border-gray-800 mt-10 pt-6 text-center">
    <p className="text-xs text-gray-500">
      © {new Date().getFullYear()} Robodot. Tous droits réservés.
    </p>
  </div>
</div>
    </footer>
  );
}
