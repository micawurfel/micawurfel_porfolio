import React from 'react'
import Imagen from '../assets/img.jpg'
import SocialMedia from './SocialMedia'
import Skills from './Skills'
import { useTranslation } from 'react-i18next'

export default function AboutMe() {
  const { t } = useTranslation("global"); 

  return (
    <section id='about-me' className='section'>
        <h2 className='section__h2'>{t("About")}</h2>
        <div className='section__div section__div--about'>
          <img src={Imagen} alt="" className='section__img' />
          <article className='section__article'>
            <p   className='section__p'>{t("about.p1")}</p>
            <p  className='section__p'>{t("about.p2")}</p>
            <p className='section__p'>{t("about.p3")}</p>
            <p className='section__p'>{t("about.p4")}<Skills/></p>
            <SocialMedia git='micawurfel' linkedin='micawurfel' email='hello@micawurfel.com'/>
          </article>
        </div>
    </section>
  )
}
