
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I have been working with Nazareth for quite some time now and she has been integral to my business. She helped me create a beautiful e-book which has been downloaded over 1,000 times and has always been incredibly helpful with design. She took the time to understand my business and is always willing to go above and beyond to support me. I've been very happy working with her!",
      author: "Cassandra Muscara",
      title: "Leadership Coach"
    },
    {
      id: 2,
      quote: "Working with Naza was such a gift! She made social media feel way less overwhelming and so much more doable. From helping me get my reels up and running to refining posts and offering input on strategy, she was there every step of the way and worked hard to keep me on tract. Naza was always accessible, responsive and full of encouragement.",
      author: "Debbie Zeichner",
      title: "Parent Coach"
    },
    {
      id: 3,
      quote: "I have been thrilled to work with Nazareth as my content manager. She is driven, creative, responsible, and reliable. I cannot recommend her highly enough!",
      author: "Felicia Kashevaroff",
      title: "Relationship Coach"
    }
  ];

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
    <section id="testimonials" ref={ref} className="section-padding bg-gradient-to-b from-white to-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            What My Clients Say
          </h2>
          <p 
            className={`text-gray-700 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Success stories from coaches who transformed their businesses with strategic content and branding.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="testimonial-card py-12 px-6 md:px-12 transition-all duration-700 delay-400"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.95)'
            }}
          >
            <div className="mb-6 text-evo-pink-dark">
              <Quote size={48} />
            </div>
            
            <div className="flex overflow-hidden relative h-[200px] md:h-[180px]">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="absolute w-full transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                >
                  <blockquote className="text-base md:text-lg italic mb-6 text-gray-700">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">{testimonial.author}</span>
                    <span className="text-gray-600">{testimonial.title}</span>
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
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-evo-pink-dark scale-125' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-gray-200 hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} className="text-gray-700" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-gray-200 hover:bg-evo-pink hover:bg-opacity-10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} className="text-gray-700" />
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
