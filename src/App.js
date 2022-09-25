import React, { Component } from 'react'
import Calculator from './Calculator'


export default class App extends Component {

  // try to always keep state/functions in app.js! (top level)
  state = {
    numOne: '',
    numTwo: '',
    sum: '',
    numOneSub: '',
    numTwoSub: '',
    numOneMul: '',
    numTwoMul: '',
    numOneDiv: '',
    numTwoDiv: '',
    subtract: '',
    multiply: '',
    divide: ''
}

setNum = (e, num) => {
  console.log(e.target)
  this.setState({ [e.target.name]: e.target.value });

  console.log(this.state.numOne)
}

addition = (numOne, numTwo) => {
  return numOne + numTwo
}

subtraction = (numOneSub, numTwoSub) => {
  return numOneSub - numTwoSub
}

multiplication = (numOneMul, numTwoMul) => {
  return numOneMul * numTwoMul
}

division = (numOneDiv, numTwoDiv) => {
  return numOneDiv / numTwoDiv
}

getSum = e => {
  e.preventDefault()
  console.log(this.state.numOne, this.state.numTwo)

  this.setState({
// parseInt to change from string to integer 
sum: this.addition(parseInt(this.state.numOne), parseInt(this.state.numTwo))
  }
  )
  console.log(this.state)
}

getSubtract = e => {
  e.preventDefault()
  
  this.setState({
    subtract: this.subtraction(parseInt(this.state.numOneSub), parseInt(this.state.numTwoSub))
  })
}

getMultiply = e => {
  e.preventDefault()

  this.setState({
    multiply: this.multiplication(parseInt(this.state.numOneMul), parseInt(this.state.numTwoMul))
  })
}

getDivide = e => {
  e.preventDefault()

  this.setState({
    divide: this.division(parseInt(this.state.numOneDiv), parseInt(this.state.numTwoDiv))
  })
}

  render() {
    return (
      <div>
        <Calculator 
        numOne={this.state.numOne}
        numTwo={this.state.numTwo}
        numOneSub={this.state.numOneSub}
        numTwoSub={this.state.numTwoSub}
        numOneMul={this.state.numOneMul}
        numTwoMul={this.state.numTwoMul}
        numOneDiv={this.state.numOneDiv}
        numTwoDiv={this.state.numTwoDiv}
        setNum={this.setNum}
        getSum={this.getSum}
        getSubtract={this.getSubtract}
        getMultiply={this.getMultiply}
        getDivide={this.getDivide}
        sum={this.state.sum}
        subtract={this.state.subtract}
        multiply={this.state.multiply}
        divide={this.state.divide}
        />
      </div>
    )
  }
}
