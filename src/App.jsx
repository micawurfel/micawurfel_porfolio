import React, { useContext}from 'react'
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const {theme} = useContext(ThemeContext) 

  return (
    <div id={theme}>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
