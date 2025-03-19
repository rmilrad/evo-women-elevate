
import React, { useState, useEffect } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isEmblemLoaded, setIsEmblemLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the emblem image
    const img = new Image();
    img.src = "/lovable-uploads/c5d0e305-2097-4ada-8174-d647cbbdb8e3.png";
    img.onload = () => setIsImageLoaded(true);
    
    // Preload the logo_red image
    const emblemImg = new Image();
    emblemImg.src = "/lovable-uploads/1203331d-f085-412a-a8ca-8029d14dfd05.png";
    emblemImg.onload = () => setIsEmblemLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute top-0 left-0 w-80 h-80 bg-evo-pink rounded-full opacity-20 blur-[80px] -translate-x-1/3 -translate-y-1/3"
        style={{ zIndex: -1 }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-evo-blue rounded-full opacity-20 blur-[80px] translate-x-1/3 translate-y-1/3"
        style={{ zIndex: -1 }}
      />
      
      {/* Red brand emblem as background */}
      {isEmblemLoaded && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ zIndex: -1 }}>
          <img 
            src="/lovable-uploads/1203331d-f085-412a-a8ca-8029d14dfd05.png" 
            alt="" 
            className="w-full h-full object-cover opacity-[0.05]" 
          />
        </div>
      )}
      
      {/* Emblem background - centered with appropriate opacity */}
      {isImageLoaded && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ zIndex: -1 }}>
          <img 
            src="/lovable-uploads/c5d0e305-2097-4ada-8174-d647cbbdb8e3.png" 
            alt="" 
            className="w-[120%] max-w-none opacity-[0.05]" 
            style={{
              objectFit: "contain",
              objectPosition: "center"
            }}
          />
        </div>
      )}
      
      <div className="container-custom text-center max-w-3xl mx-auto px-6 flex-grow flex flex-col items-center justify-center relative z-10">
        <h1 className="headline-xl mb-6 text-evo-text leading-[1.15]">
          Evolve your business through your "why."
        </h1>
        
        <p className="text-lg md:text-xl text-evo-text mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          I help coaches & digital entrepreneurs grow their business through branding and content creation.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a href="#portfolio" className="btn-outline rounded-full hover:bg-evo-pink hover:text-white hover:border-transparent transition-all">View my work</a>
          <a href="#contact" className="btn-outline rounded-full hover:bg-evo-pink hover:text-white hover:border-transparent transition-all">Schedule a call</a>
        </div>
      </div>
      
      <div className="cursor-pointer animate-bounce mt-auto mb-8 flex justify-center w-full" onClick={scrollToNextSection}>
        <ArrowDownCircle className="text-evo-text hover:text-evo-pink transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;
