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
            "intro_1": "Hello, I'm <h>Taeeui Hong</h>.",
            "intro_2": "This webpage contains my <h>portfolio, resume, and personal information</h>.",
            "intro_3": "As a frontend developer, I decided to <h>build it as a website</h>.",
            "intro_4": "If you encounter any <h>bugs or errors</h> while browsing the page,",
            "intro_5": "please use the input below to describe <h>what kind of error occurred</h>.",
            "intro_6": "Or feel free to write <h>anything you’d like to say to me</h>, and I’ll read it 😊",
            "placeholder": "Please Enter Here!",
            "complect": "Transmission finished!"
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
            "intro_1": "안녕하세요, <h>홍태의</h> 입니다.",
            "intro_2": "해당 웹페이지는 <h>포트폴리오 및 이력서, 본인에 대한 정보를</h>",
            "intro_3": "프론트앤드 개발자로서 <h>웹으로 제작</h>해보게 되었습니다.",
            "intro_4": "만약 웹 페이지를 구경하면서 <h>버그 및 오류가 발생</h>할 시",
            "intro_5": "아래 입력을 통해 <h>어떠한 오류가 발생하였는지</h> 작성해주세요.",
            "intro_6": "또는 <h>저에게 하고 싶은 말</h>을 적어주시면 읽어보겠습니다 😊",
            "placeholder": "여기에 입력해주세요!",
            "complect": "전송 완료!"
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
            "am": "です。",
            "intro_1": "こんにちは、<h>ホン・テウィ</h>です。",
            "intro_2": "このウェブページは、<h>ポートフォリオや履歴書、<br/>自分に関する情報</h>を掲載しています。",
            "intro_3": "フロントエンド開発者として、<h>ウェブで制作</h>してみました。",
            "intro_4": "もしページを閲覧中に<h>バグやエラーが発生</h>した場合は、",
            "intro_5": "下の入力欄から<h>どのようなエラーが起きたのか</h>教えてください。",
            "intro_6": "または、<h>私に伝えたいこと</h>があれば書いてください。<br/>読ませていただきます 😊",
            "placeholder": "ここに入力してください！",
            "complect": "送信完了！"
          }
        }
      }
    }
  });

export default i18n;
