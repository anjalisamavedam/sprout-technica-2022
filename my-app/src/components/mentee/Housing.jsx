import React from 'react';


const Housing = (props) => {
    const arr = JSON.parse(props.result).map((p) => <p>{p}</p>);
    console.log(arr)
    return(
        <div>
            <h1>Here are your results!</h1>
            <p>{arr}</p>
        </div>
    );
}

export default Housing