import React, { useEffect, useState } from 'react'
import {collection, addDoc, updateDoc,doc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebase-config'
import {Button} from "@mui/material"
import { Link } from 'react-router-dom'


const AddEdit = () => {

    const coursesCollectionRef = collection(db,"courses") // to specify the file 
   const [newCourse, setNewCourse] = useState([]);

   const createCourse = async () => {   //create api
    await addDoc(coursesCollectionRef,...newCourse );
  
    };

    const addCourse = (event) => {
    event.preventDefault()
    console.log(event);
    const data = new FormData(event.target);
    console.log("data",data);
    const course = Object.fromEntries(data.entries())
    setNewCourse([course])

    }
  

    useEffect(() => {
      if (newCourse !=[]) {
        createCourse();
        console.log("new",newCourse);
      }
   
    },[newCourse])
    

  return (
    <div >
        <Link to="/admin/dashboard" ><Button  >Back</Button></Link>
     <h1>Add Courses</h1>
     
     <form onSubmit={(event)=> {addCourse(event)}}>
     
     <input name='title' type='text' placeholder='title' style={{width: "500px"}} />
     <input name='regStart' type='text' placeholder='Registration Start'/>
     <input name='regEnd' type='text' placeholder='Registration End'/>
     <input name='cDuration' type='text' placeholder='Course Duration'/>
     <input name='cFee' type='text' placeholder='Course fee'/>
     <input name='overview' type='text' placeholder='Overview'/>
     <button type='submit'>Submit</button>
     
     </form>
    </div>
  )
}

export default AddEdit
