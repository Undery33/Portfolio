// src/pages/Home.jsx
import { useTranslation } from 'react-i18next';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();
 
  return (
    <main>
      <div className='intro'>
        <p className='intro-me'>React, Python, AWS... <br/></p>
        <p className='intro-major'>AI를 이용한 주니어 개발자, 홍태의 입니다.</p>
      </div>
      <div className='about'>
        About
      </div>
      <div className='skills'>
        Skills
      </div>
    </main>
  );
}
