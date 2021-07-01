import React from "react";
// import { render } from "react-dom";
// import "./styles.css";

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "Siri",
        "Alexa",
        "Google",
        "Facebook",
        "Twitter",
        "Linkedin",
        "Sinkedin"
      ],
      searchFor: "",
      searchResult: []
    };
  }
  doSearch = (e) => {
    // e.persist()
    this.setState({ searchFor: e.target.value });
    // l
    const result = this.state.data.filter((val) =>
      val.toLowerCase().includes(this.state.searchFor.toLowerCase())
    );
    this.setState({ searchResult: result });
    console.log("arr", result);
  };
  render() {
    return (
      <>
        <h1> Data: </h1>
        <ul>
          {this.state.data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <input type="text" name="name" onChange={this.doSearch} />
        <br />
        <ul>
          {this.state.searchResult.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}
