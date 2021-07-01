import React from 'react'

export default function RelishesDisplay(props) {
    
      
        const divstyle = {
        border: '4px solid white',
        display: 'inline-block',
        margin: '10px',
        padding: '10px',
        alignItems: 'center',
        maxWidth: '300px',
        };
      
        const buttonstyle = {
        border: '2px solid white',
        borderRadius: '0px',
        display: 'inline-block',
        margin: '10px',
        maxWidth: '100px',
        maxHeight: '40px'
        };
    return (
        <div style={divstyle}>
      
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        
        <button 
          style={buttonstyle}
          onClick={props.click}>Not Right Now
        </button>
      
      </div>
    )
}
