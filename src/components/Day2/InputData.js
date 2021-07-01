import React from 'react';

const display =(props)=> {

    const inputStyle= {
        textAlign: 'center',
        fontSize:'20px',
        margin:'50px',
        width: '40vw'
    };

    const divStyle= {
        display: 'inline-block'
    };
    return(
        <div style={divStyle}>
        <input type="text"
        style={inputStyle}
        onChange={props.change}
        placeholder="Enter Something">
        </input>
        {/* <p>{props.values}</p> */}
        </div>
    )
}

export default display;