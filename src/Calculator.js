import {Component} from 'react'
import './Calculator.css'

export default class Calculator extends Component {
    // state = {
    //     num1: 0,
    //     num2: 0,
    //     sum: 0
    // }

    // setNum = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }
    // getSum = (e) => {
    //     e.preventDefault()
    //     this.setState({ sum: Number(this.state.num1) + Number(this.state.num2) })
    // }
    // render() {
    //     return (
    //         <div className="container">
    //             <h1>Add with React!</h1>

    //             <div className="add">
    //                 <form onSubmit={this.getSum}>
    //                     <input type="number" name="num1" placeholder="enter your first number" onChange={this.setNum} />
    //                     <span>+</span>
    //                     <input type="number" name="num2" placeholder="enter your second number" onChange={this.setNum} />
    //                     <button type="submit">=</button>
    //                 </form>
    //                 <h3>{this.state.sum}</h3>
    //             </div>
    //         </div>
    //     )
    // }
    state = {
        num1: '',
        num2: '',
        operator: '',
        answer: '_____'
    }

    setNum = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    setOp = (e) => {
        this.setState({operator: e.target.value})
    }
    getAns = (e) => {
        e.preventDefault()
        this.setState({ answer: eval(this.state.num1+this.state.operator+this.state.num2) })
    }
    render() {
        return (
            <div className="container">
                <h1>Math with React!</h1>
                <input class='button' onClick={this.setOp} type="button" value="+" />
                <input class='button' onClick={this.setOp} type="button" value="-" />
                <input class='button' onClick={this.setOp} type="button" value="*" />
                <input class='button' onClick={this.setOp} type="button" value="/" />
                <input class='button' onClick={this.setOp} type="button" value="%" />

                <div className="add">
                    <form onSubmit={this.getAns}>
                        <input type="number" name="num1" placeholder="enter your first number" onChange={this.setNum} />
                        <input type="text" id='operator' value={this.state.operator} />
                        <input type="number" name="num2" placeholder="enter your second number" onChange={this.setNum} />
                        <button class='button' type="submit">=</button>
                    </form>
                    <h3>{this.state.answer}</h3>
                </div>
            </div>
        )
    }
}