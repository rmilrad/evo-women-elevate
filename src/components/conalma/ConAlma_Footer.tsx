import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import evoRedLogo from '../../../imgs/assets/evo_red.png';

const ConAlma_Footer = () => {
  const currentYear = new Date().getFullYear();
  const allRightsReserved = `© ${currentYear} Evo Creative. Todos los derechos reservados.`;
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <button
            className="mb-6 md:mb-0"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            <img
              src={evoRedLogo}
              alt="Evo Creative"
              className="h-10 w-auto"
            />
          </button>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <button
              className="text-evo-text hover:text-evo-pink transition-colors"
              onClick={() => scrollToSection('problem-section')}
              data-umami-event="ConAlma Footer Problem Link"
            >
              Problema
            </button>
            <button
              className="text-evo-text hover:text-evo-pink transition-colors"
              onClick={() => scrollToSection('signup-form')}
              data-umami-event="ConAlma Footer Signup Link"
            >
              Inscríbete
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-evo-text/70 mb-4 md:mb-0">{allRightsReserved}</p>
          
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/evocreative__/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-evo-neutral-light p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="Instagram"
              data-umami-event="ConAlma Instagram Link"
            >
              <Instagram size={20} className="text-evo-text" />
            </a>
            <a
              href="https://www.linkedin.com/in/nazareth-leon/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-evo-neutral-light p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="LinkedIn"
              data-umami-event="ConAlma LinkedIn Link"
            >
              <Linkedin size={20} className="text-evo-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConAlma_Footer;