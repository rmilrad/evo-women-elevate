
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
  
  // Use the direct Lovable upload URLs for the graphic design images
  const graphicDesignImages = [
    '/lovable-uploads/532ae445-5839-4994-bb8d-5789d6b0dcfc.png', // image1
    '/lovable-uploads/53ae287a-26d5-4fb4-8021-1d1464806a55.png', // image2
    '/lovable-uploads/f07fee27-e0d1-4d99-835f-80b9f88b61c7.png', // image3
    '/lovable-uploads/a25f99a0-071b-46e5-954f-d627377fbe4d.png', // image4
    '/lovable-uploads/2c47c61c-d1f4-49a9-b2bd-c34141d4cbfe.png', // image5
    '/lovable-uploads/3805eedd-2dcf-44fb-9c57-a62015accb31.png', // image6
    '/lovable-uploads/45be423c-bd1c-49a8-9cac-0ec73e1b950a.png', // image7
    '/lovable-uploads/3dc7088d-cdd5-42b0-a934-b3de03723807.png', // image8
    '/lovable-uploads/167099ad-df27-4df0-98c6-9817ea5dbc99.png', // image9
    '/lovable-uploads/b9ecd03f-9d38-4e72-ac02-4c87e53f7d0f.png', // image10
    '/lovable-uploads/a20d4ea5-e67d-4250-a00e-025f6fed7b91.png', // image11
    '/lovable-uploads/86173fb1-7490-478b-9457-14cb75fedfad.png', // image12
    '/lovable-uploads/5ad39167-1cf6-4f52-8ae0-d7c0ba6496c2.png', // image13
    '/lovable-uploads/28a7c071-4944-43d7-bffb-8a49afb63647.png', // image14
    '/lovable-uploads/f95e4e76-f0e0-4f0e-a64e-adc6ac281a53.png', // image15
    '/lovable-uploads/19afe613-1d16-4ac4-9cfe-5cc53cb7afa9.png', // image16
    // New images from this message
    '/lovable-uploads/a0d28ae1-49e7-479a-927e-daa662312ecf.png',
    '/lovable-uploads/a526fd50-3042-42e5-bd7f-aa2f3c929271.png',
    '/lovable-uploads/d50abfc4-289c-4a36-9181-3d918009eb15.png',
    '/lovable-uploads/1defe4d2-0544-443e-8bc0-e2d8fb58d16f.png',
    '/lovable-uploads/0e572c9d-045b-4e61-8b56-ca987f7299bc.png',
    '/lovable-uploads/409a9a17-84d8-40fa-8bd1-65f5d1541b16.png'
  ];
  
  // Categories with placeholder images for other categories and direct URLs for Graphic Design
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

  // Debug log to verify image paths
  React.useEffect(() => {
    console.log("Graphic design images loaded:", graphicDesignImages);
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
