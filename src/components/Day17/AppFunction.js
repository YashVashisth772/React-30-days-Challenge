import React from "react";
// import { render } from "react-dom";
// import "./styles.css";

const AppFunction = () => {
  let data = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];
  const [searchFor, setSearchFor] = React.useState("");
  const [searchResult, setSeachResult] = React.useState([]);

  let doSearch = (e) => {
    // e.persist()
    setSearchFor(e.target.value);
    // l
    const result = data.filter((val) =>
      val.toLowerCase().includes(searchFor.toLowerCase())
    );
    setSeachResult(result);
    console.log("arr", result);
  };
  return (
    <>
      <h1> Data: </h1>
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input type="text" name="name" onChange={doSearch} />
      <br />
      <ul>
        {searchResult.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default AppFunction;

/* Another way to do , by declaring the state in an object
import React from "react";
// import { render } from "react-dom";
// import "./styles.css";

const App = () => {
  let data = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];
  const [state, setState] = React.useState({
    searchFor: "",
    searchResult: []
  });
  // const [searchFor, setSearchFor] = React.useState("");
  // const [searchResult, setSeachResult] = React.useState([]);

  let doSearch = (e) => {
    // e.persist()
    // setSearchFor(e.target.value);
    setState({
      ...state,
      searchFor: e.target.value
    });
    // l
    const result = data.filter((val) =>
      val.toLowerCase().includes(state.searchFor.toLowerCase())
    );
    // setSeachResult(result);
    setState((prevState) => ({
      ...prevState,
      searchResult: result
    }));
    
    console.log("arr", result);
  };
  return (
    <>
      <h1> Data: </h1>
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input type="text" name="name" onChange={doSearch} />
      <br />
      <ul>
        {state.searchResult.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default App;

*/