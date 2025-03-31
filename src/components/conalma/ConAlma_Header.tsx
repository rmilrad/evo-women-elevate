import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import logo from '../../../imgs/assets/evo_red.png';

const ConAlma_Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-2 bg-white shadow-md"
          : "py-3 bg-transparent",
        "top-0"
      )}
    >
      <div className="container-custom flex items-center justify-between relative z-10">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="evo"
            className={cn(
              "h-8 md:h-10 transition-all duration-500",
              !scrolled && "invert brightness-0 filter"
            )}
          />
        </a>
        
        {/* Desktop CTA Button */}
        <div className="flex items-center">
          <a
            href="#signup-form"
            className={cn(
              "text-sm transition-all duration-300",
              scrolled
                ? "bg-evo-pink text-white px-5 py-2 rounded-full hover:bg-evo-pink/90"
                : "bg-white text-evo-pink px-5 py-2 rounded-full hover:bg-white/90"
            )}
            onClick={(e) => {
              e.preventDefault();
              scrollToForm();
            }}
          >
            Inscríbete
          </a>
        </div>
      </div>
    </header>
  );
};

export default ConAlma_Header;