import React from 'react';
import { Star } from 'lucide-react';

const ConAlma_Program = () => {
  return (
    <section className="section-padding bg-evo-neutral-light/40 relative">
      <div className="container-custom py-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="headline-md text-evo-text mb-12 text-center">
            ¿Cómo funciona el programa?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left box */}
            <div className="process-card flex flex-col items-center text-center h-full">
              <div className="bg-evo-pink/10 p-3 rounded-full mb-4">
                <Star className="text-evo-pink" fill="#f16e60" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-evo-text mb-3">
                  Material teórico y ejercicios prácticos
                </h3>
                <p className="text-base text-evo-text/70">
                  Cuando estamos en llamada vamos a trabajar, cuando estás en tu tiempo libre puedes aprender.
                </p>
              </div>
            </div>
            
            {/* Middle box - larger and bolder */}
            <div className="process-card flex flex-col items-center text-center transform scale-105 shadow-lg border-2 border-evo-pink/20 z-10 h-full">
              <div className="bg-evo-pink/20 p-4 rounded-full mb-4">
                <Star className="text-evo-pink" fill="#f16e60" size={36} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-evo-text mb-3">
                  5 sesiones personalizadas
                </h3>
                <p className="text-base text-evo-text/70">
                  1 por semana, 60 min cada una. Trabajaremos juntas en cada aspecto de tu contenido, desde definir tu esencia hasta estructurar una estrategia sostenible.
                </p>
              </div>
            </div>
            
            {/* Right box */}
            <div className="process-card flex flex-col items-center text-center h-full">
              <div className="bg-evo-pink/10 p-3 rounded-full mb-4">
                <Star className="text-evo-pink" fill="#f16e60" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-evo-text mb-3">
                  Sistema de contenido claro y funcional
                </h3>
                <p className="text-base text-evo-text/70">
                  Al finalizar, tendrás claridad en tu mensaje, un sistema organizado y contenido listo para publicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConAlma_Program;