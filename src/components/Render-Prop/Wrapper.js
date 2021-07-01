import React from 'react'

export default class Wrapper extends React.Component{
    state={
        count : 0
    }
    incrementFun = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render(){
        return(
            <>
                {this.props.render(this.state.count, this.incrementFun)}
            </>
        )
    }
}