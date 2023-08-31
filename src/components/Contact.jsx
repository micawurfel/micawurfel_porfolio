import React from 'react'
import SocialMedia from './SocialMedia'

export default function Contact() {
  return (
    <section id='contact' className='section section--contact'>
        <h2 className='section__h2'>Contact</h2>
        <form action="" className='section__form'>
          <input type="text" name="Name" id="" placeholder='Your name' className='section__input' />
          <input type="email" name="" id="" placeholder='Your email' className='section__input'/>
          <textarea name="" id="" cols="30" rows="10" className='section__input'></textarea>
          <button className='section__button'>Get in touch</button>
        </form>
        <SocialMedia git='micawurfel' linkedin='micawurfel' email='hello@micawurfel.com'/>
    </section>
  )
}
