import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Ambreen Akhtar</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/anabiya.10236' target='_blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/ambreen_niazi/' target='_blank'><FiInstagram /></a>
        <a href='https://twitter.com/ambreen.' target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ambreen Akhtar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
