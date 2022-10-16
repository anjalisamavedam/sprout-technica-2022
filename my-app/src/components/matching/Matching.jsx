import React from 'react';
import MatchingForm from './MatchingForm';
import './Matching.css'

const Matching = () => {
    return (
        <div className='matching'>
            <h1 className='header'>Matching</h1>

            <MatchingForm />
        </div>
    );
}

export default Matching;