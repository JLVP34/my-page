import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      gb: {
        translations: {
          "Hi! Glad to see you here!":
            "Hi! Glad to see you here!",
          brandLabel: "Full-Stack Software Engineer"
        }
      },
      es: {
        translations: {
          "Hi! Glad to see you here!":
            "¡Hola! ¡Encantado de conocerte!",
            brandLabel: "Ingeniero de software full-stack"
        }
      }
    },
    fallbackLng: "gb",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
