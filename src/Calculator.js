import React, { Component } from "react";

class Calculator extends Component {
  state = {
    num1: "",
    num2: "",
    result: "",
  };

  setNum = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  add = () => {
    let num1 = Number(this.state.num1);
    let num2 = Number(this.state.num2);
    this.setState({ result: num1 + num2 });
  };

  subtract = () => {
    let num1 = Number(this.state.num1);
    let num2 = Number(this.state.num2);
    this.setState({ result: num1 - num2 });
  };

  divide = () => {
    let num1 = Number(this.state.num1);
    let num2 = Number(this.state.num2);
    this.setState({ result: num1 / num2 });
  };

  multiply = () => {
    let num1 = Number(this.state.num1);
    let num2 = Number(this.state.num2);
    this.setState({ result: num1 * num2 });
  };

  render() {
    return (
      <div className="caclulator">
        <h1>Calculations</h1>
        <h3>Input two numbers and then select an operator</h3>

        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.setNum}
          placeholder="Input a number"
        />

        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.setNum}
          placeholder="Input another number"
        />

        <br></br>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>

        <h2>= {this.state.result}</h2>
      </div>
    );
  }
}

export default Calculator;
