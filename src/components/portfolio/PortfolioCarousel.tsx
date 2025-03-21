
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PortfolioItem } from '@/types/portfolio';

interface PortfolioCarouselProps {
  items: PortfolioItem[];
  inView: boolean;
  animationDelay?: number;
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ 
  items, 
  inView, 
  animationDelay = 400 
}) => {
  return (
    <div 
      className={`transition-all duration-700 delay-${animationDelay} ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} max-w-full mx-auto`}
    >
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-3">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-3 md:basis-1/3 lg:basis-1/5">
              <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
                <div className="aspect-[3/4] relative">
                  <AspectRatio ratio={3/4} className="bg-evo-neutral-light/30">
                    <img 
                      src={item.image} 
                      alt={item.titleKey}
                      loading="lazy"
                      width="300"
                      height="400"
                      className="object-cover w-full h-full rounded-t-xl"
                    />
                  </AspectRatio>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-8 gap-4">
          <CarouselPrevious className="relative static left-0 right-0 translate-y-0 h-10 w-10" />
          <CarouselNext className="relative static left-0 right-0 translate-y-0 h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default PortfolioCarousel;
