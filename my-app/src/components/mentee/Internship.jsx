import React, { useEffect, useState, memo } from 'react';
import SearchBar from './SearchBar'
import JobCard from './JobCard'
import './Internship.css'

const Internship = memo(() => {
  return (
    <div className='internships'>
      <h1>Internships</h1>
      
      <SearchBar/>

      <JobCard position="Software Engineering Intern" company="Capital One" description="ifhioefhoeifneiofowh"/>
      <JobCard position="Product Management Intern" company="Bank of America" description="feihwfoiwehfoiwehfowiho"/>
      <JobCard position="Software Development Intern" company="Appian" description="foihgiohwegiwhi"/>

    </div>
  )
})

export default Internship;
