import { Container, Typography } from "@mui/material";
import React from "react";
import techimg from "../Images/techimage.webp"
import "./CurrentCourses.css"
import health from '../Images/health.jpg'
import PowerBI from "../Images/bi.png"
import Ethical from "../Images/Ethical.png"
import python from "../Images/python.png"
import Rprogram from "../Images/R.png"
import Reactcourse from "../Images/react.png"
import Seocourse from "../Images/seo.png"
import Robotic from "../Images/robotic.png"





const CurrentCourses = () => {
  return (
   <Container >
      <div className="Currentbox">
        <Typography className="heading" variant="h4">Current Offerings</Typography>
        <Typography className="subheading" variant="h5">
          ICT Academy of Kerala provides the best quality education to upskill
          the youths across the state in various sectors. Join our courses and
          build your future!
        </Typography>
        <br/>

        <div className="mainbox">
            <div className="minibox">
              
            <img src={health} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Certificate Course in Health Information Technology</Typography>
               
            </div>
            <div className="minibox">
            <img src={python} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Python Programming</Typography>  
            </div>
            <div className="minibox">
            <img src={Seocourse} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Social Media Marketing and SEO</Typography>  
            </div>
            <div className="minibox">
            <img src={Reactcourse} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Front-end Application Development with React</Typography>  
            </div>
            <div className="minibox">
            <img src={Robotic} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Robotic Process Automation with UiPath</Typography>  
            </div>
            <div className="minibox">
            <img src={Ethical} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Ethical Hacking</Typography>  
            </div>
            <div className="minibox">
            <img src={PowerBI} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Business Intelligence with Power BI</Typography>  
            </div>
            <div className="minibox">
            <img src={Rprogram} className="imagecontainer" alt="tech image"/>
              <Typography className="content">Data Analytics With R</Typography>  
            </div>
           

        </div>
      </div>
      </Container>
    
  );
};

export default CurrentCourses;
