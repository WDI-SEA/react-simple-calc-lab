import React, {Component} from "react";

export default class Calculator extends Component {

    state = {
        num1: 0,
        num2: 0
   
    }

    setNum =(e, num) => {
        this.setState({[num]: e.target.value})
    }
    handleSum = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState(() => {
            return {
                sum: num1 - num2
            }
        })
    }

    handleSub = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState(() => {
            return {
                sum: num1 - num2
            }
        })
    }

    handleMultiply = () => {
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





    render () {
        return(
            
            <div className="container">
                <h1>Add with React!</h1>

            <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
            />
             <button onClick={this.handleSum}>+</button>
             <button onClick={this.handleSub}>-</button>
             <button onClick={this.handleMultiply}>*</button>
             <button onClick={this.handleDivide}>/</button>

            <input type="number"
                    name="num2"
                    placeholder="Enter your first number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
            />

                    
                    <h3>{this.state.sum}</h3>
            </div>
        )
    }
}