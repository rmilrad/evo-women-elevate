import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/contexts/LanguageContext';

// Define constants to avoid hardcoding values
const PROFILE_IMAGE_PATH = './imgs/assets/naza_sitting.png';

const About = () => {
  const { translate } = useLanguage();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    const img = new Image();
    img.src = PROFILE_IMAGE_PATH;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => {
      console.error('Failed to load image:', PROFILE_IMAGE_PATH);
      setImageError(true);
      setIsImageLoaded(true); // Still mark as loaded to avoid infinite loading state
    };
    
    return () => {
      // Clean up by removing event listeners
      img.onload = null;
      img.onerror = null;
    };
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
                <span className="text-evo-pink text-5xl md:text-6xl absolute -left-4 -top-6">"</span>
                {translate('evoQuote')}
                <span className="text-evo-pink text-5xl md:text-6xl absolute -right-1 -bottom-10">"</span>
              </blockquote>
            </div>
            
            <div className={cn(
              "mt-8 lg:mt-auto relative overflow-hidden rounded-3xl",
              sectionInView ? "animate-fade-in" : "opacity-0"
            )}>
              {/* Image container - removed decorative elements and border color */}
              <div className="rounded-3xl overflow-hidden">
                {isImageLoaded ? (
                  imageError ? (
                    <div className="w-full h-96 flex flex-col items-center justify-center bg-gray-100 rounded-2xl">
                      <p className="text-red-500">Failed to load image</p>
                    </div>
                  ) : (
                    <img
                      src={PROFILE_IMAGE_PATH}
                      alt="Nazareth working on a laptop"
                      className="w-full h-auto object-cover rounded-2xl"
                      loading="lazy"
                      onError={() => setImageError(true)}
                    />
                  )
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

                {/* Moved the "I find purpose..." text here */}
                <div className="bg-white/50 p-6 rounded-lg">
                  <p className="text-lg font-medium text-evo-text">{translate('iFindPurpose')}</p>
                </div>
              </div>
              
              <div className="space-y-6">
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
