import { BsGithub, BsLinkedin, BsFillEnvelopeAtFill } from "react-icons/bs";

export default function SocialMedia(props) {
  return (
    <div className='div--social-media'>
      <a className='div__a' href="https://github.com/micawurfel" target="_blank"><i className='div__i'><BsGithub /></i>{props.git}</a>
      <a className='div__a' href="https://www.linkedin.com/in/micawurfel/" target="_blank"><i className='div__i'><BsLinkedin /></i>{props.linkedin}</a>
      <a className='div__a' href="mailto:hello@micawurfel.com" target="_blank"><i className='div__i'><BsFillEnvelopeAtFill /></i>{props.email}</a>
    </div>
  )
}
