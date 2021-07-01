import React, {useState, useReducer } from 'react';

function reducerFun(state,action){
        switch(action.type){
            case 'increment':
                return { count : state.count + 1}
            case 'decrement':
                return { count : state.count - 1}
            default:
                return state
        }
}

export default function Reducer1(){
    const [state, dispatch] = useReducer(reducerFun, { count : 0 })

    function increment(){
        dispatch({ type : 'increment'})
    }
    function decrement(){
        dispatch({ type: 'decrement' })
    }
    return(
        <>
            <button onClick={increment}>+</button>
            <span>{state.count}</span>
            <button onClick={decrement}>-</button>
        </>
    )
}