
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts for entrance animations
    setTimeout(() => {
      if (taglineRef.current) {
        taglineRef.current.classList.add('animate-fade-in');
      }
    }, 100);
    
    setTimeout(() => {
      if (headlineRef.current) {
        headlineRef.current.classList.add('animate-fade-in');
      }
    }, 300);

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 500);

    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 700);
  }, []);

  const scrollToNextSection = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Refined background elements */}
      <div 
        className="absolute top-0 left-0 w-80 h-80 bg-evo-pink rounded-full opacity-20 blur-[80px] -translate-x-1/3 -translate-y-1/3"
        style={{ zIndex: -1 }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-evo-blue rounded-full opacity-20 blur-[80px] translate-x-1/3 translate-y-1/3"
        style={{ zIndex: -1 }}
      />
      
      <div className="container-custom text-center max-w-3xl mx-auto px-6">
        <div 
          ref={taglineRef}
          className="opacity-0 mb-6"
        >
          <span className="inline-block bg-white/50 px-4 py-1 rounded-full text-sm font-medium text-gray-700 border border-evo-pink/20 shadow-sm">
            Content Strategy for Coaches
          </span>
        </div>
        
        <h1 
          ref={headlineRef} 
          className="headline-xl mb-6 opacity-0 leading-[1.15] text-gray-900"
        >
          Evolve Your Business Through Your "Why"
        </h1>
        
        <p 
          ref={subtitleRef} 
          className="text-lg md:text-xl text-gray-700 mb-10 opacity-0 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Helping women who empower others to evolve their business through branding and content creation.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4 opacity-0">
          <a href="#process" className="btn-primary shadow-sm">See My Process</a>
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
