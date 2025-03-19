
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Avatar } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  image: string;
  companyLogo?: string;
}

const Testimonials = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I have been working with Nazareth for quite some time now and she has been integral to my business. She helped me create a beautiful e-book which has been downloaded over 1,000 times and has always been incredibly helpful with design. She took the time to understand my business and is always willing to go above and beyond to support me. I've been very happy working with her!",
      author: "Cassandra Muscara",
      title: "Leadership Coach",
      image: "/lovable-uploads/1203331d-f085-412a-a8ca-8029d14dfd05.png"
    },
    {
      id: 2,
      quote: "Working with Naza was such a gift! She made social media feel way less overwhelming and so much more doable. From helping me get my reels up and running to refining posts and offering input on strategy, she was there every step of the way and worked hard to keep me on tract. Naza was always accessible, responsive and full of encouragement. Her warmth, positive energy and helpful insights made the process not only easier, but actually more enjoyable! I loved having her in my corner. If you need someone who truly gets social media and can help you show up in a way that feels authentic and aligned, she's your person!",
      author: "Debbie Zeichner",
      title: "Parent Coach",
      image: "/lovable-uploads/26ecf43d-faaf-42c1-be20-cd07d399a287.png"
    },
    {
      id: 3,
      quote: "I have been thrilled to work with Nazareth as my content manager. She is driven, creative, responsible, and reliable. I cannot recommend her highly enough!",
      author: "Felicia Kashevaroff",
      title: "Relationship Coach",
      image: "/lovable-uploads/539e7f0c-adfc-49e0-af1e-faf2ce1071b1.png"
    }
  ];

  // Determine text size based on quote length
  const getTextSize = (quoteLength: number) => {
    if (quoteLength < 100) {
      return 'text-2xl md:text-3xl'; // Larger text for shorter quotes
    } else if (quoteLength < 200) {
      return 'text-xl md:text-2xl'; // Medium text for medium quotes
    } else {
      return 'text-lg md:text-xl'; // Smaller text for longer quotes
    }
  };

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      testimonials.forEach(testimonial => {
        const img = new Image();
        img.src = testimonial.image;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(testimonial.image));
        };
      });
    };
    
    preloadImages();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="headline-lg mb-4 text-evo-text relative">
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-[100px] text-gray-100 font-serif opacity-50">
              &ldquo;&rdquo;
            </span>
            What My Clients Say
          </h2>
          <p className="text-evo-text/80 max-w-xl mx-auto">
            Success stories from coaches who transformed their businesses with strategic content and branding.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <Carousel className="w-full" setApi={(api) => {
              if (api) {
                api.on('select', () => {
                  const slideIndex = api.selectedScrollSnap();
                  setActiveIndex(slideIndex);
                });
              }
            }}>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="px-4">
                    <div className="flex flex-col items-center text-center px-4 md:px-12 h-full">
                      <blockquote className={`font-rufina text-evo-text leading-relaxed mb-8 max-w-3xl mx-auto flex-grow flex items-center justify-center ${getTextSize(testimonial.quote.length)}`}>
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex flex-col items-center mt-8">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-evo-pink/20">
                          {loadedImages.has(testimonial.image) ? (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                              <div className="animate-pulse w-8 h-8 rounded-full bg-gray-300"></div>
                            </div>
                          )}
                        </div>
                        
                        <h3 className="font-semibold text-evo-text">{testimonial.author}</h3>
                        <p className="text-evo-text/70 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white border border-gray-200 hover:bg-evo-pink hover:text-white transition-colors" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white border border-gray-200 hover:bg-evo-pink hover:text-white transition-colors" />
            </Carousel>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'bg-evo-pink w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
