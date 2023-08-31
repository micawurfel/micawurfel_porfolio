import React from 'react'
import Imagen from '../assets/img.jpg'
import SocialMedia from './SocialMedia'
import Skills from './Skills'

export default function AboutMe() {
  return (
    <section id='about-me' className='section'>
        <h2 className='section__h2'>About Me</h2>
        <div className='section__div section__div--about'>
          <img src={Imagen} alt="" className='section__img' />
          <article className='section__article'>
            <p   className='section__p'>Hi there, I am Mica Wurfel. I am from Argentina. I always was a curious person interested in many topics. I like to describe myself as a self-taught person. I went to the college where I got a Degree in Tourism. In the mindtime, I start to make websites with no-code with Wordpress for hobby, and also digital marketing. In consequence I ran into the IT world, where I found something I am really passionate for.</p>
            <p  className='section__p'> Currently I work as a frontend developer, finding new challenges and solutions. I believe that the best work comes from collaborating with passionate people, always trying to create the best experience for our users while considering business goals.</p>
            <p className='section__p'>I like to stay updated and learn about new technologies, so I'm studying MERN Stack to be a backend developer as well.</p>
            <p className='section__p'>My skills: <Skills/></p>
            <SocialMedia git='micawurfel' linkedin='micawurfel' email='hello@micawurfel.com'/>
          </article>
        </div>
    </section>
  )
}
