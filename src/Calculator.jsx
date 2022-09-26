import React, { Component } from 'react'


export default class Calculator extends Component {
    State = {
      num1: 0,
      num2: 0,
      result: 0
    }

    setNum = (e, num) => {
      this.setState({
        [num]: Number(e.target.value)
      })
    }

    calculate = () => {
      // take the two values from state
      // add them together
      this.setState(prevState => {
        const addition = prevState.num1 + prevState.num2

        return {
          // set the result in state to be the new value
          result: addition
        }
      })
    }

    render(){
      return(
       <div className="container">
          <h1>Add with React!</h1>
      
       <div className="add">
        <input type="text" 
          placeholder='Enter num one..'
          value={this.state.num1}
          onChange={e => this.setNum(e, 'num1')}
          />

          <span>+</span>

        <input type="text"
          placeholder='Enter another num'
          value={this.state.num1}
          onChange={this.setNum}
          />

          <button onClick={this.calculate}>=</button>

          <h3>Addition results go here!</h3>
        </div>
      </div>   
        )
    }
}