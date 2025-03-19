
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AlertCircle } from 'lucide-react';

const PainPoint = ({ 
  text, 
  delay = 0
}: { 
  text: string;
  delay?: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white/80 p-6 rounded-xl shadow-sm transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <AlertCircle className="text-evo-pink mt-1 flex-shrink-0" size={20} />
        <p className="text-evo-text">{text}</p>
      </div>
    </div>
  );
};

const PainPoints = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gradient-to-b from-white to-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 
            ref={ref}
            className={`headline-lg mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            Have you ever felt like…
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PainPoint 
            text="You wish there were more hours in the day to be consistent like everyone says you should?" 
            delay={0.1}
          />
          <PainPoint 
            text="You've tried EVERYTHING marketing gurus tell you on Instagram, but nothing works?" 
            delay={0.2}
          />
          <PainPoint 
            text="You have no idea how to grow your personal brand?" 
            delay={0.3}
          />
          <PainPoint 
            text="You have big dreams for your business but no clarity on how to get there?" 
            delay={0.4}
          />
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="btn-outline rounded-full hover:bg-evo-pink hover:text-white hover:border-transparent transition-all"
          >
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
