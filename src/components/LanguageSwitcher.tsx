
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
        "flex items-center gap-1 px-2 py-1 rounded-full text-sm transition-colors",
        className
      )}
      aria-label={translate('language')}
    >
      <Globe size={16} className="mr-1" />
      <span>{language === 'en' ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSwitcher;
