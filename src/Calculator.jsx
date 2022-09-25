import React, { Component } from 'react'

export default class Calculator extends Component {
    
    state = {
        num1: "",
        num2: "",
        operator: "",
        results: ""
    }
    setVariable = (e, variable) => {
        this.setState({ [variable]:e.target.value})
        console.log(e)
    }
    calcNum = () => {
        this.setState((prevState, props) => {
            // console(prevState.num1)
            if(prevState.operator == "+"){
            return { results: parseInt(prevState.num1) + parseInt(prevState.num2) } 
            }else if(prevState.operator == "-"){
                return { results: parseInt(prevState.num1) - parseInt(prevState.num2) } 
            } else if (prevState.operator == "x") {
                return { results: parseInt(prevState.num1) * parseInt(prevState.num2) } 
            } else if (prevState.operator == "/") {
                return { results: parseInt(prevState.num1) / parseInt(prevState.num2) }
            }
        })
    }
    clearNum = () => {
        this.setState({
            num1: "",
            num2: "",
            operator: "",
            results: ""
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <input type="number"
                    name="num1"
                    value={this.state.num1}
                    onChange={ (e)=> this.setVariable(e, 'num1')}
                    placeholder="Enter your 1st number"/>
                    <select type="text" name="" value={this.state.operator} onChange={ (e)=> this.setVariable(e, 'operator')} required>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="x">x</option>
                        <option value="/">/</option>
                    </select>
                    <input type="number"
                    name="num1"
                    value={this.state.num2}
                    onChange={ (e)=> this.setVariable(e, 'num2')}
                    placeholder="Enter your 2nd number"/>
                    <button onClick={this.calcNum} type="submit">=</button>
                    <h3>Results: {this.state.results}</h3>
                    <button onClick={this.clearNum} type="submit">CLEAR!</button>
                </div>
            </div>
        )
    }
}