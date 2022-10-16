import React from 'react';


const Matched = (props) => {
    return (
        <div className='matched'>
            <h2>You have been matched!</h2>
            <h2>Your {props.role} is:</h2>
            <div>Name: {props.name}</div>
            <div>Phone Number: {props.phoneNumber}</div>
        </div>
    );
}

export default Matched;