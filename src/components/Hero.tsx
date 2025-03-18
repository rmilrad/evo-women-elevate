
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
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
      
      <div className="container-custom text-center max-w-3xl mx-auto px-6 flex-grow flex flex-col items-center justify-center">
        <div className="mb-6">
          <span className="inline-block bg-white/50 px-4 py-1 rounded-full text-sm font-medium text-gray-700 border border-evo-pink/20 shadow-sm">
            Content Strategy for Coaches
          </span>
        </div>
        
        <h1 className="headline-xl mb-6 text-gray-900 leading-[1.15]">
          Evolve Your Business Through Your "Why"
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Helping women who empower others to evolve their business through branding and content creation.
        </p>
        
        <div className="flex justify-center">
          <a href="#contact" className="btn-outline rounded-full hover:bg-evo-pink hover:text-white hover:border-transparent transition-all">Get Started</a>
        </div>
      </div>
      
      <div className="cursor-pointer animate-bounce mb-8" onClick={scrollToNextSection}>
        <ArrowDownCircle className="text-gray-500 hover:text-evo-pink-dark transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;
