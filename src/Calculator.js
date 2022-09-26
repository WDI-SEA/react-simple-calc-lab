import React, { Component } from 'react'

class Calculator extends Component {

state= {
    num1: 0,
    num2: 0,
    sum: 0,
    operation:'+'
};


//function to handle the changes of the state
setNum = (e,num) => {
    // console.log(num, e)
    this.setState({ [num]: Number(e.target.value)});
  };

calculate = () => {
    //take the two values from state
    //add them together
    this.setState(prevState => {
        let sum = 0
        if(prevState.operation === '+') {
            sum = prevState.num1 + prevState.num2
        } else if (prevState.operation === '-') {
            sum = prevState.num1 - prevState.num2 
        } else if (prevState.operation === '/') {
            sum = prevState.num1 / prevState.num2 
        } else if (prevState.operation === '*') {
            sum = prevState.num1 * prevState.num2 
        } else {
            console.warn('something has gone wrong with the math')
        }
        return {
            //set the result in state to be the new value
            sum
        }
    })
};

setOperation = operation => this.setState({ operation })



render() {
    
    return (
        <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
                <input type="text" name="num1" placeholder="Enter a number" value={this.state.num1}
                    onChange={e => this.setNum(e, 'num1')} />
                <span>+</span>
                <input type="text" name="num2" placeholder="Enter a number" value={this.state.num2}
                    onChange={ e => this.setNum(e, 'num2')} />
                <button onClick={this.calculate}>=</button>
                <h3>= {this.state.sum}</h3>
                <button onClick={() => this.setOperation('+')}>+</button>
                <button onClick={() => this.setOperation('-')}>-</button>
                <button onClick={() => this.setOperation('/')}>/</button>
                <button onClick={() => this.setOperation('*')}>*</button>
            </div>
        </div>
    )
}




}

export default Calculator