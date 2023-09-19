import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const [t, i18n] = useTranslation("global")

  const lng = i18n.language

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className='div--language'>
      {lng === 'en'
        ?
        <button className='div__button' onClick={() => handleChangeLanguage('es')}>ES</button>
        :
        <button className='div__button' onClick={() => handleChangeLanguage('en')}>EN</button>
      }
    </div>
  )
}
