
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  image: string;
  accent: string;
}

const Testimonials = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I have been working with Nazareth for quite some time now and she has been integral to my business. She helped me create a beautiful e-book which has been downloaded over 1,000 times and has always been incredibly helpful with design. She took the time to understand my business and is always willing to go above and beyond to support me. I've been very happy working with her!",
      author: "Cassandra Muscara",
      title: "Leadership Coach",
      image: "/lovable-uploads/1203331d-f085-412a-a8ca-8029d14dfd05.png",
      accent: "bg-amber-50"
    },
    {
      id: 2,
      quote: "Working with Naza was such a gift! She made social media feel way less overwhelming and so much more doable. From helping me get my reels up and running to refining posts and offering input on strategy, she was there every step of the way and worked hard to keep me on tract. Naza was always accessible, responsive and full of encouragement. Her warmth, positive energy and helpful insights made the process not only easier, but actually more enjoyable! I loved having her in my corner. If you need someone who truly gets social media and can help you show up in a way that feels authentic and aligned, she's your person!",
      author: "Debbie Zeichner",
      title: "Parent Coach",
      image: "/lovable-uploads/26ecf43d-faaf-42c1-be20-cd07d399a287.png",
      accent: "bg-green-50"
    },
    {
      id: 3,
      quote: "I have been thrilled to work with Nazareth as my content manager. She is driven, creative, responsible, and reliable. I cannot recommend her highly enough!",
      author: "Felicia Kashevaroff",
      title: "Relationship Coach",
      image: "/lovable-uploads/539e7f0c-adfc-49e0-af1e-faf2ce1071b1.png",
      accent: "bg-rose-50"
    }
  ];

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            What My Clients Say
          </h2>
          <p 
            className={`text-evo-text transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Success stories from coaches who transformed their businesses with strategic content and branding.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="bg-white py-12 px-6 md:px-12 rounded-2xl shadow-sm border border-evo-neutral transition-all duration-700 delay-400"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.95)'
            }}
          >
            <div className="mb-6 text-evo-pink">
              <Quote size={48} />
            </div>
            
            <div className="flex overflow-hidden relative min-h-[400px] md:min-h-[320px]">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="absolute w-full transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <div className={`relative rounded-2xl overflow-hidden shadow-sm flex-shrink-0 ${testimonial.accent} p-1`}>
                      <div className="rounded-xl overflow-hidden w-32 h-32 md:w-40 md:h-40">
                        {loadedImages.has(testimonial.image) ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            width="160"
                            height="160"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <div className="animate-pulse w-8 h-8 rounded-full bg-gray-300"></div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <blockquote className="text-sm md:text-base italic text-evo-text leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex flex-col mt-4 md:ml-48">
                    <span className="font-semibold text-evo-text">{testimonial.author}</span>
                    <span className="text-evo-text/80">{testimonial.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-between items-center">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-evo-pink scale-125' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-evo-neutral hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} className="text-evo-text" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-evo-neutral hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} className="text-evo-text" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
