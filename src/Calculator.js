import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      operation: '+',
      result: '',
    };
  }
 // to set the value of the number
  setNum = (e, num) => {
    this.setState({ [num]: e.target.value });
  }
//to set the operation
  setOperation = (e) => {
    this.setState({ operation: e.target.value });
  }
  //calculation with cases depending on operation
  calculateResult = () => {
    const { num1, num2, operation } = this.state;
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = '';
    }
    if (isNaN(result)) {
      this.setState({ result: 'Invalid input' });
    } else {
      this.setState({ result: result });
    }
  }

  render() {
    const { num1, num2, operation, result } = this.state;
    return (
      <div className="container">
        <h1>Arithmetic with React!</h1>
        <div className="arithmetic">
            {/* number input 1 */}
          <input
            type="number"
            name="num1"
            placeholder="Enter your first number"
            value={num1}
            onChange={(e) => this.setNum(e, 'num1')}
          />
          {/* select operation */}
          <select value={operation} onChange={this.setOperation}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          {/* number 2 input */}
          <input
            type="number"
            name="num2"
            placeholder="Enter your second number"
            value={num2}
            onChange={(e) => this.setNum(e, 'num2')}
          />
          {/* result */}
          <button onClick={this.calculateResult}>=</button>
          <h3>{result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;

