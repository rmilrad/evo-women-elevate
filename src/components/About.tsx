
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
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
                "Evo comes from the word evolution. It was born from my story—and yours."
                <span className="text-6xl font-rufina text-evo-pink absolute -bottom-12 right-6">"</span>
              </blockquote>
            </div>
            
            <div className={cn(
              "mt-8 lg:mt-auto relative overflow-hidden rounded-3xl bg-[#ffd0d4]",
              sectionInView ? "animate-fade-in" : "opacity-0"
            )}>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4">
                <div className="text-white">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L25.9808 14.0192L40 20L25.9808 25.9808L20 40L14.0192 25.9808L0 20L14.0192 14.0192L20 0Z" fill="#f16e60"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="text-[#5b83e8]">
                  <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              {/* Image container */}
              <div className="rounded-3xl overflow-hidden p-4">
                {isImageLoaded ? (
                  <img 
                    src="/lovable-uploads/1569bdcd-f056-4328-a9f6-fc36153dcb08.png" 
                    alt="Nazareth working on a laptop" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center">
                    <div className="animate-pulse w-16 h-16 rounded-full bg-evo-pink-light"></div>
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
                <p className="text-evo-text">Hi, I'm Nazareth, your content creator. I was born and raised in Costa Rica, and now I travel to find my creativity and myself in every country I go to. 🍉</p>
                
                <p className="text-evo-text">I love what I do because I feel a deep connection to helping women who empower others. It's a cycle — I help you make their message visible so you can go on to help someone else.</p>
                
                <div className="bg-white/50 p-6 rounded-lg">
                  <p className="text-evo-text">Recently, I've learned that the most important part of my job is understanding your mission. That's how I can truly help you shine.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/50 p-6 rounded-lg">
                  <p className="text-lg font-medium text-evo-text">I find purpose in everything I do. I find purpose in what <span className="font-bold text-evo-pink">YOU</span> do.</p>
                </div>
                
                <p className="text-evo-text">That's the difference between content that works and content that doesn't. It's not just about beautiful visuals or clever words—it's about capturing the essence of your mission.</p>
                
                <p className="text-evo-text font-bold">When we work together, we're not just creating content. We're crafting your evolution.</p>
                
                <div className="pt-4">
                  <p className="italic text-evo-text/80 font-medium">With purpose,</p>
                  <p className="font-rufina text-2xl text-evo-pink">Nazareth</p>
                  <p className="text-evo-text/70 text-sm">FOUNDER & CONTENT CREATOR</p>
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
