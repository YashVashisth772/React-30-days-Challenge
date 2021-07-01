import React, { Component } from 'react'
import FruitCards from './FruitCards'
export default class FruitFacts extends Component {
    constructor(props){
        super(props);
        this.state={
            fruits:[
                {name: 'orange' , description: 'Its a citrus Fruit'},
                {name: 'apple' , description: 'Its has lots of iron in it'},
                {name: 'Mango' , description: 'Its Delicious'}
            ],
            buttonClicked: false
        }
        this.DisplayFruits = this.DisplayFruits.bind(this);
    }
    DisplayFruits = ()=>{
        const currentlyShowing = this.state.buttonClicked;
        this.setState({buttonClicked: !currentlyShowing});
        // this.setState({buttonClicked : true});
    }
    render() {
        var fruitFacts = null;
        if(this.state.buttonClicked){
            console.log('yash i im in')
            fruitFacts =(

                <FruitCards 
                name={this.state.fruits[0].name}
                desc={this.state.fruits[0].description} />
                // <div className="container">
                //     <p>Hiii</p>
                //     <p>{this.state.fruits[0].name}</p>
                //     <p>{this.state.fruits[0].description}</p>
                // </div>

            )
        }

        return (
            <div>
                <button onClick={this.DisplayFruits}>Show Me Fruits</button>

                {/* <p>{this.state.fruits[0].name}</p> */}
                {fruitFacts}
            </div>
        )
    }
}
