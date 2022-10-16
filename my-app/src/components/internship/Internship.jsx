import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'
import JobCard from './JobCard'

const Internship = () => {
    const [inputValue, setInputValue] = useState("");

    const jobs = {
        items: [
            { position: "Business Analyst Intern", company: "my company", description: "testing" },
            { position: "Software Engineer Intern", company: "veg", description: "testing" },
            { position: "", company: "veg", description: "testing" },
            { position: "", company: "veg", description: "testing" },

        ]
    };

    const cards = jobs.map((job) => <JobCard job={job} />);
    
    return (
          
        <div>
            <p>test</p>
            <SearchBar onChange={(e) => { setInputValue(e.target.value) }} />
            <div>
                {cards}
            </div>
        </div>
    );
}

export default Internship;
