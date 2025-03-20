
import React from 'react';
import PortfolioCarousel from './PortfolioCarousel';
import { PortfolioItem } from '@/types/portfolio';

interface PortfolioSectionProps {
  title: string;
  items: PortfolioItem[];
  inView: boolean;
  delayOffset: number;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  items,
  inView,
  delayOffset
}) => {
  return (
    <div className="mb-16">
      <h3 className={`text-2xl font-semibold mb-6 text-left transition-all duration-700 delay-${delayOffset} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {title}
      </h3>
      <PortfolioCarousel 
        items={items} 
        inView={inView} 
        animationDelay={delayOffset + 100} 
      />
    </div>
  );
};

export default PortfolioSection;
