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
            "complect": "Transmission finished!",
            "python": "Used for AI, data analysis, \nand data transformation.",
            "javascript": "Used for dynamic UI implementation, \nasynchronous communication, \nand SPA development.",
            "nodejs": "Used for server-side logic implementation \nand real-time data processing.",
            "react": "Used for component-based UI development, \nstate management, and SPA construction.",
            "pytorch": "Experienced in training and prediction \nusing Transformer models.",
            "git": "Used for version control, team collaboration, \ncode reviews, and issue tracking.",
            "ec2": "Used for bot deployment \nand operation using pm2.",
            "dynamodb": "Used as an AWS NoSQL service for \nfast data transmission and retrieval.",
            "translate": "Utilized APIs to perform translations \nand develop services based on translation results.",
            "ubuntu": "Linux distribution used on EC2 for \nserver setup and deployment tasks.",
            "openai": "Implemented chatbots using GPT-4o API and \ndirectly managed prompt design \nand cost control.",
            "huggingface": "Used for handling LLM models, \nmodel fine-tuning, and exploring \nmodels developed by others."
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
            "complect": "전송 완료!",
            "experience": "경험 해본",
            "python": "AI 및 데이터 분석, 데이터 변환을 위해 \n사용하였습니다.",
            "javascript": "UI 동적 구현, 비동기 통신, SPA 구현을 \n위해 사용하였습니다.",
            "nodejs": "서버 사이드 로직 구현 및 실시간 데이터 처리를 \n위해 사용하였습니다.",
            "react": "컴포넌트 기반 UI 개발, 상태 관리, SPA 구축을 \n위해 사용하였습니다.",
            "pytorch": "Transformer 모델을 이용한 데이터 학습 및 예측을 \n위해 사용해보았습니다.",
            "git": "버전 관리, 팀 협업, 코드 리뷰, 이슈 확인 등을 \n위해 사용하였습니다.",
            "ec2": "pm2를 이용한 봇 배포 및 운영을 위해 \n사용하였습니다.",
            "dynamodb": "AWS NoSQL 중 하나로, 빠른 데이터 전송 및 \n확인이 필요하여 사용해보았습니다.",
            "translate": "API를 이용한 번역을 수행하고 해당 결과를 \n이용한 서비스를 개발, 운영하기 위하여 \n사용해보았습니다.",
            "ubuntu": "EC2에서 사용한 리눅스 디스트로로, \n서버 구축 및 배포 작업을 위해 \n사용하였습니다.",
            "openai": "GPT-4o API를 이용하여 챗봇을 구현하였으며, \n프롬프트 작성과 비용 관리 등을 \n직접 겪어보았습니다.",
            "huggingface": "LLM 처리 모델 활용, 모델 파인 튜닝, \n다른 개발자가 만든 모델을 사용해보고 싶어 \n이용해보았습니다."
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
            "complect": "送信完了！",
            "python": "AI・データ分析・データ変換など\nのために使用しました。",
            "javascript": "UIの動的な実装・非同期通信・SPA開発\nのために使用しました。",
            "nodejs": "サーバーサイドのロジック実装および\nリアルタイムデータ処理に使用しました。",
            "react": "コンポーネントベースのUI開発・\n状態管理・SPA構築のために\n使用しました。",
            "pytorch": "Transformerモデルを用いたデータ学習と\n予測のために使用経験があります。",
            "git": "バージョン管理・チーム協業・\nコードレビュー・Issue管理など\nのために使用しました。",
            "ec2": "pm2を用いたBotのデプロイ・\n運用のために使用しました。",
            "dynamodb": "AWSのNoSQLサービスの一つとして、\n高速なデータの送受信が必要な場面で\n使用経験があります。",
            "translate": "APIを利用した翻訳を行い、\nその結果を活用したサービス開発・\n運用のために使用経験があります。",
            "ubuntu": "EC2で使用したLinux\nディストリビューションで、\nサーバー構築とデプロイ作業\nのために使用しました。",
            "openai": "GPT-4o APIを利用したチャットボットの\n実装およびプロンプト設計や費用管理を\n直接経験しました。",
            "huggingface": "LLMモデルの利用・ファインチューニング、\n他の開発者が作成したモデルを試用する\nために使用経験があります。"
          }
        }
      }
    }
  });

export default i18n;
