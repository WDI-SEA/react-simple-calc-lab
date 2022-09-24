import React, { Component } from 'react'

export default class Calculator extends Component {
    state = {
        operator: "",
        numOne: "",
        numTwo: "",
        result: "",
        resultArr: []
    }

    clearSubmit = () => {
        console.log("clear list")
        this.setState({
            resultArr: []
        })
    }

    handleInputChange = (e, num) => {
        console.log(e)
        this.setState({
            [num]: e.target.value
        })
    }

    handleSignChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        console.log(e)
        let resultNum
        switch (this.state.operator) {
            case '+':
                resultNum = {
                    result: parseInt(this.state.numOne) + parseInt(this.state.numTwo)
                }
                break
            case '-':
                resultNum = {
                    result: parseInt(this.state.numOne) - parseInt(this.state.numTwo)
                }
                break
            case '*':
                resultNum = {
                    result: parseInt(this.state.numOne) * parseInt(this.state.numTwo)
                }
                break
            case '/':
                resultNum = {
                    result: parseInt(this.state.numOne) / parseInt(this.state.numTwo)
                }
                break
            default:
                resultNum = {
                    result: 'Please enter an operator (e.g. + - / *)'
                }
        }
        this.setState(() => {  
            return {
                resultArr: [resultNum]
            }
        })
    }

   

    render() {

        const postResult = this.state.resultArr.map((result, i) => {
            return (
                <>
                    <h2>{result.result}</h2>
                </>
            )
        })

        return (
        <div className="container">
            <h1>Calculate with React!</h1>

            <form onSubmit={this.handleFormSubmit}>
                <div className="add">
                    <input type="text" id="numOne" name="numOne" onChange={ (e) => this.handleInputChange(e, 'numOne')} value={this.state.numOne}/>
                    <input type="text" id="operator" name="operator" onChange={this.handleSignChange} value={this.state.operator}/>
                    <input type="text" id="numTwo" name="numTwo" onChange={ (e) => this.handleInputChange(e, 'numTwo')} value={this.state.numTwo}/>
                    <button onClick={this.clearSubmit} type="Submit">=</button>
                    {postResult}
                </div>
            </form>
        </div>
        )
    }
}