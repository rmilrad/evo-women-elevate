
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
  
  // Placeholder image for Digital Products, Social Carousels, and Reels categories
  const placeholderImage = '/placeholder.svg';
  
  // Graphic Design images from the uploaded files
  const graphicDesignImages = [
    '/lovable-uploads/3bf50756-433c-4bd8-a388-563ac4d2a479.png',
    '/lovable-uploads/bc29cbf5-99e5-43c4-bfdb-5f3fccc85d14.png',
    '/lovable-uploads/9db3dd5a-129b-410f-88f0-d7365748cea2.png',
    '/lovable-uploads/41deda31-2887-4371-a07c-b86ab2d6ff0e.png',
    '/lovable-uploads/55ff2762-7ccc-47dd-9b4c-94daf273bf98.png',
    '/lovable-uploads/e2abd5f6-7011-46b9-922a-8af07f421679.png',
    '/lovable-uploads/2003dc51-ef50-4904-9a7b-7d891afe9178.png',
    '/lovable-uploads/19069738-9d87-4259-a88d-a6de9cf1a5e3.png',
    '/lovable-uploads/cac2fff3-31b4-47a9-a0e0-c5bddb02c6e3.png',
    '/lovable-uploads/7793d865-8c5b-45f1-91b3-46f892ebc502.png',
    '/lovable-uploads/3a056af1-0b05-4b4b-8044-0a03063f2b91.png',
    '/lovable-uploads/4a6a12ee-7c92-4856-b305-daac30bd1081.png',
    '/lovable-uploads/85fd8f1d-aa2f-40b6-9f93-375a01f3ea7d.png',
    '/lovable-uploads/40319b0a-2653-40ee-9618-4d4b41e53cf0.png',
    '/lovable-uploads/245ba89f-a1d0-4b25-947f-0a79155437b4.png',
    '/lovable-uploads/8d0f7fd2-250c-4af5-9b45-7d87f0d8651b.png',
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
