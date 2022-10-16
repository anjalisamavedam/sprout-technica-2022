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
      <h1 className='header'>Mentor</h1>

      <div className='finlit'>

        <h1>Why is mentorship in tech so important?</h1>
        <br/>

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
            <h3>Is mentoring worth my time?</h3>
            <p>Tech work is broad and varied. You might find individual contributor roles bring less joy as your career progresses, so you take a foray into management — only to work back toward individual contributors after learning that leading people isn’t your cup of tea.</p>
          </div>

          <div className='carousel-card'>
            <h3>What if I'm tired of working?</h3>
            <p>No matter your industry, it’s common to face burnout. The tech industry, however, typically comprises a wide range of company sizes, but is known for its industry-disrupting startups. There will always be companies out there with a pace that will fit your current season of life. </p>
          </div>
                    
          <div className='carousel-card'>
            <h3>Can I provide value in fast-paced industry?</h3>
            <p>Mentors, more than anyone else, are individuals who have faced the ebbs and flows of the economy and changing demands of their industry. They can help mentees continuously learn and keep skills relevant, and normalize the fact that it's impossible to know everything all the time. </p>
          </div>

        </Carousel>

      </div>

      <br/>
      <br/>
      <br/>

      <div className='jobs'>
        <h1>Part-Time Roles</h1>

        <SearchBar />

        <JobCard 
          position="Technical Support Specialist" 
          company="AARP" 
          description="Help-desk technicians often work for support service firms that contract with clients that don't have the financial resources to afford their own IT departments. Lower-level tech support jobs can be found in call centers." 
          maj={45} min={55} cat="45% of AARP employees work part time."
        />
        
        <JobCard 
          position="Web Search Evaluator" 
          company="Zoom" 
          description="A web search evaluator is a professional who analyzes search engine results to ensure accuracy and relevance. Web search evaluators make informed decisions to rate websites, webpages, videos, images, maps and other search results according to a KPI (key performance indicator) scale." 
          maj={33} min={67} cat="33% of Zoom employees work part time."
        />
        
        <JobCard 
          position="Digital Marketing Specialist" 
          company="Hewlett-Packard" 
          description="Digital marketing specialists plan digital marketing campaigns across multiple channels, create and publish written and visual content to support marketing initiatives, optimize their marketing funnels to improve performance, and communicate their results to company leaders." 
          maj={22} min={78} cat="22% of Hewlett-Packard employees work part time."
        />
        
        <JobCard 
          position="Technical Writer" 
          company="Oracle" 
          description="Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily" 
          maj={14} min={86} cat="14% of Oracle employees work part time."
        />
        
        <JobCard 
          position="Senior Software Engineer - AWS" 
          company="Amazon" 
          description="Amazon is seeking a Senior Software Engineer to join our engineering team. As a Senior Software Engineer at AWS, you’ll drive the development of the systems behind Amazon's products, create web applications that reach billions of people, and build high volume servers." 
          maj={43} min={57} cat="43% of Amazon employees work part time."
        />
        
        <JobCard 
          position=".Net Developer" 
          company="Twitter" 
          description="NET developers” are best defined more generally as a type of web programmer with a strong understanding of the . NET framework who is responsible for creating a variety of online software, applications, development and interfaces." 
          maj={64} min={36} cat="64% of Twitter employees work part time."
        />
        
        <JobCard 
          position="Architect Senior - Enterprise Architect" 
          company="IBM" 
          description="Senior enterprise architects are responsible for the overall design of an organization's technology systems. They work with a variety of different departments to determine how best to implement new technologies and improve existing ones." 
          maj={32} min={68} cat="32% of IBM employees work part time."
        />
        
        <JobCard 
          position="Senior Network Engineer" 
          company="Meta" 
          description="Senior Network Engineers design and create computer networks within an organization in order to ensure their IT systems are working both safely and correctly. Depending on the nature of the business, they may also be required to do the same for third-party clients." 
          maj={34} min={66} cat="34% of Meta employees work part time."
        />
        
        <JobCard 
          position="Program Manager" 
          company="Cisco" 
          description="Image result for Program Manager Program managers take the long view of a company initiative, planning how to implement an overarching vision. Project managers, by contrast, take the short view, focusing on carrying out specific activities that drive a program forward." 
          maj={12} min={88} cat="12% of Cisco employees work part time."
        />
        
        <JobCard 
          position="Senior Developer, Data Integration" 
          company="Intel" 
          description="An Integration Developer is responsible for the complete life cycle of information systems, from requirements and analysis to design and development. They do so by studying data sources and data models and then planning solutions before delivering integrations." 
          maj={23} min={77} cat="23% of Intel employees work part time."
       />

      </div>

    </div>
  )
})

Mentor.propTypes = {}

export default Mentor
