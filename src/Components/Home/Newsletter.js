import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Newsletter = () => {
    const [input,setInput]=useState('');
    
  return (
    
    <div className='Subscribe'>

        <Card sx={{ minWidth: 375 }}  style={{backgroundColor:"lightblue", display:"inline-block"}}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Let's keep in touch
                </Typography>
                <Typography variant="h6" component="div">
                    Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!
                </Typography>
                <TextField id="outlined-basic" label="Email" variant="outlined"  onChange={event =>setInput(event.target.value)}/>
                <Button disabled={!input} variant="contained" color='warning'  type='submit' style={{width:'150px', height:'50px'}}> 
                    Subscribe
                </Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default Newsletter


