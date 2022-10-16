import React from 'react';


const Matched = (props) => {
    if (props.message == "not found"){
        return (
            <div className='matched'>
                <h2>A match was not found, but as soon as we find a match for you, we'll send you a message</h2>
            </div>
        );
    } else {
        return (
            <div className='matched'>
                <h2>You have been matched!</h2>
                <h2>Your {props.role} is:</h2>
                <div>Name: {props.name}</div>
                <div>Phone Number: {props.phoneNumber}</div>
            </div>
        );
    }
}
    

export default Matched;