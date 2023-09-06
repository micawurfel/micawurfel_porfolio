import React,{useState, useRef } from 'react'
import SocialMedia from '../SocialMedia'
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation("global"); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleChange(e){
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const form = useRef();

  function handleSubmit(e){
    e.preventDefault();

    emailjs.sendForm('service_3sgmnsv', 'template_r4dzbuf', form.current, 'V4HFgaymYsPlonSJy')
      .then((result) => {
        setFormData ({name: '', email: '', message: ''})
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <section id='contact' className='section section--contact'>
        <h2 className='section__h2'>{t("Contact")}</h2>
        <form ref={form} onSubmit={handleSubmit} className='section__form'>

          <input 
            type="text" 
            name="name" 
            onChange={handleChange}
            value={formData.name}
            required
            placeholder={t("contact.name")}
            className='section__input' />

          <input 
            type="email" 
            name="email"  
            onChange={handleChange}
            value={formData.email}
            required
            placeholder={t("contact.email")} 
            className='section__input'/>

          <textarea 
            name="message"
            cols="30" rows="10" 
            onChange={handleChange}
            value={formData.message}
            required
            className='section__input'></textarea>

          <button 
            type='submit' 
            className='section__button'>
              {t("contact.button")}
          </button>

        </form>
        <SocialMedia git='micawurfel' linkedin='micawurfel' email='hello@micawurfel.com'/>
    </section>
  )
}
