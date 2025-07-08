import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // Hydration 에러 방지: 마운트 후에만 언어 표시
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // 언어코드 2자리만 추출
  const langShort = i18n.language?.split('-')[0]?.toUpperCase();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const languages = ["ko", "en", "ja"];

  const handleChangeLang = () => {
    const currentLang = i18n.language;
    const currentIndex = languages.indexOf(currentLang.split('-')[0]);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];

    i18n.changeLanguage(nextLang);
  };

  return (
    <header className={[
      styles.header,
      scrolled && styles["header--visible"]
    ].filter(Boolean).join(' ')}>
      <nav className={styles["nav-container"]}>
        <Link href="/" className={styles.undery}>
          <picture>
            <source srcSet='/logo.png' type='image/png' />
            <img src='/logo.png' alt="It's Me!" width='40' height='40' />
          </picture>
        </Link>
        <div className={styles["all-menu"]}>
          <div className={styles.menu}>
            <Link href="/">{t("HOME")}</Link>
            <Link href="/about">{t("ABOUT")}</Link>
            <Link href="/skills">{t("SKILLS")}</Link>
            <Link href="/portfolio">{t("PORTFOLIO")}</Link>
            <Link href="/contact">{t("CONTACT")}</Link>
          </div>
          <button onClick={handleChangeLang}>
            ({mounted ? langShort : ''})
          </button>
        </div>
      </nav>
    </header>
  );
}
