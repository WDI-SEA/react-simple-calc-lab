import React, { Component } from 'react';

export default class Calculator extends Component {
   
    state = {
        num1: 0,
        num2: 0,
        result: 0
    }

    render() {
        return( 
            <div className="App">
                <h1>Add With React</h1>

                <div>
                    <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={(e) =. this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type='text' />
                    <button>=</button>
                    <h3>Addition Results Go Here!</h3>
                </div>
            </div>
        )
    }
}