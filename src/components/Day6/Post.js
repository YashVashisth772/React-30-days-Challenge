import React from 'react';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            thoughts: []
        }
        this.addPost = this.addPost.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    addPost = () =>{
    }
    deleteThought =(index) => {
        console.log('y inde',index);
        const arr = [...this.state.thoughts];
        arr.splice(index,1);

        this.setState({thoughts : arr});
    }
    handleInput = (e) =>{
        e.preventDefault();
        const thoughtAdded = [...this.state.thoughts];

        const newThought = {};
        newThought.content = this.newThought.value;
        
        thoughtAdded.push(newThought);

        this.setState({ thoughts : thoughtAdded})
        this.newThought.value = null;
    }
    render(){
        let listOfThoughts = this.state.thoughts.map((thought, index)=> {
            return(
                <div>
                    <ul key={thought.index}>{thought.content}</ul>
                    <button type="submit" onClick={() =>this.deleteThought(index)}>Delete</button>
                </div>
            )
        } ).reverse();
        return (
            <div>
                <form onSubmit={(e) => this.handleInput(e)}>
                    <input type="text" placeholder="text"
                        ref={(input) => { this.newThought = input }}
                    // ref={(input) => {this.newThought=input} }
                    />
                    <input type="submit" value="post" />
                </form>
                <p>
                    {listOfThoughts}
                </p>
            </div>
        )
    }
}