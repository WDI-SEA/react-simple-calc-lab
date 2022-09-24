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
            <div>
                <h1 className="text-center text-4xl font-bold">Do maths with React!</h1>
                <div>
                    <form onSubmit={this.performOperation}>
                        <div className="flex flex-col items-center">
                            <input type="number" name="num1" placeholder="Enter your first number" 
                                value={this.state.num1} 
                                onChange={this.setValue}
                                className="w-64 mt-2 p-3 bg-black border rounded text-center focus:placeholder-black"
                            />
                            <input type="text" name="operator" placeholder="+, -, *, /" 
                                value={this.state.operator} 
                                onChange={this.setValue}
                                className="w-24 mt-2 p-3 bg-black border rounded text-center focus:placeholder-black"
                            />
                            <input type="number" name="num2" placeholder="Enter your second number" 
                                value={this.state.num2} 
                                onChange={this.setValue}
                                className="w-64 mt-2 p-3 bg-black border rounded text-center focus:placeholder-black"
                            />
                            <button type="submit">=</button>
                        </div>
                    </form>
                    <h1 className="w-fit h-fit mx-auto mt-2 p-3 bg-black border rounded text-center text-4xl">{this.state.sum}</h1>
                </div>
            </div>
        );
    }
}

export default Calculator;
