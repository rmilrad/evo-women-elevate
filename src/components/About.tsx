
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { translate } = useLanguage();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/befa01c1-e062-4aa2-b9a1-3546a1ee5582.png";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding overflow-hidden bg-[#fce5d5]">
      <div className="container-custom max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Large quote column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className={cn(
              "transition-all duration-700",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-rufina leading-tight text-evo-text mb-8 relative">
                <span className="text-6xl font-rufina text-evo-pink absolute -left-6 -top-6">"</span>
                {translate('evoQuote')}
                <span className="text-6xl font-rufina text-evo-pink absolute -bottom-12 right-6">"</span>
              </blockquote>
            </div>
            
            <div className={cn(
              "mt-8 lg:mt-auto relative overflow-hidden rounded-3xl",
              sectionInView ? "animate-fade-in" : "opacity-0"
            )}>
              {/* Image container - removed decorative elements and border color */}
              <div className="rounded-3xl overflow-hidden">
                {isImageLoaded ? (
                  <img 
                    src="/lovable-uploads/befa01c1-e062-4aa2-b9a1-3546a1ee5582.png" 
                    alt="Nazareth working on a laptop" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center">
                    <Skeleton className="w-full h-96 rounded-2xl" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Content columns */}
          <div className={cn(
            "lg:col-span-7 flex flex-col space-y-6 lg:pl-12",
            sectionInView ? "animate-fade-in" : "opacity-0"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-evo-text">{translate('hiImNazareth')}</p>
                
                <p className="text-evo-text">{translate('iLoveWhatIDo')}</p>
                
                {/* Removed white box border */}
                <p className="text-evo-text">{translate('recentlyIveLearned')}</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/50 p-6 rounded-lg">
                  <p className="text-lg font-medium text-evo-text">{translate('iFindPurpose')}</p>
                </div>
                
                <p className="text-evo-text">{translate('thatsTheDifference')}</p>
                
                <p className="text-evo-text font-bold">{translate('whenWeWorkTogether')}</p>
                
                <div className="pt-4">
                  <p className="italic text-evo-text/80 font-medium">{translate('withPurpose')}</p>
                  <p className="font-rufina text-2xl text-evo-pink">Nazareth</p>
                  <p className="text-evo-text/70 text-sm">{translate('founderAndContentCreator')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
