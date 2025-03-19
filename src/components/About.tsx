
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[3/4] bg-gradient-to-b from-evo-pink-light to-evo-pink shadow-md">
              <img 
                src="/lovable-uploads/1569bdcd-f056-4328-a9f6-fc36153dcb08.png" 
                alt="Nazareth working on a laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-evo-pink/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-rufina text-3xl text-white">Naza</h3>
                  
                  <div className="animate-pulse">
                    <Badge 
                      className="bg-white/90 hover:bg-white text-evo-pink border-0 px-4 py-1 text-xs font-bold shadow-lg"
                    >
                      3+ YEARS EXPERIENCE
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-evo-pink/10 shadow-md">
              <CardContent className="p-8">
                <div className="space-y-6 text-evo-text">
                  <p className="italic text-evo-text/80 font-medium">"Evo comes from the word evolution. It was born from my story—and yours."</p>
                  
                  <Separator className="my-4 bg-evo-pink/20" />
                  
                  <p>Hi, I'm Nazareth, your content creator. I was born and raised in Costa Rica, and now I travel to find my creativity and myself in every country I go to. 🍉</p>
                  
                  <p>I love what I do because I feel a deep connection to helping women who empower others. It's a cycle — I help you make their message visible so you can go on to help someone else.</p>
                  
                  <div className="my-8 bg-evo-neutral-light p-6 rounded-lg border-l-4 border-evo-pink">
                    <p className="text-lg font-medium">I find purpose in everything I do. I find purpose in what <span className="font-bold text-evo-pink">YOU</span> do.</p>
                  </div>
                  
                  <p className="text-evo-text font-bold">That's the difference between content that works and content that doesn't.</p>
                  
                  <div className="flex justify-center mt-8">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-evo-pink to-evo-pink-dark text-white font-medium shadow-md">
                      <span className="text-sm">Creating content for women like you</span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-evo-pink font-bold text-xs">3+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
