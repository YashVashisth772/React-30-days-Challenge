import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        const {loading, data, err} = this.props;
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
