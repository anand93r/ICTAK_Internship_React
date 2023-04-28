import React, { useState ,useContext} from 'react'
import './Signup.css'
import { Avatar, Button, TextField } from '@mui/material'
import cropped from './Images/cropped-ict-ico.png'
import{ FirebaseContext } from '../Store/FirebaseContext'
import {useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();
const[username,setUsername] = useState('');
const[password,setPassword] = useState('');
const[email,setEmail] = useState('');
const[phonenumber,setPhonenumber] = useState('');
const {firebase} = useContext(FirebaseContext)
const handleSubmit = (e)=>{
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('admin').add({
        id:result.user.uid,
        username:username,
        phone:phonenumber
      }).then(()=>{
        navigate("/login")
      })
    })


  })
    // console.log(firebase)

}

  return (
    <div className='sign'>
      <div className='box'>
        <div className='ava'>
        <Avatar alt="Cindy Baker"  src={cropped}   sx={{ width: 80, height: 80 }} variant="square" />

        </div>
        <br></br>
        <br/>
        <form>
            <label htmlFor='fname' className='name'>Username</label>
            <br/>
            <input
            className='input'
            type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id='fname'
            name='name'
            >
            </input>
            <br/><br/>
            <label htmlFor='fname' className='name'>Email</label>
            <br/>
            <input
            className='input'
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id='femail'
            name='email'
            >
</input>


            
            <br/><br/>
            <label htmlFor='password' className='name'>PhoneNumber</label>
            <br/>
            <input
            className='input'
            type='number'
            value={phonenumber}
            onChange={(e)=>setPhonenumber(e.target.value)}>
            </input>
            <br></br><br/>

            
             <label htmlFor='password' className='name'>Password</label>
            <br/>
            <input
            className='input'
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}>
            </input> 
            <br></br>
            <br/><br/>
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </form>
      </div>
      <br/><br/>
    </div>
  )
}

export default SignUp
