import React, {useState} from 'react'
import { RiMenuFill } from "react-icons/ri";
import NavbarNavegation from './NavbarNavegation'

export default function NavbarCollapse() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active)
    }

    const closeMenu = () => {
        setActive(false)
    }

  return (
    <div className={ `nav ${ active ? 'nav--active' : '' }`}>
        <button className='nav__button' onClick={toggleMenu}>
            <i className='nav__i'><RiMenuFill/></i>
        </button>
        <div className={ `nav__div ${ active ? 'nav__div--active' : '' }`}>
            <NavbarNavegation closeMenu={closeMenu}/>
        </div>
    </div>
  )
}
