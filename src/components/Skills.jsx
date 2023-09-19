import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJsSquare, FaReact } from "react-icons/fa"
import { SiFirebase, SiGit } from "react-icons/si"
import { BsGithub } from "react-icons/bs"

export default function Skills() {
  return (
    <div className='div--skills'>
      <i className='div__i'><FaHtml5 /></i>
      <i className='div__i'><FaCss3Alt /></i>
      <i className='div__i'><FaSass /></i>
      <i className='div__i'><FaBootstrap /></i>
      <i className='div__i'><BsGithub /></i>
      <i className='div__i'><FaJsSquare /></i>
      <i className='div__i'><FaReact /></i>
      <i className='div__i'><SiFirebase /></i>
      <i className='div__i'><SiGit /></i>
    </div>
  )
}
