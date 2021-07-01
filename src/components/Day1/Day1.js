import React from 'react';
import Quesn from './Quesn';

class QuesAns extends React.Component{
    constructor(props){
        super(props);
        this.state={
            question: "What is your 'Country's name",
            answer: 'India'
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange =() => {
        this.setState({question:this.state.answer})
    }
    render(){
        console.log('yash');
        var {ques, ans} =this.state;
        return(
            <div>
                <Quesn question={this.state.question} click={this.handleChange} />
            </div>
        )
    }
}

export default QuesAns;