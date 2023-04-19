import React, { Component } from 'react'


export default class Calculator extends Component {
    
    state = {
        num1: 0,
        num2: 0,
        sum: 0
    }

    setNum = (e, num) => {
        this.setState({
            [num]: e.target.value
        })
    }

    addNums = () => {
        const { num1, num2 } = this.state
        console.log('added')
        this.setState({
            sum: parseInt(num1) + parseInt(num2)
        })
    }

    render() {
        const { sum } = this.state
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">

                    <input type="number" 
                    name='num1' 
                    placeholder='Enter your first number' value={this.state.num1} 
                    onChange={ (e) => this.setNum(e, 'num1') }/>

                    <span>+</span>

                    <input type="text" 
                    name='num2'
                    placeholder='Enter your next number'
                    value={this.state.num2}
                    onChange={ (e)  => this.setNum(e, 'num2')}
                    />
                    <button type='submit' onClick={this.addNums}>=</button>
                    <h3>Addition results go here!</h3>
                    <h4>Results: {sum}</h4>
                </div>
            </div>
        )
    }
}