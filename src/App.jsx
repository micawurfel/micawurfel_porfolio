import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
