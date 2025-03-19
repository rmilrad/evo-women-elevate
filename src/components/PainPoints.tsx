
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
      className={`flex items-start gap-4 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0 bg-white/80 p-2 rounded-full shadow-sm">
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
  
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  
  React.useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/9e83e990-eb77-43b5-9454-e9135a690425.png";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <section className="section-padding bg-white border-t border-b border-evo-neutral/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 
              ref={ref}
              className={`headline-lg mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
            >
              Have you ever felt like...
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
          
          {/* Featured Image */}
          {isImageLoaded && (
            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="/lovable-uploads/9e83e990-eb77-43b5-9454-e9135a690425.png" 
                  alt="Woman working on laptop in a bright environment with plants" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
