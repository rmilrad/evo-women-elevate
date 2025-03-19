
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { translate } = useLanguage();
  
  useEffect(() => {
    // Add parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate parallax effect for text
  const titleTransform = `translateY(${scrollY * 0.2}px)`;
  const subtitleTransform = `translateY(${scrollY * 0.15}px)`;
  const buttonsTransform = `translateY(${scrollY * 0.1}px)`;

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden bg-[#f78075]"
    >
      {/* Spiral logo background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
        <img 
          src="/lovable-uploads/4af1820e-5698-4188-bc68-0d564bbd819a.png" 
          alt="" 
          className="w-[90%] md:w-[85%] lg:w-[80%] max-w-4xl object-contain mx-auto mix-blend-multiply opacity-30" 
          style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)` }}
        />
      </div>
      
      {/* Added a spacer div to create more space between navbar and content */}
      <div className="h-20 md:h-28"></div>
      
      {/* Main content - centered in the viewport */}
      <div className="flex-1 flex flex-col justify-center w-full">
        <div className="container-custom text-center max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center relative z-10">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-3 tracking-tight leading-tight max-w-5xl font-rufina"
            style={{ transform: titleTransform }}
            dangerouslySetInnerHTML={{ __html: translate('evolveYourBusiness') }}
          />
          
          <p 
            className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-lg mx-auto font-light leading-relaxed"
            style={{ transform: subtitleTransform }}
          >
            {translate('iHelpCoaches')}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto mb-10"
            style={{ transform: buttonsTransform }}
          >
            <a href="#portfolio" className="bg-white text-[#f78075] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto">
              {translate('viewMyWork')}
            </a>
            <a href="#contact" className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto">
              {translate('scheduleACall')}
            </a>
          </div>
        
          {/* Avatar circles */}
          <div className="flex justify-center space-x-1 md:space-x-2 overflow-hidden px-4 mb-8">
            <div className="flex items-center">
              {Array.from({ length: 8 }).map((_, index) => (
                <div 
                  key={index} 
                  className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white shadow-md -ml-1 first:ml-0 overflow-hidden border-2 border-white flex-shrink-0"
                >
                  <img 
                    src={`/lovable-uploads/${[
                      '1203331d-f085-412a-a8ca-8029d14dfd05.png', 
                      '26ecf43d-faaf-42c1-be20-cd07d399a287.png',
                      '539e7f0c-adfc-49e0-af1e-faf2ce1071b1.png',
                      '65cb9449-de78-4118-9e12-49a490c71309.png',
                      '72435939-277e-4724-92eb-c226341545b6.png',
                      '8cb72782-e6af-46b3-a365-a483d1f3f3c3.png'
                    ][index % 6]}`} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
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

export default Hero;
