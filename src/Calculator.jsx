
import React, {Component} from "react";

export default class Calculator extends Component{
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
        // take num1 and num2 then add them together
        this.setState(prevState => {
            let result = 0
            if (prevState.operation === '+') {
                result = prevState.num1 + prevState.num2
            } else if (prevState.operation === '-') {
                result = prevState.num1 - prevState.num2
            }  else if (prevState.operation === '*') {
                result = prevState.num1 * prevState.num2
            }  else if (prevState.operation === '/') {
                result = prevState.num1 / prevState.num2
            } else {
                console.warn('Something when wrong')
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
                <div class='result'><h3>{this.state.result}</h3></div>

                <div class='operations'>
                <input type="text" placeholder='Enter num one...' value={this.state.num1} onChange={e => this.setNum(e,'num1')}/>
                <span>{this.state.operation}</span>
                
                <input type="text" placeholder="enter another num" value={this.state.num2} onChange={e => this.setNum(e, 'num2')}/>
                <button class='calculate-btn'
                onClick={this.calculate}>=</button>
                </div>
                

                <button class='operation-btn' onClick={() => this.setOperation('+')}>+</button>
                <button class='operation-btn' onClick={() => this.setOperation('-')}>-</button>
                <button class='operation-btn' onClick={() => this.setOperation('x')}>x</button>
                <button class='operation-btn' onClick={() => this.setOperation('/')}>/</button>
            </div>
            </div>
        )
    }
}
   