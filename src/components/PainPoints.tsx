
import React, { useRef, useEffect, useState } from 'react';
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
      className={`flex items-start gap-4 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0 bg-white/90 p-2 rounded-full shadow-sm">
        <AlertCircle className="text-evo-pink" size={20} />
      </div>
      <p className="text-evo-text font-medium text-lg">{text}</p>
    </div>
  );
};

const PainPoints = () => {
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
          >
            Have you ever <span className="text-evo-pink">felt like</span> <br/>
            <span className="text-evo-text/60">this?</span>
          </h2>
        
          <div className="mb-10">
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
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
