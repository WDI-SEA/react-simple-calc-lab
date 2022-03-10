import React, { Component } from 'react'
import './App.css';

class Calculator extends Component {
    state = {
        num1: '',
        num2: '', 
        total: ''
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    handleCalculate = (num1, num2) => {
        let int1 = Number(num1)
        let int2 = Number(num2)
        let result = int1 + int2
        this.setState({
            total: result
        })
    }


    render() { 
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <input 
                        type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input 
                        type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={ () => this.handleCalculate(this.state.num1, this.state.num2) }>=</button>
                    {/* <button onClick={this.handleCalculate}>=</button> */}
                    <h3>{this.state.total}</h3>
                </div>

            </div>
        );
    }
}
 
export default Calculator;