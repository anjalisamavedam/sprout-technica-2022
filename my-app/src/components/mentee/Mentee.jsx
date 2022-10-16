// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchBar from './SearchBar'
import JobCard from './JobCard'
import './Mentee.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HousingForm from './HousingForm';

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
            <h3>Look at More Than Salary.</h3>
            <p>You want your job to cover the cost of living in your area. But more money doesn't always equal greater job satisfaction. Be sure to consider other factors, such as health and retirement benefits, workplace culture, and potential for career growth.</p>
          </div>

          <div className='carousel-card'>
            <h3>Did you know?</h3>
            <p>ihfeohfowghiwrghiwhrgowhrgoihwrgohworghwuorgouwrgouwgr</p>
          </div>

          <div className='carousel-card'>
            <h3>Make Budgeting a Habit</h3>
            <p>Think of a budget as a spending plan to guide your spending and saving so you can have the things you really want. Don't get sucked into trying to afford a certain lifestyle if it's not possible right now.</p>
          </div>

          <div className='carousel-card'>
            <h3>Build an Emergency Fund</h3>
            <p>Ideally, you want to have three to six months' worth of expenses saved up. But don't let that number intimidate you. Start small while you build your fund, for example, by setting aside $50 per month. An extra $500 or $1,000 will help out a lot when you have surprise expenses.</p>
          </div>
                    
          <div className='carousel-card'>
            <h3>Get Health Insurance Right Away</h3>
            <p>No matter what type of coverage you have, use it when you need to, especially preventative care such as annual appointments, screenings, and vaccines. These are available at no extra cost to you.</p>
          </div>
                    
          <div className='carousel-card'>
            <h3>Start Saving and Investing</h3>
            <p>When you're creating your budget, be sure to incorporate savings into your expenses equation. This means building up your emergency fund, saving up for larger future purchases, and yes, contributing to a retirement account.</p>
          </div>
                    
          <div className='carousel-card'>
            <h3>Learn About Personal Finance</h3>
            <p>Taking time to learn about personal finance won't just help you become financially independent. It will help you stay that way by allowing you to avoid costly mistakes. It will also help you build wealth so you can live more comfortably and retire when you want.</p>
          </div>
                    
        </Carousel>

      </div>

      <br/>
      <br/>

      <div>
        <HousingForm />
      </div>

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
