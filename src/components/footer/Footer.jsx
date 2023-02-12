import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {SiZalo} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>IVAN</a>
      <ui className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ui>

      <div className="footer_socials">
        <a href='https://www.facebook.com/h4.huy' target="_blank" title='Facebook'><FaFacebookF/></a>
        <a href='https://www.linkedin.com/in/huy-dinh-44a48b248/' target="_blank" title='Linkedin'><BsLinkedin/></a>
        <a href='https://zalo.me/0335293294' target="_blank" title='Zalo'><SiZalo title='Zalo'/></a>
      </div>
      
      <div className='footer_copyright'>
        <small>&copy; Ivan Dev - Huy Dinh. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer