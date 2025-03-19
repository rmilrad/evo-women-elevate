
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Clock, Heart, Eye, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeatureProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  delay?: number;
}

const Feature = ({ icon, titleKey, descriptionKey, delay = 0 }: FeatureProps) => {
  const { translate } = useLanguage();
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
      <h3 className="headline-md mb-3 text-evo-text">{translate(titleKey)}</h3>
      <p className="text-evo-text/80 max-w-sm">{translate(descriptionKey)}</p>
    </div>
  );
};

const WhyEvo = () => {
  const { translate } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section-padding bg-gradient-to-b from-white to-evo-neutral-light/30 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag mb-4">{translate('whyChooseEvo')}</span>
          <h2 
            ref={ref}
            className={`headline-lg mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            {translate('evoCreativeWasMade')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <Feature 
            icon={<Clock size={36} className="text-evo-pink" />}
            titleKey="saveYouTime"
            descriptionKey="saveYouTimeDesc"
            delay={0.1}
          />
          
          <Feature 
            icon={<Heart size={36} className="text-evo-pink" />}
            titleKey="trustYourself"
            descriptionKey="trustYourselfDesc"
            delay={0.2}
          />
          
          <Feature 
            icon={<Eye size={36} className="text-evo-pink" />}
            titleKey="gainClarity"
            descriptionKey="gainClarityDesc"
            delay={0.3}
          />
          
          <Feature 
            icon={<TrendingUp size={36} className="text-evo-pink" />}
            titleKey="convert"
            descriptionKey="convertDesc"
            delay={0.4}
          />
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#contact" 
            className="btn-primary rounded-full bg-evo-pink text-white hover:bg-evo-pink-dark border-0"
          >
            {translate('letsChat')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyEvo;
