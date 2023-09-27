import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'> 
        <h5>-1-</h5>
        <h2>About Me</h2>

        <div className = "container about_container">
          <div className = "about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
         </div>

       

        <div className = "about_content">
          <div className="className about_cards">
            <article className="about_card">
              <FiUsers className='about_icon'/>
                <h5>Users Impacted</h5>
                <small>500+</small>
            </article>

            <article className="about_card">
            <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>

            <article className="about_card">
            <BsFillAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>
          <p>
          Hello! My name is Lawrence and I am currently in my final year at the University of British Columbia studying Business Technology Management. 
          I'm super passionate about creating meaning for others, whether it be through poetry, user experiences, or products. </p>
          <h4>Feel free to reach out:</h4>

          <a href='#contact' className='btn btn-primary'>Send a Message</a>

        </div>

              
      </div>

    </section>
  )
    
}

export default About


