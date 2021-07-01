import React ,{useState} from 'react'
import Timer2 from './Timer';

export default function Clock() {

    const [displayTime, setDisplayTime] = useState(true)

    return (
        <div>
            {displayTime? <Timer2/>: null}
            <button onClick={()=>setDisplayTime(!displayTime)}>toggle</button>
        </div>
    )
}
