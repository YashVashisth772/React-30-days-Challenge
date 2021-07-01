import React from 'react';
import InputData from './InputData';
import OutputData from './OutputData';

const Shout = () => {

    const [values, setValues ] = React.useState('');

    const displayData = (e) => {
        var data = e.target.value.toUpperCase();
        // var entry = data.toUpperCase();
        setValues(data);
    }

    return(
        <div>
            <label>Enter Something:</label>
            
            <InputData change={displayData} />
            <OutputData values={values}/>
            {/* <p>{values}</p> */}
        </div>
    )
}
export default Shout;