import React, { useState, useContext } from 'react'
import './Login.css'
import cropped from './Images/cropped-ict-ico.png'
import{ FirebaseContext } from '../Store/FirebaseContext'
import { Avatar, Button, TextField } from '@mui/material'
import {useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const handleLogin = (e)=>{
firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  navigate("/admin/dashboard")
  
}).catch((error)=>{
alert('error.message')
})
  }
  return (
    <div className='log'>
        <div  className='logbox'>
            <div className='img'>
            <Avatar alt="Cindy Baker"  src={cropped}   sx={{ width: 80, height: 80 }} variant="square" />
            </div>
            <br/>
            <div className='loginbody'>
            <TextField id="standard-basic" 
            label="Email Id"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
             variant="standard" />
            <br/>
            <br/>
            <TextField id="standard-basic" 
            label="Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            variant="standard" /><br/>
            <br/><br/>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
            <br/>
            </div>
        </div>
        <br/>
      
    </div>
  )
}

export default Login
