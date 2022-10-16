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
            { title: 'One', value: props.maj, color: '#97ac97' },
            { title: 'Two', value: props.min, color: '#cad9cc' },
          ]}
        />

        <p className='percentage'>{props.cat}</p>

        <button className="apply">Apply</button>

      </div>



    </div>
  )
}

export default JobCard