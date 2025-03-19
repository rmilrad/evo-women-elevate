
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-evo-pink"
    >
      {/* Spiral logo background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
        <img 
          src="/lovable-uploads/4af1820e-5698-4188-bc68-0d564bbd819a.png" 
          alt="" 
          className="w-4/5 md:w-3/4 lg:w-2/3 max-w-3xl object-contain mix-blend-screen opacity-20" 
          style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)` }}
        />
      </div>
      
      {/* Avatar circles moved above the arrow */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-2 md:space-x-4 overflow-hidden px-4 z-10">
        <div className="flex items-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <div 
              key={index} 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md -ml-1 first:ml-0 overflow-hidden border-2 border-white flex-shrink-0"
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
      
      <div className="container-custom text-center max-w-3xl mx-auto px-6 flex-grow flex flex-col items-center justify-center relative z-10">
        <h1 
          className="headline-xl text-white font-bold mb-3 text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none"
          style={{ transform: titleTransform }}
        >
          Evolve your <span className="opacity-70">business</span> through your <span className="opacity-70">"why."</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          style={{ transform: subtitleTransform }}
        >
          I help coaches & digital entrepreneurs grow their business through branding and content creation.
        </p>
        
        <div 
          className="flex gap-4 justify-center"
          style={{ transform: buttonsTransform }}
        >
          <a href="#portfolio" className="bg-white text-evo-pink px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:scale-105">
            View my work
          </a>
          <a href="#contact" className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105">
            Schedule a call
          </a>
        </div>
      </div>
      
      <div className="cursor-pointer animate-bounce mb-12 flex justify-center w-full" onClick={scrollToNextSection} style={{ zIndex: 10 }}>
        <ArrowDownCircle className="text-white hover:text-white/80 transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;
