import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import PromoModal from './PromoModal';

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage, translate } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    
    // If switching to Spanish, show the promo modal after 3 seconds
    // but only if it hasn't been shown before
    if (newLanguage === 'es') {
      const hasSeenModal = localStorage.getItem('hasSeenPromoModal') === 'true';
      
      if (!hasSeenModal) {
        setTimeout(() => {
          setShowModal(true);
        }, 3000);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenPromoModal', 'true');
  };

  return (
    <>
      <button
        onClick={toggleLanguage}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-sm transition-all duration-300",
          className
        )}
        aria-label={translate('language')}
      >
        <Globe size={16} />
        <span>{language === 'en' ? 'EN' : 'ES'}</span>
      </button>
      
      <PromoModal isOpen={showModal} onClose={closeModal} />
    </>
  );
};

export default LanguageSwitcher;
