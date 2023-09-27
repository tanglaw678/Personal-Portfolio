import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/lawrence-raymond-tang/" target="_blank"> <BsLinkedin/></a>
        <a href="https://www.instagram.com/tanglaw678/" target = "_blank"> <BsInstagram/></a>
        <a href="https://github.com/tanglaw678" target="_blank"> <AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials