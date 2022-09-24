import React, { Component } from 'react'
import './App.css';
import Calculator from './Calculator';

class App extends Component {

  state = {
    taskArray: this.props.Calculator
  }

  // change handler event
  onChange = (e) => {
    console.log('input was changed')
    this.setState({
      newItem: e.target.value
    })
  }

  //capture values on onChange property
  addValue = (e) => {
    e.preventDefault()
      console.log('numbers inputed')
    this.setState(prevState => {
      
    })

  }

  render() {


    return (
      <div className="App">
        <Calculator
        
        />
      </div>
    );
    
  }

}

export default App;
