import { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import skills from './skills.json';
import SkillCard from './SkillCard';
import styles from './Home.module.css';

export default function Home() {
  const { t } = useTranslation();

  const mainRef = useRef(null);
  const nextSectionRef = useRef(null);

  // 메시지 전송 관련
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  const handleSend = useCallback(() => {
    if (!message.trim()) return;
    setIsFilling(true);
    setTimeout(() => {
      setMessage('');
      setIsSent(true);
      setIsFilling(false);
    }, 1000);
    console.log(message);
  }, [message]);

  // SCROLL 안내
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;
    const handleScroll = () => setShowScroll(mainEl.scrollTop === 0);
    mainEl.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, []);

  // SCROLL 클릭시 두 번째 섹션 이동
  const handleClick = useCallback(() => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScroll(false);
  }, []);

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
  }, [text, isDeleting, loopNum, t]);

  // Section snap + skills 내부 스크롤
  const [pageIndex, setPageIndex] = useState(0);
  const isScrolling = useRef(false);
  const sections = useRef([]);

  useEffect(() => {
    if (mainRef.current) {
      sections.current = Array.from(mainRef.current.querySelectorAll('section'));
    }
  }, []);

  // Skills에서의 UI 구현을 위한 함수
  const handleWheel = useCallback(e => {
    const arr = sections.current;
    const cur = arr[pageIndex];
    const mainEl = mainRef.current;
    const isSkills = cur?.classList.contains(styles["exper-skills"]);
    const delta = e.deltaY;
    const sectionTop = cur.offsetTop;
    const sectionHeight = cur.offsetHeight;
    const mainScroll = mainEl.scrollTop;
    const mainHeight = mainEl.clientHeight;
    const atTop = mainScroll <= sectionTop + 60;
    const atBottom = mainScroll + mainHeight >= sectionTop + sectionHeight - 2;
    if (isSkills) {
      if (delta > 0 && !atBottom) return;
      if (delta < 0 && !atTop) return;
      if (delta < 0 && atTop) {
        e.preventDefault();
        mainEl.scrollTop = sectionTop;
        if (isScrolling.current) return;
        if (pageIndex > 0) {
          isScrolling.current = true;
          setPageIndex(pageIndex - 1);
          arr[pageIndex - 1].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => { isScrolling.current = false; }, 800);
        }
        return;
      }
      if (delta > 0 && atBottom) return;
      return;
    }
    e.preventDefault();
    if (isScrolling.current) return;
    let next = pageIndex;
    if (delta > 0 && pageIndex < arr.length - 1) next = pageIndex + 1;
    else if (delta < 0 && pageIndex > 0) next = pageIndex - 1;
    else return;
    isScrolling.current = true;
    setPageIndex(next);
    arr[next].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { isScrolling.current = false; }, 800);
  }, [pageIndex]);

  useEffect(() => {
    mainRef.current?.addEventListener('wheel', handleWheel, { passive: false });
    return () => mainRef.current?.removeEventListener('wheel', handleWheel);
  }, [pageIndex, handleWheel]);

  return (
    <main ref={mainRef} className={styles.main}>
      {/* 인사/타이틀/타이핑 효과 섹션 */}
      <section className={styles.welcome}>
        <p className={styles.hello}>{t("home.hello")}</p>
        <div className={styles.setrow}>
          <span className={styles["sub-left"]}>{t("home.iAm")}</span>
          <h1 className={styles.title} aria-live="polite">
            {text || "\u00A0"}
            <span className={styles.cursor}>|</span>
          </h1>
          <span className={styles["sub-right"]}>{t("home.am")}</span>
        </div>
        <div className={styles.icons}>
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

      {/* SCROLL 안내 */}
      {showScroll && (
        <div className={styles.scroll} onClick={handleClick}>
          <span>SCROLL</span>
          <span className={styles.arrow}></span>
        </div>
      )}

      {/* 자기소개/메시지 입력 */}
      <section ref={nextSectionRef} className={styles.introduce}>
        <div className={styles["intro-left"]}>
          <img src="/sample.png" alt="Sample" className={styles["intro-image"]} />
        </div>
        <div className={styles["intro-right"]}>
          <span className={styles["intro-header"]}>INTRODUCE</span>
          <div className={styles["intro-text"]}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <p key={i}>
                <Trans
                  i18nKey={`home.intro_${i}`}
                  components={{ h: <span style={{ color: '#fff', fontWeight: '200' }} /> }}
                />
              </p>
            ))}
            <div
              className={[
                styles.message,
                isSent && styles.sent,
                isFilling && styles["fill-active"]
              ].filter(Boolean).join(' ')}
            >
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
                    className={styles["send-btn"]}
                    onClick={handleSend}
                    disabled={isFilling}
                  >
                    <img src="/send.png" alt="Send" width="24" height="24" />
                  </button>
                </>
              ) : (
                <div className={styles["sent-content"]}>
                  <img src="/send.png" alt="Sent" className={styles["sent-icon"]} width="24" height="24" />
                  <span className={styles["sent-text"]}>{t("home.complect")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 스킬/경험 섹션 */}
      <section className={styles["exper-skills"]}>
        <div className={styles["skills-container"]}>
          <div>
            <span className={styles.exper}>{t("home.experience")}</span>
            <p className={styles.skills}>SKILLS</p>
          </div>
          <div className={styles["skill-langs"]}>
            <div className={styles["computer-lang"]}>
              {skills.map((skill) => (
                <SkillCard
                  key={skill.title}
                  img={skill.img}
                  title={skill.title}
                  desc={skill.descKey ? t(skill.descKey) : null}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
