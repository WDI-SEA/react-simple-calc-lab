import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        numOne: '',
        operation: 'add',
        numTwo: '',
        result: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doMath = e => {
        e.preventDefault()
        this.setState(prevState => {
            let result = ''
            if (prevState.operation === 'add') {
                result = Number(prevState.numOne) + Number(prevState.numTwo)
            } else if (prevState.operation === 'subtract') {
                result = Number(prevState.numOne) - Number(prevState.numTwo)
            } else if (prevState.operation === 'multiply') {
                result = Number(prevState.numOne) * Number(prevState.numTwo)
            } else if (prevState.operation === 'divide') {
                result = Number(prevState.numOne) / Number(prevState.numTwo)
            }
            return {
                result
            }
        })
    }

    render() {
        return (
            <div className='container'>
                <h1>Add with React!</h1>

                <form>
                    <input type='number'
                        name='numOne'
                        value={this.state.numOne}
                        onChange={this.handleChange}
                    />
                    <select name='operation' value={this.state.operation} onChange={this.handleChange}>
                        <option value='add'>+</option>
                        <option value='subtract'>-</option>
                        <option value='multiply'>*</option>
                        <option value='divide'>/</option>
                    </select>
                    <input type='number'
                        name='numTwo'
                        value={this.state.numTwo}
                        onChange={this.handleChange}
                    />
                    <button type='submit' onClick={this.doMath}>=</button>
                    <span><strong>{this.state.result}</strong></span>
                </form>
            </div>
        )
    }
}

export default Calculator