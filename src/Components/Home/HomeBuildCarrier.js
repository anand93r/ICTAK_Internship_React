import { Button, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const HomeBuildCarrier = () => {
    return (
        <div>
            <div class="Home-Builder-Carrier">
                <div class="Home-Builder-Carrier-container">
                    <div class='row'>
                        <div class='col-md-6' >
                            <div class="Home-builder-carrier-content">
                                <h2 class="Home-builder-carrier-title">Build your Career with ICTAK</h2>
                                <div class="Home-builder-carrier-text">
                                    <p>
                                        ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.
                                    </p>
                                </div>
                            </div>
                            <div class="Home-builder-button">
                                <Button variant="contained" id='Home-builder-carrier-button'>Know more</Button>
                            </div>
                        </div>
                        <div class='col-md-6' >
                            <div class="Home-builder-carrier-image">
                                <img src='	https://ictkerala.org/assets/images/GRA_Home-Header-Overlay.png' className='Homebuildercarrier-img'></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeBuildCarrier
