import React from 'react'
import { BsFillSuitHeartFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__p'>Develop with <i className='footer__i'><BsFillSuitHeartFill/></i> by <a className='footer__a' href="/">@micawurfel</a></p>
    </footer>
  )
}
