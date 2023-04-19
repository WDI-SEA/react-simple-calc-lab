import React, { Component } from 'react'


export default class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        operation: "add"
    }

    setNum = (e, num) => {
        this.setState({[num]: e.target.value})
    }
    
    setOperation = (e) => {
        this.setState(()=> {
            return {
                operation: e.target.value
            }
        })
    }
    handleSum = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState(() => {
            return {
                sum: num1 + num2
            }
        })
    }
    handleSubtract = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState(() => {
            return {
                sum: num1 - num2
            }
        })
    }

    handleMulitply = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState(() => {
            return {
                sum: num1 * num2
            }
        })
    }
    handleDivide = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState(() => {
            return {
                sum: num1 / num2
            }
        })
    }
    handleOperation = () => {
        if (this.state.operation === "add") {
            this.handleSum()
        } else if (this.state.operation === "subtract") {
            this.handleSubtract()
        } else if (this.state.operation === "multiply") {
            this.handleMultiply()
        } else if (this.state.operation === "divide") {
            this.handleDivide()
        }
    }
    
    
    render () {
        return (
            <div className="container">
                <h1>Add with React</h1>

                <input 
                    type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value ={this.state.num1}
                    onChange= {(e) => this.setNum(e, 'num1')}
                    />
                <select onChange={this.setOperation}>
                    <option value="add" >add</option>
                    <option value="subtract">subtract</option>
                    <option value="multiply">multiply</option>
                    <option value="divide">divide</option>
                </select>
                {/* <button onClick={this.handleSum}>+</button>    
                <button onClick={this.handleSubtract}>-</button>    
                <button onClick={this.handleMultiply}>*</button>    
            <button onClick={this.handleDivide}>/</button>     */}
                <input 
                    type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value ={this.state.num2}
                    onChange= {(e) => this.setNum(e, 'num1')}
                    />
                <span>=</span>
                <h3>Results go here!</h3>
                <h3>{this.state.sum}</h3>

            </div>
        )
        
    }
}