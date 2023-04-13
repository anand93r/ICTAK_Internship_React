import React from 'react'
import './Home.css'
import {Button, Typography } from '@mui/material'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Home_section3 = () => {
  return (
    <div>
      <body style={{backgroundColor: "lightblue"}} className='body'>
        <div className='row' id='sec3_body'>
      <div  className='col-md-4' >
        
      <Typography variant='h4' id='sec3_head'>
        Six-Month Skilling Programs
      </Typography>
      <Typography variant='h5' className='sec3_conn'>
      Discover Exciting Job Opportunities! Jumpstart your career with the six-month job-oriented programs from the ICT Academy of Kerala. Up to 100% scholarships are offered for qualifying candidates.
      </Typography>
      <span>
      <Button variant='contained' 
      className="my-button"
      id='reg'>Register Now</Button>
      </span>
      </div>
      <div className='col-md-8' id='imgg'>
        
      <img src='https://drive.google.com/uc?id=1NhogJrokORuaB8zXZBNt3Cc0QcAl1AjH' className='img1'></img>
  
      </div>
      </div>
     
      </body>
    </div>
  )
}

export default Home_section3
