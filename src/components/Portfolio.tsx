
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
                        // Use a reliable placeholder from Unsplash
                        target.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop";
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
  const placeholderImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop";
  
  // Use the following images for graphic design section
  // Use direct URLs for guaranteed availability
  const graphicDesignImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop",
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

  // Log that images are being loaded from Unsplash (reliable source)
  React.useEffect(() => {
    console.log("Using Unsplash images for reliable display");
    
    // Test image loading from Unsplash
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
