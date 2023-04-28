import React, { useState, useEffect } from 'react'
import { Container, Typography } from "@mui/material";
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
import { Link } from 'react-router-dom';
import "./Courses.css"

const Courses = () => {

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
    <div>
      <Container >
      <div className="Currentbox">
        <Typography className="heading" variant="h2">Courses</Typography>
        <Typography className="subheading" variant="h5">
        ICTAK has been pioneering its training model over the years both for Online and Offline training. With over 25K students & 10K teachers and a similar number of executives being trained by us, we have created a unique hybrid model called Positive Engagement in Real-Time Learning (PERL) model that has produced over 4.5 positive feedback ratings for the training that were conducted by ICT Academy of Kerala amongst its learners.
        </Typography>
        <br/>

        <div className="mainbox">
         {courses.map((course)=> {
            return(
            
            <Link to="/courses/details" state={{course}} ><div id={course.open === "true" ? "open" : "close"} className="minibox">
              
            <img src={health} className="imagecontainer" alt="tech image"/>
              <Typography className="content">{course.title}</Typography>
               
            </div></Link>)
         
         })  }
           
           

        </div>
      </div>
      </Container>
    </div>
  )
}

export default Courses
