import React, { Component } from "react";
import './App.css'
export default class Calculator extends Component {

    state={
        num1:"1",
        num2:"1",
        sum: ""

    }

    setNum = (e,num)=>{
        console.log(typeof num)
        this.setState({ [num]: e.target.value})
    }

    setSum = (num1, num2)=>{
        console.log(this.state.sum)
        this.setState ({sum: parseInt(num1)+parseInt(num2)})
    }


  render() {
    return (
      <div className="App-header">
        <h1>Add with React!</h1>

        <div className="add">
        
          <input name = "num1"type="number" value={this.state.num1} onChange={ (e)=> this.setNum(e,"num1")}/>
          <span>+</span>
          <input name="num2" type="number" value={this.state.num2} onChange={ (e)=> this.setNum(e,"num2")}/>
          <button name='buttonSum' onClick={ (e)=>{this.setSum(this.state.num1, this.state.num2) }} >=</button>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}
