
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/1569bdcd-f056-4328-a9f6-fc36153dcb08.png";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding overflow-hidden bg-gradient-to-b from-white to-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-tag mb-4">My Story</span>
          <h2 className={cn(
            "headline-lg mb-4",
            sectionInView ? "animate-fade-in" : "opacity-0"
          )}>
            Your evolution is a never-ending journey.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12 items-center max-w-5xl mx-auto">
          <div 
            className={`transition-all duration-700 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-evo-pink/10`}
          >
            <div className="grid md:grid-cols-12 items-stretch">
              {/* Image area */}
              <div className="md:col-span-5 relative">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-evo-pink/80 to-transparent p-6 z-10">
                  <div className="flex items-center justify-end">
                    <div className="animate-pulse">
                      <div className="bg-white/90 hover:bg-white text-evo-pink border-0 px-4 py-1 text-xs font-bold shadow-lg rounded-full">
                        3+ YEARS EXPERIENCE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full min-h-[400px] md:min-h-full bg-gradient-to-b from-evo-pink-light to-evo-pink">
                  {isImageLoaded ? (
                    <img 
                      src="/lovable-uploads/1569bdcd-f056-4328-a9f6-fc36153dcb08.png" 
                      alt="Woman working on a laptop" 
                      className="w-full h-full object-cover"
                      width="400" 
                      height="600"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="animate-pulse w-16 h-16 rounded-full bg-evo-pink-light"></div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content area */}
              <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                <div className="space-y-6 text-evo-text">
                  <p className="italic text-evo-text/80 font-medium">"Evo comes from the word evolution. It was born from my story—and yours."</p>
                  
                  <Separator className="my-4 bg-evo-pink/20" />
                  
                  <p>Hi, I'm Nazareth, your content creator. I was born and raised in Costa Rica, and now I travel to find my creativity and myself in every country I go to. 🍉</p>
                  
                  <p>I love what I do because I feel a deep connection to helping women who empower others. It's a cycle — I help you make their message visible so you can go on to help someone else.</p>
                  
                  <div className="my-8 bg-evo-neutral-light p-6 rounded-lg border-l-4 border-evo-pink">
                    <p className="text-lg font-medium">I find purpose in everything I do. I find purpose in what <span className="font-bold text-evo-pink">YOU</span> do.</p>
                  </div>
                  
                  <p className="text-evo-text font-bold">That's the difference between content that works and content that doesn't.</p>
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
