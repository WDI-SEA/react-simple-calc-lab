import React, { Component } from 'react'

class Calculator extends Component {
    //setting state
    state = {
        firstNum: '',
        secondNum: '',
        result: '',
        method: ''
    }
    //helper methods
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    calcResult = (e) => {
        e.preventDefault()
        let calcResult;
        if (this.state.method === '+') {
            calcResult = parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
        } else if (this.state.method === '-') {
            calcResult = parseInt(this.state.firstNum) - parseInt(this.state.secondNum)
        } else if (this.state.method === '*') {
            calcResult = parseInt(this.state.firstNum) * parseInt(this.state.secondNum)
        } else if (this.state.method === '/') {
            calcResult = parseInt(this.state.firstNum) / parseInt(this.state.secondNum)
        }
        this.setState((prevState) => {
            return {
                firstNum: prevState.firstNum,
                secondNum: prevState.secondNum,
                method: prevState.method,
                result: calcResult
            }
        })
    }

    clearAll = () => {
        this.setState({
            firstNum: '',
            secondNum: '',
            result: '',
            method: ''
        })
    }
    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="add">
                    <input
                        type="number"
                        placeholder="enter first number"
                        name="firstNum"
                        value={this.state.firstNum}
                        onChange={this.handleChange}
                    />

                    <input
                        type="number"
                        placeholder="enter second number"
                        name="secondNum"
                        value={this.state.secondNum}
                        onChange={this.handleChange}
                    />

                    <div>
                        <label htmlFor='method'>select method:</label>
                        <input type='button' name='method' onClick={this.handleChange} value='+' />

                        <input type='button' name='method' onClick={this.handleChange} value='-' />

                        <input type='button' name='method' onClick={this.handleChange} value='*' />

                        <input type='button' name='method' onClick={this.handleChange} value='/' />

                    </div>
                    <button onClick={this.calcResult}>Calculate</button>
                    <button onClick={this.clearAll}>Clear</button>
                    <h3>{this.state.firstNum} {this.state.method} {this.state.secondNum} = {this.state.result}</h3>
                </div>
            </div>
        )
    }
}



export default Calculator