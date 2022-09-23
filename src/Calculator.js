import React, { Component } from "react";

class Calculator extends Component {
    state = {
      num1: "",
      operator: "",
      num2: "",
      sum: ""
    }
    setValue = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    performOperation = e => {
        e.preventDefault();
        this.setState(prevState => {
            switch (this.state.operator) {
                case "+":
                    return {
                        sum: parseInt(prevState.num1) + parseInt(prevState.num2),
                        num1: "",
                        operator: "",
                        num2: ""
                    }
                    break;
                case "-":
                    return {
                        sum: parseInt(prevState.num1) - parseInt(prevState.num2),
                        num1: "",
                        operator: "",
                        num2: ""
                    }
                    break;
                case "*":
                    return {
                        sum: parseInt(prevState.num1) * parseInt(prevState.num2),
                        num1: "",
                        operator: "",
                        num2: ""
                    }
                    break;
                case "/":
                    return {
                        sum: parseInt(prevState.num1) / parseInt(prevState.num2),
                        num1: "",
                        operator: "",
                        num2: ""
                    }
                    break;
                default:
                    return {
                        sum: "Invalid arithmetic operator",
                        num1: "",
                        operator: "",
                        num2: ""
                    }
                    break;
            }
        });
    }
    render() {
        return (
            <div className="container">
                <h1>Do maths with React!</h1>
                <div>
                    <form onSubmit={this.performOperation}>
                        <input type="number" name="num1" placeholder="Enter your first number" 
                            value={this.state.num1} 
                            onChange={this.setValue}
                        />
                        <input type="text" name="operator" placeholder="+, -, *, /" 
                            value={this.state.operator} 
                            onChange={this.setValue}
                        />
                        <input type="number" name="num2" placeholder="Enter your second number" 
                            value={this.state.num2} 
                            onChange={this.setValue}
                        />
                        <button type="submit">=</button>
                    </form>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;
