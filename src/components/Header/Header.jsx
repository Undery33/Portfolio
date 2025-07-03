import { NavLink } from 'react-router-dom';
import "./Header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <nav className='nav-container'>
        <NavLink to="/" className='undery'>
          <picture>
            <source srcSet='/logo.webp' type='image/webp' />
            <img src='/logo.webp' alt="It's Me!" width='32' height='32' />
          </picture>
        </NavLink>
        <div className='all-menu'>
          <div className='menu'>
            <NavLink to="/">{t("Home")}</NavLink>
            <NavLink to="/about">{t("About")}</NavLink>
            <NavLink to="/skills">{t("Skills")}</NavLink>
            <NavLink to="/portfolio">{t("Portfolio")}</NavLink>
          </div>
          <div className='lang'>
            한국어 English 日本語
          </div>
          <div className='contact'>
            <button type='button'>CONTACT ME!</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
