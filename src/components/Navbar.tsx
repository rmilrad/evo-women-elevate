
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glassmorphism py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-rufina font-bold tracking-tight text-gradient">evo</h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#process" className="text-foreground hover:text-evo-pink-dark transition-colors text-sm tracking-wide">Process</a>
          <a href="#about" className="text-foreground hover:text-evo-pink-dark transition-colors text-sm tracking-wide">About</a>
          <a href="#testimonials" className="text-foreground hover:text-evo-pink-dark transition-colors text-sm tracking-wide">Testimonials</a>
          <a href="#portfolio" className="text-foreground hover:text-evo-pink-dark transition-colors text-sm tracking-wide">Portfolio</a>
          <a href="#contact" className="btn-primary text-sm">Get Started</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
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
        <nav className="flex flex-col space-y-8 items-center">
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
