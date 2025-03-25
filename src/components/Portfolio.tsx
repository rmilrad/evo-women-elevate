
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import PortfolioSection from './portfolio/PortfolioSection';
import { reelItems } from '@/data/graphicDesignItems';
import { digitalProductItems } from '@/data/digitalProductItems';
import { socialCarouselItems } from '@/data/socialCarouselItems';

const Portfolio = () => {
  const { translate } = useLanguage();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="portfolio" 
      ref={ref}
      className="section-padding bg-white relative"
    >
      <div className="container-custom relative z-10 lg:max-w-[90vw]">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            {translate('recentWork')}
          </h2>
          <p 
            className={`text-evo-text transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {translate('portfolioDescription')}
          </p>
        </div>
        
        {/* Digital Products Carousel */}
        <PortfolioSection
          title="Digital Products"
          items={digitalProductItems}
          inView={inView}
          delayOffset={600}
        />
        
        {/* Social Carousels */}
        <PortfolioSection
          title="Social Carousels"
          items={socialCarouselItems}
          inView={inView}
          delayOffset={900}
        />

        {/* Video carousel */}
        <PortfolioSection
          title="Reels"
          items={reelItems}
          inView={inView}
          delayOffset={300}
        />

      </div>
    </section>
  );
};

export default Portfolio;
