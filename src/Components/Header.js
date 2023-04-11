import React from 'react'
import '../App.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div>
    <div className='Header'>
        <div className='social-container'>
            <a href='https://www.linkedin.com/company/ictkerala/'
            className='linkdin social'>
                <FontAwesomeIcon icon={faLinkedinIn} size='1x' />
            </a>
         <a href="https://www.youtube.com/user/ictkerala"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="https://www.facebook.com/ictkerala/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=918078102119&text=Hi&type=phone_number&app_absent=0" className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size='1px' />
       
      </a>
      <a href="https://www.instagram.com/ictkerala/?hl=en"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      </div>
      <Link to='/' className='home'>Home</Link>
        <Link to='/Contact' className='contact'>Contact</Link>


        
    </div>
    <NavBar/>
    
        
    </div>
  )
}

export default Header
