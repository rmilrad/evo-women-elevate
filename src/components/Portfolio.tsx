
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

const Portfolio = () => {
  const { translate } = useLanguage();
  const isMobile = useIsMobile();
  
  // Portfolio images with titles and descriptions
  const portfolioItems = [
    {
      id: 1,
      image: "/lovable-uploads/511c926b-c2be-426e-bc98-9bbb1d9f0009.png",
      titleKey: "canvaShortcuts",
      descriptionKey: "essentialShortcuts"
    },
    {
      id: 2,
      image: "/lovable-uploads/7c135b1f-08ca-4ded-bd0f-890bc2f00237.png",
      titleKey: "canvaShortcuts",
      descriptionKey: "professionalLayout"
    },
    {
      id: 3,
      image: "/lovable-uploads/4d4cb6cb-8184-4d45-83c5-0b0c1c06834f.png",
      titleKey: "colorPsychology",
      descriptionKey: "brandPsychology"
    },
    {
      id: 4,
      image: "/lovable-uploads/fe19b7db-0b78-4f36-beaf-845d4b0b9681.png",
      titleKey: "colorPsychology",
      descriptionKey: "interactiveColorGuide"
    },
    {
      id: 5,
      image: "/lovable-uploads/8610ea98-58b1-410a-8e20-fd21a64fdf8f.png",
      titleKey: "coachingContent",
      descriptionKey: "engagementContent"
    },
    {
      id: 6,
      image: "/lovable-uploads/e0d10c36-1589-4a9b-8c87-0ab48c8cbede.png",
      titleKey: "careerSuccess",
      descriptionKey: "growthNarratives"
    },
    {
      id: 7,
      image: "/lovable-uploads/65cb9449-de78-4118-9e12-49a490c71309.png",
      titleKey: "burnoutAwareness",
      descriptionKey: "workplaceWellness"
    },
    {
      id: 8,
      image: "/lovable-uploads/8c41a6ea-71f1-4ac3-a27d-781d80b39977.png",
      titleKey: "workplaceMindfulness",
      descriptionKey: "balanceStrategies"
    },
    {
      id: 9,
      image: "/lovable-uploads/b8b256be-dbcb-45eb-bd6f-70e6fc5321f2.png",
      titleKey: "burnoutSolutions",
      descriptionKey: "visualGuidance"
    },
    {
      id: 10,
      image: "/lovable-uploads/361a01ac-091d-4abc-b7a3-cd5fd1449e07.png",
      titleKey: "burnoutPrevention",
      descriptionKey: "workLifeBalance"
    },
    {
      id: 11,
      image: "/lovable-uploads/b9a6ddd2-e3b5-4be4-85dc-7287f042c9d4.png",
      titleKey: "workSuccessFramework",
      descriptionKey: "professionalDevelopment"
    },
    {
      id: 12,
      image: "/lovable-uploads/b66c69db-209f-4cee-89bb-62dedde79bbd.png",
      titleKey: "corporateMentorship",
      descriptionKey: "connectionGuidance"
    },
    {
      id: 13,
      image: "/lovable-uploads/0b3fc0fa-bd80-4dbb-a4c5-3f766954a52e.png",
      titleKey: "leadershipGuidance",
      descriptionKey: "healingStrategies"
    },
    {
      id: 14,
      image: "/lovable-uploads/72435939-277e-4724-92eb-c226341545b6.png",
      titleKey: "personalBranding",
      descriptionKey: "professionalPresence"
    },
    {
      id: 15,
      image: "/lovable-uploads/c5d0e305-2097-4ada-8174-d647cbbdb8e3.png",
      titleKey: "marketingStrategy",
      descriptionKey: "visualApproach"
    },
    {
      id: 16,
      image: "/lovable-uploads/8cb72782-e6af-46b3-a365-a483d1f3f3c3.png",
      titleKey: "contentCreation",
      descriptionKey: "professionalDesign"
    },
  ];

  // Take only the first 12 items for better performance
  const limitedItems = React.useMemo(() => portfolioItems.slice(0, 12), []);

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
      <div className="container-custom relative z-10 lg:max-w-[80vw]">
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
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-3">
              {limitedItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-3 md:basis-1/3 lg:basis-1/5">
                  <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
                    <div className="aspect-[3/4] relative">
                      <AspectRatio ratio={3/4} className="bg-evo-neutral-light/30">
                        <img 
                          src={item.image} 
                          alt={translate(item.titleKey)}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-medium text-lg">{translate(item.titleKey)}</h3>
                        <p className="text-white/80 text-sm">{translate(item.descriptionKey)}</p>
                      </div>
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
      </div>
    </section>
  );
};

export default Portfolio;
