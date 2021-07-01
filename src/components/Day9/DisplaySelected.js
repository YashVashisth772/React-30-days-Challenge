import React from 'react'

export default function DisplaySelected(props) {
    return (
        <div>
            <p>{props.name} : ${props.price}</p>
        </div>
    )
}
