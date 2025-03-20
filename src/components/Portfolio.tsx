
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
  
  // Graphic design portfolio items
  const graphicDesignItems = [
    {
      id: 1,
      image: "/lovable-uploads/27901b35-e2bb-49f1-b2b3-7ae6d6bda24c.png",
      titleKey: "parentingContent",
      descriptionKey: "whiningContent"
    },
    {
      id: 2,
      image: "/lovable-uploads/cf81c7d6-842f-4ca6-bf8f-b6cdc65a89bb.png",
      titleKey: "parentingStrategy",
      descriptionKey: "behaviorContent"
    },
    {
      id: 3,
      image: "/lovable-uploads/50223520-fcb6-453f-bfc6-d80adc8d23f1.png",
      titleKey: "emotionalRegulation",
      descriptionKey: "kidsEmotions"
    },
    {
      id: 4,
      image: "/lovable-uploads/c302fa6f-fd23-48b2-bfb3-3a23fdd849ba.png",
      titleKey: "parentingTips",
      descriptionKey: "triggerStrategies"
    },
    {
      id: 5,
      image: "/lovable-uploads/de280f83-ff0d-45cd-b8a2-7a623f840583.png",
      titleKey: "backToSchool",
      descriptionKey: "stressManagement"
    },
    {
      id: 6,
      image: "/lovable-uploads/b03990a5-3174-4197-86a3-f0d1e093d29c.png",
      titleKey: "bodyTemplates",
      descriptionKey: "visualContent"
    },
    {
      id: 7,
      image: "/lovable-uploads/f2ce54db-0104-4814-84c2-e1a4c0aa4bef.png",
      titleKey: "parentAnxiety",
      descriptionKey: "schoolWorries"
    },
    {
      id: 8,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "healthCare",
      descriptionKey: "studentHealth"
    }
  ];
  
  // E-book portfolio items
  const ebookItems = [
    {
      id: 1,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "parentingEbook",
      descriptionKey: "parentingTools"
    },
    {
      id: 2,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "moduleIntro",
      descriptionKey: "ebookModule"
    },
    {
      id: 3,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png", 
      titleKey: "selfCare",
      descriptionKey: "selfCareContent"
    },
    {
      id: 4,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "selfCarePages",
      descriptionKey: "parentingHelp"
    },
    {
      id: 5,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "selfReflection",
      descriptionKey: "reflectionQuestions"
    },
    {
      id: 6,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "connectionTool",
      descriptionKey: "parentingConnection"
    },
    {
      id: 7,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "connectionStrategy",
      descriptionKey: "parentingStrategy"
    },
    {
      id: 8,
      image: "/lovable-uploads/1c2ffc9b-ae38-47a8-81c5-6f64fe14fe61.png",
      titleKey: "realLifeExamples",
      descriptionKey: "practicalParenting"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Component to render a single carousel section
  const CarouselSection = ({ title, description, items }) => (
    <div className="mb-16">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h3 className="text-2xl font-medium mb-3 text-evo-text">{title}</h3>
        <p className="text-evo-text text-sm">{description}</p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-3">
          {items.map((item) => (
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
  );

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
          <CarouselSection 
            title="Graphic Design" 
            description="Visual content for coaches, entrepreneurs & digital business owners" 
            items={graphicDesignItems} 
          />
          
          <CarouselSection 
            title="eBooks & Lead Magnets" 
            description="Strategic content designed to convert followers into clients" 
            items={ebookItems} 
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
