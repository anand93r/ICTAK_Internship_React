import React from 'react'
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { Link } from 'react-router-dom';
import cropped from './Images/cropped-ict-ico.png'
import { Button, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Footer = () => {
  return (
    <>
    <Card sx={{ minWidth: 375 }} className='Subscribe'>
      <CardContent>
        <Typography variant='h5' gutterBottom>
        Let's keep in touch
        </Typography>
        <Typography variant="h6" component="div">
        Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!
        </Typography>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
    <Button variant="contained" href="#contained-buttons">
    Subscribe
    </Button>
      </CardContent>
      
    </Card>
    
    <div className='Footer' >
      
      
        
       
       <img src={cropped} alt='' />
       
       

     <br></br>
        
        
    <EditLocationIcon/>
    <Link to ="https://www.google.com/maps/place/ICT+Academy+of+Kerala/@8.5565655,76.8819826,15z/data=!4m6!3m5!1s0x3b05befa954e2bb7:0x5a237b1a5fa40a39!8m2!3d8.5565655!4d76.8819826!16s%2Fg%2F11cn32lvq4" style={{ textDecoration: 'none' }} >GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581</Link>
    <br></br>
    <Link to ="https://ictkerala.org/" style={{ textDecoration: 'none' }}>ICT Academy of Kerala</Link> is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.
    <br></br>
    Copyright © 2022 ICT Academy of Kerala.  All rights reserved.

    </div>
    </>
  )
}

export default Footer
