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
  
  // Use only the newly uploaded images in the graphic design section
  const graphicDesignImages = [
    // New uploaded images from this request
    '/lovable-uploads/27336602-a4da-49a0-816b-05c4d3a3dc47.png',
    '/lovable-uploads/db70480f-9964-4ccb-99fa-a46b24ed2dbc.png',
    '/lovable-uploads/cab0ebbb-5efc-4d9b-9a05-e45f6bf42fed.png',
    '/lovable-uploads/a027345d-f0b2-4c33-9ff3-018704b11d29.png',
    '/lovable-uploads/49f8257f-eca4-4828-b075-4019b97262f7.png',
    '/lovable-uploads/e0c99ea6-8ef8-42c5-9f75-59a551d8a3de.png',
    // Previously successfully loaded images
    '/lovable-uploads/2773fdfc-d443-467f-8eb9-ba7cb7a79b34.png',
    '/lovable-uploads/20d384b4-a41b-47cd-a502-829a5b960550.png',
    '/lovable-uploads/532ae445-5839-4994-bb8d-5789d6b0dcfc.png',
    '/lovable-uploads/53ae287a-26d5-4fb4-8021-1d1464806a55.png',
    '/lovable-uploads/f07fee27-e0d1-4d99-835f-80b9f88b61c7.png',
    '/lovable-uploads/a25f99a0-071b-46e5-954f-d627377fbe4d.png',
    '/lovable-uploads/2c47c61c-d1f4-49a9-b2bd-c34141d4cbfe.png',
    '/lovable-uploads/3805eedd-2dcf-44fb-9c57-a62015accb31.png',
    '/lovable-uploads/45be423c-bd1c-49a8-9cac-0ec73e1b950a.png',
    '/lovable-uploads/3dc7088d-cdd5-42b0-a934-b3de03723807.png',
    '/lovable-uploads/167099ad-df27-4df0-98c6-9817ea5dbc99.png',
    '/lovable-uploads/b9ecd03f-9d38-4e72-ac02-4c87e53f7d0f.png',
    '/lovable-uploads/a20d4ea5-e67d-4250-a00e-025f6fed7b91.png',
    '/lovable-uploads/86173fb1-7490-478b-9457-14cb75fedfad.png',
    '/lovable-uploads/5ad39167-1cf6-4f52-8ae0-d7c0ba6496c2.png',
    '/lovable-uploads/28a7c071-4944-43d7-bffb-8a49afb63647.png',
    '/lovable-uploads/f95e4e76-f0e0-4f0e-a64e-adc6ac281a53.png',
    '/lovable-uploads/19afe613-1d16-4ac4-9cfe-5cc53cb7afa9.png',
    '/lovable-uploads/0fc99ab9-2ce2-4c9e-a0f8-de7ea6202f3a.png'
  ];
  
  // Keep only the Graphic Design category with the uploaded images
  const portfolioCategories: PortfolioCategory[] = [
    {
      key: 'graphicDesign',
      titleKey: 'graphicDesign',
      items: graphicDesignImages.map((image, index) => ({
        id: index + 1,
        image,
      }))
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Debug log to verify image paths
  React.useEffect(() => {
    console.log("Using these images for Graphic Design:", graphicDesignImages);
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
