import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        const {loading, data, err} = this.props.parentState;
        const displayData = data.map((item,i)=>{
            return(
                <li key={item.id}>{data.title}</li>
            )
        }) 
        return (
            <div>
                {displayData}
            </div>
        )
    }
}
