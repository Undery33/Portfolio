// src/i18n.js
import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'kr',
    debug: true,
    resources: {
      en: {
        translation: {
          "home": {
            "juniorDeveloper": "Junior Developer",
            "frontendDeveloper": "Frontend Developer",
            "aiDeveloper": "AI Developer",
            "name": "Taeeui Hong",
            "nickname": "Undery",
            "hello": "Welcome,",
            "iAm": "I'm",
            "am": "",
          }
        }
      },
      kr: {
        translation: {
          "home": {
            "juniorDeveloper": "주니어 개발자",
            "frontendDeveloper": "프론트앤드 개발자",
            "aiDeveloper": "AI를 이용한 개발자",
            "name": "홍태의",
            "nickname": "언더리",
            "hello": "안녕하세요,",
            "iAm": "저는",
            "am": "입니다.",
            "intro_1": "안녕하세요, 홍태의 입니다.",
            "intro_2": "해당 웹페이지는 포트폴리오 및 이력서, 본인에 대한 정보를",
            "intro_3": "프론트앤드 개발자로서 웹으로 제작해보게 되었습니다.",
            "intro_4": "만약 웹 페이지를 구경하면서 버그 및 오류가 발생할 시",
            "intro_5": "아래 입력을 통해 어떠한 오류가 발생하였는지 작성해주세요.",
            "intro_6": "또는 저에게 하고 싶은 말을 적어주시면 읽어보겠습니다 😊"
          }
        }
      },
      ja: {
        translation: {
          "home": {
            "juniorDeveloper": "ジュニア開発者",
            "frontendDeveloper": "フロントエンド開発者",
            "aiDeveloper": "AIを活用した開発者",
            "name": "ホン・テウィ",
            "nickname": "アンダリー",
            "hello": "初めまして、",
            "iAm": "私は",
            "am": "です。"
          }
        }
      }
    }
  });

export default i18n;
