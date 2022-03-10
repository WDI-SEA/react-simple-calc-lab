import React, { Component } from 'react'
import './App.css'

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        sum: '',
        operator: '+'
    }

// my method
//     setNum = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//   handleSum = (e) => {
//       e.preventDefault()
//       let num1 = parseInt(this.state.num1)
//       let num2 = parseInt(this.state.num2)
//       this.setState({ total: num1 + num2 })
//   }

// Weston's method
    calculate = (e) => {
        e.preventDefault()
        
        this.setState(prevState => {
            let operation = 0
            switch (this.state.operator) {
                case '+':
                    operation = prevState.num1 + prevState.num2
                    break
                case '*':
                    operation = prevState.num1 * prevState.num2
                    break
                case '-':
                    operation = prevState.num1 - prevState.num2
                    break
                case '/':
                    operation = prevState.num1 / prevState.num2
                    break
                default:
                    console.log('I have never heard of that math before!')
                    break
            }
            return {
                sum: operation
            }
            // sum: this.state.num1 + this.state.num2 // this is when we're only doing addition
        })
        
    }

    // setNum = (e, num) => {
    //     this.setState({ [num]: e.target.value })
    // } 
    // DON'T NEED TO DO IT THIS BC WE ALREADY NAMED NUM AS NUM1/NUM2 IN THE FORM, SO WE CAN JUST CALL IT .NAME 

    setNum = (e) => {
        // if we do parseInt here, we don't have to do it for each number
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }

    handleSetOp = (e) => {
        this.setState({
            operator: e.target.name
        })
    }

    render() {
        return(
            <div className="container">
                <h1>Add with React!</h1>


                <form onSubmit={this.calculate}>
                    <input
                        type="number"
                        name="num1"
                        value={this.state.num1}
                        onChange = {this.setNum}
                    />

                    {/* <span>+</span> */}
                    <span>{this.state.operator}</span> 

                    <input
                        type="number"
                        name="num2"
                        value={this.state.num2}
                        onChange = {this.setNum}
                    />

                    <button> = </button>

                    <h3>{this.state.sum}</h3>
                </form>

            {/* these buttons need to be OUTSIDE of the form */}
                <button name="+" onClick={this.handleSetOp}> + </button>
                <button name="-" onClick={this.handleSetOp}> - </button>
                <button name="*" onClick={this.handleSetOp}> * </button>
                <button name="/" onClick={this.handleSetOp}> / </button>

            </div>
        )
    }
}

export default Calculator