import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    num1: '',
    num2: '',
    operation: '+',
    result: ''
  };

  setNum = (e) => {
    console.log(`Setting ${e.target.name} to ${e.target.value}`);
    this.setState({ [e.target.name]: e.target.value });
  }

  setOperation = (e) => {
    this.setState({ operation: e.target.value})
  }

  calculate = () => {
    const num1 = Number(this.state.num1)
    const num2 = Number(this.state.num2)

    let result
    switch (this.state.operation) {
      case '+':
        result = num1 + num2;
        break
      case '-':
        result = num1 - num2;
        break
      case '*':
        result = num1 * num2;
        break
      case '/':
        result = num1 / num2;
        break
      default:
        console.log(`Sorry we are out of expressions`)
        result = ''
    }
    this.setState( {result: result} )
  }

  render() {
    return (
      <div className="container">
        <h1>Calculator</h1>
        <div className="calculator">
          <input type="text" name="num1" value={this.state.num1} onChange={this.setNum} />
          <select name="operation" value={this.state.operation} onChange={this.setOperation}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input type="text" name="num2" value={this.state.num2} onChange={this.setNum} />
          <button onClick={this.calculate}>=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
