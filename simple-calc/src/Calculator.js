import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '',
      result: ''
    };

    this.setNum = this.setNum.bind(this);
  }

  setNum(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" name="num1" value={this.state.num1} onChange={this.setNum} />
          <span>+</span>
          <input type="text" name="num2" value={this.state.num2} onChange={this.setNum} />
          <button>=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
