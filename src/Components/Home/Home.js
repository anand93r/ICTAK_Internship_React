import { Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import Home_section3 from './Home_section3'
import HomeBuildCarrier from './HomeBuildCarrier'
import Statbox from './Statbox'
import CurrentCourses from './CurrentCourses'

const Home = () => {
  return (
    <div>
       <HomeBuildCarrier></HomeBuildCarrier>
        <Home_section3></Home_section3>
        <Statbox/>
        <CurrentCourses/>
      
    </div>
  )
}

export default Home
