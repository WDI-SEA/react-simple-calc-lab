import React, { Component } from "react";

class Calculator extends Component {
  state = {
    num1: '',
    num2: '',
    result: ''
  };

  setNum = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleCalculate = (e) => {
    e.preventDefault()
    let num1 = Number(this.state.num1)
    let num2 = Number(this.state.num2)
    this.setState({result: num1 + num2})
  }

  render() {
    return (
      <div className="caclulator">
        <h1>Adding is fun</h1>

        <form onSubmit={this.handleCalculate}>
          <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.setNum}
          placeholder='input a number'
          />
          
          <span>+</span>

          <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.setNum}
          placeholder = 'input another number'
          />
          
          <button>=</button>

          <h3>Result:{this.state.result}</h3>
        </form>
      </div>
    );
  }
}

export default Calculator;
