
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  // Sample portfolio images
  const portfolioImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="portfolio" 
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            Some of my recent work
          </h2>
          <p 
            className={`text-evo-text transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            A showcase of my previous work creating impactful visuals and content for coaches.
          </p>
        </div>
        
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} max-w-4xl mx-auto`}
        >
          {portfolioImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square bg-evo-neutral-light relative">
                <img 
                  src={image} 
                  alt={`Portfolio piece ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
