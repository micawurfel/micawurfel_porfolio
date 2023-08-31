import React from 'react'

export default function Navbar() {
  return (
    <nav className='nav'>
        <ul className='nav__ul'>
            <li className='nav__li'><a className='nav__a' href="/">Inicio</a></li>
            <li className='nav__li'><a className='nav__a' href="#about-me">About Me</a></li>
            <li className='nav__li'><a className='nav__a' href="#projects">Projects</a></li>
            <li className='nav__li'><a className='nav__a' href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}