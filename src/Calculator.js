import React, { Component } from "react";

class Calculator extends Component {
    state = {
      num1: "",
      num2: "",
      sum: ""
    }
    setNum = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    addNums = e => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                sum: parseInt(prevState.num1) + parseInt(prevState.num2),
                num1: "",
                num2: ""
            }
        });
    }
    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <form onSubmit={this.addNums}>
                        <input type="number" name="num1" placeholder="Enter your first number" 
                            value={this.state.num1} 
                            onChange={this.setNum}
                        />
                        <span>+</span>
                        <input type="number" name="num2" placeholder="Enter your second number" 
                            value={this.state.num2} 
                            onChange={this.setNum}
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
