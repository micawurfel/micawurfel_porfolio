import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function DarkMode() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className='div--theme'>
      {theme === 'light'
        ?
        <button className='div__button' onClick={toggleTheme}><BsMoonFill /></button>
        :
        <button className='div__button' onClick={toggleTheme}><BsSunFill /></button>
      }
    </div>
  )
}
