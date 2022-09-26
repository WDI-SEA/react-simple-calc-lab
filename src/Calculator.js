import React, { Component } from 'react';
import './App.css';

export default  class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        result: 0,
        operation: '+'
    }

    setNum = (e, num) => {        
        this.setState({
            [num]: e.target.value
        })
    }

    calculate = () => {
        this.setState(prevState => {
            let result = 0
            // const addition = prevState.num1 + prevState.num2
            if(prevState.operation === '+') {
                result = prevState.num1 + prevState.num2
            } else if (prevState.operation === '-') {
                result = prevState.num1 - prevState.num2
            } else if (prevState.operation === '*') {
                result = prevState.num1 * prevState.num2
            }else if (prevState.operation === '/') {
                result = prevState.num1 / prevState.num2
            } else {
                console.warn('something has gone wrong...')
            }
    

            return {
                result
            }
        })
    }

    setOperation = operation => this.setState({ operation })

  render() {
    return (
        <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
            <input type="text" 
                placeHolder="Enter number one..."
                value={this.state.num1}
                onChange={e => this.setNum(e, 'num1')}
            />
            <span>{this.state.operation}</span>
            <input 
                type="text" 
                placeholder='enter another num...'
                value={this.state.num2}
                onChange={this.setNum}
            />
            <button 
                onClick={this.calculate}
            >=</button>
            <h3>{this.state.result}</h3>

            <button onClick={() => this.setOperation('+')} >+</button>
            <button onClick={() => this.setOperation('-')} >-</button>
            <button onClick={() => this.setOperation('*')} >*</button>
            <button onClick={() => this.setOperation('/')} >/</button>

        </div>
        </div>
        );
}
}



