import React, { Component } from "react";
import Calculator from './Calculator'

class App extends Component {
  
  state = {
    numOne: this.props.numOne,
    numTwo: this.props.numTwo,
    total: ""
  }
  
  render(){
    return(
      <>
        <Calculator

        />
      </>
    )
  }
}

export default App