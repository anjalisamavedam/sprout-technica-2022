import React, { memo } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import './JobCard.css'

const JobCard = memo(() => {
  return (
    <div className='jobcard'>
      <h2>Position, Company</h2>
      <p>Position description</p>
      <PieChart className='pie-chart'
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
      />



    </div>
  )
})

export default JobCard