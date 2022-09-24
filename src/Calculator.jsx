import React, { Component } from 'react'

export default class Calculator extends Component {
    
    state = {
        num1: '',
        num2: '',
        results: ""
    }
    setNum = (e, num) => {
        this.setState({ [num]:e.target.value})
        console.log(e)
    }
    addNum = e => {
        this.setState((prevState => {
            console(prevState.num1)
            return {
                results: prevState.results
            }
        }))
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <input type="number"
                    name="num1"
                    value={this.state.num1}
                    onChange={ (e)=> this.setNum(e, 'num1')}
                    placeholder="Enter your 1st number"/>
                    <span>+</span>
                    <input type="number"
                    name="num1"
                    value={this.state.num2}
                    onChange={ (e)=> this.setNum(e, 'num2')}
                    placeholder="Enter your 2nd number"/>
                    <button onClick={this.addNum} type="submit">=</button>
                    <h3>{this.state.results}</h3>
                </div>
            </div>
        )
    }
}