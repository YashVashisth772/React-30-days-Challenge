import React, { Component } from 'react'
import RelishesDisplay from './RelishesDisplay';

export default class RelishReminder extends Component {
    constructor(props){
        super(props);
        this.state={
            relishStyles: [
                { name: 'Branston Pickle', description: 'A british pickle that is brown in colour' },
                { name: 'Fruit Chutney', description: 'A chutney, surprisingly made of fruits' },
                { name: 'Onion Jam', description: 'A sweet chutney made of onions' },
                { name: 'Tomato Relish', description: 'A classic made with apples and tomatoes' },
                { name: 'Picalilli', description: 'Its a yellow one that tastes weird' },
                { name: 'Mango Chutney', description: 'A spicy one, served with Indian currys' },
            ],
        }
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked(index){
        // console.log('yash id',e.target.id );
        // var id = e.target.id;
        var arr = [...this.state.relishStyles];
        arr.splice(index,1);
        this.setState({relishStyles: arr});
        console.log('yash new state',this.state.relishStyles);
    }

    render() {
        
        let relishes = null;
        if(this.state.relishStyles.length > 0){
        relishes= (
            <div>
            {this.state.relishStyles.map((relish, index) =>{
                return(
                    <RelishesDisplay 
                    name={relish.name} 
                    description={relish.description}
                    click={() => this.buttonClicked(index)}/> )  
            })}
            </div>
        );
        }
        else{
            relishes = (
                <div>
                    <h1>Forgot about Relishes??? </h1>
                    <button onClick={() => window.location.reload()}>Ok..! Reload the Relishes</button>
                </div>
            )
        }
        return (
            <div className="container">
               {relishes}

            </div>
        )
    }
}
