import React from 'react'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'
import DarkMode from './DarkMode';

export default function Navbar() {
  const { t } = useTranslation("global"); 

  return (
    <nav className='nav'>
        <ul className='nav__ul'>
            <li className='nav__li'><a className='nav__a' href="/">{t("Home")}</a></li>
            <li className='nav__li'><a className='nav__a' href="#about-me">{t("About")}</a></li>
            <li className='nav__li'><a className='nav__a' href="#projects">{t("Projects")}</a></li>
            <li className='nav__li'><a className='nav__a' href="#contact">{t("Contact")}</a></li>
        </ul>
        <LanguageSelector/>
        <DarkMode/>
    </nav>
  )
}