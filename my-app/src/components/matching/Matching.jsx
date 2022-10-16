import React from 'react';
import MatchingForm from './MatchingForm';
import './Matching.css'

const Matching = () => {
    return (
        <div className='matching'>
            <h1 className='header'>Matching</h1>
            <p className="matching-blurb">
                Whether you're an individual entering your early-career, or an experienced individual ready to step out or already have, a mentorship can prove to be beneficial to you while building our industries up from the inside out. <br/>
                If you're interested in being a mentor or a mentee, fill out the survey below so we can get to know you better and match you with suitable mentor/mentee candidates. From there, the mentor/mentee can start a conversation and determine whether they wish to continue and if so, what their meetings will look like in the future.
            </p>
            <br/>
            <MatchingForm/>
        </div>
)};

export default Matching;