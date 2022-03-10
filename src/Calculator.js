import React, { Component } from 'react';

export default class Calculator extends Component {
   
    state = {
        num1: null,
        num2: null,
        result: 0,
        operator: "+"
    }
    calculate = (e) => {
        e.preventDefault()
        if (this.state.num1 === null || this.state.num2 === null) return console.log("nope")
        // this.setState({
        //     result: this.state.num1 + this.state.num2
        // })
        
        this.setState(prevState => {
            let operation = 0
            switch (this.state.operator) {
                case '+':
                    operation = prevState.num1 + prevState.num2
                    break
                case '-':
                    operation = prevState.num1 - prevState.num2
                    break
                case '*':
                    operation = prevState.num1 * prevState.num2
                    break
                case '/':
                    operation = prevState.num1 / prevState.num2
                    break
                default: 
                    console.log("I have never heard of that math before!")
                    break

            }
            return {
                result: operation
            }
        })
    }

    setNum = (e) => {
        this.setState({[e.target.name]: parseInt(e.target.value)})
    }

    handleSetOp = (e) => {
        this.setState({
            operator: e.target.name
        })
    }

    render() {
        return( 
            <div className="App">
                <h1>Add With React</h1>

                <form onSubmit={this.calculate}>
                    <input type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1 || ''}
                        onChange={this.setNum}
                    />
                    <span>+</span>
                    <input type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        value={this.state.num2 || ''}
                        onChange={this.setNum} 
                    />
                    <button>=</button>
                    <h3>{this.state.result}</h3>
                </form>

                <button 
                    name="+"
                    onClick={this.handleSetOp}
                    >
                        +
                </button>

                <button 
                    name="-"
                    onClick={this.handleSetOp}
                    >
                        -
                </button>

                <button 
                    name="*"
                    onClick={this.handleSetOp}
                    >
                        *
                </button>

                <button 
                    name="/"
                    onClick={this.handleSetOp}
                    >
                        /
                </button>

            </div>
        )
    }
}