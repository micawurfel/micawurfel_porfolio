import React from 'react'
import LanguageSelector from '../LanguageSelector'
import { useTranslation } from 'react-i18next'
import DarkMode from '../DarkMode';

export default function NavbarNavegation({closeMenu}) {
  const { t } = useTranslation("global"); 

  return (
    <>
        <ul className='nav__ul'>
            <li onClick={closeMenu} className='nav__li'><a className='nav__a' href="/">{t("Home")}</a></li>
            <li onClick={closeMenu} className='nav__li'><a className='nav__a' href="#about-me">{t("About")}</a></li>
            <li onClick={closeMenu} className='nav__li'><a className='nav__a' href="#projects">{t("Projects")}</a></li>
            <li onClick={closeMenu} className='nav__li'><a className='nav__a' href="#contact">{t("Contact")}</a></li>
        </ul>
        <LanguageSelector/>
        <DarkMode/>
    </>
  )
}