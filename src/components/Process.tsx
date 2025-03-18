
import React, { useEffect, useRef } from 'react';
import { Palette, MessageSquare, PenSquare } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ProcessStep = ({ 
  icon, 
  title, 
  description, 
  animationDirection = 'right',
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: React.ReactNode;
  animationDirection?: 'left' | 'right';
  delay?: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationClass = animationDirection === 'left' 
    ? 'opacity-0 translate-x-[-20px]' 
    : 'opacity-0 translate-x-[20px]';

  return (
    <div 
      ref={ref}
      className={`process-card ${inView ? 'opacity-100 translate-x-0' : animationClass}`}
      style={{ 
        transition: `all 0.7s ease-out ${delay}s`
      }}
    >
      <div className="mb-6 bg-evo-pink bg-opacity-10 p-4 inline-block rounded-full">
        {icon}
      </div>
      <h3 className="headline-md mb-4">{title}</h3>
      <div className="text-gray-700 space-y-4">
        {description}
      </div>
    </div>
  );
};

const Process = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section-padding bg-evo-neutral-light" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 
            ref={titleRef}
            className={`headline-lg mb-4 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            My Process
          </h2>
          <p className={`text-gray-700 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            A comprehensive approach to elevating your coaching business through strategic branding and content management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ProcessStep 
            icon={<Palette size={28} className="text-evo-pink-dark" />}
            title="Branding Strategy"
            description={
              <>
                <p>A house can't be built without a solid foundation, and neither can your branding. We start by understanding:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What you sell</li>
                  <li>Why you do it (and not something else)</li>
                  <li>Who you're transforming</li>
                </ul>
                <p>Once you understand your "why", we translate and communicate everything about your business in a way that resonates with the people you want to transform.</p>
                <p>We create visual and design elements: a color palette following color psychology and design principles, and the primary fonts for your designs.</p>
              </>
            }
            animationDirection="left"
            delay={0.1}
          />
          
          <ProcessStep 
            icon={<MessageSquare size={28} className="text-evo-pink-dark" />}
            title="Content Strategy"
            description={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Channel analysis (Do you know where your ideal client is? Choose the channels that matter.)</li>
                  <li>Sales funnel (How you attract, nurture, and sell) and the content to create at each stage.</li>
                  <li>Content pillars and a content calendar template (for coherence, consistency, and organization)</li>
                </ul>
              </>
            }
            animationDirection="right"
            delay={0.3}
          />
          
          <ProcessStep 
            icon={<PenSquare size={28} className="text-evo-pink-dark" />}
            title="Content Creation"
            description={
              <>
                <p>Ongoing content creation including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Carousels</li>
                  <li>Videos</li>
                  <li>Copy</li>
                  <li>Graphics</li>
                </ul>
                <p className="mt-4">Working with me means you get peace of mind knowing we don't skip any steps. The average marketer starts your strategy without first defining the initial two points of branding, and that's where weak foundations come from.</p>
              </>
            }
            animationDirection="left"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
