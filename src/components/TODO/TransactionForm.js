import React, { Component } from 'react'

export default class TransactionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            acNumb: '',
            ifsc: '',
            name: '',
            amount: ''
        }
    }
    handleChange = (e) => {
        // console.log('yes', e.target.name)
        this.setState({[e.target.name]: e.target.value }  )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('inside handleSubmit')
        this.props.inputAdded(this.state);
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type='number' name='acNumb' value={this.state.acNumb} placeholder="A/C number" onChange={this.handleChange}></input>   <br />
                    <input type='number' name='ifsc' value={this.state.ifsc} placeholder="IFSC Code" onChange={this.handleChange}></input>   <br />
                    <input type='text' name='name' value={this.state.name} placeholder="A/C holder Name" onChange={this.handleChange}></input> <br />
                    <input type='number' name='amount' value={this.state.amount} placeholder="Amount" onChange={this.handleChange} ></input> <br /><br />
                    <button type='submit' placeholder='Submit'>Submit</button>
                </form>
            </div>
        )
    }
}
