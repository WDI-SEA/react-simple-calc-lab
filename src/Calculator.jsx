import React, { Component } from 'react'

export default class Calculator extends { Component } {

    state = {
        num1: '',
        num2: '',
        result: 0
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="text" />
                    <span>+</span>
                    <input type="text" />
                    <button>=</button>
                    <h3>Addition results go here!</h3>
                </div>
            </div>

        )
    }
}
