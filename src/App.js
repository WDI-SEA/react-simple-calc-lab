import React, { Component } from 'react'
import Calculator from './Calculator'


export default class App extends Component {

  // try to always keep state/functions in app.js! (top level)
  state = {
    numOne: '',
    numTwo: '',
    sum: ''
}

setNum = (e, num) => {
  console.log(e.target.value)
  this.setState({ [num]: e.target.value });
}

  render() {
    return (
      <div>
        <Calculator 
        numOne={this.state.numOne}
        numTwo={this.state.numTwo}
        setNum={this.setNum}
        />
      </div>
    )
  }
}
