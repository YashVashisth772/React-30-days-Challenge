import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from './Home';

export default class App1 extends Component {
    constructor(){
        super();
        this.state={
            data: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Hi all I am "static getDerivedStateFromProps(props, state)"</h1>
                <h2>{this.state.data}</h2>
                <Home data={this.state.data}/>
                <button onClick={()=>this.setState({ data : this.state.data+1})}> Increment ++</button>

            </div>
        )
    }
}
