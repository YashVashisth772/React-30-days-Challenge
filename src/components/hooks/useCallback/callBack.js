import "./styles.css";
import React, { useCallback, useState } from "react";
import List from "./List";
export default function CallBack() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    let array = [number, number + 1, number + 2];
    return array;
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return ( 
    <div>
      <div className="App" style={theme}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input
          type="number"
          onChange={(e) => setNumber(parseInt(e.target.value))}
        ></input>
        <button onClick={(e) => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <h2>{number}</h2>
      </div>
      <List getItems={getItems} />
    </div>
  );
}
/*
useMemo(): accepts a function and returns the return value of that function
useCallback(): accepts a function and returns the whole function 
/*
This hook is useful when you have a component with a child frequently re-rendering, and you pass a callback to it.
When we have a function ,and we are passing that function as a prop to child components, at that time use useCallback instead of useMemo
useMemo(): it takes a function, and returns a value.
useCallback(): it takes a function and returns a function.
*/