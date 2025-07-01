// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my portfolio!",
        }
      },
      ko: {
        translation: {
          welcome: "내 포트폴리오에 오신 것을 환영합니다!",
        }
      }
    }
  });

export default i18n;
