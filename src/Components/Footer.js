import React from 'react'
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { Link } from 'react-router-dom';
import cropped from './Images/cropped-ict-ico.png'


const Footer = () => {
  return (
    <div className='Footer' >
        
       
       <img src={cropped} alt='' />
       
       

     <br></br>
        
        
    <EditLocationIcon/>
    <Link to ="https://www.google.com/maps/place/ICT+Academy+of+Kerala/@8.5565655,76.8819826,15z/data=!4m6!3m5!1s0x3b05befa954e2bb7:0x5a237b1a5fa40a39!8m2!3d8.5565655!4d76.8819826!16s%2Fg%2F11cn32lvq4" style={{ textDecoration: 'none' }} >GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581</Link>
    <br></br>
    <Link to ="http://google.com" style={{ textDecoration: 'none' }}>ICT Academy of Kerala</Link> is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.
    <br></br>
    Copyright © 2022 ICT Academy of Kerala.  All rights reserved.

    </div>
  )
}

export default Footer
