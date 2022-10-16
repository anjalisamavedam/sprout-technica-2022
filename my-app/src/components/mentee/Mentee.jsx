// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchBar from './SearchBar'
import JobCard from './JobCard'
import './Mentee.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Mentee = memo((props) => {
  return (
    <div className='mentee'>
      <h1>Mentee</h1>

      <div className='finlit'>

        <Carousel responsive={responsive}>

          <div className='carousel-card'>
            <h3>Did you know?</h3>
            <p>ihfeohfowghiwrghiwhrgowhrgoihwrgohworghwuorgouwrgouwgr</p>
          </div>

          <div className='carousel-card'>
            <h3>Did you know?</h3>
            <p>ihfeohfowghiwrghiwhrgowhrgoihwrgohworghwuorgouwrgouwgr</p>
          </div>

          <div className='carousel-card'>
            <h3>Did you know?</h3>
            <p>ihfeohfowghiwrghiwhrgowhrgoihwrgohworghwuorgouwrgouwgr</p>
          </div>

          <div className='carousel-card'>
            <h3>Did you know?</h3>
            <p>ihfeohfowghiwrghiwhrgowhrgoihwrgohworghwuorgouwrgouwgr</p>
          </div>

        </Carousel>

      </div>

      <br/>
      <br/>

      <div className='jobs'>
        <h1>Internships</h1>

        <SearchBar />

        <JobCard position="Software Engineering Intern" company="Capital One" description="ifhioefhoeifneiofowh" />
        <JobCard position="Product Management Intern" company="Bank of America" description="feihwfoiwehfoiwehfowiho" />
        <JobCard position="Software Development Intern" company="Appian" description="foihgiohwegiwhi" />

      </div>




    </div>
  )
})

Mentee.propTypes = {}

export default Mentee