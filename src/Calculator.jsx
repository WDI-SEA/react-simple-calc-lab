import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        numOne: '',
        numTwo: '',
        sum: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    doMath = e => {
        e.preventDefault()
        this.setState(prevState => {
            const sum = Number(prevState.numOne) + Number(prevState.numTwo)
            return {
                sum
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
                    <span>+</span>
                    <input type='number'
                        name='numTwo'
                        value={this.state.numTwo}
                        onChange={this.handleChange}
                    />
                    <button type='submit' onClick={this.doMath}>=</button>
                    <h3>{this.state.sum}</h3>
                </form>
            </div>
        )
    }
}

export default Calculator