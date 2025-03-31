import React from 'react';
import { Check, X } from 'lucide-react';

const ConAlma_Audience = () => {
  const forYouItems = [
    "Quieres crear contenido alineado con vos y los objetivos de tu negocio",
    "Te gustaría definir tu mensaje y estructura de marca con claridad",
    "Valoras la autenticidad y quieres convertirla en contenido estratégico",
    "Quieres un sistema para planificar contenido sin abrumarte",
    "Buscas aprender a vender sin sentir que estás vendiendo"
  ];
  
  const notForYouItems = [
    "Solo quieres más seguidores rápidamente sin importar la calidad",
    "No crees en el valor de la claridad, confianza y autenticidad",
    "Prefieres seguir publicando sin estrategia y esperar resultados",
    "No estás dispuesta a cambiar tu relación con el contenido",
    "No quieres dedicar tiempo a estructurar tu mensaje"
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom py-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="headline-md text-evo-text mb-14 text-center">
            ¿Es este programa para ti?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left side - For You */}
            <div className="process-card border border-evo-pink/10">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-rufina font-semibold text-evo-text">Para ti si</h3>
              </div>
              
              <ul className="space-y-5">
                {forYouItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <Check className="text-evo-pink h-6 w-6 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-evo-text/90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right side - Not For You */}
            <div className="process-card bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-rufina font-semibold text-evo-text">No es para ti si</h3>
              </div>
              
              <ul className="space-y-5">
                {notForYouItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <X className="text-gray-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-evo-text/90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConAlma_Audience;