import React, { Component } from 'react'


class Calculator extends Component {

    state = {
        numInp1: '',
        numImp2: '',
        operand: '',
        result: '',
    }


    setOp = op => {
        this.setState({
            operand: op
        })
    }

    calculate = () => {
        let num1 = this.state.numInp1
        let num2 = this.state.numInp2
        let operand = this.state.operand
        let result = ''
        if(operand === '+') {
            result = Number(num1) + Number(num2)
        } else if (operand === '-') {
            result = num1 - num2
        } else if (operand === '*') {
            result = num1 * num2
        } else if (operand === '/') {
            result = num1 / num2
        }

        this.setState({
            result: result
        })
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

    render() {
        return (
            <div className='container'>
                <h1>Add with React!</h1>

                <div className='add'>
                    <input type='number' 
                    name='numInp1'
                    placeholder='First Number'
                    value={this.state.numInp1}
                    onChange={ (e) => this.setNum(e, 'numInp1')}
                    />
                    <span>{this.state.operand}</span>
                    <input type="number" 
                     name='numInp2'
                     placeholder='Second Number'
                     value={this.state.numInp2}
                     onChange={ (e) => this.setNum(e, 'numInp2')}
                    />
                    <button onClick={this.calculate}>=</button>
                    <div>
                    <button value='+' onClick={e => this.setOp(e.target.value)}>+</button>
                    <button value='-' onClick={e => this.setOp(e.target.value)}>-</button>
                    <button value='*' onClick={e => this.setOp(e.target.value)}>*</button>
                    <button value='/' onClick={e => this.setOp(e.target.value)}>/</button>
                    </div>
                    <h3>The Answer! {this.state.result}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator