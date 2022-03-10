import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    num1: '',
    num2: '',    
    sum: ''
  }

  addNumbers = (e) => {
   e.preventDefault()
      this.setState({
        sum: this.state.num1 + this.state.num2
      })    
  }

  handleChange = (e) => {    
    const updatedInput = {
        [e.target.name]: e.target.value * 1,
    
      }
      this.setState({
        ...updatedInput, 
        error: "",
        result: ""
      }, ()=> console.log(this.state))
  }

  render () {
    return (
      <div className='container'>
        <h1>Add with React!</h1>

        <div className='add'>
          <form onSubmit={this.addNumbers}>
            <input 
                required
                type='number' 
                name='num1'
                onChange={this.handleChange}
                value={this.props.num1} />
            <span>+</span>
            <input 
                required
                type='number' 
                name='num2'
                onChange={this.handleChange}
                value={this.props.num2} />
            <button type='submit'>=</button>
          </form>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
