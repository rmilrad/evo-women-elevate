
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const About = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: textRef, inView: textInView } = useInView({
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
            <div className="rounded-2xl overflow-hidden relative aspect-[3/4] bg-gradient-to-b from-evo-pink-light to-evo-pink flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-evo-pink/40 opacity-40"></div>
              <h3 className="font-rufina text-4xl relative z-10 text-white">Naza</h3>
            </div>
          </div>
          
          <div 
            ref={textRef}
            className={`transition-all duration-700 delay-300 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="staggered-text stagger-in">
              <p className={cn(
                "text-card", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                <strong>Evo was born from the word "evolution."</strong> It came from my story and yours too.
              </p>
              
              <p className={cn(
                "text-card", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                I'm Naza and I've been a content creator for over 3 years, starting for a personal reason: to have a remote life.
              </p>
              
              <p className={cn(
                "text-card", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                To travel, open my mind, continue expressing myself, and keep evolving. Because I've always been curious and a little crazy.
              </p>
              
              <p className={cn(
                "text-card", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                But I didn't realize that for my own evolution, I needed to focus on the other person first <span className="text-highlight">(the key to marketing, relationships, and life: it's never about you, it's always about the other)</span>.
              </p>
              
              <p className={cn(
                "text-card", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                Understanding this changed my life, because it helped me connect with what I do and why I do it.
              </p>
              
              <p className={cn(
                "text-card bg-evo-pink/10", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                <strong>I do this to help other women who empower others.</strong>
              </p>
              
              <p className={cn(
                "text-card", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                It's a cycle where I help them make their message visible, so they can help someone else.
              </p>
              
              <p className={cn(
                "text-card", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                After thousands of freelance projects, courses, and books... I realized the key to success is: help and communicate in a consistent, compelling, and attractive way.
              </p>
              
              <p className={cn(
                "text-card bg-evo-blue/10", 
                textInView ? "animate-fade-in" : "opacity-0"
              )}>
                I'm a content manager, but what makes me different is that <strong>I find purpose in what I do.</strong> I find purpose in what you do. That's the difference between content that works and content that doesn't.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
