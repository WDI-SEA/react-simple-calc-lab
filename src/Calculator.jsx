import React, { Component } from "react";
import './App.css'
export default class Calculator extends Component {

    state={
        num1:"1",
        num2:"1",
        sum: "see results here"

    }

    setNum = (e,num)=>{
        console.log(typeof num)
        this.setState({ [num]: e.target.value})
    }

    // setSum = (num1, num2)=>{
    //     console.log(this.state.sum)
    //     this.setState ({sum: parseInt(num1)+parseInt(num2)})
    // }
    addNum = (num1,num2)=>{
        this.setState({sum: parseInt(num1)+parseInt(num2)})
    }
    subNum = (num1,num2)=>{
        this.setState({sum: parseInt(num1)-parseInt(num2)})
    }
    mulitplyNum = (num1,num2)=>{
        this.setState({sum: parseInt(num1)*parseInt(num2)})
    }
    divideNum = (num1,num2)=>{
        this.setState({sum: parseInt(num1)/parseInt(num2)})
    }
    
    

  render() {
    return (
      <div className="App-header">
        <h1>Add with React!</h1>

        <div className="add">
        
          <input name = "num1"type="number" value={this.state.num1} onChange={ (e)=> this.setNum(e,"num1")}/>
          <div>
              <button onClick={(e)=>{this.addNum(this.state.num1, this.state.num2)}}>Add</button>
              <button onClick={(e)=>{this.subNum(this.state.num1, this.state.num2)}} >Subtract</button>
              <button onClick={(e)=>{this.mulitplyNum(this.state.num1, this.state.num2)}}>Multiply</button>
              <button onClick={(e)=>{this.divideNum(this.state.num1, this.state.num2)}}>Divide</button>
          </div>
          <input name="num2" type="number" value={this.state.num2} onChange={ (e)=> this.setNum(e,"num2")}/>
          
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}
