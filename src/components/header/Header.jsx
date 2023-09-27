import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Subject 2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Lawrence Tang,</h1>
            <h5 className="text-light"> A Product Manager</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
                <img src={ME} alt="me" />
            </div>

        </div>
    </header>
  )
}

export default Header