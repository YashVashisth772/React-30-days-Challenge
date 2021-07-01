import React from 'react';

import useUpdateLogger from './useUpdateLogger';

export default function App5(){
    const[name,setName] = React.useState('');
    useUpdateLogger(name);
    return(
    <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
    )
} 

/*
Create a custom hook that will log the console, if some value changes/updates
*/ 