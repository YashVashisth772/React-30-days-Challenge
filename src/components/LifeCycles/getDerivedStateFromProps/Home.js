import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            value : 0
        };
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log('props',props, state);
        return {
            value : props.data *2
        }
    }
    
    render() {
        console.log('render')
        return ( 
            <div>
                <h4>I am Child</h4>
                <h4>Current Value(child component's): {this.props.data}</h4>
            </div>
        )
    }
}
