
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

type PortfolioCategory = {
  key: string;
  titleKey: string;
  items: {
    id: number;
    image: string;
  }[];
};

const PortfolioSection = ({ category }: { category: PortfolioCategory }) => {
  const { translate } = useLanguage();
  
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-xl font-rufina mb-6 text-evo-text">{translate(category.titleKey)}</h3>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-3">
          {category.items.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-3 md:basis-1/3 lg:basis-1/5">
              <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
                <div className="aspect-[3/4] relative">
                  <AspectRatio ratio={3/4} className="bg-evo-neutral-light/30">
                    <img 
                      src={item.image} 
                      alt={translate(category.titleKey)}
                      loading="lazy"
                      width="300"
                      height="400"
                      className="object-cover w-full h-full rounded-t-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        console.log(`Failed to load image: ${target.src}`);
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4 gap-4">
          <CarouselPrevious className="relative static left-0 right-0 translate-y-0 h-10 w-10" />
          <CarouselNext className="relative static left-0 right-0 translate-y-0 h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
};

const Portfolio = () => {
  const { translate } = useLanguage();
  const isMobile = useIsMobile();
  
  // Empty placeholder images for each category
  const placeholderImage = '/placeholder.svg';
  
  // Categories with placeholder images
  const portfolioCategories: PortfolioCategory[] = [
    {
      key: 'digitalProducts',
      titleKey: 'digitalProducts',
      items: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        image: placeholderImage,
      }))
    },
    {
      key: 'socialCarousels',
      titleKey: 'socialCarousels',
      items: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        image: placeholderImage,
      }))
    },
    {
      key: 'graphicDesign',
      titleKey: 'graphicDesign',
      items: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        image: placeholderImage,
      }))
    },
    {
      key: 'reels',
      titleKey: 'reels',
      items: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        image: placeholderImage,
      }))
    }
  ];

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
        
        <div 
          className={`transition-all duration-700 delay-400 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} max-w-full mx-auto`}
        >
          {portfolioCategories.map((category) => (
            <PortfolioSection 
              key={category.key}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
