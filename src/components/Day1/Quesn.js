import React from 'react';

const Question =(props) => {

    return(
        <button onClick={props.click}>Hi{props.question}</button>
    )

}

export default Question;