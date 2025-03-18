
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts for entrance animations
    setTimeout(() => {
      if (headlineRef.current) {
        headlineRef.current.classList.add('animate-fade-in');
      }
    }, 100);

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 300);

    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 500);
  }, []);

  const scrollToNextSection = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-64 h-64 bg-evo-pink rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: -1 }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-evo-blue rounded-full opacity-30 blur-3xl translate-x-1/2 translate-y-1/2"
        style={{ zIndex: -1 }}
      />
      
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h1 
          ref={headlineRef} 
          className="headline-xl mb-6 opacity-0"
        >
          Evolve Your Coaching Business
        </h1>
        <p 
          ref={subtitleRef} 
          className="text-lg md:text-xl text-gray-700 mb-8 opacity-0 max-w-2xl mx-auto"
        >
          Strategic branding and content management for women coaches who want to make a bigger impact.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4 opacity-0">
          <a href="#process" className="btn-primary">See My Process</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ArrowDownCircle className="text-gray-500 hover:text-evo-pink-dark transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;
