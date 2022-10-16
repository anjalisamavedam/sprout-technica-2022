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
    return (
        
        
        <div>
            <SearchBar onChange={(e) => { setInputValue(e.target.value) }} />
            <div>

            </div>
        </div>
    );
}

export default Internship;
