
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Clock, Heart, Lightbulb, Users } from 'lucide-react';

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
      className={`bg-white p-8 rounded-2xl shadow-sm border border-evo-neutral-dark transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="bg-evo-neutral-light p-3 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="headline-md mb-3 text-evo-text">{title}</h3>
      <p className="text-evo-text opacity-80">{description}</p>
    </div>
  );
};

const WhyEvo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 
            ref={ref}
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            Evo Creative was made for you to…
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<Clock size={24} className="text-evo-pink" />}
            title="Save you time"
            description="Feel at ease knowing you have the right tools to succeed in your business."
            delay={0.1}
          />
          
          <Feature 
            icon={<Heart size={24} className="text-evo-pink" />}
            title="Trust yourself"
            description="Develop a mindset that helps you grow while enjoying the process."
            delay={0.2}
          />
          
          <Feature 
            icon={<Lightbulb size={24} className="text-evo-pink" />}
            title="Gain clarity"
            description="Stop communicating what you're not and start making space for what makes you 'you'."
            delay={0.3}
          />
          
          <Feature 
            icon={<Users size={24} className="text-evo-pink" />}
            title="Convert"
            description="Create content that doesn't just grow your audience—it turns followers into clients."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyEvo;
