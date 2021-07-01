import React, { Component } from 'react'

export default class timepass extends Component {
    
    addABC = () => {
        const obj ={
            name: 'yash',
            age:25,
            location: 'fbd'
        }

        for(property in obj){
            console.log(property, obj[property]);
        }
    }
    render() {
        
        return (
            <div>
                <h1>hii</h1>
                <button onClick={this.addABC}>Click</button>
            </div>
        )
    }
}
