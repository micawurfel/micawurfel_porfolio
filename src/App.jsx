import React, { useContext, useEffect}from 'react'
import ReactGA from 'react-ga';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Menu/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/Home/AboutMe';
import Projects from './components/Home/Projects';
import Contact from './components/Home/Contact';
import Footer from './components/Footer';

function App() {
  const {theme} = useContext(ThemeContext) 

  const TRACKING_ID = 'G-0EQZBJY4TR'
  ReactGA.initialize(TRACKING_ID)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
