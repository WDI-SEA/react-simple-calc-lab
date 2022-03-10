import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  state = {
    num1: "",
    num2: "",
    result: "",
    error: ""
  }

submitFields = (e) => {
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

calculate = (e) => {
  e.preventDefault()
  if(this.state.num1 === "" || this.state.num2 === ""){
    this.setState({
      error: "Please fill in both number fields"
    })
  } else {
    if( e.target.name === "+"){
      this.setState({
        result: this.state.num1 + this.state.num2,
        // num1: "",
        // num2: "",
        
      })
    } else if (e.target.name === "-"){
      this.setState({
        result: this.state.num1 - this.state.num2,
        // num1: "",
        // num2: "",
      })
    } else if (e.target.name === "*") {
      this.setState({
        result: this.state.num1 * this.state.num2,
        // num1: "",
        // num2: "",
      })
    } else {
      this.setState({
        result: this.state.num1 / this.state.num2,
        // num1: "",
        // num2: "",
      })
    }
  }
}

// addNums = (e) => {
//   console.log(e.target.name)
//   if(!this.state.num1 || !this.state.num2) {
//     this.setState({
//       error: "Please fill in both number fields."
//     })
//   } else {
//     this.setState({
//       result: this.state.num1 + this.state.num2
//     })
//   }
// }
// subtractNums = () => {
//   if(!this.state.num1 || !this.state.num2) {
//     this.setState({
//       error: "Please fill in both number fields."
//     })
//   } else {
//   this.setState({
//     result: this.state.num1 - this.state.num2
//   })
//   }
// }
// multiplyNums = () => {
//   if(!this.state.num1 || !this.state.num2) {
//     this.setState({
//       error: "Please fill in both number fields."
//     })
//   } else {
//     this.setState({
//     result: this.state.num1 * this.state.num2
//     })
//   }
// }
// divideNums = () => {
//   if(!this.state.num1 || !this.state.num2) {
//     this.setState({
//       error: "Please fill in both number fields."
//     })
//   } else {
//     this.setState({
//       result: this.state.num1 / this.state.num2
//     })
//   }
// }
  render(){
    return (
      <div className="App App-header">
        <form onSubmit={this.submitFields}>
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
          <button type="submit" name="+" onClick={this.calculate}>+</button>
          <button type="submit" name="-" onClick={this.calculate}>-</button>
          <button type="submit" name="*" onClick={this.calculate}>x</button>
          <button type="submit" name="/" onClick={this.calculate}>/</button>
          <h2> = {this.state.result}</h2>
          
        </form>
        
      </div>
    );
  }
}

export default Calculator;