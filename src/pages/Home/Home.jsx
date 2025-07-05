import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

export default function Home() {
  // 번역 수행
  const { t } = useTranslation();

  // 스크롤 시 SCROLL 안보이도록 하는 로직
  const [showScroll, setShowScroll] = useState(true);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
      if (window.scrollY === 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScroll(false);
  };

  // 타이핑 효과

  const phrases = [
    "home.juniorDeveloper",
    "home.frontendDeveloper",
    "home.aiDeveloper",
    "home.name",
    "home.nickname"
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = t(phrases[i]) || "";

    if (!fullText) return;

    const handleTyping = () => {
      setText(prev =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  // 스크롤 로직  
  const mainRef = useRef(null);
  // 현재 보여질 섹션 인덱스
  const [pageIndex, setPageIndex] = useState(0);
  // 스크롤 잠금 플래그
  const isScrolling = useRef(false);
  // 섹션 요소 배열
  const sections = useRef([]);

  useEffect(() => {
    // 첫 렌더링 후 mainRef에서 section 리스트 추출
    if (mainRef.current) {
      sections.current = Array.from(
        mainRef.current.querySelectorAll('section')
      );
    }
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    if (isScrolling.current) return;

    const delta = e.deltaY;
    let next = pageIndex;

    if (delta > 0 && pageIndex < sections.current.length - 1) {
      next = pageIndex + 1;
    } else if (delta < 0 && pageIndex > 0) {
      next = pageIndex - 1;
    } else {
      return;
    }

    isScrolling.current = true;
    setPageIndex(next);
    sections.current[next].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pageIndex]);

  // HTML 적용
  return (
    <main ref={mainRef}>
      <section className='welcome'>
        <p className='hello'>{t("home.hello")}</p>
        <div className='setrow'>
          <span className="sub-left">{t("home.iAm")}</span>
          <h1 className="title" aria-live='polite'>
            {text || "\u00A0"}
            <span className='cursor'>|</span>
          </h1>
          <span className="sub-right">{t("home.am")}</span>
        </div>
        <div className='icons'>
          <a href="https://github.com/Undery33" target='_blank' rel='noreferrer' aria-label='GitHub'>
            <img src='/github.png' alt='GitHub icon' />
          </a>
          <a href="https://www.instagram.com/_undery.pth" target='_blank' rel='noreferrer' aria-label='Instagram'>
            <img src='/instagram.png' alt='Instagram icon' />
          </a>
          <a href="https://discord.gg/ungdengri" target='_blank' rel='noreferrer' aria-label='Discord'>
            <img src='/discord.png' alt='Discord icon' />
          </a>
          <a href="mailto:htu123132@gmail.com" aria-label='Email'>
            <img src='/email.png' alt='Email icon' />
          </a>
          <a href="tel:+8201043842303" aria-label='Phone'>
            <img src='/phone.png' alt='Phone icon' />
          </a>
        </div>
      </section>

      {showScroll && (
        <div
          className='scroll'
          onClick={handleClick}
        >
          <span>SCROLL</span>
          <span className='arrow'></span>
        </div>
      )}


      <section ref={nextSectionRef} className='introduce'>
        <div className='intro-left'>
          <img src='/sample.png' alt='Sample' className='intro-image' />
        </div>
        <div className='intro-right'>
          <span className='intro-header'>INTRODUCE</span>
          {[1,2,3,4,5,6].map(i => (
            <p key={i}>{t(`home.intro_${i}`)}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
