import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Lawrence Tang</a>
      <ul className='permalinks'>
        <li><a href="#"Home></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience & Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/tanglaw678"><AiFillGithub/></a>
        <a href="https://www.instagram.com/tanglaw678/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/lawrence-raymond-tang/"><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Lawrence Tang. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default footer