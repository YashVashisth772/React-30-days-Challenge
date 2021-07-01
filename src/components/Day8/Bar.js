import React from 'react';
import Drink from './Drink';
import Bill from './Bill';

class Bar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            menus:[
                {name:'Mojito', price: 3},
                {name:'Beer', price: 2},
                {name:'Red WIne', price: 1}
            ],
            bill: 0
        }
    }
    addDrink = (drinkIndex) => {
         let xyz =this.state.menus[drinkIndex].price;
         let totalBill = this.state.bill;
         totalBill += xyz;
         this.setState({bill: totalBill});
    }
    payClick = () => {
        this.setState({bill: 0})
    }
    render(){
        let displayMenu = this.state.menus.map((menu,index)=> {
            return <Drink
            name={menu.name}
            price={menu.price}
            click={()=> this.addDrink(index)}
            />
            // (
            //     <div>
            //         <ul>{menu.name}</ul>
            //         <ul>${menu.price}</ul>
            //         <button onClick={()=> this.addDrink(index)}>Add Drink</button>
            //     </div>
            // )
        })
        return(
            <div>
                <span>
                    {displayMenu}
                </span>
                <Bill 
                    fullBill={this.state.bill}
                    click={this.payClick}
                />
                {/* <h1>Customer Bill:</h1>
                <h3>${this.state.bill}</h3>
                <button onClick={this.payClick}>Pay Bill</button> */}
            </div>
        )
    }
}
export default Bar;