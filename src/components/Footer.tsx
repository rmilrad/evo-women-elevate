
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

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
            <h2 className="text-3xl font-rufina font-bold tracking-tight">evo</h2>
          </a>
          
          <div className="flex space-x-8">
            <a href="#process" className="text-gray-700 hover:text-evo-pink-dark transition-colors">Process</a>
            <a href="#about" className="text-gray-700 hover:text-evo-pink-dark transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-evo-pink-dark transition-colors">Testimonials</a>
            <a href="#portfolio" className="text-gray-700 hover:text-evo-pink-dark transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-evo-pink-dark transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} evo. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="bg-evo-neutral p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-gray-700" />
            </a>
            <a 
              href="#" 
              className="bg-evo-neutral p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-gray-700" />
            </a>
            <a 
              href="#" 
              className="bg-evo-neutral p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>
            <a 
              href="#" 
              className="bg-evo-neutral p-2 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-gray-700" />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-8 bg-white shadow-md p-3 rounded-full hover:bg-evo-pink hover:bg-opacity-10 transition-all z-10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
