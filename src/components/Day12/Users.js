import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            people: []
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                let randomPep = data.results.map((person)=>{

                    return(
                        <div>
                            <img src={person.picture.large}/>
                            <p>email: {person.email}</p>
                        </div>
                    )
                })
                this.setState({people : randomPep});

            });
        console.info('yu',this.state.people);
        // console.log('yy',response);
        }

    render() {
        console.log('uu',this.state.people)
        const pep = this.state.people;
        return (
            <div>
                <h1>Day 12- Random User Generator</h1>
                <p>{this.state.people}</p>
            </div>
        )
    }
}
