import React, { Component } from 'react'

export default class Calculator extends Component {

    state = {
        num1: '',
        num2: '',
        result: 0
    }

    setNum = (e, num) => {
        this.setState({ 
            [num]: e.target.value
        })
    }

    handleSubmit = () => {
        const { num1, num2 } = this.state
        const result = parseFloat(num1) + parseFloat(num2)
        this.setState({ result })
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
                        placeholder="Enter your first number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={this.handleSubmit}>=</button>
                    <h3>Sum: {this.state.result}</h3>
                </div>
            </div>

        )
    }
}
