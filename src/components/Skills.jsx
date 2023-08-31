import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJsSquare, FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiGit} from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export default function Skills() {
  return (
    <div className='div--skills'>
        <FaHtml5/>
        <FaCss3Alt/>
        <FaSass/>
        <FaBootstrap/>
        <BsGithub/>
        <FaJsSquare/>
        <FaReact/>
        <SiFirebase/>
        <SiGit/>
    </div>
  )
}
