import React, { Component } from "react"

export default class Calculator extends Component {

  state = {
    numOne: 0,
    numTwo: 0,
    operand: '',
    result: 0
  }

  setNum = (e, num) => {
    this.setState({ [num]: parseInt(e.target.value) });
  }

  setResult = (e) => {
    e.preventDefault()
    let result = 0

    if(this.state.operand === '+') {
      result = this.state.numOne + this.state.numTwo
    }
    if(this.state.operand === '-') {
      result = this.state.numOne - this.state.numTwo
    }
    if(this.state.operand === '*') {
      result = this.state.numOne * this.state.numTwo
    }
    if(this.state.operand === '/') {
      result = this.state.numOne / this.state.numTwo
    }

    this.setState({
      result: result,
      numOne: 0,
      numTwo: 0
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input 
            type="number"
            name="numOne"
            value={this.state.numOne}
            onChange={ (e) => this.setNum(e, 'numOne') }
          />
        </div>

        <div>
          <button
            onClick={ (e) => this.setState({ operand: '+' }) }
          >
            +
          </button>
          <button
            onClick={ (e) => this.setState({ operand: '-' }) }
          >
            -
          </button>
          <button
            onClick={ (e) => this.setState({ operand: '*' }) }
          >
            *
          </button>
          <button
            onClick={ (e) => this.setState({ operand: '/' }) }
          >
            /
          </button>
        </div>

        <div>
          <input 
            type="number"
            name="numTwo"
            value={this.state.numTwo}
            onChange={ (e) => this.setNum(e, 'numTwo') }
          />
        </div>

        <div>
          <button
            onClick={ (e) => this.setResult(e) }
          >
            =
          </button>

          <h3>{this.state.result}</h3>
        </div>
      </div>
    )
  }
}