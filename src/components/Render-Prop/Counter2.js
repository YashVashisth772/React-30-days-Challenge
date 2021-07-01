import React from 'react'

export default function Counter2(props) {
    // console.log(props);
    let style1 ={
        backgroundColor: "pink",
        color: "white",
    }
    return (
        <div>
            <button style={style1} onClick={props.incrementFun}>{props.count}</button>
        </div>
    )
}
