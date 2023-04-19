import React, { Component } from 'react'
export default class Calculator extends Component{
  state = {
    num1:0,
    num2:0,
    operation: "add"
  }

  setNum = (e, num) => {
    this.setState({[num]: e.target.value})
  }
  
  setOperation = (e) => {
    this.setState({operation: e.target.value})
  }

  handelSum= () => {
    let num1 = parseInt(this.state.num1)
    let num2 = parseInt(this.state.num2)
    this.setState(() => {
      return{
        sum: this.state.nmm1 + this.state.num2
      }
    })
  }

  handelDiv= () => {
    let num1 = parseInt(this.state.num1)
    let num2 = parseInt(this.state.num2)
    this.setState(() => {
      return{
        sum: this.state.nmm1 / this.state.num2
      }
    })
  }

  handelSub= () => {
    let num1 = parseInt(this.state.num1)
    let num2 = parseInt(this.state.num2)
    this.setState(() => {
      return{
        sum: this.state.nmm1 - this.state.num2
      }
    })
  }

  handeMultip= () => {
    let num1 = parseInt(this.state.num1)
    let num2 = parseInt(this.state.num2)
    this.setState(() => {
      return{
        sum: this.state.nmm1 * this.state.num2
      }
    })
  }

  handelOperation = () => {
    if (this.state.operation === 'add') {
      this.handelSum()
    } else if (this.state.operation === 'subtract') {
      this.handelSub()
    }else if (this.state.operation === 'multiply') {
      this.handeMultip()
    }else if (this.state.operation === 'divide') {
      this.handelDiv()
    }
  }

  render() {
    return(
      <div className="container">
  <h1>Add with React!</h1>

  <div className="add">
    <input 
    type="number"
    name="num1"
    placeholder='Enter your first number'
    value={this.state.num1}
    onChange={(e) => this.setNum(e, "num1")}
    />

    <select onChange={this.setOperation}>
<option value="add">add</option>
<option value="subtract">subtract</option>
<option value="multiply">multiply</option>
<option value="divide">divide</option>

    </select>

    <input 
    type="number"
    name="num2"
    placeholder='Enter your secound number'
    value={this.state.num2}
    onChange={(e) => this.setNum(e, "num2")}
    />
  </div>
      <button>=</button>
  <h3>Addition goes here</h3>
  <h3>{this.state.sum}</h3>
</div>
    )
  }
}