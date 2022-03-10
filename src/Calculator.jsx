import React, { Component } from 'react';

class Calculator extends Component {
    state = { 
       num1: 0,
       num2: 0,
       sum: 0
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
             sum: numSum
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

                <span>+</span>

                <input type="number"
                name='num2'
                placeholder='enter second number'
                value={this.state.num2}
                onChange = {(e)=>this.setNum(e, 'num2')} />

                <button
                name='sum'
                // value={this.state.sum}
                onClick = {this.getSum}
                >=</button>

                <h3>{this.state.sum}</h3>
            </div>
        </div>
        )
    }
}
 
export default Calculator;
