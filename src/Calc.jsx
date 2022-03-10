import React, { Component } from 'react';

class Calc extends Component {
    state = {
        num1: '',
        num2: '',
        sum: '',
        operator: '+'
    }

    calculate = (e) => {
        e.preventDefault()

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
                // switch cases, it is good practice to put a default error handler
                default:
                    console.log('I have never heard of that math before') 
                    break
            }
            return { 
                // sum: this.state.num1 + this.state.num2
                sum: operation
            }
        })
    }

    setNum = (e) => {
        this.setState({ [e.target.name]: parseInt(e.target.value) }) // parseInt to make the numbers add instad of concatenating
    }

    handleSetOperator = (e) => {
        this.setState({
            operator: e.target.name
        })
    }

    render() { 
        return (
            <div className="caclulator">
                <h1>Add with React!</h1>

                <form onSubmit={this.calculate}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    <span>{this.state.operator}</span>
                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />
                    <button>=</button>
                    <h3>{this.state.sum}</h3>
                </form>

                <button 
                    name='+'
                    onClick={this.handleSetOperator}
                >
                    +
                </button>

                <button 
                    name='-'
                    onClick={this.handleSetOperator}
                >
                    -
                </button>

                <button 
                    name='*'
                    onClick={this.handleSetOperator}
                >
                    *
                </button>

                <button 
                    name='/'
                    onClick={this.handleSetOperator}
                >
                    /
                </button>

            </div>
        );
    }
}
 
export default Calc;