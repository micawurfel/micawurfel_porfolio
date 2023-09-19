import { useEffect, useState } from 'react'
import NavbarNavegation from './NavbarNavegation'
import NavbarCollapse from './NavbarCollapse'

export default function Navbar() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
  }, [width])

  return (
    <nav className='nav'>
      {width > 768
        ?
        <NavbarNavegation />
        :
        <NavbarCollapse />
      }
    </nav>
  )
}