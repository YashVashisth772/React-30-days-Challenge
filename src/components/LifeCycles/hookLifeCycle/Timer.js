// react Hook componentWillUnmount 
import React, {useState, useEffect} from 'react';

function Timer(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval1 = setInterval(() => {
            setTime(new Date())
            console.log("time is updated")
        },1000);
        return()=>{
            clearInterval(interval1)
            console.log("interval is cleared");
        }
    },[])

    return(
        <div>
            <h2>{time.toLocaleTimeString() }</h2>
        </div>
    )
}
export default Timer