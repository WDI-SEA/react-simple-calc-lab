
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
    state = {
      num1: '',
      num2: '',
      sum: ''
    }
}

  setNum = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  addNums = (e) =>{
    e.preventDefault('new item has been submitted')
      setTotal(num1 + num2);
    
  }

  render(){
    return(
  <div className="caclulator">
  <h1>Add with React!</h1>

  <form onSubmit={this.calculate}>
      <input type="number" 
          name="num1"
          placeholder="enter number"
          value={this.state.num1}
          onChange={this.setNum}
      />
      <span>+</span>
      <input type="number" 
          name="num2"
          placeholder="enter number"
          value={this.state.num2}
          onChange={this.setNum}
      />
      <button>=</button>
      <textarea
        name="sum"
        placeholder="answer"
        value={this.state.sum}
        onChange={this.setNum}
      > 
      </textarea>

      <h3>{this.state.sum}</h3>
  </form>
</div>
  )
}