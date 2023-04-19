import React, { Component } from 'react'

export default class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        results: "Press a button to do maths"
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    addNum = () => {
        this.setState({
            sum: parseInt(this.state.num1) + parseInt(this.state.num2),
            results: `${this.state.num1} + ${this.state.num2} = `
        })
    }
    subtractNum = () => {
        this.setState({
            sum: this.state.num1 - this.state.num2,
            results: `${this.state.num1} - ${this.state.num2} = `
        })
    }
    multiplyNum = () => {
        this.setState({
            sum: this.state.num1 * this.state.num2,
            results: `${this.state.num1} * ${this.state.num2} = `
        })
    }
    divideNum = () => {
        this.setState({
            sum: this.state.num1 / this.state.num2,
            results: `${this.state.num1} / ${this.state.num2} = `
        })
    }

    render () {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number" name="num1" value={this.state.num1} onChange={ (e) => this.setNum(e, 'num1')} />
                    <input type="number" name="num2" value={this.state.num2}  onChange={ (e) => this.setNum(e, 'num2')}/>
                    <div>
                    <button onClick={this.addNum}>add</button>
                    <button onClick={this.subtractNum}>subtract</button>
                    <button onClick={this.multiplyNum}>multiply</button>
                    <button onClick={this.divideNum}>divide</button>
                    </div>
                    <h3>{this.state.results}{this.state.sum}</h3>
                </div>
            </div>
        )
    }

    

}