import { Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import Home_section3 from './Home_section3'
import HomeBuildCarrier from './HomeBuildCarrier'
import CurrentCourses from './CurrentCourses'
import Statbox from './Statbox'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div>
       <HomeBuildCarrier></HomeBuildCarrier>
        <Home_section3></Home_section3>
        <Statbox/>
        <CurrentCourses/>
        <Newsletter/>
        
      
    </div>
  )
}

export default Home
