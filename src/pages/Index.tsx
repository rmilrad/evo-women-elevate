
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Process />
      <About />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
