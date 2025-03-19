
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Navbar
  'language': 'Language',
  'process': 'Process',
  'about': 'About',
  'testimonials': 'Testimonials',
  'portfolio': 'Portfolio',
  'getStarted': 'Get Started',
  
  // WhyEvo
  'whyChooseEvo': 'Why Choose Evo',
  'evoCreativeWasMade': 'Evo Creative was made for you to…',
  'saveYouTime': 'Save You Time',
  'saveYouTimeDesc': 'Feel at ease knowing you have the right tools to succeed in your business.',
  'trustYourself': 'Trust Yourself',
  'trustYourselfDesc': 'Develop a mindset that helps you grow while enjoying the process.',
  'gainClarity': 'Gain Clarity',
  'gainClarityDesc': 'Stop communicating what you\'re not and start making space for what makes you \'you\'.',
  'convert': 'Convert',
  'convertDesc': 'Create content that doesn\'t just grow your audience—it turns followers into clients.',
  'letsChat': 'Let\'s Chat',
  
  // About
  'evoQuote': '"Evo comes from the word evolution. It was born from my story—and yours."',
  'hiImNazareth': 'Hi, I\'m Nazareth, your content creator. I was born and raised in Costa Rica, and now I travel to find my creativity and myself in every country I go to. 🍉',
  'iLoveWhatIDo': 'I love what I do because I feel a deep connection to helping women who empower others. It\'s a cycle — I help you make their message visible so you can go on to help someone else.',
  'recentlyIveLearned': 'Recently, I\'ve learned that the most important part of my job is understanding your mission. That\'s how I can truly help you shine.',
  'iFindPurpose': 'I find purpose in everything I do. I find purpose in what YOU do.',
  'thatsTheDifference': 'That\'s the difference between content that works and content that doesn\'t. It\'s not just about beautiful visuals or clever words—it\'s about capturing the essence of your mission.',
  'whenWeWorkTogether': 'When we work together, we\'re not just creating content. We\'re crafting your evolution.',
  'withPurpose': 'With purpose,',
  'founderAndContentCreator': 'FOUNDER & CONTENT CREATOR',
};

// Spanish translations
const esTranslations: Record<string, string> = {
  // Navbar
  'language': 'Idioma',
  'process': 'Proceso',
  'about': 'Acerca de',
  'testimonials': 'Testimonios',
  'portfolio': 'Portafolio',
  'getStarted': 'Empezar',
  
  // WhyEvo
  'whyChooseEvo': 'Por qué elegir Evo',
  'evoCreativeWasMade': 'Evo Creative fue creado para que tú…',
  'saveYouTime': 'Ahorres tiempo',
  'saveYouTimeDesc': 'Siéntete tranquila sabiendo que tienes las herramientas adecuadas para tener éxito en tu negocio.',
  'trustYourself': 'Confíes en ti misma',
  'trustYourselfDesc': 'Desarrolla una mentalidad que te ayude a crecer mientras disfrutas del proceso.',
  'gainClarity': 'Ganes claridad',
  'gainClarityDesc': 'Deja de comunicar lo que no eres y comienza a hacer espacio para lo que te hace "tú".',
  'convert': 'Conviertas',
  'convertDesc': 'Crea contenido que no solo haga crecer tu audiencia, sino que convierta seguidores en clientes.',
  'letsChat': 'Hablemos',
  
  // About
  'evoQuote': '"Evo viene de la palabra evolución. Nació de mi historia y de la tuya."',
  'hiImNazareth': 'Hola, soy Nazareth, tu creadora de contenido. Nací y crecí en Costa Rica, y ahora viajo para encontrar mi creatividad y a mí misma en cada país al que voy. 🍉',
  'iLoveWhatIDo': 'Amo lo que hago porque siento una conexión profunda al ayudar a mujeres que empoderan a otras. Es un ciclo — te ayudo a hacer visible su mensaje para que puedas seguir ayudando a alguien más.',
  'recentlyIveLearned': 'Recientemente, he aprendido que la parte más importante de mi trabajo es entender tu misión. Así es como puedo realmente ayudarte a brillar.',
  'iFindPurpose': 'Encuentro propósito en todo lo que hago. Encuentro propósito en lo que TÚ haces.',
  'thatsTheDifference': 'Esa es la diferencia entre el contenido que funciona y el que no. No se trata solo de hermosas imágenes o palabras inteligentes, se trata de capturar la esencia de tu misión.',
  'whenWeWorkTogether': 'Cuando trabajamos juntas, no solo estamos creando contenido. Estamos creando tu evolución.',
  'withPurpose': 'Con propósito,',
  'founderAndContentCreator': 'FUNDADORA & CREADORA DE CONTENIDO',
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Function to translate text based on current language
  const translate = (key: string): string => {
    const translations = language === 'en' ? enTranslations : esTranslations;
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
