import React from 'react';

const withCounter = (WrappedComponent) => {
   
    class WithCounter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
            this.mouseEvent = this.mouseEvent.bind(this);
        }
        mouseEvent=()=>{
            this.setState(prevState=> {
                return {count: prevState.count+1}
            })
            /* Both setState methods are valid */
            // this.setState(prevState => ({
            //     count: prevState.count + 1
            // }))
            
        }
        render(){
            
        return(
            <h1><WrappedComponent count={this.state.count} mouseEvent={this.mouseEvent}/></h1>
        )}
    }
    return WithCounter
}

export default withCounter;