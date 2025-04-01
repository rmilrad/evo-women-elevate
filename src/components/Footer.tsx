
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import evoRedLogo from '../../imgs/assets/evo_red.png';

const Footer = () => {
  const { translate } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  const allRightsReserved = translate('allRightsReserved').replace('{year}', currentYear.toString());
  
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
              onClick={() => scrollToSection('about')}
            >
              {translate('about')}
            </button>
            <button
              className="text-evo-text hover:text-evo-pink transition-colors"
              onClick={() => scrollToSection('testimonials')}
            >
              {translate('testimonials')}
            </button>
            <button
              className="text-evo-text hover:text-evo-pink transition-colors"
              onClick={() => scrollToSection('portfolio')}
            >
              {translate('portfolio')}
            </button>
            <button
              className="text-evo-text hover:text-evo-pink transition-colors"
              onClick={() => scrollToSection('contact')}
              data-umami-event="Footer Get Started"
            >
              {translate('getStarted')}
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
              data-umami-event="Instagram Link"
            >
              <Instagram size={20} className="text-evo-text" />
            </a>
            <a
              href="https://www.linkedin.com/in/nazareth-leon/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-evo-neutral-light p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="LinkedIn"
              data-umami-event="LinkedIn Link"
            >
              <Linkedin size={20} className="text-evo-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
