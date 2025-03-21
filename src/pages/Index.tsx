
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import WhyEvo from '@/components/WhyEvo';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Add this at the top of the file
const useScrollToHashOnLoad = () => {
  useEffect(() => {
    // After a short delay to ensure all components are mounted
    const timer = setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
};

const Index = () => {
  useScrollToHashOnLoad();
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <WhyEvo />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
