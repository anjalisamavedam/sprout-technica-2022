import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'
import JobCard from './JobCard'

const Internship = () => {
    const [inputValue, setInputValue] = useState("");

    const jobs = {
        items: [
            { position: "Business Analyst Intern", company: "my company", link: "apple", desc: "testing" },
            { position: "Software Engineer Intern", company: "veg", link: "carrot", desc: "testing" },
            { position: "", company: "veg", link: "carrot", desc: "testing" },
            { position: "", company: "veg", link: "carrot", desc: "testing" },

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
