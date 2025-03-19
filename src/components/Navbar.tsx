
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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
          ? "py-3 bg-white shadow-md" 
          : "py-5 bg-transparent"
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
        <nav className="hidden md:flex items-center space-x-10">
          <a 
            href="#process" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            Process
          </a>
          <a 
            href="#about" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            Testimonials
          </a>
          <a 
            href="#portfolio" 
            className={cn(
              "transition-colors text-sm tracking-wide",
              scrolled ? "text-foreground hover:text-evo-pink-dark" : "text-white hover:text-white/80"
            )}
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            className={cn(
              "text-sm transition-all duration-300",
              scrolled 
                ? "bg-evo-pink text-white px-6 py-3 rounded-full hover:bg-evo-pink-dark" 
                : "bg-white text-evo-pink px-6 py-3 rounded-full hover:bg-white/90"
            )}
          >
            Get Started
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center relative z-10">
          <a 
            href="#process" 
            className="text-xl text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            Process
          </a>
          <a 
            href="#about" 
            className="text-xl text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="text-xl text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a 
            href="#portfolio" 
            className="text-xl text-foreground hover:text-evo-pink-dark transition-colors" 
            onClick={toggleMenu}
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            className="btn-primary mt-4 w-full text-center" 
            onClick={toggleMenu}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
