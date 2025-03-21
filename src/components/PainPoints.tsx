
import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PainPointProps { 
  translationKey: string;
  delay?: number;
}

const PainPoint = ({ 
  translationKey, 
  delay = 0
}: PainPointProps) => {
  const { translate } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref}
      className={`flex items-start gap-4 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0 bg-white/90 p-2 rounded-full shadow-sm">
        <ChevronRight className="text-evo-pink" size={20} />
      </div>
      <p className="text-evo-text font-medium text-lg max-w-prose">{translate(translationKey)}</p>
    </div>
  );
};

const PainPoints = () => {
  const { translate } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate parallax effect
  const getParallaxOffset = () => {
    if (!sectionRef.current) return 0;
    const sectionTop = sectionRef.current.offsetTop;
    const scrollPosition = scrollY - sectionTop;
    return scrollPosition > 0 ? scrollPosition * 0.1 : 0;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
        style={{ transform: `translateY(${getParallaxOffset()}px)` }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={ref}
            className={`text-evo-text text-4xl md:text-5xl lg:text-6xl font-bold mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            dangerouslySetInnerHTML={{ __html: translate('haveYouEverFelt') }}
          />
        
          <div className="mb-10">
            <PainPoint 
              translationKey="painPoint1" 
              delay={0.1}
            />
            <PainPoint 
              translationKey="painPoint2" 
              delay={0.2}
            />
            <PainPoint 
              translationKey="painPoint3" 
              delay={0.3}
            />
            <PainPoint 
              translationKey="painPoint4" 
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
