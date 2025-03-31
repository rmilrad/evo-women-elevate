import React from 'react';
import { CheckCircle } from 'lucide-react';

const ConAlma_Benefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom py-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline-md text-evo-text mb-12 text-center">
            Al terminar el programa, sentirás…
          </h2>
          
          <div className="space-y-8">
            <div className="text-card flex items-start gap-5 p-6">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-text/90">
                <span className="font-medium">Seguridad y confianza</span> al crear contenido alineado con tu negocio.
              </p>
            </div>
            
            <div className="text-card flex items-start gap-5 p-6">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-text/90">
                <span className="font-medium">Claridad en tu mensaje y estrategia.</span>
              </p>
            </div>
            
            <div className="text-card flex items-start gap-5 p-6">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-text/90">
                <span className="font-medium">Menos estrés y más fluidez,</span> con un sistema que evita bloqueos creativos.
              </p>
            </div>
            
            <div className="text-card flex items-start gap-5 p-6">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-text/90">
                <span className="font-medium">Conexión auténtica con tu audiencia</span> y atracción de clientes sin sentir que "vendes todo el tiempo".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConAlma_Benefits;