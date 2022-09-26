import React, { Component } from 'react'

class Calculator extends Component {

state= {
    num1: '',
    num2: '',
    sum: ''
};


//function to handle the changes of the state
setNum = (e) => {
    // console.log(e.target)
    this.setState({ [e.target.value]: (e.target.value)});
  };

addNumber = () => {
    let num1 = Number(this.state.num1);
    let num2 = Number(this.state.num2);
    this.setState({sum: num1 + num2 });
};



render() {
    
    return (
        <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
                <input type="number" name="num1" placeholder="Enter a number" value={this.state.num1}
                    onChange={this.setNum} />
                <span>+</span>
                <input type="number" name="num2" placeholder="Enter a number" value={this.state.num2}
                    onChange={this.setNum} />
                <button onClick={this.addNumber}>=</button>
                <h3>= {this.state.addNumber}</h3>
            </div>
        </div>
    )
}




}

export default Calculator