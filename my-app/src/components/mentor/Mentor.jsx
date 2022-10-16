import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchBar from '../mentee/SearchBar'
import JobCard from '../mentee/JobCard'
import '../mentee/Jobs.css'

import './Mentor.css'

const Mentor = memo((props) => {
  return (
    <div className='mentor'>
      <h1>Mentor</h1>

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