
import React, { useEffect, useRef } from 'react';
import { Palette, MessageSquare, PenSquare } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

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
      className={`process-card ${inView ? 'opacity-100 translate-x-0' : animationClass} elegant-shadow`}
      style={{ 
        transition: `all 0.7s ease-out ${delay}s`
      }}
    >
      <div className="mb-6 bg-evo-pink bg-opacity-10 p-4 inline-block rounded-full">
        {icon}
      </div>
      <h3 className="headline-md mb-4 text-gradient">{title}</h3>
      <div className="text-gray-700 space-y-4 leading-relaxed">
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
    <section id="process" className="section-padding bg-gradient-to-b from-white to-evo-neutral-light" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-gray-700 border border-evo-pink/20 shadow-sm mb-4">
            My Approach
          </div>
          <h2 
            ref={titleRef}
            className={cn(
              `headline-lg mb-4 ${inView ? 'animate-fade-in' : 'opacity-0'}`,
              "text-gradient"
            )}
          >
            A Thoughtful Process
          </h2>
          <p 
            className={`text-gray-700 ${inView ? 'animate-fade-in' : 'opacity-0'} max-w-prose mx-auto`} 
            style={{ animationDelay: '0.2s' }}
          >
            A comprehensive approach to elevating your coaching business through strategic branding 
            and content management that's both elegant and effective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ProcessStep 
            icon={<Palette size={28} className="text-evo-pink-dark" />}
            title="Branding Strategy"
            description={
              <>
                <p>A house can't be built without a solid foundation, and neither can your branding. We start by understanding:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>What you sell</li>
                  <li>Why you do it (and not something else)</li>
                  <li>Who you're transforming</li>
                </ul>
                <p className="mt-2">Once you understand your "why", we translate and communicate everything about your business in a way that resonates with the people you want to transform.</p>
                <p className="mt-2">We create visual and design elements with purpose and precision.</p>
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
                <p>A tailored approach to communicating your unique value:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Channel analysis (Finding where your ideal client naturally gathers)</li>
                  <li>Sales funnel development (How you attract, nurture, and serve)</li>
                  <li>Content pillars and calendar template (For coherence and consistency)</li>
                </ul>
                <p className="mt-2">Your strategy will be both effective and sustainable, designed with care for your unique voice and audience.</p>
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
                <p>Thoughtful, ongoing content creation including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Carousels that educate and inspire</li>
                  <li>Videos that connect and engage</li>
                  <li>Copy that resonates and converts</li>
                  <li>Graphics that capture attention and reflect your brand</li>
                </ul>
                <p className="mt-4">Working with me means you get peace of mind knowing we don't skip any steps, creating a strong foundation for sustainable growth.</p>
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
