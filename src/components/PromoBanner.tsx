import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const PromoBanner: React.FC = () => {
  const { language } = useLanguage();
  const [isClosed, setIsClosed] = useState(false);
  
  useEffect(() => {
    // Check if user has previously closed the banner
    const closed = localStorage.getItem('promoBannerClosed') === 'true';
    setIsClosed(closed);
  }, []);
  
  // Only show the banner when the language is Spanish and it's not closed
  if (language !== 'es' || isClosed) return null;
  
  return (
    <div className="bg-gradient-to-r from-[#f78075] to-[#f9a097] text-white py-2 px-4 text-center fixed top-0 left-0 right-0 z-[60]">
      <div className="container-custom flex items-center justify-center">
        <p className="text-sm font-medium mr-2">
          ¿Quieres aprender tu propia estrategia de contenido? Descubre Contenido con Alma 💐
        </p>
        <Link
          to="/conalma"
          className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-0.5 rounded-full text-xs font-medium transition-all duration-300 group"
        >
          Saber más
          <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
        </Link>
        
        {/* Close button */}
        <button
          onClick={() => {
            // Update state and store in localStorage
            setIsClosed(true);
            localStorage.setItem('promoBannerClosed', 'true');
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;