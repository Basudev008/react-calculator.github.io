import React, { Component } from "react";
import InputComponent from "./InputComponent";
import ResultComponent from "./ResultComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  //onClick function checks the button type and perform accordingly
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "+/-") {
      //+/- or handy button to reverse the sign of expression or number
      try {
        this.setState({
          result:
            eval(this.state.result) >= 0
              ? "-" + eval(this.state.result)
              : ("" + eval(this.state.result)).slice(1),
        });
      } catch (e) {
        this.setState({
          result: "error",
        });
      }
    } else {
      //appending the button to the end of result
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  //calculate function using try and catch to evaluate a correct expression and give error otherwise
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  //reset function to reset result
  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <ResultComponent result={this.state.result} />
        <InputComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
