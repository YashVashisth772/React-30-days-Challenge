// import "./styles.css";
import { useState, useMemo, useEffect } from 'react';
export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false)
  // const doubleNumber = slowFunction(number)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} /><br />
      <button onClick={() => setDark(dark => !dark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}
function slowFunction(num) {
  console.log('calling slow function');
  for (let i = 0; i <= 100000000; i++) { }
  return num * 2;
  // return num * 2;
}

/* 2 use cases of useMemo:
1: when we have some function(maybe slow functions) and we dont want them to be re-computed every single time, at that time, we can wrap that 
function in useMemo(()=>{},[]). It will only compute when we actualy want them to run.
2: "Referential equality": whenever we want to make sure that the reference of an objectarray is exactly the same as the last time it rendered(contents of object are same or not),
 so it will update only if the context of the object is actually changed. Instead of updating it all the time component rerenders
 

*/