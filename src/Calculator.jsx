import React, { Component } from 'react';

class Calculator extends Component {
    state = { 
       num1: '',
       num2: '',
       result: ''
     } 

     setNum = (e, num) => {
        //  console.log(e.target.value)
         this.setState({ [num]: e.target.value})
     }

     getSum = () => {
         let num1 = this.state.num1
         let num2 = this.state.num2
         let numSum  = parseInt(num1) + parseInt(num2)
         this.setState({
             result: numSum
         })
     }

     subtract = () => {
        let result = parseInt(this.state.num1) - parseInt(this.state.num2)
        this.setState({
            result: result
        })
     }

     multiply = () => {
         let result = parseInt(this.state.num1) * parseInt(this.state.num2)
         this.setState({
            result: result
        })
     }
     divide = () => {
         let result = parseInt(this.state.num1) / parseInt(this.state.num2)
         this.setState({
            result: result
        })
     }

    render() { 
        return (
        <div className="container">
         <h1>Add with React!</h1>

            <div className="add">

                <input type="number" 
                name='num1'
                placeholder='enter first number'
                value={this.state.num1}
                onChange = {(e)=>this.setNum(e, 'num1')}
                />

                <span></span>

                <input type="number"
                name='num2'
                placeholder='enter second number'
                value={this.state.num2}
                onChange = {(e)=>this.setNum(e, 'num2')} />

                <button
                // name='sum'
                // value={this.state.sum}
                onClick = {this.getSum}
                >+</button>
                <button
                // name='subtract'
                // value={this.state.sum}
                onClick = {this.subtract}
                >-</button>
                <button
                // name='multiply'
                // value={this.state.sum}
                onClick = {this.multiply}
                >x</button>
                <button
                // name='divide'
                // value={this.state.sum}
                onClick = {this.divide}
                >/</button>

                <h3>{this.state.result}</h3>
            </div>
        </div>
        )
    }
}
 
export default Calculator;
