
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
  
  // Updated portfolio images with new uploads
  const portfolioItems = [
    {
      id: 1,
      image: "/lovable-uploads/8ac1df72-95ff-4faa-aefb-c8cb59a7cf3a.png",
      titleKey: "parentingContent",
      descriptionKey: "whiningContent"
    },
    {
      id: 2,
      image: "/lovable-uploads/686323c2-feab-43be-ad62-99157043eed0.png",
      titleKey: "parentingStrategy",
      descriptionKey: "behaviorContent"
    },
    {
      id: 3,
      image: "/lovable-uploads/f03034cb-7cfb-4981-af4d-9b6b6ac85aca.png",
      titleKey: "emotionalRegulation",
      descriptionKey: "kidsEmotions"
    },
    {
      id: 4,
      image: "/lovable-uploads/fd98e7bf-95cf-46bb-86bb-b463ddce6067.png",
      titleKey: "parentingTips",
      descriptionKey: "triggerStrategies"
    },
    {
      id: 5,
      image: "/lovable-uploads/2fa5c15b-ab8c-4afa-95fa-7dfa1d287058.png",
      titleKey: "backToSchool",
      descriptionKey: "stressManagement"
    },
    {
      id: 6,
      image: "/lovable-uploads/75cb9dba-36cd-4583-8df8-46ea198acdb7.png",
      titleKey: "bodyTemplates",
      descriptionKey: "visualContent"
    },
    {
      id: 7,
      image: "/lovable-uploads/dc89745f-be0b-48e3-aa12-a1a8498fc2e1.png",
      titleKey: "parentAnxiety",
      descriptionKey: "schoolWorries"
    },
    {
      id: 8,
      image: "/lovable-uploads/7a1b8bf9-beda-4664-9587-e473c5edb872.png",
      titleKey: "healthCare",
      descriptionKey: "studentHealth"
    },
    {
      id: 9,
      image: "/lovable-uploads/cb95cf38-72e1-424b-9cb1-455c8fa16931.png",
      titleKey: "studentSuccess",
      descriptionKey: "wellnessGraphic"
    },
    {
      id: 10,
      image: "/lovable-uploads/fb6a1fab-6be4-4a56-b7d5-a4434aa1d940.png",
      titleKey: "campusHealth",
      descriptionKey: "partnershipContent"
    },
    {
      id: 11,
      image: "/lovable-uploads/3fd30bff-1b89-4e02-9ff0-5657908c6ac2.png",
      titleKey: "delayedCare",
      descriptionKey: "studentMinds"
    },
    {
      id: 12,
      image: "/lovable-uploads/73223565-ff63-4ca9-8862-985c8e7ca8fc.png",
      titleKey: "studentLearning",
      descriptionKey: "healthImportance"
    },
    {
      id: 13,
      image: "/lovable-uploads/6a4d2e3d-e427-4f26-bf46-fb344ff7e15e.png",
      titleKey: "campusInnovation",
      descriptionKey: "leadershipContent"
    },
    {
      id: 14,
      image: "/lovable-uploads/db8bcd41-76fc-46cf-b203-597818df55bc.png",
      titleKey: "studentStatistics",
      descriptionKey: "healthcareAccess"
    },
    {
      id: 15,
      image: "/lovable-uploads/cba52e7b-622f-4952-b0cd-7b7efe031734.png",
      titleKey: "studentConversation",
      descriptionKey: "wellnessProducts"
    },
    {
      id: 16,
      image: "/lovable-uploads/fdb5c7c1-9b8e-46b5-b9e3-4f8b69c414c5.png",
      titleKey: "campusResources",
      descriptionKey: "wellnessLocations"
    },
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
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-3">
              {portfolioItems.map((item) => (
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
