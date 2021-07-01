import React, { Component } from 'react'

export default class Quote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             yourQuote : [],
             dataLoaded: false
        }
    }
    fetchQuote = async() =>{
        let quote = '';
        let index = Math.floor(Math.random()*40+1)
        const api_call = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes');
        const response = await api_call.json();
        
        quote = response.messages.non_personalized[index].split(' ');
        
        this.setState({quotes: quote})
        this.setState({dataLoaded: true})

    }
    componentDidMount(){
       this.fetchQuote();
    }
    render() {
        return (
            <div>
                <h1> TRUMP QUOTE</h1>
            </div>
        )
    }
}
