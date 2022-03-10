import React, { Component } from 'react';

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        sum: 0,
    }

    calculate = (e) => {
        e.preventDefault()
        this.setState({
            sum: this.state.num1 + this.state.num2
        })
    }

    setNum = (e) => {
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }

    render() { 
        return(
            <div className="caclulator">
                <h1>Add with React!</h1>

                <form onSubmit={this.calculate}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    <span>+</span>
                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />
                    <button>=</button>
                    <h3>{this.state.sum}</h3>
                </form>
            </div>
        )
    }
}
 
export default Calculator;