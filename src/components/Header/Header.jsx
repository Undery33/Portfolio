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
                <img src='/logo.webp' alt="It's Me!" width='124' height='28' />
            </picture> 
        </NavLink>
        <div className='menu'>
            <NavLink to="/about">{t("About")}</NavLink>
            <NavLink to="/skills">{t("Skills")}</NavLink>
            <NavLink to="/portfolio">{t("Portfolio")}</NavLink>
        </div>
        한국어 English 日本語
      </nav>
    </header>
  );
}
