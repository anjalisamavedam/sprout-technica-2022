import { PieChart } from 'react-minimal-pie-chart'
import './JobCard.css'

const JobCard = (props) => {
  return (
    <div className='jobcard'>
      <p><strong>Position:</strong> {props.position}, <strong>Company:</strong> {props.company}</p>
      <p><strong>Position description:</strong> {props.description}</p>
      <PieChart className='pie-chart'
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
      />



    </div>
  )
}

export default JobCard