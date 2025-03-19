
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
            <div className="rounded-2xl overflow-hidden relative aspect-[3/4] bg-gradient-to-b from-evo-pink-light to-evo-pink flex items-center justify-center shadow-md">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-evo-pink/40 opacity-40"></div>
              <h3 className="font-rufina text-4xl relative z-10 text-white">Naza</h3>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-evo-pink/10 shadow-md">
              <CardContent className="p-8">
                <div className="space-y-6 text-evo-text">
                  <p className="italic text-evo-text/80">"Evo comes from the word evolution. It was born from my story—and yours."</p>
                  
                  <Separator className="my-4 bg-evo-pink/20" />
                  
                  <p>Hi, I'm Nazareth, your content creator. I was born and raised in Costa Rica, and now I travel to find my creativity and myself in every country I go to. 🍉</p>
                  
                  <p>I started in the marketing world over three years ago because I craved a remote life since I was a kid.</p>
                  
                  <p>I wanted to travel, open my mind, and keep evolving—because I've always been curious and a bit wild.</p>
                  
                  <p>But I didn't realize when I first started that I needed to focus on someone else's evolution for my own.</p>
                  
                  <p className="font-medium text-evo-pink">Understanding this changed how I see my content. From that moment on, I connected with why I do what I do.</p>
                  
                  <p className="font-bold">I do it to help other women who empower others. It's a cycle—I help them make their message visible so they can go on to help someone else.</p>
                  
                  <p>I'm a content manager, and what sets me apart is that <span className="italic">I find purpose in what I do. I find purpose in what you do.</span> That's the difference between content that works and content that doesn't.</p>
                  
                  <p className="bg-evo-neutral-light p-4 rounded-lg">3+ years creating content for women like you.</p>
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
