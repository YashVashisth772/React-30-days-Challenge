import React, { Component } from 'react'
import Wrapper from './Wrapper';
import Todo from './Todo';
import Post from './Post';


export default class App extends Component {
    render() {
        return (
            <div>
                <Wrapper path='todos' render={(stateData)=> (
                   <Todo parentState={stateData}/>
                )}
                />
               <Wrapper path='posts' render={(stateData)=> {
                   <Post parentState={stateData}/>
                }}/>
            </div>
        )
    }
}
