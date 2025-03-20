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
  'convert': 'Convert & Sells',
  'convertDesc': 'Create content that doesn\'t just grow your audience—it turns followers into clients.',
  'letsChat': 'Let\'s Chat',
  
  // About
  'evoQuote': 'Evo comes from the word evolution. It was born from my story—and yours.',
  'hiImNazareth': 'Hi, I\'m Nazareth, your content creator. I was born and raised in Costa Rica, and now I travel to find my creativity and myself in every country I go to. 🍉',
  'iLoveWhatIDo': 'I love what I do because I feel a deep connection to helping women who empower others. It\'s a cycle — I help you make their message visible so you can go on to help someone else.',
  'recentlyIveLearned': 'Recently, I\'ve learned that the most important part of my job is understanding your business. That\'s how I can help you shine.',
  'iFindPurpose': 'I find purpose in everything I do. I find purpose in what YOU do.',
  'thatsTheDifference': 'That\'s the difference between content that works and content that doesn\'t.',
  'whenWeWorkTogether': 'When we work together, we\'re not just creating content. We\'re crafting your evolution.',
  'withPurpose': 'With purpose,',
  'founderAndContentCreator': 'FOUNDER & CONTENT CREATOR',
  
  // Hero
  'evolveYourBusiness': 'Evolve your <span class="opacity-70">business</span> through your <span class="opacity-70">"why."</span>',
  'iHelpCoaches': 'I help coaches, entrepreneurs & digital businesses grow through branding and content creation.',
  'viewMyWork': 'View my work',
  'scheduleACall': 'Schedule a call',
  
  // PainPoints
  'haveYouEverFelt': 'Have you ever <span class="text-evo-pink">felt like</span>...',
  'painPoint1': 'You wish there were more hours in the day to be consistent like everyone says you should?',
  'painPoint2': 'You\'ve tried EVERYTHING marketing gurus tell you on Instagram, but nothing works?',
  'painPoint3': 'You have no idea how to grow your personal brand?',
  'painPoint4': 'You have big dreams for your business but no clarity on how to get there?',
  
  // Testimonials
  'whatMyClientsSay': 'What My Clients Say',
  'successStories': 'Success stories from coaches and entrepreneurs who transformed their businesses with strategic content and branding.',
  'testimonial1': 'I have been working with Nazareth for quite some time now and she has been integral to my business. She helped me create a beautiful e-book which has been downloaded over 1,000 times and has always been incredibly helpful with design. She took the time to understand my business and is always willing to go above and beyond to support me. I\'ve been very happy working with her!',
  'testimonial1Author': 'Cassandra Muscara',
  'testimonial1Title': 'Leadership Coach',
  'testimonial2': 'Working with Naza was such a gift! She made social media feel way less overwhelming and so much more doable. From helping me get my reels up and running to refining posts and offering input on strategy, she was there every step of the way and worked hard to keep me on tract. Naza was always accessible, responsive and full of encouragement. Her warmth, positive energy and helpful insights made the process not only easier, but actually more enjoyable! I loved having her in my corner. If you need someone who truly gets social media and can help you show up in a way that feels authentic and aligned, she\'s your person!',
  'testimonial2Author': 'Debbie Zeichner',
  'testimonial2Title': 'Parent Coach',
  'testimonial3': 'I have been thrilled to work with Nazareth as my content manager. She is driven, creative, responsible, and reliable. I cannot recommend her highly enough!',
  'testimonial3Author': 'Felicia Kashevaroff',
  'testimonial3Title': 'Relationship Coach',
  'previousTestimonial': 'Previous testimonial',
  'nextTestimonial': 'Next testimonial',
  
  // Portfolio
  'recentWork': 'Some of my recent work',
  'portfolioDescription': 'A showcase of my previous work creating content for my clients.',
  
  // Categories
  'digitalProducts': 'Digital Products',
  'socialCarousels': 'Social Carousels',
  'graphicDesign': 'Graphic Design',
  'reels': 'Reels',
  
  // Contact
  'letsConnect': 'Let\'s Connect',
  'beginYourEvolution': 'Begin Your Evolution Today',
  'readyToTransform': 'Ready to transform your business? I\'m here to guide you every step of the way.',
  'sendAMessage': 'Send a Message',
  'success': 'Success!',
  'thankYouForReaching': 'Thank you for reaching out! I\'ll get back to you soon.',
  'name': 'Name',
  'yourName': 'Your name',
  'email': 'Email',
  'yourEmail': 'Your email address',
  'message': 'Message',
  'tellMeAbout': 'Tell me about your business...',
  'sendMessage': 'Send Message',
  'sending': 'Sending...',
  'personalAttention': 'Personal Attention',
  'bookAFree': 'Book a free 30-minute discovery call where we\'ll discuss your unique business needs.',
  'scheduleCall': 'Schedule a Call',
  
  // Footer
  'allRightsReserved': '© {year} evocreative.com. All rights reserved.',
  'scrollToTop': 'Scroll to top'
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
  'convert': 'Conviertas & Vendas',
  'convertDesc': 'Crea contenido que no solo haga crecer tu audiencia, sino que convierta seguidores en clientes.',
  'letsChat': 'Hablemos',
  
  // About
  'evoQuote': 'Evo viene de la palabra evolución. Nació de mi historia y de la tuya.',
  'hiImNazareth': 'Hola, soy Nazareth, tu creadora de contenido. Nací y crecí en Costa Rica, y ahora viajo para encontrar mi creatividad y a mí misma en cada país al que voy. 🍉',
  'iLoveWhatIDo': 'Amo lo que hago porque siento una conexión profunda al ayudar a mujeres que empoderan a otras. Es un ciclo — te ayudo a hacer visible su mensaje para que puedas seguir ayudando a alguien más.',
  'recentlyIveLearned': 'Recientemente, he aprendido que la parte más importante de mi trabajo es entender tu negocio. Así es como puedo ayudarte a brillar.',
  'iFindPurpose': 'Encuentro propósito en todo lo que hago. Encuentro propósito en lo que TÚ haces.',
  'thatsTheDifference': 'Esa es la diferencia entre el contenido que funciona y el que no.',
  'whenWeWorkTogether': 'Cuando trabajamos juntas, no solo estamos creando contenido. Estamos creando tu evolución.',
  'withPurpose': 'Con propósito,',
  'founderAndContentCreator': 'FUNDADORA & CREADORA DE CONTENIDO',
  
  // Hero
  'evolveYourBusiness': 'Evoluciona tu <span class="opacity-70">negocio</span> a través de tu <span class="opacity-70">"por qué."</span>',
  'iHelpCoaches': 'Ayudo a coaches, emprendedores y negocios digitales a crecer mediante branding y creación de contenido.',
  'viewMyWork': 'Ver mi trabajo',
  'scheduleACall': 'Programa una llamada',
  
  // PainPoints
  'haveYouEverFelt': '¿Alguna vez te has <span class="text-evo-pink">sentido así</span>?...',
  'painPoint1': '¿Deseas que hubiera más horas en el día para ser constante como todos dicen que deberías?',
  'painPoint2': '¿Has probado TODO lo que los gurús de marketing te dicen en Instagram, pero nada funciona?',
  'painPoint3': '¿No tienes idea de cómo hacer crecer tu marca personal?',
  'painPoint4': '¿Tienes grandes sueños para tu negocio pero no tienes claridad sobre cómo llegar allí?',
  
  // Testimonials
  'whatMyClientsSay': 'Lo Que Dicen Mis Clientes',
  'successStories': 'Historias de éxito de coaches y emprendedores que transformaron sus negocios con contenido estratégico y branding.',
  'testimonial1': 'He estado trabajando con Nazareth desde hace bastante tiempo y ha sido fundamental para mi negocio. Me ayudó a crear un hermoso e-book que ha sido descargado más de 1,000 veces y siempre ha sido increíblemente útil con el diseño. Se tomó el tiempo para entender mi negocio y siempre está dispuesta a ir más allá para apoyarme. ¡He estado muy feliz trabajando con ella!',
  'testimonial1Author': 'Cassandra Muscara',
  'testimonial1Title': 'Coach de Liderazgo',
  'testimonial2': '¡Trabajar con Naza fue un regalo! Hizo que las redes sociales se sintieran mucho menos abrumadoras y mucho más factibles. Desde ayudarme a poner en marcha mis reels hasta refinar publicaciones y ofrecer aportes sobre estrategia, estuvo ahí en cada paso del camino y trabajó duro para mantenerme en el camino. Naza siempre fue accesible, receptiva y llena de aliento. ¡Su calidez, energía positiva y perspicacias útiles hicieron que el proceso no solo fuera más fácil, sino realmente más agradable! Me encantó tenerla de mi lado. Si necesitas a alguien que realmente entienda las redes sociales y pueda ayudarte a mostrarte de una manera que se sienta auténtica y alineada, ¡ella es tu persona!',
  'testimonial2Author': 'Debbie Zeichner',
  'testimonial2Title': 'Coach de Padres',
  'testimonial3': 'He estado encantada de trabajar con Nazareth como mi gerente de contenido. Es motivada, creativa, responsable y confiable. ¡No puedo recomendarla lo suficiente!',
  'testimonial3Author': 'Felicia Kashevaroff',
  'testimonial3Title': 'Coach de Relaciones',
  'previousTestimonial': 'Testimonio anterior',
  'nextTestimonial': 'Testimonio siguiente',
  
  // Portfolio
  'recentWork': 'Algunos de mis trabajos recientes',
  'portfolioDescription': 'Una muestra de mi trabajo previo creando contenido para mis clientes.',
  
  // Categories
  'digitalProducts': 'Productos Digitales',
  'socialCarousels': 'Carruseles Sociales',
  'graphicDesign': 'Diseño Gráfico',
  'reels': 'Reels',
  
  // Contact
  'letsConnect': 'Conectemos',
  'beginYourEvolution': 'Comienza Tu Evolución Hoy',
  'readyToTransform': '¿Lista para transformar tu negocio? Estoy aquí para guiarte en cada paso del camino.',
  'sendAMessage': 'Envía un Mensaje',
  'success': '¡Éxito!',
  'thankYouForReaching': '¡Gracias por contactarme! Me pondré en contacto contigo pronto.',
  'name': 'Nombre',
  'yourName': 'Tu nombre',
  'email': 'Correo electrónico',
  'yourEmail': 'Tu dirección de correo electrónico',
  'message': 'Mensaje',
  'tellMeAbout': 'Cuéntame sobre tu negocio...',
  'sendMessage': 'Enviar Mensaje',
  'sending': 'Enviando...',
  'personalAttention': 'Atención Personal',
  'bookAFree': 'Reserva una llamada de descubrimiento gratuita de 30 minutos donde discutiremos las necesidades específicas de tu negocio.',
  'scheduleCall': 'Programar Llamada',
  
  // Footer
  'allRightsReserved': '© {year} evocreative.com. Todos los derechos reservados.',
  'scrollToTop': 'Volver arriba'
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
