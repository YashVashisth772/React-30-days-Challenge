import React, { Component } from 'react';
import DisplaySelected from './DisplaySelected';


class Apps extends Component{
    constructor(props){
        super(props);
        this.state={
            items: [
                {name: 'Filter Coffee' , price: 3},
                {name:'Hot Chocolate' , price: 3},
                {name: 'Cappuccino' , price: 4},
                {name: 'Daily Special' , price: 7},
                {name: 'Orange Juice' , price: 5}
            ],
            selectedItems: [],
            price: 0 
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem = (itemIndex)=> {
        let itemsAddedd = [...this.state.selectedItems];
        
        let item = {};
        item.name = this.state.items[itemIndex].name;
        item.price = this.state.items[itemIndex].price;
        
        itemsAddedd.push(item);
        this.setState({selectedItems: itemsAddedd});

        let totalPrice = this.state.price;
        totalPrice += this.state.items[itemIndex].price;

        this.setState({price: totalPrice})
    }
    alert = () => {
        this.setState({selectedItems:[], price:0})
        // alert('Bill Paid');
    }

render(){
    console.log('y price', this.state.price);
    let displayMenu = this.state.items.map((item, index)=> {
        return(
            <div>
            <ul>{item.name}</ul>
            <ul>${item.price}</ul>
            <button onClick={()=> this.addItem(index)}>Add Item</button>
            </div>
        )
    })
    let displaySelectedItems = this.state.selectedItems.map((item,index)=>{
        return(
            <DisplaySelected name={item.name} price={item.price}/>
            // <div>
            //     <ul>{item.name}: ${item.price}</ul>
            //     {/* <ul>${item.price}</ul> */}
            // </div>
        )
    })

    return(
        <React.Fragment>
            <h1>Food Menu</h1>
            <span>{displayMenu}</span>
            <h1>Selected Items:</h1>
            <span>{displaySelectedItems}</span>
            <p>{this.state.price}</p>
            <button onClick={this.alert}>Pay Bill</button>
        </React.Fragment>
         )
    }
}
export default Apps;