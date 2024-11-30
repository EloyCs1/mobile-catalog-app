import es from '@lang/es.json';
import en from '@lang/en.json';

const messages = {
  es: {
    ...es,
  },
  en: {
    ...en,
  },
};

export const getLocales = () => Object.keys(messages);
export const DEFAULT_LOCALE = 'es';
export default messages;
