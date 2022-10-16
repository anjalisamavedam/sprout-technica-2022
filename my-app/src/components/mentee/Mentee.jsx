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

      <div className='housing'>
        <h1>Affordable Housing</h1>
        <HousingForm />
      </div>

      <div className='jobs'>
        <h1>Internships</h1>

        <SearchBar />

        <JobCard 
          position="Research Intern - Semantic Machines - Multi-Turn Task-Oriented Dialogue" 
          company="Microsoft" 
          description="Interns put inquiry and theory into practice. Alongside fellow doctoral candidates and some of the world’s best researchers, interns learn, collaborate, and network for life. During the 12-week internship, students are paired with mentors and expected to collaborate with other interns and researchers, present findings, and contribute to the vibrant life of the community. Research internships are available in all areas of research, and are offered year-round, though they typically begin in the summer." 
          maj={44} min={56} cat="44% of Microsoft employees are women."
        />
        
        <JobCard 
          position="Engineering Intern" 
          company="Twitter" 
          description="Quality Engineers play a key role at Twitter by evangelizing and actively contributing to product quality on all levels, across platforms, and for different phases of the software development life cycle. As an intern, you will work as part of one or many Twitter Engineering teams doing comprehensive testing including functional, integration, end-to-end, and other types of testing." 
          maj={44} min={56} cat="44% of Twitter's employees are from underrepresented minorities."
        />
        
        <JobCard 
          position="2023 Software Development Engineer - Intern" 
          company="Zoom" 
          description="This paid internship is for a duration of 12 weeks during the summer of 2023. The program offers cutting edge projects, as well as a mix of additional types of learning in areas of leadership and business acumen- and is packed full of fun!" 
          maj={0} min={0} cat="Sentiment analysis studies indicate that Zoom has a 9.46/10 star rating (compared to a 7- star average) in terms of diversity and inclusion in the workforce."
        />
        
        <JobCard 
          position="IT Engineer (Intern) United States" 
          company="Cisco" 
          description="IT has never been more important to Cisco and our communities. We provide the technological infrastructure and capabilities that support our employees, customers, and partners to accelerate Cisco’s digital business. As a technical engineer, you will play a key role in designing, implementing, automating, and supporting solutions that are critical to Cisco’s strategy and operations." 
          maj={0} min={0} cat="Cisco has seen over an 100% increase in Black employees in higher up positions in the past 2 years alone."
        />
        
        <JobCard 
          position="Meta Internships – Software Engineer In College Park" 
          company="Meta" 
          description="Meta is seeking Software Engineer Interns to join our engineering team. As a Software Engineer at Meta, you’ll drive the development of the systems behind Meta’s products, create web applications that reach billions of people, build high volume servers and be a part of a team that’s working to help people connect with each other around the globe. This internship/co-op has a minimum twelve (12) week duration." 
          maj={33} min={66} cat="33% of Meta employees are BIPOC women."
        />
        
        <JobCard 
          position="Software Engineer Internship" 
          company="Hewlett-Packard" 
          description="Innovation is in HP’s DNA. From our origins in a Palo Alto garage in 1939, to our current position as one of the world’s leading technology companies, HP has grown to become a leader in technology and corporate culture, inspiring innovators and entrepreneurs around the globe." 
          maj={8} min={92} cat="8% of Hewlett-Packard employees are part of the LGBTQ community."
        />
        
        <JobCard 
          position="User Experience (UX) Researcher Intern – 2023 (US)" 
          company="Amazon" 
          description="Our Project Engineers are agile with the ability to quickly adapt strategies, plans and solutions to affect dynamic business requirements. They are comfortable interfacing and driving various functional teams and all stakeholders at all levels of the organization. Open minds, customer focus, innovation empowerment, advanced technologies, team comradery, and drive our Regional Operations Engineering team to deliver the most advance fulfillment solutions in the world." 
          maj={0} min={0} cat="Amazon is said to celebrate its employees of underrepresented genders, LGBTQ employees, and those with disabilities in a regular, inclusive manner."
        />
        
        <JobCard 
          position="2023 Intern: Watson Core Software Engineer" 
          company="IBM" 
          description="Join the team building IBM’s foundational AI technologies, Watson Core, as a software engineer. Watson Core is a set of building blocks designed to help application developers more easily infuse powerful AI into their applications. It includes the best of AI open source and IBM Research technology, and includes technology from AI infrastructure, to algorithmic libraries (NLP, speech, time series, etc.), to Trustworthy AI." 
          maj={30} min={70} cat="30% of IBM employees are from underepresented genders."
        />
        
        <JobCard 
          position="Software Engineer Intern - Analytics Cloud" 
          company="Oracle" 
          description="Gain invaluable experience in what it is like to work at a leading global hardware and software systems innovator - Oracle. Your colleagues are industry experts and knowledgeable veterans. Your contributions will enhance real Oracle products and services. By the end of your internship you will be connected to a powerful network of professionals, managers, and executives." 
          maj={37} min={6} cat="37% of Oracle's employees are from underepresented genders."
        />
        
        <JobCard 
          position="Graduate Internship - Graphics Software Engineer" 
          company="Intel" 
          description="The candidate must be pursuing a bachelor's degree in Data Science with 3+ months of experience obtained through a combination of schoolwork/classes/research and/or relevant previous job and/or internship experiences." 
          maj={0} min={0} cat="Intel has made tangible efforts to promote empowerment of female employees in the workforce to avoid alienation."
       />

      </div>




    </div>
  )
})

Mentee.propTypes = {}

export default Mentee
