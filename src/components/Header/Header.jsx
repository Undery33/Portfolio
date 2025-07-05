import { NavLink } from 'react-router-dom';
import "./Header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const languages = ["ko", "en", "ja"];

  const handleChangeLang = () => {
    const currentLang = i18n.language;
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];

    i18n.changeLanguage(nextLang);
  };

  return (
    <header>
      <nav className='nav-container'>
        <NavLink to="/" className='undery'>
          <picture>
            <source srcSet='/logo.png' type='image/png' />
            <img src='/logo.png' alt="It's Me!" width='40' height='40' />
          </picture>
        </NavLink>
        <div className='all-menu'>
          <div className='menu'>
            <NavLink to="/">{t("HOME")}</NavLink>
            <NavLink to="/about">{t("ABOUT")}</NavLink>
            <NavLink to="/skills">{t("SKILLS")}</NavLink>
            <NavLink to="/portfolio">{t("PORTFOLIO")}</NavLink>
            <NavLink to="/contact">{t("CONTACT")}</NavLink>
          </div>
          <button onClick={handleChangeLang}>
            ({i18n.language.toUpperCase()})
          </button>
        </div>
      </nav>
    </header>
  );
}
