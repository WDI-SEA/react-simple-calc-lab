import React, { Component } from 'react'
import './App.css';

class Calculator extends Component {
  state = {
    numOne: '',
    numTwo: '',
    sum: 0
  }



  setNum = (e, num) => {
    this.setState({ [num]: parseInt(e.target.value)});
  }

  sumNumbers = e => {
    e.preventDefault()
    console.log(e)
    this.setState(prevState => {
      return {
        sum: prevState.numOne + prevState.numTwo
      }
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <form onSubmit={this.sumNumbers}>
            <input type="number"
              name="num1"
              placeholder="Enter your first number"
              value={this.state.numOne}
              onChange={ (e) => this.setNum(e, 'numOne') }
            />
            <span>+</span>
            <input type="number"
              name="numTwo"
              placeholder="Enter your second number"
              value={this.state.numTwo}
              onChange={ (e) => this.setNum(e, 'numTwo') }
            />
            <button type='submit'>=</button>
          </form>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;
