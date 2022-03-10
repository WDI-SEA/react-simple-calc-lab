import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  state = {
    num1: "",
    num2: "",
    result: "",
    error: ""
  }

calculate = (e) => {
  e.preventDefault()
  this.setState({
    num1: "",
    num2: "",
  })
}

textChangeHandler = (e) => {
  const updatedInput = {
    [e.target.name]: e.target.value * 1,
    
  }
  this.setState({
    ...updatedInput, 
    error: "",
    result: ""
  }, ()=> console.log(this.state))
}

addNums = () => {
  if(!this.state.num1 || !this.state.num2) {
    this.setState({
      error: "Please fill in both number fields."
    })
  } else {
    this.setState({
      result: this.state.num1 + this.state.num2
    })
  }
}
subtractNums = () => {
  if(!this.state.num1 || !this.state.num2) {
    this.setState({
      error: "Please fill in both number fields."
    })
  } else {
  this.setState({
    result: this.state.num1 - this.state.num2
  })
  }
}
multiplyNums = () => {
  if(!this.state.num1 || !this.state.num2) {
    this.setState({
      error: "Please fill in both number fields."
    })
  } else {
    this.setState({
    result: this.state.num1 * this.state.num2
    })
  }
}
divideNums = () => {
  if(!this.state.num1 || !this.state.num2) {
    this.setState({
      error: "Please fill in both number fields."
    })
  } else {
    this.setState({
      result: this.state.num1 / this.state.num2
    })
  }
}
  render(){
    return (
      <div className="App App-header">
        <form onSubmit={this.calculate}>
          <label htmlFor="num1"> Num1: </label>
          <input 
            type="number"
            value={this.state.num1}
            name="num1"
            id="num1"
            placeholder="Enter First Number"
            onChange={this.textChangeHandler}
          />
          <label htmlFor="num1"> Num2: </label>
          <input 
            type="number"
            value={this.state.num2}
            name="num2"
            id="num2"
            placeholder="Enter Second Number"
            onChange={this.textChangeHandler}
          /> <br />
          <p className="errorMessage">{this.state.error}</p>
          <button type="submit" onClick={this.addNums}>+</button>
          <button type="submit" onClick={this.subtractNums}>-</button>
          <button type="submit" onClick={this.multiplyNums}>x</button>
          <button type="submit" onClick={this.divideNums}>/</button>
          <h2> = {this.state.result}</h2>
          
        </form>
        
      </div>
    );
  }
}

export default Calculator;