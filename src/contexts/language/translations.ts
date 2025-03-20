
import { Language, TranslationRecord } from './types';
import enTranslations from './en';
import esTranslations from './es';

export function getTranslations(language: Language): TranslationRecord {
  switch (language) {
    case 'en':
      return enTranslations;
    case 'es':
      return esTranslations;
    default:
      return enTranslations;
  }
}
