import React, { Component } from 'react'
import './App.css'

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        sum: ''
    }

    setNum = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

  handleSum = (e) => {
      e.preventDefault()
      let num1 = parseInt(this.state.num1)
      let num2 = parseInt(this.state.num2)
      this.setState({ total: num1 + num2 })
  }

    render() {
        return(
            <div className="container">
                <h1>Add with React!</h1>


                <form onSubmit={this.handleSum}>
                    <input
                        type="number"
                        name="num1"
                        placeholder="enter num 1"
                        value={this.state.num1}
                        onChange = {this.setNum}
                    />

                    <span>+</span>

                    <input
                        type="number"
                        name="num2"
                        placeholder="enter num 2"
                        value={this.state.num2}
                        onChange = {this.setNum}
                        />
                    <button> = </button>

                    <h3>{this.state.total}</h3>
                </form>
            </div>
        )
    }
}

export default Calculator