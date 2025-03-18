
import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[3/4] bg-evo-pink-light flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-evo-pink opacity-40"></div>
              <h3 className="font-rufina text-4xl relative z-10">Naza</h3>
            </div>
          </div>
          
          <div 
            className={`space-y-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="bg-evo-blue py-1 px-4 rounded-full inline-block">
              <span className="text-sm font-medium">My Story</span>
            </div>
            <h2 className="headline-lg">Your evolution is a never-ending journey.</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Evo was born from the word "evolution."</strong> It came from my story and yours too.</p>
              <p>I'm Naza and I've been a content creator for over 3 years, starting for a personal reason: to have a remote life.</p>
              <p>To travel, open my mind, continue expressing myself, and keep evolving. Because I've always been curious and a little crazy.</p>
              <p>But I didn't realize that for my own evolution, I needed to focus on the other person first (the key to marketing, relationships, and life: it's never about you, it's always about the other).</p>
              <p>Understanding this changed my life, because it helped me connect with what I do and why I do it.</p>
              <p><strong>I do this to help other women who empower others.</strong></p>
              <p>It's a cycle where I help them make their message visible, so they can help someone else.</p>
              <p>After thousands of freelance projects, courses, and books... I realized the key to success is: help and communicate in a consistent, compelling, and attractive way.</p>
              <p>I'm a content manager, but what makes me different is that I find purpose in what I do. I find purpose in what you do. That's the difference between content that works and content that doesn't.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
