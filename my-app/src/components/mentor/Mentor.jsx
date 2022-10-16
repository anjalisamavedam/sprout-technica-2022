// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchBar from '../mentee/SearchBar'
import JobCard from '../mentee/JobCard'
import './Mentor.css'

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

const Mentor = memo((props) => {
  return (
    <div className='mentor'>

      <div className='finlit'>

        <h1>Why mentorship in tech is important.</h1>

        <Carousel responsive={responsive}>

          <div className='carousel-card'>
            <h3>What is mentoring, exactly?</h3>
            <p>Mentoring boils down to helping, guiding, and inspiring others in your areas of expertise. Have you paired with another developer on part of the code base you know well or shared a design pattern you’ve learned when reviewing a pull request? That’s mentoring.</p>
          </div>

          <div className='carousel-card'>
            <h3>Why does tech need mentorship?</h3>
            <p>You can see that explaining different areas of the tech sector is like speaking to someone in another language, especially for those outside the industry, which is why having a mentor within tech is critical: they’ve likely experienced similar challenges you have.</p>
          </div>

          <div className='carousel-card'>
            <h3>Tech work is broad and varied.</h3>
            <p>You might find individual contributor roles bring less joy as your career progresses, so you take a foray into management — only to work back toward individual contributors after learning that leading people isn’t your cup of tea.</p>
          </div>

          <div className='carousel-card'>
            <h3>Hard topics we must discuss.</h3>
            <p>No matter your industry, it’s common to face burnout. The tech industry, however, typically comprises a wide range of company sizes, but is known for its industry-disrupting startups. </p>
          </div>
                    
          <div className='carousel-card'>
            <h3>The tech industry is fast-paced.</h3>
            <p>Mentors can help ensure mentees are continuously learning over time and keeping skills relevant by sharing tips and valuable resources, and by making sure they understand it’s impossible to know everything. </p>
          </div>

        </Carousel>

      </div>

      <br/>
      <br/>

      <div className='jobs'>
        <h1>Part-Time Roles</h1>

        <SearchBar />

        <JobCard position="Software Engineering Intern" company="Capital One" description="ifhioefhoeifneiofowh" />
        <JobCard position="Product Management Intern" company="Bank of America" description="feihwfoiwehfoiwehfowiho" />
        <JobCard position="Software Development Intern" company="Appian" description="foihgiohwegiwhi" />

      </div>

    </div>
  )
})

Mentor.propTypes = {}

export default Mentor
