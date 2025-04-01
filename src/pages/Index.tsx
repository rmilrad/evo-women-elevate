
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
import PromoBanner from '@/components/PromoBanner';

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
  
  // Track page view in analytics when component mounts
  useEffect(() => {
    // Track page view in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-88WGN9T5MS', {
        page_path: '/',
        page_title: 'Evo Creative'
      });
    }
    
    // Track page view in Umami Analytics
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('pageview', {
        url: '/',
        title: 'Evo Creative',
        referrer: document.referrer
      });
    }
  }, []);
  
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
      <div id="promo-banner"><PromoBanner /></div>
      <Navbar />
      <Hero />
      <PainPoints />
      <WhyEvo />
      <About />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
