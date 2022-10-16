import { PieChart } from 'react-minimal-pie-chart'
import './JobCard.css'

const JobCard = (props) => {
  
  return (
    <div className='jobcard'>
      <p>{props.position}, {props.company}</p>
      <p>Position description: {props.description}</p>
      <div className='demographics'>

        <PieChart className='piechart'
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
          label={(labelRenderProps: LabelRenderProps) =>
            number | string | React.ReactElement | undefined | null
          }
        />
        <p className='percentage'>48% of employees at {props.company} are women.</p>

      </div>



    </div>
  )
}

export default JobCard