import React, {Component} from "react"
import Calculator from "./Calculator"

export default class App extends Component {
    // state will need empty arrays for input ?and answer
   //  state/functions go in app.js
   state={
    numOne: " ",
    numTwo: " ",
    sum: " "
  }
  // event listener
  setNum = (e, num) =>{
    console.log(e.target)
    // brackets allow a dynamic key value which becomes numOne or numTwo depending on what was clicked
    this.setState({ [e.target.name]:e.target.value})
    console.log(this.state.numOne)
  }
  // math function
  addition = (numOne, numTwo) =>{
    return numOne + numTwo
  }
  
  getSum = e =>{
    e.preventDefault()
    console.log (this.state.numOne, this.state.numTwo)
    //get sum, parseInt changes from a string to an integer
    this.setState({
      sum: this.addition(parseInt(this.state.numOne), parseInt(this.state.numTwo))
    }
    )
    console.log(this.state)
  }

  render(){
    
    return(
      <div>
        <Calculator 
        numOne={this.state.numOne}
        numTwo={this.state.numTwo}
        setNum={this.setNum}
        getSum={this.getSum}
        sum ={this.state.sum}
        />
      </div>
    )
  }
}





