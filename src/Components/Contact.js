import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Home/Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (
    <div>
        <div class="Home-Builder-Carrier">
            <div class="Home-Builder-Carrier-container">
                <div class='row'>
                    <div class='col-md-6' >
                        <div class="Home-builder-carrier-content">
                        <h2 class="Home-builder-carrier-title">Get In Touch</h2>
                                
                        </div>
                            
                    </div>
                    <div class='col-md-1' >
                        <div class="Home-builder-carrier-image">
                            <img src='	https://ictkerala.org/assets/images/GRA_Home-Header-Overlay.png' className='Homebuildercarrier-img'></img>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>

        
        <div className="modal-body row">
            <div class="col-md-6">
              <div class="card text-white bg-info mb-3" style={{width:'28rem'}}>
                <div class="card-header">
                  <h1>Contact Us</h1>
                  <h3 class="card-title">Visit us or call</h3>
                </div>
                

                <div class="card-body">
                  <h4 class="card-title">GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581</h4>
                  <p class="card-text">+91 9999999999, +91 9999999999</p>
                  <p class="card-text">info@ictacademy.com</p>
                  <p class="card-text">Monday to Friday 10am - 6pm</p>
                </div>
            </div>
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Send a Message</h2>
              <form onSubmit={onSubmit}>
                <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '65ch' },}} noValidate autoComplete="off">
                  <div className="mb-3">
                    <TextField
                      id="outlined-required"
                      label="Your Name"
                      defaultValue=""
                    />
                  </div>
                  <div className="mb-3">
                    <TextField
                      id="outlined-required"
                      label="Email Address"
                      defaultValue=""
                    />
                  </div>
                  <div className="mb-3">
                  <TextField
                      id="standard-required"
                      label="Phone"
                      defaultValue=""
                    />
                  </div>
                  <div className="mb-3">
                  <TextField
                      id="standard-required"
                      label="Subject"
                      defaultValue=""
                    />
                  </div>
                  <div className="mb-3">
                  <TextField
                  id="fullWidth"
                      // id="standard-read-only-input"
                      label="Message"
                      defaultValue=""
                    />
                  </div>
                  <Button variant="contained" style={{maxWidth: '200px', maxHeight: '60px', minWidth: '100px', minHeight: '40px'}}>Send Message</Button>
              </Box>
              <br></br>
              </form>
            </div>

    
        </div>


    
    </div>
  )
}

export default Contact
