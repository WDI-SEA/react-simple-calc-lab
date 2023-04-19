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
    this.addNums = this.addNums.bind(this)
  }

  setNum(e) {
    console.log(`Setting ${e.target.name} to ${e.target.value}`);
    this.setState({ [e.target.name]: e.target.value });
  }

  addNums() {
    const num1 = Number(this.state.num1)
    const num2 = Number(this.state.num2)

    const sum = num1 + num2
    this.setState( {result: sum} )
  }

  render() {
    console.log(`State: ${JSON.stringify(this.state)}`);
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" name="num1" value={this.state.num1} onChange={this.setNum} />
          <span>+</span>
          <input type="text" name="num2" value={this.state.num2} onChange={this.setNum} />
          <button onClick={this.addNums}>=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
