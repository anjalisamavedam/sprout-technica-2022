import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'
import JobCard from './JobCard'

const Internship = memo(() => {
  return (
    <div>
      <JobCard position="Software Engineering Intern" company="Capital One" description="ifhioefhoeifneiofowh"/>
      <JobCard position="Product Management Intern" company="Bank of America" description="feihwfoiwehfoiwehfowiho"/>
      <JobCard position="Software Development Intern" company="Appian" description="foihgiohwegiwhi"/>

    </div>
  )
})
