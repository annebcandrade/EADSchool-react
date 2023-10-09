import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJson from './translation/en.json'
import esJson from './translation/es.json'
import ptBRJson from './translation/ptBR.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "pt", 
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: ptBRJson,
      en: enJson,
      es: esJson
      },
});

export default i18n;