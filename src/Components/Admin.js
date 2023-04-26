import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {db} from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore'








const Admin = () => {

    const [courses,setCourses] = useState([]);             
    const coursesCollectionRef = collection(db,"courses")

    useEffect(() => {  
  
        const getCourses = async () => {                   // view api
        const data = await getDocs(coursesCollectionRef);
          //we put the ref and pull the correct collection
          
        setCourses(data.docs.map((doc)=>({...doc.data(), id: doc.id})))  //sending data to store in users???
        };
    
        getCourses();
      }, [courses])
      

 







  return (
    <div>
      <h1 className='heading' >Admin Dashboard</h1>
      <Link to="/admin/dashboard/addedit" ><Button  >Add Courses</Button></Link>
      
      <TableContainer  >
        <Table>
    
            <TableHead>
                
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Registration start</TableCell>
                    <TableCell>Registration end</TableCell>
                    <TableCell>Course duration</TableCell>
                    <TableCell>Course Fee</TableCell>
                    <TableCell>Overview</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { courses.map((course) => {
                   return  ( 
                   <TableRow>
                   <TableCell>{course.title}</TableCell>
                   <TableCell>{course.image}</TableCell>
                   <TableCell>{course.regStart}</TableCell>
                   <TableCell>{course.regEnd}</TableCell>
                   <TableCell>{course.cDuration}</TableCell>
                   <TableCell>{course.cFee}</TableCell>
                   <TableCell>{course.overview}</TableCell>
                   <TableCell><Button>Edit</Button></TableCell>
                   <TableCell><Button>Delete</Button></TableCell>
               </TableRow> )
                }) }
            </TableBody>
        </Table>
      </TableContainer>
       

      
    </div>
  )

}

export default Admin
