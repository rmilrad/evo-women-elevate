
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '../../imgs/assets/evo_red.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { translate } = useLanguage();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        // Adjust top position based on language
        { "top-0": translate('language') === 'Language', "top-[36px]": translate('language') === 'Idioma' }
      )}
    >
      <div className="container-custom flex items-center justify-between relative z-10">
        <button className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={logo}
            alt="evo"
            className={cn(
              "h-8 md:h-10 transition-all duration-500",
              !scrolled && "invert brightness-0 filter"
            )}
          />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
            onClick={() => scrollToSection('about')}
          >
            {translate('about')}
          </button>
          <button
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
            onClick={() => scrollToSection('testimonials')}
          >
            {translate('testimonials')}
          </button>
          <button
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
            onClick={() => scrollToSection('portfolio')}
          >
            {translate('portfolio')}
          </button>
          
          {/* Language Switcher */}
          <LanguageSwitcher 
            className={cn(
              "bg-opacity-20 hover:bg-opacity-30",
              scrolled ? "bg-evo-neutral-light text-foreground" : "bg-white text-white"
            )}
          />
          
          <button
            className={cn(
              "text-sm transition-all duration-300",
              scrolled
                ? "bg-evo-pink text-white px-5 py-2 rounded-full hover:bg-evo-pink-dark"
                : "bg-white text-evo-pink px-5 py-2 rounded-full hover:bg-white/90"
            )}
            data-umami-event="Nav Get Started"
            onClick={() => scrollToSection('contact')}
          >
            {translate('getStarted')}
          </button>
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
        {/* Close button at the top of mobile menu */}
        <button 
          className="absolute top-6 right-6 p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <nav className="flex flex-col space-y-6 items-center relative z-10">
          <button
            className="text-lg text-foreground hover:text-evo-pink-dark transition-colors"
            onClick={() => {
              toggleMenu();
              scrollToSection('about');
            }}
          >
            {translate('about')}
          </button>
          <button
            className="text-lg text-foreground hover:text-evo-pink-dark transition-colors"
            onClick={() => {
              toggleMenu();
              scrollToSection('testimonials');
            }}
          >
            {translate('testimonials')}
          </button>
          <button
            className="text-lg text-foreground hover:text-evo-pink-dark transition-colors"
            onClick={() => {
              toggleMenu();
              scrollToSection('portfolio');
            }}
          >
            {translate('portfolio')}
          </button>
          
          <button
            className="bg-evo-pink text-white px-6 py-3 rounded-full w-full text-center font-medium hover:bg-evo-pink-dark transition-colors mt-4"
            onClick={() => {
              toggleMenu();
              scrollToSection('contact');
            }}
            data-umami-event="Mobile Nav Get Started"
          >
            {translate('getStarted')}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
