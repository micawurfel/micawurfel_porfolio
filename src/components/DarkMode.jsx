import React, { useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { BsMoon, BsSun } from "react-icons/bs";

export default function DarkMode() {
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className='div--theme'>
        { theme === 'light' 
            ?
            <button className='div__button' onClick={toggleTheme}><BsMoon/></button>
            :
            <button className='div__button' onClick={toggleTheme}><BsSun/></button>
        }
        
        
    </div>
  )
}
