import React, { Component } from 'react'


export default class Calculator extends Component {

    state = {
        numOne: '',
        numTwo: '',
        sum: ''
    }

    render() {
        <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
                <input
                    type="text"
                />

                <span>+</span>

                <input
                    type="text"
                />

                <button>=</button>

                <h3>Addition results go here!</h3>
            </div>
        </div>

        return (
            <div>

            </div>
        )
    }
}