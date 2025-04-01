import React, { useEffect } from 'react';
import ConAlma_Header from '../components/conalma/ConAlma_Header';
import ConAlma_Hero from '../components/conalma/ConAlma_Hero';
import ConAlma_Problem from '../components/conalma/ConAlma_Problem';
import ConAlma_Solution from '../components/conalma/ConAlma_Solution';
import ConAlma_Benefits from '../components/conalma/ConAlma_Benefits';
import ConAlma_Program from '../components/conalma/ConAlma_Program';
import ConAlma_Audience from '../components/conalma/ConAlma_Audience';
import ConAlma_About from '../components/conalma/ConAlma_About';
import ConAlma_Pricing from '../components/conalma/ConAlma_Pricing';
import ConAlma_ContactForm from '../components/conalma/ConAlma_ContactForm';
import ConAlma_Footer from '../components/conalma/ConAlma_Footer';

const ConAlma = () => {
  // Track page view in analytics when component mounts
  useEffect(() => {
    // Track page view in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-88WGN9T5MS', {
        page_path: '/#/conalma',
        page_title: 'Contenido con Alma'
      });
    }
    
    // Track page view in Umami Analytics
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('pageview', {
        url: '/#/conalma',
        title: 'Contenido con Alma',
        referrer: document.referrer
      });
    }
  }, []);

  // Override the default styles from App.css for this page
  useEffect(() => {
    // Save the original styles
    const rootElement = document.getElementById('root');
    const originalMaxWidth = rootElement?.style.maxWidth;
    const originalPadding = rootElement?.style.padding;
    const originalTextAlign = rootElement?.style.textAlign;
    const originalMargin = rootElement?.style.margin;
    
    // Apply new styles for ConAlma page
    if (rootElement) {
      rootElement.style.maxWidth = 'none';
      rootElement.style.padding = '0';
      rootElement.style.textAlign = 'left';
      rootElement.style.margin = '0';
    }
    
    // Restore original styles when component unmounts
    return () => {
      if (rootElement) {
        rootElement.style.maxWidth = originalMaxWidth || '';
        rootElement.style.padding = originalPadding || '';
        rootElement.style.textAlign = originalTextAlign || '';
        rootElement.style.margin = originalMargin || '';
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <ConAlma_Header />
      <main className="flex-grow">
        <ConAlma_Hero />
        <ConAlma_Problem />
        <ConAlma_Solution />
        <ConAlma_Benefits />
        <ConAlma_Program />
        <ConAlma_Audience />
        <ConAlma_About />
        <ConAlma_Pricing />
        <ConAlma_ContactForm />
      </main>
      <ConAlma_Footer />
    </div>
  );
};

export default ConAlma;