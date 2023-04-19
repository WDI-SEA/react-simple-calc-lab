import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '',
      result: ''
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" value={this.state.num1} />
          <span>+</span>
          <input type="text" value={this.state.num2} />
          <button>=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
