import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default class App1 extends Component {
    render() {
        return (
            <div>
                <TransactionList/>
            </div>
        )
    }
}
