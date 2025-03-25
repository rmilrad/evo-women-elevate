
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PortfolioItem, isValidPortfolioItem } from '@/types/portfolio';

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
  // State to track video loading errors
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});

  // Handle video error
  const handleVideoError = (itemId: number) => {
    setVideoErrors(prev => ({ ...prev, [itemId]: true }));
    console.error(`Failed to load video for item ${itemId}`);
  };

  // Validate items before rendering
  const validItems = items.filter(isValidPortfolioItem);

  return (
    <div
      className={`transition-all duration-700 delay-${animationDelay} ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} max-w-full mx-auto`}
    >
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-3">
          {validItems.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-3 md:basis-1/3 lg:basis-1/5">
              <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
                <div className="aspect-[3/4] relative">
                  <AspectRatio ratio={3/4} className="bg-evo-neutral-light/30">
                    {item.mediaType === 'video' && item.video && !videoErrors[item.id] ? (
                      <video
                        src={item.video}
                        controls
                        autoPlay={false}
                        loop
                        muted
                        playsInline
                        onError={() => handleVideoError(item.id)}
                        className="object-cover w-full h-full rounded-t-xl"
                      />
                    ) : (
                      <img
                        src={item.image || '/placeholder.svg'}
                        alt={item.titleKey}
                        loading="lazy"
                        width="300"
                        height="400"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                        className="object-cover w-full h-full rounded-t-xl"
                      />
                    )}
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
