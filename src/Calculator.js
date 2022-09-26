import React, { Component } from 'react'

class Calculator extends Component {

state= {
    num1: 0,
    num2: 0,
    sum: 0
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
        const addition = prevState.num1 + prevState.num2
        return {
            //set the result in state to be the new value
            sum: addition
        }
    })
};



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
            </div>
        </div>
    )
}




}

export default Calculator