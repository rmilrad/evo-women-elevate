
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
      className={`flex items-start gap-4 p-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0 bg-white shadow-sm rounded-full p-2">
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
  const [isNewImageLoaded, setIsNewImageLoaded] = React.useState(false);
  
  React.useEffect(() => {
    // Preload the first image
    const img = new Image();
    img.src = "/lovable-uploads/9e83e990-eb77-43b5-9454-e9135a690425.png";
    img.onload = () => setIsImageLoaded(true);
    
    // Preload the new image
    const newImg = new Image();
    newImg.src = "/lovable-uploads/8610ea98-58b1-410a-8e20-fd21a64fdf8f.png";
    newImg.onload = () => setIsNewImageLoaded(true);
  }, []);

  return (
    <section id="painpoints" className="section-padding py-24 bg-gradient-to-b from-white to-evo-neutral-light/30 border-t border-b border-evo-neutral/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-evo-blue/20 rounded-full opacity-20 blur-[100px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-evo-pink/20 rounded-full opacity-20 blur-[100px] -translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 
            ref={ref}
            className={`headline-lg text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            Have you ever felt like...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-start">
            <div className="mb-6 space-y-2">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-evo-neutral/10">
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
            
            {/* Images Container with Drop Shadow */}
            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative">
                {/* New Image */}
                {isNewImageLoaded && (
                  <div className="absolute -right-4 -top-6 w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 transform rotate-6 z-10">
                    <img 
                      src="/lovable-uploads/8610ea98-58b1-410a-8e20-fd21a64fdf8f.png" 
                      alt="Design element" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                
                {/* Main Image */}
                {isImageLoaded && (
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white transform">
                    <img 
                      src="/lovable-uploads/9e83e990-eb77-43b5-9454-e9135a690425.png" 
                      alt="Woman working on laptop in a bright environment with plants" 
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
