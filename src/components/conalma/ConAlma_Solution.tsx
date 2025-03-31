import React from 'react';

const ConAlma_Solution = () => {
  return (
    <section className="section-padding bg-evo-neutral-light/40 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-full opacity-10 bg-pattern bg-no-repeat bg-contain bg-left -z-10 transform rotate-180"></div>
      
      <div className="container-custom py-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline-md text-evo-pink mb-10 text-center">
            Creando con Alma
          </h2>
          
          <div className="md:flex items-center gap-10 mb-12">
            <div className="md:w-1/2 space-y-6 text-lg text-evo-text/90 mb-6 md:mb-0">
              <p>
                Es hora de dejar de seguir tendencias y empezar a crear contenido que realmente hable de vos y de tu negocio. Que al final, los dos se interconectan.
              </p>
              
              <p>
                Es hora de desarrollar una estrategia que te ayude a conectar con tu audiencia, a vender sin "vender" y, sobre todo, a disfrutar el proceso sin sentir que estás dando palos de ciego.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="w-48 h-60 md:w-56 md:h-72 rounded-xl overflow-hidden shadow-lg transform rotate-3 border-4 border-white">
                <img
                  src="/imgs/assets/naza_sitting.png"
                  alt="Creando con alma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h3 className="headline-md font-medium text-evo-text mb-8 text-center">
            Mi propósito…
          </h3>
          
          <div className="paragraph-container">
            <p>
              Si vas a una agencia, crean contenido "done for you" (hecho por ti), pero terminan entregándote algo que se siente <strong>como si fuera para cualquier marca menos la tuya.</strong> Aceptas porque "<em>ellos son los expertos</em>", pero el resultado es una comunicación desconectada de lo que eres.
            </p>
            
            <p>
              Mi propósito con estas sesiones es que no delegues tu marketing desde la superficialidad, sino que aprendas tu misma, a construirlo desde la raíz, con autenticidad y estrategia. Quiero que dejes de ver la creación de contenido como una tarea agotadora y la transformes en una extensión natural de tu propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConAlma_Solution;