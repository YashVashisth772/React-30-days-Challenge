import React from 'react'

export default function Counter1(props) {
    // console.log(props);
    let style1 ={
        backgroundColor: "cyan",
        color: "red"
    }
    return (
        <div>
            <button style={style1}onClick={props.incrementFun}>{props.count}</button>
        </div>
    )
}
