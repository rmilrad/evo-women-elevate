
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
                        console.error(`Failed to load image: ${target.src}`);
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
  
  // Placeholder image for Digital Products, Social Carousels, and Reels categories
  const placeholderImage = '/placeholder.svg';
  
  // Use the newly uploaded images
  const graphicDesignImages = [
    '/lovable-uploads/09315f72-db25-4e7a-b0cd-bf65edf46a2b.png',
    '/lovable-uploads/2672846a-09da-4e96-981b-7a8aca077128.png',
    '/lovable-uploads/3f593c9e-442c-484a-bfc0-ab18e9d82864.png',
    '/lovable-uploads/367105cb-951d-487d-97bc-239beb112abb.png',
    '/lovable-uploads/12bc9650-e3d8-4741-851c-f50df7511f8d.png',
    '/lovable-uploads/1b000c99-4a9e-494c-887d-7ae7337d4100.png',
    '/lovable-uploads/c871be24-df7e-4f0d-8802-27896cee5e56.png',
    '/lovable-uploads/2c59c9c8-1592-470b-89a8-081137991337.png',
    '/lovable-uploads/35b0aa96-5288-4e34-a800-cd720a630d62.png',
    '/lovable-uploads/ab9e9282-f259-432d-8a0b-a64880c865a4.png',
    '/lovable-uploads/9db21be8-ffb2-45b9-a28d-1d05a8125030.png',
    '/lovable-uploads/da672d8d-6805-4cc8-b0be-feb381385363.png',
    '/lovable-uploads/732b273e-8bb5-451c-be45-d20def3f88ac.png',
    '/lovable-uploads/b99946bb-b650-466c-bc48-76c5acc09de8.png',
    '/lovable-uploads/b2f424d5-7deb-4292-87a0-d3a435dc34e9.png',
    '/lovable-uploads/49b4923f-8467-4bb4-a7c4-9edb1b971bd3.png',
  ];
  
  // Categories with placeholder images for other categories and real images for Graphic Design
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
      items: graphicDesignImages.map((image, index) => ({
        id: index + 1,
        image,
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

  // Enhanced debug log to verify image paths
  React.useEffect(() => {
    console.log("Graphic design images loaded:", graphicDesignImages);
    
    // Test image loading
    graphicDesignImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => console.log(`Image ${index + 1} loaded successfully: ${src}`);
      img.onerror = () => console.error(`Failed to load image ${index + 1}: ${src}`);
      img.src = src;
    });
  }, []);

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
