import React, { useRef } from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {SiZalo} from "react-icons/si"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_60wkdhu', 'template_bonkagb', form.current, 'UahhuEYvGEiPavxkh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>huydinhse@gmail.com</h5>
            <a href='mailto:huydinhse@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Huy Dinh</h5>
            <a href='https://m.me/h4.huy' target="_blank">Go to message</a>
          </article>
          <article className='contact_option'>
            <SiZalo className='contact_option-icon'/>
            <h4>Zalo</h4>
            <h5>0335.293.294</h5>
            <a href='https://zalo.me/0335293294' target="_blank">Go to Zalo</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact