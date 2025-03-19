
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage, translate } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-sm transition-all duration-300",
        className
      )}
      aria-label={translate('language')}
    >
      <Globe size={16} className="mr-0.5" />
      <span>{language === 'en' ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSwitcher;
