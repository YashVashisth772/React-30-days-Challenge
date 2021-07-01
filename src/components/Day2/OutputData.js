import React from 'react'

export default function OutputData(props) {

    const outputstyle = {
        textAlign: 'center',
      color: 'pink',
      fontSize: '100px',
      marginTop: '-30px',
      padding: '10px'
      };
    
      const divstyle = {
      display: 'inline-block',
      };
    return (
        <div style={divstyle}>
            <h3 style={outputstyle}>{props.values}</h3>
        </div>
    )
}
