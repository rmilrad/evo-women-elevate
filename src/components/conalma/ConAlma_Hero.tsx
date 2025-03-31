import React from 'react';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';

const ConAlma_Hero = () => {
  const scrollToNextSection = () => {
    const problemSection = document.getElementById('problem-section');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-evo-neutral-light/30 -z-10"></div>
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-10 bg-pattern bg-no-repeat bg-contain bg-right -z-10"></div>
      
      {/* Add logo to the hero background with increased size and lighter opacity */}
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center opacity-5 -z-10">
        <img
          src="/imgs/assets/logo.png"
          alt=""
          className="w-full max-w-[160%] md:max-w-[160%]"
        />
      </div>
      
      <div className="container-custom flex-grow flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-rufina font-bold text-evo-text mb-10 leading-tight animate-fade-in">
            <span className="text-evo-pink">Deja de improvisar</span> en redes sociales.
          </h1>
          <p className="text-lg md:text-xl text-evo-text/80 mb-16 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Convierte tu propósito en un imán para crear contenido para tu marca personal desde un espacio de
            <span className="font-medium"> claridad</span> (organización),
            <span className="font-medium"> conexión</span> (comunidad),
            <span className="font-medium"> abundancia</span> (ventas).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <a
              href="#signup-form"
              className="bg-evo-pink text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-evo-pink/90 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                scrollToForm();
              }}
            >
              Quiero crear con alma
            </a>
            <button
              onClick={scrollToNextSection}
              className="flex items-center justify-center gap-1 text-evo-text hover:text-evo-pink transition-colors px-2 font-medium text-sm sm:text-base w-full sm:w-auto group"
            >
              Descubre más
              <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConAlma_Hero;