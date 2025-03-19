
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { translate } = useLanguage();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "py-2 bg-white shadow-md" 
          : "py-3 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between relative z-10">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/8cb72782-e6af-46b3-a365-a483d1f3f3c3.png"
            alt="evo"
            className={cn(
              "h-8 md:h-10 transition-all duration-500",
              !scrolled && "invert brightness-0 filter"
            )}
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#process" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            {translate('process')}
          </a>
          <a 
            href="#about" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            {translate('about')}
          </a>
          <a 
            href="#testimonials" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            {translate('testimonials')}
          </a>
          <a 
            href="#portfolio" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            {translate('portfolio')}
          </a>
          
          {/* Language Switcher */}
          <LanguageSwitcher 
            className={cn(
              "bg-opacity-20 hover:bg-opacity-30",
              scrolled ? "bg-evo-neutral-light text-foreground" : "bg-white text-white"
            )}
          />
          
          <a 
            href="#contact" 
            className={cn(
              "text-sm transition-all duration-300",
              scrolled 
                ? "bg-evo-pink text-white px-5 py-2 rounded-full hover:bg-evo-pink-dark" 
                : "bg-white text-evo-pink px-5 py-2 rounded-full hover:bg-white/90"
            )}
          >
            {translate('getStarted')}
          </a>
        </nav>
        
        {/* Mobile Top Bar: Language Switcher + Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Language Switcher in Mobile Top Bar */}
          <LanguageSwitcher 
            className={cn(
              "bg-opacity-30 rounded-full px-3 py-1.5 border border-white/20",
              scrolled ? "bg-evo-neutral-light text-foreground" : "bg-white/20 text-white"
            )}
          />
          
          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "p-1.5 rounded-full",
              scrolled 
                ? "text-foreground bg-evo-neutral-light" 
                : "text-white bg-white/20 border border-white/20"
            )}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center relative z-10">
          <a 
            href="#process" 
            className="text-lg text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            {translate('process')}
          </a>
          <a 
            href="#about" 
            className="text-lg text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            {translate('about')}
          </a>
          <a 
            href="#testimonials" 
            className="text-lg text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            {translate('testimonials')}
          </a>
          <a 
            href="#portfolio" 
            className="text-lg text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            {translate('portfolio')}
          </a>
          
          <a 
            href="#contact" 
            className="bg-evo-pink text-white px-6 py-3 rounded-full w-full text-center font-medium hover:bg-evo-pink-dark transition-colors mt-4" 
            onClick={toggleMenu}
          >
            {translate('getStarted')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
