import React, { Component } from 'react'


export default class Calculator extends Component {




    render() {


        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">

                    <form onSubmit={ (e) => this.props.getSum(e)}>
                        <input
                            type="number"
                            name='numOne'
                            onChange={ (e) => this.props.setNum(e, 'num1') }
                            value={this.props.numOne}
                        />

                        <span>+</span>

                        <input
                            type="number"
                            name='numTwo'
                            onChange={ (e) => this.props.setNum(e, 'num2') }
                            value={this.props.numTwo}
                        />

                        <button type='submit'>=</button>
                    </form>

                    <h3>Addition results go here!</h3>
                    <p>Sum: {this.props.sum}</p>
            </div>
        </div>
        )
    }
}