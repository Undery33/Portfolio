import { useEffect, useState, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();

  const mainRef = useRef(null);
  const nextSectionRef = useRef(null);

  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setIsFilling(true);
    setTimeout(() => {
      console.log('send:', message);
      setMessage('');
      setIsSent(true);
      setIsFilling(false);
    }, 1000);
  };

  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const handleScroll = () => {
      setShowScroll(mainEl.scrollTop === 0);
    };

    mainEl.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScroll(false);
  };

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

  const [pageIndex, setPageIndex] = useState(0);
  const isScrolling = useRef(false);
  const sections = useRef([]);

  useEffect(() => {
    if (mainRef.current) {
      sections.current = Array.from(mainRef.current.querySelectorAll('section'));
    }
  }, []);

  const handleWheel = e => {
    e.preventDefault();
    if (isScrolling.current) return;

    const delta = e.deltaY;
    let next = pageIndex;
    if (delta > 0 && pageIndex < sections.current.length - 1) next = pageIndex + 1;
    else if (delta < 0 && pageIndex > 0) next = pageIndex - 1;
    else return;

    isScrolling.current = true;
    setPageIndex(next);
    sections.current[next].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { isScrolling.current = false; }, 800);
  };

  useEffect(() => {
    mainRef.current?.addEventListener('wheel', handleWheel, { passive: false });
    return () => mainRef.current?.removeEventListener('wheel', handleWheel);
  }, [pageIndex]);

  return (
    <main ref={mainRef} className="main">
      <section className="welcome">
        <p className="hello">{t("home.hello")}</p>
        <div className="setrow">
          <span className="sub-left">{t("home.iAm")}</span>
          <h1 className="title" aria-live="polite">
            {text || "\u00A0"}
            <span className="cursor">|</span>
          </h1>
          <span className="sub-right">{t("home.am")}</span>
        </div>
        <div className="icons">
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
        <div className="scroll" onClick={handleClick}>
          <span>SCROLL</span>
          <span className="arrow"></span>
        </div>
      )}

      <section ref={nextSectionRef} className="introduce">
        <div className="intro-left">
          <img src="/sample.png" alt="Sample" className="intro-image" />
        </div>
        <div className="intro-right">
          <span className="intro-header">INTRODUCE</span>
          <div className="intro-text">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <p key={i}>
                <Trans
                  i18nKey={`home.intro_${i}`}
                  components={{ h: <span style={{ color: '#fff', fontWeight: '200' }} /> }}
                />
              </p>
            ))}
            <div className={`message ${isSent ? 'sent' : ''} ${isFilling ? 'fill-active' : ''}`}>
              {!isSent ? (
                <>
                  <input
                    type="text"
                    placeholder={t("home.placeholder")}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                  />
                  <button
                    className="send-btn"
                    onClick={handleSend}
                    disabled={isFilling}
                  >
                    <img src="/send.png" alt="Send" width="24" height="24" />
                  </button>
                </>
              ) : (
                <div className="sent-content">
                  <img src="/send.png" alt="Sent" className="sent-icon" width="24" height="24" />
                  <span className='sent-text'>{t("home.complect")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>


      </section>
    </main>
  );
}
