// src/pages/Home.jsx
import { useTranslation } from 'react-i18next';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();
 
  return (
    <main>
      <div className='intro'>
        <p className='intro-me'>Hello! I'm Undery, <br/></p>
        <p className='intro-major'>Front End, AI, Data Scientist</p>
      </div>
      <div className='info-link'>
        본인에 대해 간략하게 소개 <br/>
        GitHub 및 Instagram 등 본인과 관련된 링크 연결
      </div>
    </main>
  );
}
