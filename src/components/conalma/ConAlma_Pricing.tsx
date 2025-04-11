import React from 'react';

const ConAlma_Pricing = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="section-padding bg-evo-pink/10">
      <div className="container-custom py-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-md text-evo-text mb-8">
            Inversion para Crear Contenido con Alma
          </h2>
          
          <p className="text-lg text-evo-text/80 mb-10">
            Y dejar el estrés cotidiano de sentirse confundida:
          </p>
          
          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-lg max-w-md mx-auto mb-10 transform transition-all hover:scale-105 duration-300 border-2 border-evo-pink/20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-evo-text/60 line-through text-2xl">$200</span>
              <span className="text-evo-pink text-5xl font-bold">$120</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#f16e60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-evo-text/80 font-medium">5 sesiones personalizadas</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#f16e60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-evo-text/80 font-medium">Material teórico y práctico</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#f16e60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-evo-text/80 font-medium">Sistema de contenido personalizado</span>
              </li>
            </ul>
            
            <a
              href="#signup-form"
              className="bg-evo-pink text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-evo-pink/90 hover:shadow-lg text-sm sm:text-base w-full inline-block"
              onClick={(e) => {
                e.preventDefault();
                scrollToForm();
              }}
            >
              Quiero empezar hoy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConAlma_Pricing;