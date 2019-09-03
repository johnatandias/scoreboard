import en from './en.json';
import pt from './pt.json';

const browserLanguage = navigator.language.substr(0, 2);

export const config = {
  resources: { en, pt },
  lng: browserLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
};
