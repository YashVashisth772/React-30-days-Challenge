import React, { Component } from 'react'
import TransactionForm from './TransactionForm';
import './todo.css';

export default class TransactionList extends Component {
    
    state = {
             list: this.returnList()
        }
    
        returnList() {
            if (localStorage.getItem('transactions') == null)
                localStorage.setItem('transactions', JSON.stringify([]))
            return JSON.parse(localStorage.getItem('transactions'))
        }

    inputAdded =(data) => {
        console.log('inside parent');
        let list = this.returnList();
        list.push(data);
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({list})
    }
    render() {
        return (
            <div>
                <h2>TransactionList below:</h2>
                {/* <h3>{displayList}</h3> */}
                <table>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.acNumb}</td>
                                <td>{item.ifsc}</td>
                                <td>{item.name}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <TransactionForm inputAdded={this.inputAdded}/>
            </div>
        )
    }
}
