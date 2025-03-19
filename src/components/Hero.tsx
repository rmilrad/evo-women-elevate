
import React, { useState, useEffect } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isProfileImageLoaded, setIsProfileImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the emblem image
    const img = new Image();
    img.src = "/logo_red.png";
    img.onload = () => setIsImageLoaded(true);
    
    // Preload the profile image
    const profileImg = new Image();
    profileImg.src = "/lovable-uploads/33b92086-1128-49c9-be67-150c0b2a2333.png";
    profileImg.onload = () => setIsProfileImageLoaded(true);
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
      
      {/* Emblem background - full width with appropriate opacity */}
      {isImageLoaded && (
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <img 
            src="/logo_red.png" 
            alt="" 
            className="w-full h-full opacity-[0.05]" 
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
      )}
      
      <div className="container-custom text-center max-w-3xl mx-auto px-6 flex-grow flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="md:w-1/2 text-left">
            <h1 className="headline-xl mb-6 text-evo-text leading-[1.15]">
              Evolve your business through your "why."
            </h1>
            
            <p className="text-lg md:text-xl text-evo-text mb-10 max-w-2xl font-light leading-relaxed">
              I help coaches & digital entrepreneurs grow their business through branding and content creation.
            </p>
            
            <div className="flex gap-4">
              <a href="#portfolio" className="btn-outline rounded-full hover:bg-evo-pink hover:text-white hover:border-transparent transition-all">View my work</a>
              <a href="#contact" className="btn-outline rounded-full hover:bg-evo-pink hover:text-white hover:border-transparent transition-all">Schedule a call</a>
            </div>
          </div>
          
          {/* Profile image in an elegant frame */}
          {isProfileImageLoaded && (
            <div className="md:w-1/2 flex justify-center">
              <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-xl w-[280px]">
                <img 
                  src="/lovable-uploads/33b92086-1128-49c9-be67-150c0b2a2333.png" 
                  alt="Professional with digital tablet" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="cursor-pointer animate-bounce mt-auto mb-8 flex justify-center w-full" onClick={scrollToNextSection}>
        <ArrowDownCircle className="text-evo-text hover:text-evo-pink transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;
