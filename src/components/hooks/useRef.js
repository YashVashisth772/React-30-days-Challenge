import React, {useEffect} from 'react'
import { render } from "react-dom";
export default function App1() {
  let [name, setName] = React.useState("");
  let renderCount = React.useRef(0);
  let [nameRef, setNameRef] = React.useState("");
  let itsRef = React.useRef();

  const usingRef = () => {
    // console.log(itsRef.current.value);.
    itsRef.current.focus();
    setNameRef(itsRef.current.value);
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount);
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        ref={itsRef}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h2>
        I rendered {renderCount.current} times, printed {nameRef}
      </h2>
      <button onClick={usingRef}>Focus</button>
    </div>
  );
}
// 
//  Refs can be used to store values persistent across renders, changing these values won't cause the component to re-render
