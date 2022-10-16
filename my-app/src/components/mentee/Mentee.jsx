import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchBar from './SearchBar'
import JobCard from './JobCard'
import './Internship.css'

import './Mentee.css'

const Mentee = memo((props) => {
  return (
    <div className='mentee'>
      <h1>Mentee</h1>

      <div className='internships'>
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