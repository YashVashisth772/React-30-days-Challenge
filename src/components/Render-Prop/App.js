import React, { Component } from 'react'
import Wrapper from './Wrapper';
import Counter1 from './Counter1';
import Counter2 from './Counter2';


export default class App extends Component {
    render() {
        return (
            <div>
                <Wrapper
                    render={(count, incrementFun) => {
                        return <Counter1 count={count} incrementFun={incrementFun} />
                    }} />
                <Wrapper
                    render={(count, incrementFun) => {
                        return <Counter2 count={count} incrementFun={incrementFun} />
                    }} />
            </div>
        )
    }
}
