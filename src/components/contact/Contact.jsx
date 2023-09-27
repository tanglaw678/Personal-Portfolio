import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_osmf7i4', 'template_g9rcd5q', form.current, 'FxAwer4pgwpBxc0Gn')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  e.target.reset();  
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        {/* End of Contact Options*/}
        <article className='msg_form'>
          <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Full Name' required/>
              <input type='email' name ='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </article>

      </div>
    </section>
  )
}

export default Contact