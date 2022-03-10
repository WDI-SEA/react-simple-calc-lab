import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Calculator extends Component {

  state = {
    num1: '',
    num2: '',
    result: '',
    error: ''
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value * 1 })
  }

  calculateNum = (e) => {
    if (!this.state.num1 || !this.state.num2) {
      this.setState({ error: 'Must input a number' })
    } else if (this.state.num1 >= 0 || this.state.num2 >= 0) {

      if (e.target.name === 'add') {
        this.setState({
          result: this.state.num1 + this.state.num2,
          error: ''
        })

      } else if (e.target.name === 'sub') {
        this.setState({
          result: this.state.num1 - this.state.num2,
          error: ''
        })

      } else if (e.target.name === 'div') {
        this.setState({
          result: this.state.num1 / this.state.num2,
          error: ''
        })

      } else if (e.target.name === 'mul') {
        this.setState({
          result: this.state.num1 * this.state.num2,
          error: ''
        })
      }
    }

  }

  clearFields = () => {
    this.setState({
      num1: '',
      num2: '',
      result: '',
      error: ''
    })
  }


  render() {
    return (
      <div className='container'>
        <h1> Add with React!</h1>

        <div className='add'>
          <input
            type='number'
            id='num1'
            name='num1'
            placeholder='Enter your first number'
            value={this.state.num1}
            onChange={(e) => this.setNum(e, 'num1')}
          />
          <input
            type='number'
            id='num2'
            name='num2'
            placeholder='Enter your first number'
            value={this.state.num2}
            onChange={(e) => this.setNum(e, 'num2')}
          />
          <br />
          <button name='add' onClick={this.calculateNum}>+</button>
          <button name='sub' onClick={this.calculateNum}>-</button>
          <button name='div' onClick={this.calculateNum}>/</button>
          <button name='mul' onClick={this.calculateNum}>*</button>
          <br />
          <button name='clear' onClick={this.clearFields}>Clear</button>
          <h3>Addition results go here!</h3>
          <div className='output container'>{this.state.result}</div>
          <p>{this.state.error}</p>
        </div>
      </div>
    )
  }
}

export default Calculator;
