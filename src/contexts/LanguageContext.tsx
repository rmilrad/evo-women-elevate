
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, LanguageContextType } from './language/types';
import { getTranslations } from './language/translations';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Function to translate text based on current language
  const translate = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key; // Return the key itself if translation not found
  };
  
  const value = {
    language,
    setLanguage,
    translate
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
