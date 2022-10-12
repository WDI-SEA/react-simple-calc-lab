import React, { Component } from 'react';

export default class Calc extends Component {
    //setting state
    state = {
        firstNum: '',
        secondNum: '',
        function: '',
        result: ''
    }
    //helper methods
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    calculate = (e) => {
        e.preventDefault()
        let result;
        if (this.state.function === '+') {
            result = parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
        } else if (this.state.function === '-') {
            result = parseInt(this.state.firstNum) - parseInt(this.state.secondNum)
        } else if (this.state.function === '*') {
            result = parseInt(this.state.firstNum) * parseInt(this.state.secondNum)
        } else if (this.state.function === '/') {
            result = parseInt(this.state.firstNum) / parseInt(this.state.secondNum)
        }
        this.setState((prevState) => {
            return {
                firstNum: prevState.firstNum,
                secondNum: prevState.secondNum,
                function: prevState.function,
                result: result
            }
        })
    }
    clearAll = () => {
        this.setState({
            firstNum: '',
            secondNum: '',
            result: '',
            function: ''
        })
    }
    render() {
        return (
            <div className="calc">
                <h1>React Calc</h1>
                <div className="add">
                    <input
                        type="number"
                        placeholder="enter Num 1"
                        name="firstNum"
                        value={this.state.firstNum}
                        onChange={this.handleChange}
                    />

                    <input
                        type="number"
                        placeholder="enter Num 2"
                        name="secondNum"
                        value={this.state.secondNum}
                        onChange={this.handleChange}
                    />

                    <button onClick={this.calculate}>=</button>

                    <h3>{this.state.result}</h3>

                    <div>
                        <label htmlFor='function'>Select function:</label>
                        <input type='button' name='function' onClick={this.handleChange} value='+' />
                        <input type='button' name='function' onClick={this.handleChange} value='-' />
                        <input type='button' name='function' onClick={this.handleChange} value='*' />
                        <input type='button' name='function' onClick={this.handleChange} value='/' />
                    </div>
                </div>
            </div>
        )
    }
};
