import React from 'react';


const Housing = (props) => {
    return(
        <div>
            <h1>Here are your results!</h1>
            <p>{props.result}</p>
        </div>
    );
}

export default Housing