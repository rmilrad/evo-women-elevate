
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Clock, Heart, Eye, TrendingUp } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature = ({ icon, title, description, delay = 0 }: FeatureProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="bg-gray-100 rounded-full p-6 inline-flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="headline-md mb-3 text-evo-text">{title}</h3>
      <p className="text-evo-text opacity-80 max-w-sm">{description}</p>
    </div>
  );
};

const WhyEvo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section-padding bg-gradient-to-b from-white to-evo-neutral-light/30">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 
            ref={ref}
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            Evo Creative was made for you to…
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center max-w-5xl mx-auto">
          <Feature 
            icon={<Clock size={40} className="text-gray-700" />}
            title="Recuperar Horas"
            description="Hacerte sentir tranquila por tener las herramientas necesarias para tener éxito con tu negocio."
            delay={0.1}
          />
          
          <Feature 
            icon={<Heart size={40} className="text-gray-700" />}
            title="Confiar en Ti Misma"
            description="Y que desarrolles una mentalidad que te impulse a evolucionar disfrutando el proceso sin sentirte abrumada."
            delay={0.2}
          />
          
          <Feature 
            icon={<Eye size={40} className="text-gray-700" />}
            title="Ganar Claridad"
            description="Para que dejes de comunicar lo que no eres y que des espacio para comunicar lo que sí. Recuerda que cuando estás confundida, tu mensaje es confuso."
            delay={0.3}
          />
          
          <Feature 
            icon={<TrendingUp size={40} className="text-gray-700" />}
            title="Convertir"
            description="Para que crees contenido que no solamente aumenta tus seguidores, si no que convierte."
            delay={0.4}
          />
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#contact" 
            className="btn-primary rounded-full bg-gray-800 text-white hover:bg-gray-900 border-0"
          >
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyEvo;
