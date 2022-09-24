import React, { Component } from 'react'


export default class Calculator extends Component {

    state = {
        numOne: '',
        numTwo: '',
        sum: ''
    }

    render() {


        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">

                    <form onSubmit={this.getSum}>
                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.numOne}
                        />

                        <span>+</span>

                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.numTwo}
                        />

                        <button>=</button>
                    </form>

                    <h3>Addition results go here!</h3>
            </div>
        </div>
        )
    }
}