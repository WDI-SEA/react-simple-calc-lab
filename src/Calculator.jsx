import React, { Component } from 'react'


export default class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0,
    operation: '+'
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
        let result = 0
            if (prevState.operation === '+') {
                result = prevState.num1 + prevState.num2
            } else if (prevState.operation === '-') {
                result = prevState.num1 - prevState.num2
            } else if (prevState.operation === '/') {
                result = prevState.num1 / prevState.num2
            } else if (prevState.operation == '*') {
                result = prevState.num1 * prevState.num2
            } else {
                console.warn('something has gone wrong with the math!')
            }

        return {
          // set the result in state to be the new value
          result
        }
      })
    }

    setOperation = operation => this.setState({ operation })

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

            <span>{this.state.operation}</span>

          <input 
            type="text"
            placeholder='Enter another num'
            value={this.state.num2}
            onChange={e => this.setNum(e, 'num2')}
            />

                      <button onClick={this.calculate}
                    >=</button>

                    <h3>{this.state.result}</h3>

                    <button onClick={() => this.setOperation('+')}>+</button>
                    <button onClick={() => this.setOperation('-')}>-</button>
                    <button onClick={() => this.setOperation('/')}>/</button>
                    <button onClick={() => this.setOperation('*')}>*</button>
                </div>
            </div>
        )
    }
}
