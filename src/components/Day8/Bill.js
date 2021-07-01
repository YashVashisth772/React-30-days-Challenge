import React from 'react';

const Bill = (props) => {
    return(
        <div>
            <h1>Customer Bill</h1>
            <h3>{props.fullBill}</h3>
            <button onClick={props.click}>Pay Bill</button>
        </div>
    )
}
export default Bill;