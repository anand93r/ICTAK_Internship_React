import { Button, Typography } from '@mui/material'
import React from 'react'

// import cropped from './Images/cropped-ict-ico.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='Navbar_contant'>
      <div className='logo'>
      <img src='https://ictkerala.org/assets/images/LOGO_ICTAK-Name.svg' className='logo'></img>
        {/* <img src={cropped} alt=''/> */}
        
        
      </div>
      <Link to='/about' className='about'>About</Link>
      <Link to='/courses'> <Button variant="contained" id='button'>Courses</Button></Link>
      
     
    </div>
  )
}

export default NavBar
