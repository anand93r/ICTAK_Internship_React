import { Container, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
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
import {db} from '../../firebase-config'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import { Link } from "react-router-dom";





const CurrentCourses = () => {

const [courses,setCourses] = useState([]);


const coursesCollectionRef = collection(db,"courses")


useEffect(() => {  
  
  getCourses();
  
     console.log("courses",courses);
   }, [])


   const getCourses = async () => {                   // view api
     const data = await getDocs(coursesCollectionRef);
       //we put the ref and pull the correct collection
       
     setCourses(data.docs.map((doc)=>({...doc.data(), id: doc.id})))  //sending data to store in courses???
     };

 


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
          {courses.map((course)=>{
          
            return( <Link to="/courses/details" state={{course}}><div className="minibox" id={course.open === "true" ? "show" : "hide"}>
              
            <img src={course.image} className="imagecontainer" alt="tech image"/>
              <Typography className="content">{course.title}</Typography>
               
            </div></Link>)
            
          })}
           
            
           

        </div>
      </div>
      </Container>
    
  );
};

export default CurrentCourses;
