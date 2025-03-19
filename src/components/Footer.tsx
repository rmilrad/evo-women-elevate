
import React from 'react';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#" className="mb-6 md:mb-0">
            <img 
              src="/evo_red.png" 
              alt="Evo Creative" 
              className="h-10 w-auto" 
            />
          </a>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#process" className="text-evo-text hover:text-evo-pink transition-colors">Process</a>
            <a href="#about" className="text-evo-text hover:text-evo-pink transition-colors">About</a>
            <a href="#testimonials" className="text-evo-text hover:text-evo-pink transition-colors">Testimonials</a>
            <a href="#portfolio" className="text-evo-text hover:text-evo-pink transition-colors">Portfolio</a>
            <a href="#contact" className="text-evo-text hover:text-evo-pink transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-evo-text/70 mb-4 md:mb-0">© {new Date().getFullYear()} evocreative.com. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/evocreative__/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-evo-neutral-light p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-evo-text" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nazareth-leon/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-evo-neutral-light p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-evo-text" />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-8 bg-white shadow-md p-3 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-all z-10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-evo-text" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
