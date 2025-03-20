
export type Language = 'en' | 'es';

export interface TranslationRecord {
  [key: string]: string;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}
