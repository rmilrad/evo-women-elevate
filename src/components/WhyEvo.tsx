
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
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} 
        bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-evo-pink/10 
        flex flex-col items-center text-center h-full`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="bg-gradient-to-br from-white to-evo-neutral-light rounded-full p-6 inline-flex items-center justify-center mb-5 shadow-sm border border-evo-pink/5">
        <div className="text-evo-pink">
          {icon}
        </div>
      </div>
      <h3 className="headline-md mb-3 text-evo-text">{title}</h3>
      <p className="text-evo-text/80 max-w-sm">{description}</p>
    </div>
  );
};

const WhyEvo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section-padding bg-gradient-to-b from-white to-evo-neutral-light/30 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag mb-4">Why Choose Evo</span>
          <h2 
            ref={ref}
            className={`headline-lg mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            Evo Creative was made for you to…
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <Feature 
            icon={<Clock size={36} className="text-evo-pink" />}
            title="Save You Time"
            description="Feel at ease knowing you have the right tools to succeed in your business."
            delay={0.1}
          />
          
          <Feature 
            icon={<Heart size={36} className="text-evo-pink" />}
            title="Trust Yourself"
            description="Develop a mindset that helps you grow while enjoying the process."
            delay={0.2}
          />
          
          <Feature 
            icon={<Eye size={36} className="text-evo-pink" />}
            title="Gain Clarity"
            description="Stop communicating what you're not and start making space for what makes you 'you'."
            delay={0.3}
          />
          
          <Feature 
            icon={<TrendingUp size={36} className="text-evo-pink" />}
            title="Convert"
            description="Create content that doesn't just grow your audience—it turns followers into clients."
            delay={0.4}
          />
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#contact" 
            className="btn-primary rounded-full bg-evo-pink text-white hover:bg-evo-pink-dark border-0"
          >
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyEvo;
