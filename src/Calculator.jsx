import React, { Component } from "react"

export default class Calculator extends Component {
    state = {
        firstNum: null,
        secNum: null,
        output: null,
        math: "+"
      }
      handleMath = e => {
        console.log(e.target.value);
        this.setState({
            math: e.target.value
        })
      }
      handleInput = e => {
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value,
        },
            () => {
                if (this.state.firstNum !== null && this.state.secNum !== null) {
                    const mathSign = this.state.math;
                    let sum;
                    switch (mathSign) {
                        case "-":
                        sum = parseInt(this.state.firstNum) - parseInt(this.state.secNum);
                        break;
                        case "*":
                        sum = parseInt(this.state.firstNum) * parseInt(this.state.secNum);
                        break;
                        case "/":
                        sum = parseInt(this.state.firstNum) / parseInt(this.state.secNum);
                        break;
                        default:
                        sum = parseInt(this.state.firstNum) + parseInt(this.state.secNum);
                        }
                    console.log(this.state.firstNum + " " + this.state.math + " " + this.state.secNum + " = " + sum);
                    this.setState({
                        output: sum
                    })
                }
            }
        )
    }
    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <input type="text" id="firstNum" onChange={this.handleInput} value={this.state.firstNum}/>
                    {/* <span> + </span> */}
                    <label for="math"></label>
                    <select onChange={this.handleMath}>
                        <option value="+"> + </option>
                        <option value="-"> - </option>
                        <option value="/"> / </option>
                        <option value="*"> * </option>
                    </select>
                    <input type="text" id="secNum" onChange={this.handleInput} value={this.state.secNum}/>
                    <button>=</button>
                    <h3>{this.state.output ?  `${this.state.output}` : "Type in some numbers!"}</h3>
                </div>
            </div>
        )
    }
    
}