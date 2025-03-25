
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { ArrowDownCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
// Import logo image
import logoImage from '/imgs/assets/logo.png';

/**
 * Hero component - Main landing section with parallax effects
 * Displays the main headline, subtitle, and call-to-action buttons
 */
const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { translate } = useLanguage();
  
  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Add parallax scroll effect
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll position
    handleScroll();
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Memoize scroll functions to prevent unnecessary re-renders
  const scrollToNextSection = useCallback(() => {
    try {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('About section not found in the DOM');
      }
    } catch (error) {
      console.error('Error scrolling to about section:', error);
    }
  }, []);
  
  const scrollToPortfolio = useCallback(() => {
    try {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Portfolio section not found in the DOM');
      }
    } catch (error) {
      console.error('Error scrolling to portfolio section:', error);
    }
  }, []);

  // Calculate parallax effects for different elements
  const getParallaxStyles = useCallback(() => {
    return {
      title: `translateY(${scrollY * 0.2}px)`,
      subtitle: `translateY(${scrollY * 0.15}px)`,
      buttons: `translateY(${scrollY * 0.1}px)`,
      logo: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)`
    };
  }, [scrollY]);

  // Get all parallax transform styles
  const parallaxStyles = getParallaxStyles();

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden bg-[#f78075]"
    >
      {/* New spiral logo background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
        <img
          src={logoImage}
          alt="EVO Logo Background"
          className="w-[95%] md:w-[90%] lg:w-[85%] max-w-5xl object-contain mx-auto mix-blend-multiply opacity-40"
          style={{ transform: parallaxStyles.logo }}
          onError={(e) => {
            console.error('Failed to load logo image');
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      
      {/* Added a spacer div to create more space between navbar and content */}
      <div className="h-20 md:h-28"></div>
      
      {/* Main content - centered in the viewport */}
      <div className="flex-1 flex flex-col justify-center w-full">
        <div className="container-custom text-center max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-3 tracking-tight leading-tight max-w-5xl font-rufina"
            style={{ transform: parallaxStyles.title }}
            dangerouslySetInnerHTML={{ __html: translate('evolveYourBusiness') }}
          />
          
          <p
            className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-lg mx-auto font-light leading-relaxed"
            style={{ transform: parallaxStyles.subtitle }}
          >
            {translate('iHelpCoaches')}
          </p>
          
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center w-full sm:w-auto mb-10"
            style={{ transform: parallaxStyles.buttons }}
          >
            <a href="#contact" className="bg-white text-[#f78075] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto">
              {translate('scheduleACall')}
            </a>
            <button 
              onClick={scrollToPortfolio} 
              className="flex items-center justify-center sm:justify-start gap-1 text-white hover:text-white/80 transition-colors px-2 font-medium text-sm sm:text-base w-full sm:w-auto group"
            >
              {translate('viewMyWork')}
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Flexible spacer to push arrow to bottom */}
      <div className="flex-grow"></div>
      
      {/* Arrow positioned at the bottom of the section */}
      <div className="cursor-pointer animate-bounce mb-8 w-full flex justify-center relative z-10" onClick={scrollToNextSection}>
        <ArrowDownCircle className="text-white hover:text-white/80 transition-colors" size={32} />
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(Hero);
