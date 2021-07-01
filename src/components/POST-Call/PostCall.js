import React , {Component} from 'react';

export default class PostCall extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            salary: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const url = 'http://dummy.restapiexample.com/api/v1/create';
        const data = this.state;
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            console.log(result.json())
        })
        alert('its done');
    }
    render(){
        return(
            <>
                <h1> FORM WITH POST CALL </h1>
                <h2>{this.state.email}</h2>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type='text' name="name" value={this.state.name} onChange={e=> this.setState({name: e.target.value})}/><br/>
                    <input type='text' name="email" value={this.state.email} onChange={e=> this.setState({email: e.target.value})}/><br/>
                    <input type='text' name="salary" value={this.state.salary} onChange={e=> this.setState({salary: e.target.value})}/><br/>
                    <button type="submit">Save Data</button>
                </form>
            </>
        )
    }
}