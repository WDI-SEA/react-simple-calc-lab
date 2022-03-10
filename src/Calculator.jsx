import './App.css';
import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    num1: '',
    num2: '',
    sum: ''
  }

  setNum = (e, num) => {
    this.setState({ [num]: parseInt(e.target.value)}, ()=>console.log(this.state));
  }

  addNums = () => {
    let addition = this.state.num1 + this.state.num2
    this.setState({
      sum: addition
    }, () => {console.log(this.state)})
  }

  render() { 
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <form className="add">
          
          <input 
          type="number"
          name="num1"
          placeholder='enter your first number'
          value={this.state.num1}
          onChange={ (e) => this.setNum(e, 'num1')}
          />

          <span>+</span>

          <input 
          type="number"
          name="num2"
          placeholder="enter your second number"
          value={this.state.num2}
          onChange={(e) => this.setNum (e, 'num2')}
          />

          <button
          type='button'
          name='button'
          id='button'
          onClick={this.addNums}
          
          >=</button>

          <input 
          type="number"
          name='sum'
          id='sum'
          value={this.state.sum}
          readOnly
          />
        </form>
      </div>
    )
  }
}
 
export default Calculator;